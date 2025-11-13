import { listVideos } from "$lib/dropbox";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
	const videoList = listVideos()

	return {
		videoList
	}
}
