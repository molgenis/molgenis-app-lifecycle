import requests
import json
headers = {'x-molgenis-token': '${molgenisToken}', 'Content-Type': 'application/json'}
data = """
{
  "permissions":[{
    "permission":"READ",
    "role": "ANONYMOUS"
  }]
}
"""
jsonData = json.loads(data)
resp = requests.post(url = 'http://localhost:8080/api/permissions/entityType/LifeCycle_Harmonizations', headers = headers, data = data)