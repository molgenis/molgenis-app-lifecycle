const mapEntitiesToHarmonizationTable = (entities) => {
  return entities.reduce((accumulator, entity) => {
    const key = entity.sourceLabel
    const variable = entity.target.variable

    if (accumulator[key] === undefined) {
      accumulator[key] = [variable]
      return accumulator
    }
    accumulator[key] = [...accumulator[key], variable]
    return accumulator
  }, {})
}

export default mapEntitiesToHarmonizationTable
