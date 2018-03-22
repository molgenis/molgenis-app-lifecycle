const generateTreeData = (apiResponse, settings) => {
  let forest = []
  let paths = {}
  let orphanage = {}
  apiResponse.forEach((node) => {
    const extention = extentTree(node, forest, paths, orphanage, settings)
    forest = extention.forest
    paths = extention.paths
    orphanage = extention.orphanage
  })
  return forest
}
const extentTree = (node, forest, paths, orphanage, settings) => {
  const icon = node.children.length > 0 ? settings.folderIcon : settings.leafIcon
  const nodeId = node[settings.id]
  const isDisabled = disableNode(node)
  const treeNode = createNewNode(nodeId, node[settings.label], icon, [], settings.isOpened, settings.isSelected, isDisabled, settings.isLoading)
  const id = settings.id
  let newForest = forest.slice()
  // Check if node is rootnode
  if (!node.parent) {
    // Add location of node in tree to paths array
    const path = [forest.length]
    paths[nodeId] = path
    // Add to tree
    newForest.push(treeNode)
    if (node.children.length > 0) {
      const populatedChildren = populateChildren(node.children, orphanage, newForest, paths, path, settings)
      newForest = populatedChildren.forest
      paths = populatedChildren.paths
    }
  } else {
    // Check if parent in main tree
    if (node.parent[id] in paths) {
      // Append to parent in main tree
      const path = paths[node.parent[id]]
      const childInfo = addChildToTree(newForest, path, treeNode)
      newForest = childInfo.forest
      paths[nodeId] = childInfo.pos
      if (node.children.length > 0) {
        const populatedChildren = populateChildren(node.children, orphanage, newForest, paths, path, settings)
        newForest = populatedChildren.forest
        paths = populatedChildren.paths
      }
    } else {
      // Add orphan to orphanage
      node.children = treeNode
      orphanage[nodeId] = node
    }
  }
  forest = newForest
  return {forest, paths, orphanage}
}
const populateChildren = (children, orphanage, forest, paths, path, settings) => {
  let childPosition = 0
  children.forEach((child) => {
    const childId = child[settings.id]
    if (childId in orphanage) {
      // add previous saved branch to tree
      const child = orphanage[childId]
      const isDisabled = disableNode(child)
      const icon = child.children.length > 0 ? settings.folderIcon : settings.leafIcon
      const childNode = createNewNode(childId, child[settings.label], icon, [], settings.isOpened, settings.isSelected, isDisabled, settings.isLoading)
      const childInfo = addChildToTree(forest, path, childNode)
      const newForest = childInfo.forest
      forest = newForest
      paths[childId] = getNewPath(path, childPosition)
      if (child.children.length > 0) {
        const populatedChildren = populateChildren(child.children, orphanage, forest, paths, path, settings)
        forest = populatedChildren.forest
        paths = populatedChildren.paths
      }
      childPosition += 1
    }
  })
  return {forest, paths}
}
const getNewPath = (path, position) => {
  const newPath = path.slice()
  newPath.push(position)
  return newPath
}

const getNextChild = (parentNode, positionOfChild) => {
  return parentNode.children[positionOfChild]
}

const addChildToTree = (forest, path, nodeToAdd) => {
  // Set root node to select
  let treePart = forest[path[0]]
  let i = 1
  while (i <= path.length) {
    if (i === path.length) {
      treePart.children.push(nodeToAdd)
      const pos = path.slice()
      pos.push(treePart.children.length - 1)
      return {forest, pos}
    }
    treePart = getNextChild(treePart, path[i])
    i += 1
  }
}

const createNewNode = (id, label, icon, children, isOpened, isSelected, isDisabled, isLoading) => {
  const node = {
    'id': id,
    'text': label,
    'value': label,
    'icon': icon,
    'opened': isOpened,
    'selected': isSelected,
    'disabled': isDisabled,
    'loading': isLoading,
    'children': children
  }
  return node
}

const disableNode = (node) => {
  return node.variables.length === 0
}

export default {
  generateTreeData,
  addChildToTree,
  getNextChild,
  createNewNode,
  disableNode
}
