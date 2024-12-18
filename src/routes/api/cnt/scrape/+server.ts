import { json } from "@sveltejs/kit";
import * as cheerio from "cheerio";

export async function GET({ url }: { url: URL }) {
  const response = await fetch(decodeURI(url.searchParams.get("url") ?? ""));
  const text = await response.text();
  const $ = cheerio.load(text);
  const data = JSON.parse($(".js-store").attr("data-content") ?? "");

  let content: string = data.store.page.data.tab_view.wiki_tab.content;
  content = content.replaceAll("[tab]", "");
  content = content.replaceAll("[/tab]", "");
  content = content.replaceAll("[ch]", "");
  content = content.replaceAll("[/ch]", "");
  return json({
    content
  })
}

/* export const load: PageServerLoad = async () => {
  const response = await fetch('https://tabs.ultimate-guitar.com/tab/big-thief/simulation-swarm-tabs-4048375');
  const text = await response.text();
  const $ = cheerio.load(text);
  const data = JSON.parse($(".js-store").attr("data-content") ?? "");

  const tabContent: string = data.store.page.data.tab_view.wiki_tab.content;

  console.log(data.store.page.data.tab);

  return {
    tab: tabContent
  }
};
*/


