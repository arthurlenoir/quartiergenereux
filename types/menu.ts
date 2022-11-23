export type MenuItem = {
    id: string,
    label: string | null,
    description: string | null,
    order: number,
    title: string,
    uri: string,
    parentId?: string | null,

}

export type Menu = {
    id: string,
    name: string,
    menuItems: MenuItem[],
}

type WPMenuItems = {
    nodes: MenuItem[],
}

type WPMenu = {
    id: string,
    name: string,
    menuItems: WPMenuItems,
}


export const parseMenus = (wpMenu: WPMenu): Menu => (
    {
        id: wpMenu.id,
        name: wpMenu.name,
        menuItems: wpMenu.menuItems.nodes
    }
)
