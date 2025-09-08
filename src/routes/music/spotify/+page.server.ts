import { getRecentlyPlayed, getTopArtists, getTopTracks } from "$lib/spotify";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ( { url }) => {
	const duration = url.searchParams.get("duration") ?? "medium_term";

	const topTracks = getTopTracks(duration);
	const topArtists = getTopArtists(duration);
	const recentlyPlayed = getRecentlyPlayed();

	return {
		topTracks,
		topArtists,
		recentlyPlayed
	}
}
