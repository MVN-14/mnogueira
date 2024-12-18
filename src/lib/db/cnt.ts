import { db } from "$lib/firebase";
import type { CNTItem } from "$lib/types/cnt";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getChordsAndTabs() {
  const items: CNTItem[] = [];

  const snapshot = await getDocs(collection(db, "cnt"));
  snapshot.forEach(doc => {
    const item: CNTItem = doc.data() as CNTItem;
    item.id = doc.id;
    items.push(item);
  });

  return items;
}

export async function getCNTItem(id: string) {
  const snapshot = await getDoc(doc(db, "cnt", id));
  if (!snapshot.exists()) {
    throw new Error(`CNTItem with id ${id} not found`);
  }

  return { ...snapshot.data(), id: snapshot.id } as CNTItem;
};

export async function createCNTItem(item: { name: string, url: string, type: string, artist: string }) {
  await addDoc(collection(db, "cnt"), item);
};
