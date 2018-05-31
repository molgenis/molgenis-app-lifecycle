/**
 * Map attributes of the CoreVariable table to a list of fields
 */
const mapMetadataToCoreVariableFields = (harmonizationMetadata) => {
  return harmonizationMetadata.attributes ? harmonizationMetadata.attributes.find(attribute => attribute.name === 'target').refEntity.attributes : []
}

export default mapMetadataToCoreVariableFields
