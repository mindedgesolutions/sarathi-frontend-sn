interface IMenu {
  title: string;
  icon: React.ReactNode;
  url?: string;
  hasChild: boolean;
  children?: ISubMenu[];
}

interface ISubMenu {
  title: string;
  icon?: React.ReactNode;
  url: string;
}
