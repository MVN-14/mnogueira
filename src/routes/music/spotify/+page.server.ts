import { getRecentlyPlayed, getTopArtists, getTopTracks } from "$lib/spotify";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const topTracks = getTopTracks();
	const topArtists = getTopArtists();
	const recentlyPlayed = getRecentlyPlayed();

	return {
		topTracks,
		topArtists,
		recentlyPlayed
	}
}
