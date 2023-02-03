export const importImages = (path) => {
  let images = {}
  path.keys().forEach((item, index) => {
    images[item.replace('./', '')] = path(item)
  })
  const finalImages = Object.keys(images).map((key) => images[key])
  return finalImages
}
