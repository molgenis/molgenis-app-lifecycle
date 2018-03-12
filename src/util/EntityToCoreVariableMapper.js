const generateColumns = (attributes) => {
  return attributes.filter(attribute => attribute && attribute.visible !== false && attribute.label !== 'harmonizations')
}

export default {
  generateColumns
}
