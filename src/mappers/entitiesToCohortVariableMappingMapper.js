/**
 * Create a map containing a mapping from cohort + core variable => harmonization table identifier
 */
const mapEntitiesToCohortVariableMapping = (entities) => {
  return entities.reduce((accumulator, entity) => {
    accumulator[entity.cohort.id] = {
      [entity.target.variable]: {
        'id': entity.id,
        sources: entity.sources
      }
    }
  }, {})
}

export default mapEntitiesToCohortVariableMapping
