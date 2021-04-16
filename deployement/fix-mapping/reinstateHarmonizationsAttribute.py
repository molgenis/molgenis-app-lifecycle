import requests
import json 
headers = {'x-molgenis-token': '${molgenisToken}', 'Content-Type': 'application/json'}
harmonizationsResp = requests.get(url = 'http://localhost:8080/api/metadata/LifeCycle_Harmonizations', headers = headers)
harmonizationsJsonBody = harmonizationsResp.json()
for item in harmonizationsJsonBody['data']['attributes']['items']:
  if (item['data']['name']=='target'):
    harmonizationsRefAttrId = item['data']['id']
resp = requests.get(url = 'http://localhost:8080/plugin/metadata-manager/create/attribute', headers = headers)
jsonBody = resp.json()
newAttrId = jsonBody['attribute']['id']
dataString = """
{
    "id": "LifeCycle_CoreVariables",
    "label": "LifeCycle variables",
    "labelI18n": {},
    "description": "LifeCycle harmonized variable set",
    "descriptionI18n": {},
    "abstract0": false,
    "backend": "PostgreSQL",
    "package0": {
        "id": "LifeCycle",
        "label": "LifeCycle"
    },
    "attributes": [
        {
            "id": "aaaacznon7ehf6qwhycgrlaaba",
            "name": "variable",
            "type": "string",
            "cascadeDelete": false,
            "nullable": false,
            "auto": false,
            "visible": true,
            "label": "Variable",
            "labelI18n": {},
            "description": "Short name of the variable (should not include spaces)",
            "descriptionI18n": {},
            "aggregatable": false,
            "enumOptions": [],
            "readonly": true,
            "unique": true,
            "tags": [],
            "sequenceNumber": 0,
            "isNew": false
        },
        {
            "id": "aaaacznon7ehf6qwhycgrlaabe",
            "name": "label",
            "type": "string",
            "cascadeDelete": false,
            "nullable": false,
            "auto": false,
            "visible": true,
            "label": "Label",
            "labelI18n": {},
            "description": "Longer human readable name of the variable",
            "descriptionI18n": {},
            "aggregatable": false,
            "enumOptions": [],
            "readonly": false,
            "unique": false,
            "tags": [],
            "sequenceNumber": 1,
            "isNew": false
        },
        {
            "id": "aaaacznon7ehf6qwhycgrlaabi",
            "name": "datatype",
            "type": "categorical",
            "refEntityType": {
                "id": "LifeCycle_DataTypes",
                "label": "Data types"
            },
            "cascadeDelete": false,
            "nullable": false,
            "auto": false,
            "visible": true,
            "label": "Data type",
            "labelI18n": {},
            "descriptionI18n": {},
            "aggregatable": false,
            "enumOptions": [],
            "readonly": false,
            "unique": false,
            "tags": [],
            "sequenceNumber": 2,
            "isNew": false
        },
        {
            "id": "aaaacznon7ehf6qwhycgrlaabm",
            "name": "values",
            "type": "text",
            "cascadeDelete": false,
            "nullable": true,
            "auto": false,
            "visible": true,
            "label": "Values",
            "labelI18n": {},
            "description": "Acceptable values for the variable.",
            "descriptionI18n": {},
            "aggregatable": false,
            "enumOptions": [],
            "readonly": false,
            "unique": false,
            "tags": [],
            "sequenceNumber": 3,
            "isNew": false
        },
        {
            "id": "aaaacznon7ehf6qwhycgrlaabq",
            "name": "unit",
            "type": "categorical",
            "refEntityType": {
                "id": "LifeCycle_Units",
                "label": "Units"
            },
            "cascadeDelete": false,
            "nullable": true,
            "auto": false,
            "visible": true,
            "label": "Unit",
            "labelI18n": {},
            "descriptionI18n": {},
            "aggregatable": false,
            "enumOptions": [],
            "readonly": false,
            "unique": false,
            "tags": [],
            "sequenceNumber": 4,
            "isNew": false
        },
        {
            "id": "aaaacznon7ehf6qwhycgrlaabu",
            "name": "match",
            "type": "categorical",
            "refEntityType": {
                "id": "LifeCycle_Status",
                "label": "Status"
            },
            "cascadeDelete": false,
            "nullable": true,
            "auto": false,
            "visible": true,
            "label": "Match",
            "labelI18n": {},
            "descriptionI18n": {},
            "aggregatable": false,
            "enumOptions": [],
            "readonly": false,
            "unique": false,
            "tags": [],
            "sequenceNumber": 5,
            "isNew": false
        },
        {
            "id": "aaaacznon7ehf6qwhycgrlaaby",
            "name": "comments",
            "type": "text",
            "cascadeDelete": false,
            "nullable": true,
            "auto": false,
            "visible": true,
            "label": "Comments",
            "labelI18n": {},
            "descriptionI18n": {},
            "aggregatable": false,
            "enumOptions": [],
            "readonly": false,
            "unique": false,
            "tags": [],
            "sequenceNumber": 6,
            "isNew": false
        },
        {
            "id": "aaaac6fvtdwnf6qwh2554giaai",
            "name": "harmonizations",
            "type": "onetomany",
            "refEntityType": {
                "id": "LifeCycle_Harmonizations",
                "label": "Harmonizations"
            },
            "cascadeDelete": false,
            "mappedByAttribute": {
                "id": "aaaac6fvsdbzr6qwh2554giaai",
                "label": "Harmonized variable",
                "entity": {
                    "id": "LifeCycle_Harmonizations",
                    "label": "Harmonizations"
                }
            },
            "orderBy": null,
            "nullable": true,
            "auto": false,
            "visible": false,
            "label": "Harmonized variables",
            "labelI18n": {},
            "descriptionI18n": {},
            "aggregatable": false,
            "enumOptions": [],
            "readonly": false,
            "unique": false,
            "tags": [],
            "sequenceNumber": 0,
            "isNew": true
        }
    ],
    "referringAttributes": [
        {
            "id": "aaaac5cj4yzdl6qwhza7xqiaaq",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_ABCD_Harmonizations",
                "label": "ABCD Harmonizations"
            }
        },
        {
            "id": "aaaac6enzuc3l6qwh2554giabq",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_HarmonizationsShadow",
                "label": "Harmonizations shadow"
            }
        },
        {
            "id": "aaaac6fvsdbzr6qwh2554giaai",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_Harmonizations",
                "label": "Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ehh6qwhycgrlaadq",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_ALSPAC_Harmonizations",
                "label": "ALSPAC Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ehj6qwhycgrlaaci",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_BIB_Harmonizations",
                "label": "BIB Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ehl6qwhycgrlaaa4",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_CHOP_Harmonizations",
                "label": "CHOP Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ehl6qwhycgrlaadi",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_DNBC_Harmonizations",
                "label": "DNBC Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ehn6qwhycgrlaaca",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_EDEN_Harmonizations",
                "label": "EDEN Harmonizations"
            }
        },
        {
            "id": "aaaacznon7eil6qwhycgrlaaaq",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_ELFE_Harmonizations",
                "label": "ELFE Harmonizations"
            }
        },
        {
            "id": "aaaacznon7eir6qwhycgrlaacm",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_GECKO_Harmonizations",
                "label": "GECKO Harmonizations"
            }
        },
        {
            "id": "aaaacznon7eit6qwhycgrlaace",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_GenR_Harmonizations",
                "label": "GenR Harmonizations"
            }
        },
        {
            "id": "aaaacznon7eiv6qwhycgrlaaa4",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_HBCS_Harmonizations",
                "label": "HBCS Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ejb6qwhycgrlaaam",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_INMA_Harmonizations",
                "label": "INMA Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ejh6qwhycgrlaaam",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_MoBa_Harmonizations",
                "label": "MoBa Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ejh6qwhycgrlaacy",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_NFBC66_Harmonizations",
                "label": "NFBC66 Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ejl6qwhycgrlaacy",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_RAINE_Harmonizations",
                "label": "RAINE Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ejr6qwhycgrlaaay",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_RHEA_Harmonizations",
                "label": "RHEA Harmonizations"
            }
        },
        {
            "id": "aaaacznon7ejt6qwhycgrlaacm",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_SWS_Harmonizations",
                "label": "SWS Harmonizations"
            }
        },
        {
            "id": "aaaacztw4idtd6qwhycgrlaaae",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_NINFEA_Harmonizations",
                "label": "NINFEA Harmonizations"
            }
        },
        {
            "id": "aaaaczxne5oil6qwhycgrlaabm",
            "label": "Harmonized variable",
            "entity": {
                "id": "LifeCycle_NFBC86_Harmonizations",
                "label": "NFBC86 Harmonizations"
            }
        }
    ],
    "tags": [],
    "idAttribute": {
        "id": "aaaacznon7ehf6qwhycgrlaaba",
        "label": "Variable",
        "entity": {
            "id": "LifeCycle_CoreVariables",
            "label": "LifeCycle variables"
        }
    },
    "labelAttribute": {
        "id": "aaaacznon7ehf6qwhycgrlaabe",
        "label": "Label",
        "entity": {
            "id": "LifeCycle_CoreVariables",
            "label": "LifeCycle variables"
        }
    },
    "lookupAttributes": [
        {
            "id": "aaaacznon7ehf6qwhycgrlaaba",
            "label": "Variable",
            "entity": {
                "id": "LifeCycle_CoreVariables",
                "label": "LifeCycle variables"
            }
        },
        {
            "id": "aaaacznon7ehf6qwhycgrlaabe",
            "label": "Label",
            "entity": {
                "id": "LifeCycle_CoreVariables",
                "label": "LifeCycle variables"
            }
        }
    ],
    "isNew": false
}
"""
dataAsJson = json.loads(dataString)
dataAsJson['attributes'][len(dataAsJson['attributes']) - 1]['id'] = newAttrId
dataAsJson['attributes'][len(dataAsJson['attributes']) - 1]['mappedByAttribute']['id'] = harmonizationsRefAttrId
for item in dataAsJson['referringAttributes']:
  if (item['label']=='Harmonized variable'):
    item['id'] = harmonizationsRefAttrId
dataAsString = json.dumps(dataAsJson)
requests.post(url = 'http://localhost:8080/plugin/metadata-manager/entityType', headers = headers, data = dataAsString)

