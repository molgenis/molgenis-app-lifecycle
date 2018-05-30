export default {
  'items': [
    {
      '_href': '/api/v2/menu/1',
      'key': 'c1',
      'title': 'Child1',
      'parent': {
        '_href': '/api/v2/menu/p1',
        'key': 'p1',
        'title': 'Parent1'
      },
      'children': [],
      'variables': ['test'],
      'position': 2
    },
    {
      '_href': '/api/v2/menu/p2',
      'key': 'p2',
      'title': 'Parent2',
      'children': [],
      'variables': [],
      'position': 1
    },
    {
      '_href': '/api/v2/menu/p1',
      'key': 'p1',
      'title': 'Parent1',
      'children': [
        {
          '_href': '/api/v2/UI_Menu/c1',
          'key': 'c1',
          'title': 'Child1'
        },
        {
          '_href': '/api/v2/UI_Menu/c2',
          'key': 'c2',
          'title': 'Child2'
        }
      ],
      'variables': [],
      'position': 2
    },
    {
      '_href': '/api/v2/menu/c2',
      'key': 'c2',
      'title': 'Child2',
      'parent': {
        '_href': '/api/v2/menu/p1',
        'key': 'p1',
        'title': 'Parent1'
      },
      'children': [
        {
          '_href': '/api/v2/UI_Menu/gc1',
          'key': 'gc1',
          'title': 'Grandchild1'
        }
      ],
      'variables': ['test'],
      'position': 1
    },
    {
      '_href': '/api/v2/menu/gc1',
      'key': 'gc1',
      'title': 'Grandchild1',
      'parent': {
        '_href': '/api/v2/menu/c2',
        'key': 'c2',
        'title': 'Child2'
      },
      'children': [],
      'variables': ['test'],
      'position': 1
    }
  ]
}
