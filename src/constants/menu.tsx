import { appIcons } from '@/constants';

export const appMenus = () => {
  const schoolSubMenus: ISubMenu[] = [
    {
      title: 'New Profile Entry',
      url: `/school/students`,
    },
    {
      title: 'Profile Verification',
      url: '',
    },
    {
      title: 'Approved Profiles',
      url: '',
    },
    {
      title: 'Download Profiles',
      url: '',
    },
    {
      title: 'Update Distribution Details',
      url: '',
    },
    {
      title: 'Download Distribution Records',
      url: '',
    },
  ];

  const schoolMenus: IMenu[] = [
    {
      title: 'Dashboard',
      icon: <appIcons.dashboard className="text-card-foreground/80" />,
      url: '',
      hasChild: false,
    },
    {
      title: 'Phase - VI',
      icon: <appIcons.calendar className="text-card-foreground/80" />,
      url: '',
      hasChild: true,
      children: [...schoolSubMenus],
    },
    {
      title: 'Phase - VII',
      icon: <appIcons.calendar className="text-card-foreground/80" />,
      url: '',
      hasChild: true,
      children: [...schoolSubMenus],
    },
    {
      title: 'Phase - VIII',
      icon: <appIcons.calendar className="text-card-foreground/80" />,
      url: '',
      hasChild: true,
      children: [...schoolSubMenus],
    },
    {
      title: 'Phase - IX',
      icon: <appIcons.calendar className="text-card-foreground/80" />,
      url: '',
      hasChild: true,
      children: [...schoolSubMenus],
    },
    {
      title: 'Phase - X',
      icon: <appIcons.calendar className="text-card-foreground/80" />,
      url: '',
      hasChild: true,
      children: [...schoolSubMenus],
    },
    {
      title: 'Phase - XI',
      icon: <appIcons.calendar className="text-card-foreground/80" />,
      url: '',
      hasChild: true,
      children: [...schoolSubMenus],
    },
    {
      title: 'Phase - XII',
      icon: <appIcons.calendar className="text-card-foreground/80" />,
      url: '',
      hasChild: true,
      children: [...schoolSubMenus],
    },
  ];

  return { schoolMenus };
};
