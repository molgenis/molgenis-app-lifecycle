/**
 * Returns true if the node itself matches the search query
 */
const nodeMatchesQuery = (node, query) => node.text.toLowerCase().indexOf(query.toLowerCase()) >= 0

/**
 * Returns true if the text of a node or any of his children contain the query
 */
const includeNode = (node, query) => nodeMatchesQuery(node, query) || (node.children && node.children.some(child => includeNode(child, query)))

/**
 * Recursively filter content of a list of tree nodes based on a query
 */
const filterTreeMenu = (treeNodes, query) => {
  return treeNodes
    .filter(node => includeNode(node, query))
    .map(node => nodeMatchesQuery(node, query) ? node : ({
      ...node,
      children: filterTreeMenu(node.children, query)
    }))
}

export default filterTreeMenu
