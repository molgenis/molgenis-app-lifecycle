const mockTreeData =
  [
    {
      'id': 'p2',
      'text': 'Parent2',
      'value': 'Parent2',
      'icon': 'fa fa-file-o',
      'opened': true,
      'selected': false,
      'disabled': false,
      'loading': false,
      'children': []
    },
    {
      'id': 'p1',
      'text': 'Parent1',
      'value': 'Parent1',
      'icon': '',
      'opened': true,
      'selected': false,
      'disabled': false,
      'loading': false,
      'children': [
        {
          'id': 'c1',
          'text': 'Child1',
          'value': 'Child1',
          'icon': 'fa fa-file-o',
          'opened': true,
          'selected': false,
          'disabled': false,
          'loading': false,
          'children': []
        },
        {
          'id': 'c2',
          'text': 'Child2',
          'value': 'Child2',
          'icon': '',
          'opened': true,
          'selected': false,
          'disabled': false,
          'loading': false,
          'children': [
            {
              'id': 'gc1',
              'text': 'Grandchild1',
              'value': 'Grandchild1',
              'icon': 'fa fa-file-o',
              'opened': true,
              'selected': false,
              'disabled': false,
              'loading': false,
              'children': []
            }
          ]
        }
      ]
    }
  ]

export default {
  mockTreeData
}
