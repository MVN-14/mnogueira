import { getCollection, getCollectionValue } from "$lib/discogs";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const collection = getCollection();
	const value = getCollectionValue();

	return {
		collectionData: collection,
		collectionValue: value,
	}
}
