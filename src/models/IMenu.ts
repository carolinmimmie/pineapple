export interface IMenuItem {
  name: string;
  description: string;
  price: string;
}

export interface IMenuCategory {
  type: string;
  title: string;
  items: IMenuItem[];
}
