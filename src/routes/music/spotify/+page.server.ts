import { getRecentlyPlayed, getTopArtists, getTopTracks } from "$lib/spotify";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const topTracks = await getTopTracks();
	const topArtists = await getTopArtists();
	const recentlyPlayed = await getRecentlyPlayed();

	return {
		topTracks,
		topArtists,
		recentlyPlayed
	}
}
