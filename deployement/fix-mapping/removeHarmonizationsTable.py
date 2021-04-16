import requests
headers = {'x-molgenis-token': '${molgenisToken}'}
requests.delete(url = 'http://localhost:8080/api/metadata/LifeCycle_CoreVariables/attributes?q=name==harmonizations', headers = headers)
requests.delete(url = 'http://localhost:8080/api/metadata/LifeCycle_Harmonizations', headers = headers)