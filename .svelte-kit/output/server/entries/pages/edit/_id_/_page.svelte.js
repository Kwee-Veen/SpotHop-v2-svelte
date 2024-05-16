import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import "devalue";
import "../../../../chunks/client.js";
import { s as subTitle } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("Edit Spot");
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="columns is-centered"><div class="column is-6"><section class="content box"><div class="box has-background-info-light"><h3 class="text has-text-centered" data-svelte-h="svelte-187ghek">Original Spot Details:</h3> <div class="box"><table><tr data-svelte-h="svelte-1gfmcdj"><th>Name</th> <th>  Category  </th> <th>  Coordinates</th></tr> <tr><td>${escape(data.spot.name)}</td> <td>  ${escape(data.spot.category)}  </td> <td>  ${escape(data.spot.latitude)}, ${escape(data.spot.longitude)}</td></tr></table> <table><tr><td><b data-svelte-h="svelte-m97jtc">Description:</b> ${escape(data.spot.description)}</td></tr></table></div></div></section></div> <div class="column is-6"><section class="content box"><div class="box has-background-danger-light"><h3 class="text has-text-centered" data-svelte-h="svelte-1wzj5ad">New Spot Details:</h3> <div class="box"><form method="POST" action="?/edit"><input type="hidden" name="editSpotId"${add_attribute("value", data.spot._id, 0)}> <div class="field is-grouped-horizontal"><div class="field-body"><div class="field is-narrow" data-svelte-h="svelte-7skmgv"><input class="input is-success" type="text" placeholder="Enter name" name="name"></div> <div class="control"><div class="select"><select class="input is-link is-rounded" name="category" placeholder="Choose Category"><option value="" data-svelte-h="svelte-9lteqn">Choose Category</option><option value="Site" data-svelte-h="svelte-1udb3yi">Site</option><option value="Locale" data-svelte-h="svelte-wwrw56">Locale</option><option value="Activity" data-svelte-h="svelte-8e1q4e">Activity</option><option value="Scenery" data-svelte-h="svelte-1iqx8pw">Scenery</option><option value="Structure" data-svelte-h="svelte-1nvffl0">Structure</option><option value="Shopping" data-svelte-h="svelte-17uwek6">Shopping</option><option value="Uncategorised" data-svelte-h="svelte-10h3e5s">Uncategorised</option></select></div></div> <div class="field is-narrow"></div> <div class="field is-narrow" data-svelte-h="svelte-sasb1f"><input class="input is-warning is-rounded" type="number" min="-90" max="90" step="0.00001" placeholder="Latitude" name="latitude"></div> <div class="field is-narrow" data-svelte-h="svelte-1stvhcx"><input class="input is-warning is-rounded" type="number" min="-180" max="180" step="0.00001" placeholder="Longitude" name="longitude"></div></div></div> <div class="field" data-svelte-h="svelte-1r14wlf"><input class="input is-success" type="text" placeholder="Enter description" name="description"></div> <div class="text has-text-centered" data-svelte-h="svelte-1i41guk"><button class="button is-warning">Edit Spot</button></div></form></div></div></section></div></div>`;
});
export {
  Page as default
};