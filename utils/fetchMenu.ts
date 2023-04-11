import { parseMenus } from "../types/menu";

export const fetchMenu = async () => {
    const res = await fetch('http://quartiu.cluster031.hosting.ovh.net/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
    })
    const { data: {
        generalSettings: { title, description },
        menus: { nodes: wpMenus }
    } } = await res.json();
    const menu = wpMenus.length > 0 ? parseMenus(wpMenus[0]) : null;
    return { title, description, menu };
}