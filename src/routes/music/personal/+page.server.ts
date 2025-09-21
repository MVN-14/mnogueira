import { listVideos } from "$lib/dropbox";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const videoList = await listVideos()

	return {
		videoList
	}
}
