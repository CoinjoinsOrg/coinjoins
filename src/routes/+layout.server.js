export const prerender = false;
export const ssr = true;

export function load({ url }) {
  return {
    url: url.pathname,
  };
}
