import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'fa fa-fw fa-tachometer',
    route: 'dashboard'
  },
  {
    displayName: 'Projecten',
    iconName: 'fa fa-file-o',
    route: 'projects',
    children: [
      {
        displayName: 'project',
        iconName: 'fa fa-file-o',
        route: 'projects/{:id}'
      }
    ]
  }
];