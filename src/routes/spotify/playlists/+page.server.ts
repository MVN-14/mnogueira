import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {

  const playlists = await (await fetch(`${env.APIURL}/request`, {
    method: "POST",
    body: JSON.stringify({
      path: "/me/playlists",
      verb: "GET"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })).json();

  console.log("PLAYLISTS: ", playlists);
  return {
    playlists
  }
};
