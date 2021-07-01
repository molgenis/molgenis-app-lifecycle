# Mappingservice fix for LifeCycle
Mappingservice chokes in Harmonizations table copy.

Sources:
https://drive.google.com/drive/u/0/folders/1LgShQvLN8GHTLZv-xvQvGBbfoW7zN3W1

## Prerequisites
- Upload the new “HarmonizationsShadow” to production
- Update mapping target entity to LifeCycle_HarmonizationsShadow 1x
- Update mapping entity targets to LifeCycle_HarmonizationsShadow 22x

## Steps to run the mapping
- Remove “harmonizations” attribute reference from “LifeCycle_CoreVariables” in the python script
- Remove ”LifeCycle_Harmonizations” table in the python script
- Run the mapping job → cron in MOLGENIS
- Put back the “harmonizations” reference to “LifeCycle_CoreVariables”
   - Name: “harmonizations”
   - Label: “Harmonized variables”
   - Type: “onetomany”
   - Reference entity: “LifeCycle_Harmonizations”
   - Mapped by entity: “LifeCycle_Harmonizations → Harmonized variable”
   - Visible: false
   - Nullable: true
- Give ‘ANONYMOUS’ role the write to ‘READ’ the ‘LifeCycle_Harmonizations’ table
- Done!




