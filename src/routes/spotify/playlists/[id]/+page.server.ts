import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const tracksFull: SpotifyApi.TrackObjectFull[] = [];

  const playlist: SpotifyApi.PlaylistObjectSimplified = await (await fetch(`${env.APIURL}/request`, {
    method: "POST",
    body: JSON.stringify({
      path: `/playlists/${params.id}`,
      verb: "GET"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })).json();

  let tracks: SpotifyApi.PlaylistTrackResponse = await (await fetch(`${env.APIURL}/request`, {
    method: "POST",
    body: JSON.stringify({
      path: `/playlists/${params.id}/tracks?limit=50`,
      verb: "GET"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })).json();
  if (tracks?.items) {
    tracks.items.forEach(t => t.track && tracksFull.push(t.track));
  }

  while (tracks.next != null) {
    console.log("Fetching next page");
    tracks = await (await fetch(`${env.APIURL}/request`, {
      method: "POST",
      body: JSON.stringify({
        path: tracks.next.replace("https://api.spotify.com/v1", ""),
        verb: "GET"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })).json();

    if (tracks?.items) {
      tracks.items.forEach(t => t.track && tracksFull.push(t.track));
    }
  }

  return {
    tracks: tracksFull,
    playlist
  }
};
