import sortArray from '@/util/sort-array'

describe('sort-array', () => {
  it('should sort an array of objects with the given key', () => {
    const array = [
      {id: 'a4'},
      {id: 'a3'},
      {id: 'a2'},
      {id: 'a1'},
      {id: 'a5'},
      {id: 'a0'}
    ]

    const key = 'id'
    const actual = sortArray(array, key)
    const expected = [
      {id: 'a0'},
      {id: 'a1'},
      {id: 'a2'},
      {id: 'a3'},
      {id: 'a4'},
      {id: 'a5'}
    ]

    expect(actual).to.deep.equal(expected)
  })
})
