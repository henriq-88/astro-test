import { e as createAstro, f as createComponent, r as renderTemplate, i as addAttribute, j as renderHead, k as renderSlot, m as maybeRenderHead, l as renderComponent } from '../astro_B33OjVNi.mjs';
/* empty css                          */
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/config.js';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/henri/Documents/Projects/astro-test/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "C:/Users/henri/Documents/Projects/astro-test/src/components/Card.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN ?? "45ee816ad8793b6bd71bf96713f396f228892a94:iigqb6ru7bcb51308vqdpm0m7egf", {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
asDrizzleTable("Category", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Category", "default": { "__serializedSQL": true, "sql": "uuid()" }, "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Category", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Category", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } }, "updatedAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "updatedAt", "collection": "Category", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } } }, "deprecated": false }, false);
const Tag = asDrizzleTable("Tag", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Tag", "default": { "__serializedSQL": true, "sql": "uuid()" }, "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Tag", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Tag", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } }, "updatedAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "updatedAt", "collection": "Tag", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } } }, "deprecated": false }, false);
asDrizzleTable("Media", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Media", "default": { "__serializedSQL": true, "sql": "uuid()" }, "primaryKey": true } }, "type": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "type", "collection": "Media", "primaryKey": false, "optional": false } }, "url": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "url", "collection": "Media", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Media", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } }, "updatedAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "updatedAt", "collection": "Media", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } } }, "deprecated": false }, false);
asDrizzleTable("Project", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Project", "default": { "__serializedSQL": true, "sql": "uuid()" }, "primaryKey": true } }, "slug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "slug", "collection": "Project", "primaryKey": false, "optional": false } }, "banner": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "banner", "collection": "Project", "primaryKey": false, "optional": false } }, "body": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "body", "collection": "Project", "primaryKey": false, "optional": false } }, "pageViews": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "pageViews", "collection": "Project", "primaryKey": false, "optional": false, "default": 0 } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Project", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } }, "updatedAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "updatedAt", "collection": "Project", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } } }, "deprecated": false }, false);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const tags = await db.select().from(Tag);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Tags</h1> <div class="link-card-grid" data-astro-cid-j7pv25f6> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": tag.name, "body": tag.id, "href": `/tags/${tag}`, "data-astro-cid-j7pv25f6": true })}`)} </div> </main>  ` })}`;
}, "C:/Users/henri/Documents/Projects/astro-test/src/pages/index.astro", void 0);

const $$file = "C:/Users/henri/Documents/Projects/astro-test/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
