import findNodeFromTreeById from '@/util/findNodeFromTreeById'

describe('utils', () => {
  describe('findNodeFromTreeById', () => {
    it('should return a node from a tree menu based on node id', () => {
      const treeMenu = [{id: '1', children: [{id: '2', children: [{id: '3'}]}]}]
      const actual = findNodeFromTreeById(treeMenu, '3')
      const expected = {id: '3'}

      expect(actual).to.deep.equal(expected)
    })
  })
})
