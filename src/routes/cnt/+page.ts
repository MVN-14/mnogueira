import { getChordsAndTabs } from "$lib/db/cnt";
import type { CNTItem } from "$lib/types/cnt"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
  let items: CNTItem[] = [];

  try {
    items = await getChordsAndTabs();
  } catch (err) {
    console.error(err);
  }

  return {
    items
  }
}
