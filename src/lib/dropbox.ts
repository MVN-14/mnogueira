import { PUBLIC_API_URL } from "$env/static/public";

export const listVideos = async () => {
	const response = await fetch(`${PUBLIC_API_URL}/videos/list`)
	const body = await response.json()

	return body as ListVideosResponse;
}

type ListVideosResponse = {
	entries: Entry[]
}

type Entry = {
	name: string;
	path_lower: string;
}

