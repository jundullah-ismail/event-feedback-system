export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': '/dashboard',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },
  {
    'name': 'Event',
    'icon': 'list',
    'link': false,
    'open': false,
    'chip': false,
    'sub': [
      {
        'name': 'All events',
        'icon': 'filter_list',
        'link': '/feedback/events/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },{
        'name': 'All Sponsors',
        'icon': 'filter_list',
        'link': '/feedback/sponsors/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
    ]
  },
];
