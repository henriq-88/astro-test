import { db, Tag } from "astro:db";

export default async function () {
  for (let i = 0; i < 10; i++) {
    await db
      .insert(Tag)
      .values([{ name: `tag-${i}` }])
      .execute();
  }
}
