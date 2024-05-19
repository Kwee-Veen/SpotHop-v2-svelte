import * as server from '../entries/pages/create/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/create/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.C24isbgI.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Dda-Ubu_.js","_app/immutable/chunks/index.BUOivlNn.js","_app/immutable/chunks/SpotList.DbOgukCJ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/forms.5rdNBL9U.js","_app/immutable/chunks/spot-types.D-wtOG_6.js","_app/immutable/chunks/index.qojeiD3T.js","_app/immutable/chunks/stores.DUKXx1u7.js","_app/immutable/chunks/leaflet-src.CWPxKVZ0.js"];
export const stylesheets = ["_app/immutable/assets/leaflet-src.HupOsEJb.css"];
export const fonts = [];
