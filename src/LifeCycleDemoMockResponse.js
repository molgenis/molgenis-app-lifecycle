const mockResponse = {
  'href': '/api/v2/UI_Menu',
  'meta': {
    'href': '/api/v2/UI_Menu',
    'hrefCollection': '/api/v2/UI_Menu',
    'name': 'UI_Menu',
    'label': 'Menu',
    'attributes': [
      {
        'href': '/api/v2/UI_Menu/meta/key',
        'fieldType': 'STRING',
        'name': 'key',
        'label': 'id',
        'attributes': [],
        'maxLength': 255,
        'auto': true,
        'nillable': false,
        'readOnly': true,
        'labelAttribute': false,
        'unique': true,
        'visible': false,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/UI_Menu/meta/title',
        'fieldType': 'STRING',
        'name': 'title',
        'label': 'title',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': true,
        'unique': false,
        'visible': true,
        'lookupAttribute': true,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/UI_Menu/meta/parent',
        'fieldType': 'XREF',
        'name': 'parent',
        'label': 'parent menu',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/UI_Menu',
          'hrefCollection': '/api/v2/UI_Menu',
          'name': 'UI_Menu',
          'label': 'Menu',
          'attributes': [
            {
              'href': '/api/v2/UI_Menu/meta/key',
              'fieldType': 'STRING',
              'name': 'key',
              'label': 'id',
              'attributes': [],
              'maxLength': 255,
              'auto': true,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/UI_Menu/meta/title',
              'fieldType': 'STRING',
              'name': 'title',
              'label': 'title',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': true,
              'lookupAttribute': true,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'title',
          'idAttribute': 'key',
          'lookupAttributes': [
            'title'
          ],
          'isAbstract': false,
          'writable': true,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/UI_Menu/meta/variables',
        'fieldType': 'MREF',
        'name': 'variables',
        'label': 'variables',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_CoreVariables',
          'hrefCollection': '/api/v2/LifeCycle_CoreVariables',
          'name': 'LifeCycle_CoreVariables',
          'label': 'Core Variables',
          'description': 'LifeCycle harmonized variable set',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_CoreVariables/meta/variable',
              'fieldType': 'STRING',
              'name': 'variable',
              'label': 'Variable',
              'description': 'Short name of the variable (should not include spaces)',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': true,
              'lookupAttribute': true,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_CoreVariables/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
              'description': 'Longer human readable name of the variable',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': true,
              'lookupAttribute': true,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'label',
          'idAttribute': 'variable',
          'lookupAttributes': [
            'variable',
            'label'
          ],
          'isAbstract': false,
          'writable': true,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/UI_Menu/meta/children',
        'fieldType': 'ONE_TO_MANY',
        'name': 'children',
        'label': 'children',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/UI_Menu',
          'hrefCollection': '/api/v2/UI_Menu',
          'name': 'UI_Menu',
          'label': 'Menu',
          'attributes': [
            {
              'href': '/api/v2/UI_Menu/meta/key',
              'fieldType': 'STRING',
              'name': 'key',
              'label': 'id',
              'attributes': [],
              'maxLength': 255,
              'auto': true,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/UI_Menu/meta/title',
              'fieldType': 'STRING',
              'name': 'title',
              'label': 'title',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': true,
              'lookupAttribute': true,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'title',
          'idAttribute': 'key',
          'lookupAttributes': [
            'title'
          ],
          'isAbstract': false,
          'writable': true,
          'languageCode': 'en'
        },
        'mappedBy': 'parent',
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/UI_Menu/meta/position',
        'fieldType': 'INT',
        'name': 'position',
        'label': 'position',
        'description': 'Position of the menu item',
        'attributes': [],
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': false,
        'lookupAttribute': false,
        'isAggregatable': false
      }
    ],
    'labelAttribute': 'title',
    'idAttribute': 'key',
    'lookupAttributes': [
      'title'
    ],
    'isAbstract': false,
    'writable': true,
    'languageCode': 'en'
  },
  'start': 0,
  'num': 100,
  'total': 5,
  'items': [
    {
      '_href': '/api/v2/UI_Menu/1',
      'key': '1',
      'title': 'Socio-demographic characteristics',
      'parent': {
        '_href': '/api/v2/UI_Menu/3',
        'key': '3',
        'title': 'Maternal Characteristics'
      },
      'variables': [
        {
          '_href': '/api/v2/LifeCycle_CoreVariables/MAT_EDU',
          'variable': 'MAT_EDU',
          'label': 'Maternal education'
        }
      ],
      'children': [],
      'position': 10
    },
    {
      '_href': '/api/v2/UI_Menu/2',
      'key': '2',
      'title': 'Meta Variables',
      'variables': [],
      'children': [],
      'position': 0
    },
    {
      '_href': '/api/v2/UI_Menu/3',
      'key': '3',
      'title': 'Maternal Characteristics',
      'variables': [],
      'children': [
        {
          '_href': '/api/v2/UI_Menu/1',
          'key': '1',
          'title': 'Socio-demographic characteristics'
        },
        {
          '_href': '/api/v2/UI_Menu/4',
          'key': '4',
          'title': 'Lifestyle Characteristics'
        }
      ],
      'position': 1
    },
    {
      '_href': '/api/v2/UI_Menu/4',
      'key': '4',
      'title': 'Lifestyle Characteristics',
      'parent': {
        '_href': '/api/v2/UI_Menu/3',
        'key': '3',
        'title': 'Maternal Characteristics'
      },
      'variables': [],
      'children': [
        {
          '_href': '/api/v2/UI_Menu/5',
          'key': '5',
          'title': 'Smoking'
        }
      ],
      'position': 11
    },
    {
      '_href': '/api/v2/UI_Menu/5',
      'key': '5',
      'title': 'Smoking',
      'parent': {
        '_href': '/api/v2/UI_Menu/4',
        'key': '4',
        'title': 'Lifestyle Characteristics'
      },
      'variables': [
        {
          '_href': '/api/v2/LifeCycle_CoreVariables/PREG_SMK',
          'variable': 'PREG_SMK',
          'label': 'Maternal smoking during pregnancy'
        },
        {
          '_href': '/api/v2/LifeCycle_CoreVariables/PREG_SMK1',
          'variable': 'PREG_SMK1',
          'label': 'Maternal smoking during 1. trimester of pregnancy'
        },
        {
          '_href': '/api/v2/LifeCycle_CoreVariables/PREG_SMK2',
          'variable': 'PREG_SMK2',
          'label': 'Maternal smoking during 2. trimester of pregnancy'
        },
        {
          '_href': '/api/v2/LifeCycle_CoreVariables/PREG_SMK3',
          'variable': 'PREG_SMK3',
          'label': 'Maternal smoking during 3. trimester of pregnancy'
        },
        {
          '_href': '/api/v2/LifeCycle_CoreVariables/PREG_SMKCIG',
          'variable': 'PREG_SMKCIG',
          'label': 'Maternal smoking during pregnancy (quantity)'
        },
        {
          '_href': '/api/v2/LifeCycle_CoreVariables/PREPREG_CIG',
          'variable': 'PREPREG_CIG',
          'label': 'Pre-pregnancy smoking (quantity)'
        },
        {
          '_href': '/api/v2/LifeCycle_CoreVariables/PREPREG_SMK',
          'variable': 'PREPREG_SMK',
          'label': 'Maternal pre-pregnancy smoking'
        }
      ],
      'children': [],
      'position': 11
    }
  ]
}
export default {
  mockResponse
}
