import { PUBLIC_DROPBOX_API_URL } from "$env/static/public";

export const listVideos = async () => {
	try {
		const response = await fetch(`${PUBLIC_DROPBOX_API_URL}/videos/list`)
		const body = await response.json()

		return body as ListVideosResponse;
	} catch (err) {
		return {
			error: "Error from dropbox server: " + err,
			entries: []
		}
	}
}

type ListVideosResponse = {
	entries: Entry[],
	error: string
}

type Entry = {
	name: string;
	path_lower: string;
	thumbnail: string;
}

