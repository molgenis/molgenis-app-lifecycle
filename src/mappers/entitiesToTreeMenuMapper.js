/**
 * Check if a specific node is disabled
 */
const isNodeDisabled = (node) => {
  return node.variables.length === 0 && node.children.length === 0
}

/**
 * Recursively lookup children for nested parent entities
 */
const lookupChildren = (parent, entitiesByKey) => ({
  ...parent,
  children: parent.children.map(child => lookupChildren(entitiesByKey[child.key], entitiesByKey)).sort((c1, c2) => c1.position - c2.position)
})

/**
 * Turn flat entity data to a tree structure
 */
const createTree = (entities) => {
  const entitiesByKey = entities.reduce((accumulator, entity) => ({...accumulator, [entity.key]: entity}), {})
  return entities.filter(entity => !entity.parent).map(parent => lookupChildren(parent, entitiesByKey)).sort((e1, e2) => e1.position - e2.position)
}

/**
 * Transform a MOLGENIS entity into a tree node used by vue-jstree
 */
const createNode = (entity) => ({
  id: entity.key,
  value: entity.title,
  text: entity.title,
  icon: !entity.children || entity.children.length === 0 ? 'fa fa-table' : '',
  opened: false,
  disabled: isNodeDisabled(entity),
  loading: false,
  selected: false,
  variables: entity.variables,
  position: entity.position,
  children: entity.children.map(createNode)
})

/**
 * Generates a sorted array of tree nodes
 *
 * @param entities A list of MOLGENIS entities
 * @returns A list of tree nodes
 */
const mapEntitiesToTreeMenu = (entities) => {
  return createTree(entities).map(createNode)
}

export default mapEntitiesToTreeMenu
