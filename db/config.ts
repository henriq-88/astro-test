import { defineDb, sql } from "astro:db";

import { defineTable, column, NOW } from "astro:db";

const Category = defineTable({
  columns: {
    id: column.text({ primaryKey: true, default: sql`uuid()` }),
    name: column.text(),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW }),
  },
});

const Tag = defineTable({
  columns: {
    id: column.text({ primaryKey: true, default: sql`uuid()` }),
    name: column.text(),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW }),
  },
});

const Media = defineTable({
  columns: {
    id: column.text({ primaryKey: true, default: sql`uuid()` }),
    type: column.text({}),
    url: column.text(),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW }),
  },
});

const Project = defineTable({
  columns: {
    id: column.text({ primaryKey: true, default: sql`uuid()` }),
    slug: column.text(),
    banner: column.text(),
    body: column.text(),
    pageViews: column.number({ default: 0 }),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: {
    Category,
    Tag,
    Media,
    Project,
  },
});
