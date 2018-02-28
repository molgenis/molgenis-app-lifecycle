const generateTreeData = (apiResponse, settings) => {
  let tree = []
  let paths = {}
  let orphanage = {}
  const folderIcon = settings.folderIcon
  const leafIcon = settings.leafIcon
  const id = settings.id
  const label = settings.label
  apiResponse.items.forEach(buildTreeBranch)
  return tree
}
const buildTreeBranch = (node, tree, paths, orphanage, settings) => {
  // Check if node is rootnode
  const icon = node.children.length > 0 ? folderIcon : leafIcon
  const nodeId = node[id]
  const treeNode = createNewNode(nodeId, node[label], icon, [], true, false, false, false)
  console.log('forloop', tree)
  if (!node.parent) {
    console.log('root', nodeId)
    // add position in array
    const path = [tree.length]
    paths[nodeId] = path
    // paths still ok
    // Add to tree
    tree = addRootToTree(tree, treeNode)
    console.log('roots', tree)
    const populatedChildren = populateChildren(node.children, orphanage, tree, paths, path, settings)
    tree = populatedChildren.tree
    console.log('children populated', tree)
    paths = populatedChildren.paths
  } else {
    console.log('else', tree)
    // Check if parent in main tree
    if (node.parent[id] in paths) {
      console.log('first', tree)
      console.log('non orphan, non root', nodeId)
      // Append to parent in main tree
      const path = paths[node.parent[id]]
      console.log('non orphan', tree)
      const childInfo = addChildToTree(tree, path, treeNode)
      let tree = childInfo.tree
      paths[nodeId] = childInfo.pos
      if (node.children.length > 0) {
        const populatedChildren = populateChildren(node.children, orphanage, tree, paths, path, settings)
        const newTree = populatedChildren.tree
        tree = newTree
        paths = populatedChildren.paths
      }
    } else {
      console.log('orphan', tree)
      console.log('add orphan', nodeId)
      // Add orphan to orphanage
      node.children = treeNode
      orphanage[nodeId] = node
    }
  }
}
const populateChildren = (children, orphanage, tree, paths, path, settings) => {
  console.log('before populate', paths)
  let childPosition = 0
  children.forEach((child) => {
    const childId = child[settings.id]
    if (childId in orphanage) {
      console.log('reunite orphan', childId)
      // add previous saved branch to tree
      const child = orphanage[childId]
      const icon = child.children.length > 0 ? settings.folderIcon : settings.leafIcon
      const childNode = createNewNode(childId, child[settings.label], icon, [], true, false, false, false)
      const childInfo = addChildToTree(tree, path, childNode)
      const newTree = childInfo.tree
      tree = newTree
      paths[childId] = getNewPath(path, childPosition)
      if (child.children.length > 0) {
        const populatedChildren = populateChildren(child.children, orphanage, tree, paths, path, settings)
        tree = populatedChildren.tree
        paths = populatedChildren.paths
      }
      childPosition += 1
    }
  })
  return {tree, paths}
}
const getNewPath = (path, position) => {
  const newPath = path.slice()
  newPath.push(position)
  return newPath
}

const getNextChild = (parentNode, positionOfChild) => {
  return parentNode.children[positionOfChild]
}

const addRootToTree = (tree, nodeToAdd) => {
  tree.push(nodeToAdd)
  return tree
}

const addChildToTree = (tree, path, nodeToAdd) => {
  // Set root node to select
  let treePart = tree[path[0]]
  let i = 1
  while (i <= path.length) {
    if (i === path.length) {
      treePart.children.push(nodeToAdd)
      const newPath = path.slice()
      newPath.push(treePart.children.length)
      return {'tree': tree, 'pos': newPath}
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

export default {
  generateTreeData,
  addChildToTree,
  getNextChild,
  addRootToTree
}
