const ssr = false;
const load = async ({ cookies }) => {
  cookies.delete("spot-user", { path: "/" });
};
export {
  load,
  ssr
};
