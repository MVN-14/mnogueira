import { env } from "$env/dynamic/private"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ url }) => {
  const tracksPath = `/me/top/tracks?limit=50&time_range=${url.searchParams.get("tracks_time_range") ?? "medium_term"}`
  const artistsPath = `/me/top/artists?limit=50&time_range=${url.searchParams.get("artists_time_range") ?? "medium_term"}`

  const topTracks = await fetch(`${env.APIURL}/request`, {
    method: "POST",
    body: JSON.stringify({
      path: tracksPath,
      verb: "GET",
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const topArtists = await fetch(`${env.APIURL}/request`, {
    method: "POST",
    body: JSON.stringify({
      path: artistsPath,
      verb: "GET"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return {
    topTracks: await topTracks.json(),
    topArtists: await topArtists.json()
  }
}
