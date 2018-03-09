const generateColumns = (attributes) => {
  return attributes.filter(attribute => attribute.visible !== false && attribute.label !== 'harmonizations')
}

export default {
  generateColumns
}
