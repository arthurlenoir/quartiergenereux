import { parseMenus } from "../types/menu";

export const fetchPage = async (pageUri: string) => {
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
          page: nodeByUri(uri: "${pageUri}") {
            id
            isContentNode
            isTermNode
            uri
            ... on Page {
              id
              slug
              status
              title(format: RENDERED)
              uri
              content(format: RENDERED)
              featuredImage {
                node {
                  altText
                  caption
                  description(format: RENDERED)
                  mediaItemUrl
                  mediaType
                }
              }
            }
            ... on Post {
              id
              slug
              status
              title(format: RENDERED)
              uri
              content(format: RENDERED)
              date
              modified
              excerpt(format: RENDERED)
              featuredImage {
                node {
                  altText
                  caption
                  description(format: RENDERED)
                  mediaItemUrl
                  mediaType
                }
              }
              categories {
                nodes {
                  id
                  name
                  slug
                  uri
                }
              }
              tags {
                nodes {
                  id
                  name
                  slug
                  uri
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
      page,
      menus: { nodes: wpMenus },
    },
  } = await res.json();
  const menu = wpMenus.length > 0 ? parseMenus(wpMenus[0]) : null;
  return { title, description, menu, page: page };
};
