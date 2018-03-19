const mockAppSettingsData = {
  '_href': '/api/v2/sys_set_app/app',
  'title': 'MOLGENIS',
  'logo_href_navbar': '/img/logo_molgenis_small.png',
  'fixed_logo_height': 150,
  'molgenis_menu': '{\'type\':\'menu\',\'id\':\'main\',\'label\':\'Home\',\'items\':[{\'type\':\'plugin\',\'id\':\'home\',\'label\':\'Home\'},{\'type\':\'menu\',\'id\':\'vkgl\',\'label\':\'MVL\',\'items\':[{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'Consensus\',\'params\':\'entity\\u003dVKGL_consensus\\u0026hideselect\\u003dtrue\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'Opposite classifications\',\'params\':\'entity\\u003dVKGL_consensus\\u0026hideselect\\u003dtrue\\u0026mod\\u003ddata\\u0026attrs%5B%5D\\u003dchromosome\\u0026attrs%5B%5D\\u003dPOS\\u0026attrs%5B%5D\\u003dstop\\u0026attrs%5B%5D\\u003dREF\\u0026attrs%5B%5D\\u003dALT\\u0026attrs%5B%5D\\u003dgene\\u0026attrs%5B%5D\\u003dprotein\\u0026attrs%5B%5D\\u003dlab_classifications\\u0026attrs%5B%5D\\u003dconsensus_classification\\u0026filter\\u003dconsensus_classification\\u003dq\\u003d%27Opposite%20classification%27\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'AMC\',\'params\':\'entity\\u003dVKGL_AMC\\u0026hideselect\\u003dtrue\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'Erasmus\',\'params\':\'entity\\u003dVKGL_ERASMUS\\u0026hideselect\\u003dtrue\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'LUMC\',\'params\':\'entity\\u003dVKGL_LUMC\\u0026hideselect\\u003dtrue\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'NKI\',\'params\':\'entity\\u003dVKGL_NKI\\u0026hideselect\\u003dtrue\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'Radboud\',\'params\':\'entity\\u003dVKGL_RADBOUD\\u0026hideselect\\u003dtrue\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'VUMC\',\'params\':\'entity\\u003dVKGL_VUMC\\u0026hideselect\\u003dtrue\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'UMCG\',\'params\':\'entity\\u003dVKGL_UMCG\\u0026hideselect\\u003dtrue\'},{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'UMCU\',\'params\':\'entity\\u003dVKGL_UMCU\\u0026hideselect\\u003dtrue\'}]},{\'type\':\'menu\',\'id\':\'importdata\',\'label\':\'Import data\',\'items\':[{\'type\':\'plugin\',\'id\':\'one-click-importer\',\'label\':\'Quick data import\'},{\'type\':\'plugin\',\'id\':\'importwizard\',\'label\':\'Advanced data import\'}]},{\'type\':\'plugin\',\'id\':\'navigator\',\'label\':\'Navigator\'},{\'type\':\'menu\',\'id\':\'dataintegration\',\'label\':\'Data Integration\',\'items\':[{\'type\':\'plugin\',\'id\':\'dataexplorer\',\'label\':\'Data Explorer\'},{\'type\':\'plugin\',\'id\':\'metadata-manager\',\'label\':\'Metadata Manager\'},{\'type\':\'plugin\',\'id\':\'mappingservice\',\'label\':\'Mapping Service\'},{\'type\':\'plugin\',\'id\':\'tagwizard\',\'label\':\'Tag Wizard\'},{\'type\':\'plugin\',\'id\':\'ontologymanager\',\'label\':\'Ontology manager\'}]},{\'type\':\'menu\',\'id\':\'plugins\',\'label\':\'Plugins\',\'items\':[{\'type\':\'plugin\',\'id\':\'swagger\',\'label\':\'API documentation\'},{\'type\':\'plugin\',\'id\':\'apps\',\'label\':\'App store\'},{\'type\':\'plugin\',\'id\':\'catalogue\',\'label\':\'Catalogue\'},{\'type\':\'plugin\',\'id\':\'feedback\',\'label\':\'Feedback\'},{\'type\':\'plugin\',\'id\':\'gavin-app\',\'label\':\'Gavin\'},{\'type\':\'plugin\',\'id\':\'jobs\',\'label\':\'Job Overview\',\'params\':\'\'},{\'type\':\'plugin\',\'id\':\'pathways\',\'label\':\'Pathways\'},{\'type\':\'plugin\',\'id\':\'questionnaires\',\'label\':\'Questionnaires\'},{\'type\':\'plugin\',\'id\':\'standardsregistry\',\'label\':\'Model registry\'},{\'type\':\'plugin\',\'id\':\'scripts\',\'label\':\'Scripts\'}]},{\'type\':\'menu\',\'id\':\'admin\',\'label\':\'Admin\',\'items\':[{\'type\':\'plugin\',\'id\':\'indexmanager\',\'label\':\'Index manager\'},{\'type\':\'plugin\',\'id\':\'logmanager\',\'label\':\'Log manager\'},{\'type\':\'plugin\',\'id\':\'menumanager\',\'label\':\'Menu Manager\'},{\'type\':\'plugin\',\'id\':\'permissionmanager\',\'label\':\'Permission Manager\'},{\'type\':\'plugin\',\'id\':\'scheduledjobs\',\'label\':\'Scheduled Jobs\'},{\'type\':\'plugin\',\'id\':\'settingsmanager\',\'label\':\'Settings\'},{\'type\':\'plugin\',\'id\':\'thememanager\',\'label\':\'Theme Manager\'},{\'type\':\'plugin\',\'id\':\'usermanager\',\'label\':\'User Manager\'}]},{\'type\':\'plugin\',\'id\':\'useraccount\',\'label\':\'Account\'}]}',
  'language_code': 'en',
  'bootstrap_theme': 'bootstrap-molgenis.min.css',
  'ga_privacy_friendly': true,
  'ga_acc_privacy_friendly': false,
  'ga_acc_privacy_friendly_mgs': true,
  'id': 'app'
}

const mockRawTreeData = {
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
      'children': []
    },
    {
      '_href': '/api/v2/menu/p2',
      'key': 'p2',
      'title': 'Parent2',
      'children': []
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
      ]
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
      ]
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
      'children': []
    }
  ]
}

const mockCoreVariablesResponse = {
  'href': '/api/v2/LifeCycle_CoreVariables',
  'meta': {
    'href': '/api/v2/LifeCycle_CoreVariables',
    'hrefCollection': '/api/v2/LifeCycle_CoreVariables',
    'name': 'LifeCycle_CoreVariables',
    'label': 'LifeCycle Variables',
    'description': 'LifeCycle harmonized variable set',
    'attributes': [
      {
        'href': '/api/v2/LifeCycle_CoreVariables/meta/id',
        'fieldType': 'STRING',
        'name': 'id',
        'label': 'ID',
        'description': 'Variable ID',
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
        'href': '/api/v2/LifeCycle_CoreVariables/meta/variable',
        'fieldType': 'STRING',
        'name': 'variable',
        'label': 'Variable',
        'description': 'Short name of the variable (should not include spaces)',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': true,
        'unique': true,
        'visible': true,
        'lookupAttribute': false,
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
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/LifeCycle_CoreVariables/meta/datatype',
        'fieldType': 'CATEGORICAL',
        'name': 'datatype',
        'label': 'Data type',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_DataTypes',
          'hrefCollection': '/api/v2/LifeCycle_DataTypes',
          'name': 'LifeCycle_DataTypes',
          'label': 'Data types',
          'description': 'Datetype of the variable',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_DataTypes/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_DataTypes/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
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
          'idAttribute': 'id',
          'lookupAttributes': [
            'label'
          ],
          'isAbstract': false,
          'writable': false,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/LifeCycle_CoreVariables/meta/values',
        'fieldType': 'TEXT',
        'name': 'values',
        'label': 'Values',
        'description': 'Acceptable values for the variable.',
        'attributes': [],
        'maxLength': 65535,
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
        'href': '/api/v2/LifeCycle_CoreVariables/meta/unit',
        'fieldType': 'CATEGORICAL',
        'name': 'unit',
        'label': 'Unit',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_Units',
          'hrefCollection': '/api/v2/LifeCycle_Units',
          'name': 'LifeCycle_Units',
          'label': 'Units',
          'description': 'Units of measurement',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_Units/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Units/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
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
          'idAttribute': 'id',
          'lookupAttributes': [
            'label'
          ],
          'isAbstract': false,
          'writable': false,
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
        'href': '/api/v2/LifeCycle_CoreVariables/meta/match',
        'fieldType': 'CATEGORICAL',
        'name': 'match',
        'label': 'Match',
        'description': '',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_Status',
          'hrefCollection': '/api/v2/LifeCycle_Status',
          'name': 'LifeCycle_Status',
          'label': 'Status',
          'description': 'Status of the harmonization',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_Status/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Status/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
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
          'idAttribute': 'id',
          'lookupAttributes': [
            'label'
          ],
          'isAbstract': false,
          'writable': false,
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
        'href': '/api/v2/LifeCycle_CoreVariables/meta/definition',
        'fieldType': 'TEXT',
        'name': 'definition',
        'label': 'Definition',
        'attributes': [],
        'maxLength': 65535,
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
        'href': '/api/v2/LifeCycle_CoreVariables/meta/comments',
        'fieldType': 'TEXT',
        'name': 'comments',
        'label': 'Comments',
        'attributes': [],
        'maxLength': 65535,
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
        'href': '/api/v2/LifeCycle_CoreVariables/meta/harmonizations',
        'fieldType': 'ONE_TO_MANY',
        'name': 'harmonizations',
        'label': 'Harmonized variables',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_Harmonizations',
          'hrefCollection': '/api/v2/LifeCycle_Harmonizations',
          'name': 'LifeCycle_Harmonizations',
          'label': 'Harmonizations',
          'description': 'Harmonization process',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
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
              'href': '/api/v2/LifeCycle_Harmonizations/meta/sourceLabel',
              'fieldType': 'STRING',
              'name': 'sourceLabel',
              'label': 'Source variables',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false,
              'expression': 'cohort'
            }
          ],
          'labelAttribute': 'sourceLabel',
          'idAttribute': 'id',
          'lookupAttributes': [],
          'isAbstract': false,
          'writable': false,
          'languageCode': 'en'
        },
        'mappedBy': 'target',
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': false,
        'lookupAttribute': false,
        'isAggregatable': false
      }
    ],
    'labelAttribute': 'variable',
    'idAttribute': 'id',
    'lookupAttributes': [],
    'isAbstract': false,
    'writable': false,
    'languageCode': 'en'
  },
  'start': 0,
  'num': 100,
  'total': 1,
  'items': [
    {
      '_href': '/api/v2/LifeCycle_CoreVariables/aaaacyc66nrzd6qwh3nxvnaaae',
      'id': 'aaaacyc66nrzd6qwh3nxvnaaae',
      'variable': 'MAT_EDU',
      'label': 'Maternal education',
      'datatype': {
        '_href': '/api/v2/LifeCycle_DataTypes/categorical',
        'id': 'categorical',
        'label': 'Categorical'
      },
      'values': '1 = High\n2 = Medium\n3 = Low',
      'match': {
        '_href': '/api/v2/LifeCycle_Status/partial',
        'id': 'partial',
        'label': 'Partial'
      },
      'comments': 'Education of the mother measured between 1 year prepartum and 1 year postpartum. \n\nLevel of education based on the highest of on-going and completed education.  \n\nIf more than one are declared (different time points, but within the defined time frame), using the highest level declared.',
      'harmonizations': [
        {
          '_href': '/api/v2/LifeCycle_Harmonizations/aaaacyc67m5p56qwh3nxvnaaae',
          'id': 'aaaacyc67m5p56qwh3nxvnaaae',
          'sourceLabel': 'DNBC'
        }
      ]
    }
  ]
}

const mockSourceVariablesResponse = {
  'items': [{
    '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67dgh76qwh3nxvnaaae',
    'cohort': {'_href': '/api/v2/LifeCycle_Cohorts/DNBC', 'id': 'DNBC', 'label': 'DNBC'},
    'variable': 'A157',
    'description': 'Are you attending school or vocational training?',
    'values': '1. Yes\n2. No->A159\n3. Do not know->A159\n4. Do not want to answer->A159',
    'datatype': {'_href': '/api/v2/LifeCycle_DataTypes/categorical', 'id': 'categorical', 'label': 'Categorical'},
    'collectionType': 'Phone Interview 1 (12 weeks)',
    'id': 'aaaacyc67dgh76qwh3nxvnaaae',
    'cohortLabel': 'DNBC'
  }, {
    '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67fxof6qwh3nxvnaaae',
    'cohort': {'_href': '/api/v2/LifeCycle_Cohorts/DNBC', 'id': 'DNBC', 'label': 'DNBC'},
    'variable': 'A158',
    'description': 'What education are you attending?',
    'values': '1. basic school , to 9th grade\n2. HTX (higher technical exam) or HHX (higher commercial exam)\n3. high school\n4. semi-skilled worker training\n5. basic commercial vocational training\n6. professional training\n7. other vocational training\n8. short further education, less than 3 years\n9. medium further education, more than 3-4 years\n10.long further higher education more than 4 years\n11.other education describe________________\n12.do not know\n13.do not want to answer',
    'datatype': {'_href': '/api/v2/LifeCycle_DataTypes/categorical', 'id': 'categorical', 'label': 'Categorical'},
    'collectionType': 'Phone Interview 1 (12 weeks)',
    'id': 'aaaacyc67fxof6qwh3nxvnaaae',
    'cohortLabel': 'DNBC'
  }, {
    '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67ibsp6qwh3nxvnaaae',
    'cohort': {'_href': '/api/v2/LifeCycle_Cohorts/DNBC', 'id': 'DNBC', 'label': 'DNBC'},
    'variable': 'SOCSTA',
    'description': 'Highest educational level completed',
    'values': '1: Long further education or managers of larger companies.     \n2: Medium further education or managers of smaller companies                         \n3: Vocational training, skilled work (Upper secondary)\n4: Unskilled work                \n5: On-going education (attained from A157 - eliminate here, because it is wanted to have highest of on-going and completed)\n6: out of the labour market \n7: unquantifiable',
    'datatype': {'_href': '/api/v2/LifeCycle_DataTypes/categorical', 'id': 'categorical', 'label': 'Categorical'},
    'collectionType': 'Phone interview 1 (12 weeks)',
    'id': 'aaaacyc67ibsp6qwh3nxvnaaae',
    'cohortLabel': 'DNBC'
  }]
}

const mockCohortsResponse = {
  'items': [
    {
      '_href': '/api/v2/LifeCycle_Cohorts/ALSPAC',
      'id': 'ALSPAC',
      'label': 'ALSPAC'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/BIB',
      'id': 'BIB',
      'label': 'BIB'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/CHOP',
      'id': 'CHOP',
      'label': 'CHOP'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/DNBC',
      'id': 'DNBC',
      'label': 'DNBC'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/EDEN',
      'id': 'EDEN',
      'label': 'EDEN'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/ELFE',
      'id': 'ELFE',
      'label': 'ELFE'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/GECKO',
      'id': 'GECKO',
      'label': 'GECKO'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/HBCS',
      'id': 'HBCS',
      'label': 'HBCS'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/INMA',
      'id': 'INMA',
      'label': 'INMA'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/MoBa',
      'id': 'MoBa',
      'label': 'MoBa'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/NFBC66',
      'id': 'NFBC66',
      'label': 'NFBC66'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/NFBC86',
      'id': 'NFBC86',
      'label': 'NFBC86'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/NINFEA',
      'id': 'NINFEA',
      'label': 'NINFEA'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/RAINE',
      'id': 'RAINE',
      'label': 'RAINE'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/RHEA',
      'id': 'RHEA',
      'label': 'RHEA'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/SWS',
      'id': 'SWS',
      'label': 'SWS'
    },
    {
      '_href': '/api/v2/LifeCycle_Cohorts/GenR',
      'id': 'GenR',
      'label': 'Gen R'
    }
  ]
}

const mockHarmonizationResponse = {
  '_meta': {
    'href': '/api/v2/LifeCycle_Harmonizations',
    'hrefCollection': '/api/v2/LifeCycle_Harmonizations',
    'name': 'LifeCycle_Harmonizations',
    'label': 'Harmonizations',
    'description': 'Harmonization process',
    'attributes': [
      {
        'href': '/api/v2/LifeCycle_Harmonizations/meta/cohort',
        'fieldType': 'XREF',
        'name': 'cohort',
        'label': 'Cohort',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_Cohorts',
          'hrefCollection': '/api/v2/LifeCycle_Cohorts',
          'name': 'LifeCycle_Cohorts',
          'label': 'Cohorts',
          'description': 'Participating Cohorts',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_Cohorts/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Cohorts/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
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
          'idAttribute': 'id',
          'lookupAttributes': [
            'label'
          ],
          'isAbstract': false,
          'writable': false,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/LifeCycle_Harmonizations/meta/sources',
        'fieldType': 'MREF',
        'name': 'sources',
        'label': 'Source variables',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_SourceVariables',
          'hrefCollection': '/api/v2/LifeCycle_SourceVariables',
          'name': 'LifeCycle_SourceVariables',
          'label': 'Source Variables',
          'description': 'Cohort source variables',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_SourceVariables/meta/variable',
              'fieldType': 'STRING',
              'name': 'variable',
              'label': 'Variable',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_SourceVariables/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
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
            }
          ],
          'labelAttribute': 'variable',
          'idAttribute': 'id',
          'lookupAttributes': [],
          'isAbstract': false,
          'writable': false,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/LifeCycle_Harmonizations/meta/target',
        'fieldType': 'XREF',
        'name': 'target',
        'label': 'Harmonized variable',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_CoreVariables',
          'hrefCollection': '/api/v2/LifeCycle_CoreVariables',
          'name': 'LifeCycle_CoreVariables',
          'label': 'LifeCycle Variables',
          'description': 'LifeCycle harmonized variable set',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_CoreVariables/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'description': 'Variable ID',
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
              'href': '/api/v2/LifeCycle_CoreVariables/meta/variable',
              'fieldType': 'STRING',
              'name': 'variable',
              'label': 'Variable',
              'description': 'Short name of the variable (should not include spaces)',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': true,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'variable',
          'idAttribute': 'id',
          'lookupAttributes': [],
          'isAbstract': false,
          'writable': false,
          'languageCode': 'en'
        },
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/LifeCycle_Harmonizations/meta/description',
        'fieldType': 'TEXT',
        'name': 'description',
        'label': 'Description',
        'attributes': [],
        'maxLength': 65535,
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/LifeCycle_Harmonizations/meta/syntax',
        'fieldType': 'TEXT',
        'name': 'syntax',
        'label': 'Syntax',
        'attributes': [],
        'maxLength': 65535,
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
        'href': '/api/v2/LifeCycle_Harmonizations/meta/status',
        'fieldType': 'CATEGORICAL',
        'name': 'status',
        'label': 'Match',
        'attributes': [],
        'refEntity': {
          'href': '/api/v2/LifeCycle_Status',
          'hrefCollection': '/api/v2/LifeCycle_Status',
          'name': 'LifeCycle_Status',
          'label': 'Status',
          'description': 'Status of the harmonization',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_Status/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Status/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
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
          'idAttribute': 'id',
          'lookupAttributes': [
            'label'
          ],
          'isAbstract': false,
          'writable': false,
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
        'href': '/api/v2/LifeCycle_Harmonizations/meta/id',
        'fieldType': 'STRING',
        'name': 'id',
        'label': 'ID',
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
        'href': '/api/v2/LifeCycle_Harmonizations/meta/targetLabel',
        'fieldType': 'STRING',
        'name': 'targetLabel',
        'label': 'Harmonized variable',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': false,
        'lookupAttribute': false,
        'isAggregatable': false,
        'expression': 'target'
      },
      {
        'href': '/api/v2/LifeCycle_Harmonizations/meta/sourceLabel',
        'fieldType': 'STRING',
        'name': 'sourceLabel',
        'label': 'Source variables',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': false,
        'readOnly': false,
        'labelAttribute': true,
        'unique': false,
        'visible': false,
        'lookupAttribute': false,
        'isAggregatable': false,
        'expression': 'cohort'
      },
      {
        'href': '/api/v2/LifeCycle_Harmonizations/meta/dateOfUpdate',
        'fieldType': 'DATE',
        'name': 'dateOfUpdate',
        'label': 'Date of update',
        'description': 'Date the harmonization was last updated.',
        'attributes': [],
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      }
    ],
    'labelAttribute': 'sourceLabel',
    'idAttribute': 'id',
    'lookupAttributes': [],
    'isAbstract': false,
    'writable': false,
    'languageCode': 'en'
  },
  '_href': '/api/v2/LifeCycle_Harmonizations/aaaacyc67m5p56qwh3nxvnaaae',
  'cohort': {
    '_href': '/api/v2/LifeCycle_Cohorts/DNBC',
    'id': 'DNBC',
    'label': 'DNBC'
  },
  'sources': [
    {
      '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67dgh76qwh3nxvnaaae',
      'variable': 'A157',
      'id': 'aaaacyc67dgh76qwh3nxvnaaae'
    },
    {
      '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67fxof6qwh3nxvnaaae',
      'variable': 'A158',
      'id': 'aaaacyc67fxof6qwh3nxvnaaae'
    },
    {
      '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67ibsp6qwh3nxvnaaae',
      'variable': 'SOCSTA',
      'id': 'aaaacyc67ibsp6qwh3nxvnaaae'
    }
  ],
  'target': {
    '_href': '/api/v2/LifeCycle_CoreVariables/aaaacyc66nrzd6qwh3nxvnaaae',
    'id': 'aaaacyc66nrzd6qwh3nxvnaaae',
    'variable': 'MAT_EDU'
  },
  'description': 'On-going education: \nIf A157 is coded as Yes,  then A158 was answered. \nA158 will be recoded into three levels corresponding the explanation in the harmonised variable.\n\n1 (High education): 8+9+10\n2 (Medium education): 2+3+4+5+6+7\n3 (Low education): 1 \n99 (missing): 12+13\n\nCompleted education: \nThe variables of 6 categories  will be recoded into three: \n1 (High education): 1+2 \n2 (Medium education): 3\n3 (Low education): 4+6\n99 (Missing): 7\n\n\nFinal variable for harmonisation: \nHighest of on-going and completed educational level.',
  'status': {
    '_href': '/api/v2/LifeCycle_Status/complete',
    'id': 'complete',
    'label': 'Complete'
  },
  'id': 'aaaacyc67m5p56qwh3nxvnaaae',
  'targetLabel': 'MAT_EDU',
  'sourceLabel': 'DNBC'
}

export default {
  mockAppSettingsData,
  mockRawTreeData,
  mockCoreVariablesResponse,
  mockSourceVariablesResponse,
  mockCohortsResponse,
  mockHarmonizationResponse
}
