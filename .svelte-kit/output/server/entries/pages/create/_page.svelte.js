import { c as create_ssr_component, d as each, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { C as Card, S as SpotList } from "../../../chunks/SpotList.js";
import { s as subTitle } from "../../../chunks/spot-types.js";
import "devalue";
import "../../../chunks/client.js";
import "leaflet";
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const categoryList = [
    "Site",
    "Locale",
    "Activity",
    "Scenery",
    "Structure",
    "Shopping",
    "Uncategorised"
  ];
  let { selectedCategory = "Uncategorised" } = $$props;
  if ($$props.selectedCategory === void 0 && $$bindings.selectedCategory && selectedCategory !== void 0)
    $$bindings.selectedCategory(selectedCategory);
  return `<div class="control"><div class="select"><select name="category">${each(categoryList, (category) => {
    return `<option${add_attribute("value", category, 0)}>${escape(category)}</option>`;
  })}</select></div></div>`;
});
const Coordinates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { latitude = 0 } = $$props;
  let { longitude = 0 } = $$props;
  if ($$props.latitude === void 0 && $$bindings.latitude && latitude !== void 0)
    $$bindings.latitude(latitude);
  if ($$props.longitude === void 0 && $$bindings.longitude && longitude !== void 0)
    $$bindings.longitude(longitude);
  return `<div class="field is-narrow"><input class="input is-danger is-rounded" type="float" min="-90" max="90" step="0.00001" placeholder="Latitude" name="latitude" required${add_attribute("value", latitude, 0)}></div> <div class="field is-narrow"><input class="input is-danger is-rounded" type="float" min="-180" max="180" step="0.00001" placeholder="Longitude" name="longitude" required${add_attribute("value", longitude, 0)}></div>`;
});
let message = "Type in your new Spot's details above before hitting the red button";
const CreateSpotForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedCategory = "Uncategorised";
  let latitude = 0;
  let longitude = 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="box has-background-white" style="height: 43vh"><form method="POST" action="?/create"><div class="field is-grouped-horizontal"><div class="field-body"><div class="field is-narrow" data-svelte-h="svelte-98ixt5"><input class="input is-success" id="name" placeholder="Spot name" type="text" name="name" required></div> ${validate_component(Category, "Category").$$render(
      $$result,
      { selectedCategory },
      {
        selectedCategory: ($$value) => {
          selectedCategory = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="field is-narrow"></div> ${validate_component(Coordinates, "Coordinates").$$render(
      $$result,
      { latitude, longitude },
      {
        latitude: ($$value) => {
          latitude = $$value;
          $$settled = false;
        },
        longitude: ($$value) => {
          longitude = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="field" data-svelte-h="svelte-ej73g9"><input id="description" class="input is-success" type="text" placeholder="Enter description" name="description"></div> <br> <div class="text has-text-centered" data-svelte-h="svelte-ypixef"><button class="button is-warning is-rounded has-text-weight-bold is-size-5">Create Spot</button></div> <br> <div class="columns is-mobile is-centered"><div class="column is-narrow"><div class="box has-background-warning-light"><div class="content has-text-centered is-italic">${escape(message)}</div></div></div></div></form></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  subTitle.set("Create a Spot");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="columns is-mobile is-centered"><div class="column is-8"><div class="box has-background-warning"> ${validate_component(CreateSpotForm, "CreateSpotForm").$$render($$result, {}, {}, {})}</div></div></div> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SpotList, "SpotList").$$render($$result, { spots: data.spots }, {}, {})}`;
    }
  })} `;
});
export {
  Page as default
};
