export type FeaturedImage = {
    altText?: string,
    caption?: string,
    description?: string,
    mediaItemUrl: string,
    mediaType: string,
}

export type FeaturedImageNode = {
    node: FeaturedImage,
};

export type Page = {
    id: string,
    isContentNode: boolean,
    isTermNode: boolean,
    uri: string,
    slug: string,
    status: string,
    title: string,
    content: string,
    featuredImage?: FeaturedImageNode,
}