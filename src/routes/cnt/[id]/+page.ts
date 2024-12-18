import { getCNTItem } from "$lib/db/cnt";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
  const item = await getCNTItem(params.id);
  const { content } = await (await fetch(`/api/cnt/scrape?url=${encodeURI(item.url)}`)).json();
  return {
    item,
    content
  };
};
