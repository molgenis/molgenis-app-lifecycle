import sortArray from '../util/sortArray'

/**
 * Returns true if a child or recursively one of his children matches the selected node identifier
 */
const isAChildSelected = (children, selectedNodeId) => {
  return children.some(child => child.id === selectedNodeId || (child.children && isAChildSelected(child.children, selectedNodeId)))
}
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
const createNode = (entity, selectedNodeId) => {
  const children = entity.children.map(entity => createNode(entity, selectedNodeId))
  return {
    id: entity.key,
    value: entity.title,
    text: entity.title,
    icon: !entity.children || entity.children.length === 0 ? 'fas fa-table fa-sm' : '',
    disabled: isNodeDisabled(entity),
    loading: false,
    selected: entity.key === selectedNodeId,
    variables: sortArray(entity.variables, 'variable'),
    position: entity.position,
    children: children,
    opened: isAChildSelected(children, selectedNodeId)
  }
}

/**
 * Generates a sorted array of tree nodes
 *
 * @param entities A list of MOLGENIS entities
 * @param selectedNodeId The identifier of a tree node. Can be undefined
 * @returns A list of tree nodes
 */
const mapEntitiesToTreeMenu = (entities, selectedNodeId) => {
  return createTree(entities).map(entity => createNode(entity, selectedNodeId))
}

export default mapEntitiesToTreeMenu
