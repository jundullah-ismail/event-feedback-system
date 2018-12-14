export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': '/dashboard',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },{
    'name': 'Album',
    'icon': 'list',
    'link': '/albums/list',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },{
    'name': 'Magic Cards',
    'icon': 'perm_device_information',
    'link': '/magic/cards/list',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },{
    'name': 'Event',
    'icon': 'list',
    'link': false,
    'open': false,
    'chip': false,
    'sub': [
      {
        'name': 'All Events',
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
      },{
        'name': 'All Organizers',
        'icon': 'filter_list',
        'link': '/feedback/organizers/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
    ]
  },
];
