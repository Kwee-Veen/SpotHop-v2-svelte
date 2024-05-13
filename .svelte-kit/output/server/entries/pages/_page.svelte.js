import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { s as subTitle } from "../../chunks/stores.js";
const SplashScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="hero is-fullheight is-default is-bold" data-svelte-h="svelte-1hkly2x"><div class="hero-head"></div> <div class="hero-body"><div class="container has-text-centered"><div class="columns is-vcentered"><div class="column is-5"><figure class="image"><img class="object-fit" src="/spotHop_init.jpg" alt="SpotHop welcome"></figure></div> <div class="column is-6 is-offset-1"><h1 class="title is-2 mb-5"><span class="icon mr-5"><i class="fas fa-map-marker-alt"></i></span><span class="icon mr-4"><i class="fas fa-vote-yea"></i></span> <p>SpotHop</p></h1> <h2 class="subtitle is-4 mt-2">Make spots and stuff!</h2> <p class="has-text-centered"><a class="button is-medium is-success" href="/signup"><span class="icon"><i class="fas fa-plus"></i></span><span>Sign Up</span></a> <a class="button is-medium is-link" href="/login"><span class="icon"><i class="fas fa-sign-in"></i></span><span>Login</span></a></p></div></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subTitle.set("SpotHop");
  return `${validate_component(SplashScreen, "SplashScreen").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
