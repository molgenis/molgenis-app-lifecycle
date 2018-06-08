/**
 * Create a map entry for a single core variable
 */
const createCoreVariableEntry = (entity) => {
  return {
    [entity.target.variable]: {
      'id': entity.id,
      'sources': entity.sources
    }
  }
}

/**
 * Create a map containing a mapping from cohort + core variable => harmonization table identifier
 */
const mapEntitiesToCohortVariableMapping = (entities) => {
  return entities.reduce((accumulator, entity) => {
    accumulator[entity.cohort.id] = {...accumulator[entity.cohort.id], ...createCoreVariableEntry(entity)}
    return accumulator
  }, {})
}

export default mapEntitiesToCohortVariableMapping
