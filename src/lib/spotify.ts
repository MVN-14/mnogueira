import { PUBLIC_SPOTIFAPI_URL } from "$env/static/public";

export const getTopTracks = async (range: string = "long_term") => {
	const response = await fetch(PUBLIC_SPOTIFAPI_URL + `/user/top?type=tracks&time_range=${range}`)
	return await response.json()
}

export const getTopArtists = async (range: string = "long_term") => {
	const response = await fetch(PUBLIC_SPOTIFAPI_URL + `/user/top?type=artists&time_range=${range}`)
	return await response.json()
}

export const getRecentlyPlayed = async () => {
	const response = await fetch(PUBLIC_SPOTIFAPI_URL + '/user/recent')
	return await response.json()
}

export type RecentlyPlayedResponse = {
	href: string;
	limit: number;
	next: string;
	cursors: Cursors;
	total: number;
	items: PlayHistory[];
}

type PlayHistory = {
	track: Track;
	played_at: string;
	context: Context;

}

type Context = {
	type: string;
	href: string;
	externalUrls: ExternalUrls;
	url: string;
}

type Cursors = {
	after: string;
	before: string;
}

export type TopTracksResponse = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: Track[];
}

export type TopArtistsResponse = {
	href: string;
	limit: string;
	next: string;
	offset: string;
	previous: string;
	total: number;
	items: Artist[];
}

export type Artist = {
	external_urls: ExternalUrls;
	followers: Followers;
	genres: string[];
	href: string;
	id: string;
	images: Image[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
}

export type Followers = {
	href: string;
	total: number;
}

export type Track = {
	album: Album;
	available_markers: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: ExternalIds;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	is_playable: boolean;
	restrictions: Restrictions;
	name: string;
	popularity: number;
	preview_url: string;
	track_number: number;
	type: string;
	url: string;
	is_local: boolean;
}

type Album = {
	album_type: "album" | "single" | "compilation";
	total_tracks: number;
	available_markers: string[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[],
	name: string;
	release_date: string;
	release_date_precision: string;
	restrictions: Restrictions;
	type: string;
	url: string;
	artists: SimplifiedArtist[],
}

type Restrictions = {
	reason: string;
}

type ExternalIds = {
	isrc: string;
	ean: string;
	upc: string;
}

type ExternalUrls = {
	spotify: string;
}

type Image = {
	url: string;
	height: number;
	width: number;
}

type SimplifiedArtist = {
	external_urls: ExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

