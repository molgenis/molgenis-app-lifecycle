/**
 * Recursively lookup children for nested parent entities
 */
const lookupChildren = (parent, entitiesByKey) => ({
  ...parent, children: parent.children.map(child => lookupChildren(entitiesByKey[child.key], entitiesByKey))
})

/**
 * Turn flat entity data to a tree structure
 */
const createEntityTree = (entities) => {
  const entitiesByKey = entities.reduce((accumulator, entity) => ({...accumulator, [entity.key]: entity}), {})
  return entities.filter(entity => !entity.parent).map(parent => lookupChildren(parent, entitiesByKey))
}

/**
 * Transform a MOLGENIS entity into a tree node used by vue-jstree
 */
const createTreeNode = (entity) => ({
  id: entity.key,
  value: entity.title,
  text: entity.title,
  icon: !entity.children || entity.children.length === 0 ? 'fa fa-table' : 'fa fa-folder-o',
  opened: false,
  disabled: isNodeDisabled(entity),
  loading: false,
  selected: false,
  variables: entity.variables,
  children: entity.children.map(createTreeNode)
})

/**
 * Generates an array of tree nodes
 *
 * @param entities A list of MOLGENIS entities
 * @returns A list of tree nodes
 */
const generateTreeNodes = (entities) => {
  return createEntityTree(entities).map(createTreeNode)
}

/**
 * Check if a specific node is disabled
 *
 * @param node A Tree node object
 * @returns returns whether a node has variables or not
 */
const isNodeDisabled = (node) => {
  return node.variables.length === 0
}

export default {
  generateTreeNodes,
  isNodeDisabled
}
