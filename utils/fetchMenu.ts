import { parseMenus } from "../types/menu";

export const fetchMenu = async () => {
  const res = await fetch("https://wp.quartiergenereux.fr/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          generalSettings {
              url, title, description
          }
          menus(where: {location: PRIMARY}, first: 1) {
            nodes {
              id
              name
              menuItems {
                nodes {
                  id
                  label
                  description
                  order
                  title
                  uri
                  parentId
                }
              }
            }
          }
        }
    `,
    }),
  });
  const {
    data: {
      generalSettings: { title, description },
      menus: { nodes: wpMenus },
    },
  } = await res.json();
  console.log("WP MENUS", JSON.stringify(wpMenus[0].menuItems.nodes));
  const menu = wpMenus.length > 0 ? parseMenus(wpMenus[0]) : null;
  return { title, description, menu };
};
