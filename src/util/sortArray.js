import naturalSort from 'javascript-natural-sort'

/**
 * Apply natural sorting on an array of objects based on the given key
 */
const sortArray = (array, key) => {
  return array.sort((a, b) => naturalSort(a[key], b[key]))
}

export default sortArray
