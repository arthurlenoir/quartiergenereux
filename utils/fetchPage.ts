import { parseMenus } from "../types/menu";

export const fetchPage = async (pageUri: string, withHomePost?: boolean) => {
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
          ${
            withHomePost
              ? `posts(
            first: 1
            where: {
              status: PUBLISH
              tagSlugIn: ["home"]
              orderby: [
                {
                  field: DATE
                  order: DESC
                }
              ]
            }
          ) {
            nodes {
              id
              slug
              uri
              title(format: RENDERED)
              date
              excerpt(format: RENDERED)
              content(format: RENDERED)
              featuredImage {
                node {
                  altText
                  mediaItemUrl
                  caption
                }
              }
            }
          }`
              : ""
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
      posts,
      menus: { nodes: wpMenus },
    },
  } = await res.json();
  const menu = wpMenus.length > 0 ? parseMenus(wpMenus[0]) : null;
  return {
    title,
    description,
    menu,
    page: page,
    lastPost: withHomePost && posts && posts.nodes.length > 0 ? posts.nodes[0] : null,
  };
};
