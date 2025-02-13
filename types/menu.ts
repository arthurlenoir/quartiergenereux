export type MenuItem = {
  id: string;
  label: string | null;
  description: string | null;
  order: number;
  title: string;
  uri: string;
  parentId?: string | null;
  children?: MenuItem[];
};

export type Menu = {
  id: string;
  name: string;
  menuItems: MenuItem[];
};

type WPMenuItems = {
  nodes: MenuItem[];
};

type WPMenu = {
  id: string;
  name: string;
  menuItems: WPMenuItems;
};

const parseMenuItems = (menuItems: MenuItem[]) => {
  const menuItemByParentId = menuItems.reduce((acc, menuItem) => {
    if (menuItem.parentId) {
      acc[menuItem.parentId] = [...(acc[menuItem.parentId] ?? []), menuItem];
    }
    return acc;
  }, []);
  return menuItems.reduce((acc: MenuItem[], menuItem) => {
    if (menuItem.parentId) return acc;
    if (menuItemByParentId[menuItem.id]) {
      menuItem.children = menuItemByParentId[menuItem.id];
    }
    acc.push(menuItem);
    return acc;
  }, []);
};

export const parseMenus = (wpMenu: WPMenu): Menu => ({
  id: wpMenu.id,
  name: wpMenu.name,
  menuItems: parseMenuItems(wpMenu.menuItems.nodes),
});
