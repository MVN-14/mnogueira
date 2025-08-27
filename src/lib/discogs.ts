const apiUrl = 'https://api.discogs.com'
const token = 'nWxFRIdJcdVlawxoswzWhtywgCDWfVlrKXgkbPCL';

export const getCollection = async () => {
	const response = await (await fetch(`${apiUrl}/users/michaelnogueira/collection/folders/0/releases?token=${token}`)).json();
	return response as ReleasesResponse;
}

export const getCollectionValue = async () => {
	const response = await (await fetch(`${apiUrl}/users/michaelnogueira/collection/value?token=${token}`)).json();
	return response as CollectionValueResponse;
}

export type CollectionValueResponse = {
	maximum: string;
	median: string;
	minimum: string;
}

type BasicInformation = {
	id: number;
	title: string;
	year: number;
	resource_url: string;
	thumb: string;
	cover_image: string;
	formats: Format[]
	labels: Label[];
	artists: Artist[];
	genres: string[];
	notes: Note[];
}

type Artist = {
	id: number;
	name: string;
	join: string;
	resource_url: string;
	anv: string;
	tracks: string;
	role: string;
}

type Format = {
	qty: string;
	descriptions: string[],
	name: string
}

type Label = {
	resource_url: string;
	entity_type: string;
	catno: string;
	id: number;
	name: string
}

type Note = {
	field_id: number;
	value: string;
}

export type DiscogsCollectionItem = {
	id: number;
	instance_id: number;
	folder_id: number;
	rating: number;
	date_added: Date;
	basic_information: BasicInformation
}

type URLS = {
	next: string;
	last: string;
	prev: string
}

type Pagination = {
	items: number;
	page: number;
	pages: number;
	per_page: number
	urls: URLS
}

export type ReleasesResponse = {
	pagination: Pagination;
	releases: DiscogsCollectionItem[]
}
