/**
 * Recursively join all children objects into one array
 */
const getChildren = (node) => (node.children) ? [node, ...node.children.reduce((accumulator, child) => accumulator.concat(getChildren(child)), [])] : [node]

/**
 * Retrieve a single node from a tree based on a node identifier
 */
const findNodeFromTreeById = (treeMenu, selectedNodeId) => treeMenu.reduce((accumulator, node) => accumulator.concat(getChildren(node)), []).find(node => node.id === selectedNodeId)

export default findNodeFromTreeById
