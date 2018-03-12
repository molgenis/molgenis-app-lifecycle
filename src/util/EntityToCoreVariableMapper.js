const generateColumns = (attributes) => {
  if (attributes !== undefined) {
    return attributes.filter(attribute => attribute !== undefined && attribute.visible !== false)
  }
}

export default {
  generateColumns
}
