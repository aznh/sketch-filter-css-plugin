import sketch from 'sketch'

const exceptionCssProperties = [
  "font-family"
]

function getLayerCss (layer) {
  return layer.sketchObject.CSSAttributes().slice(1)
}

export default function() {
  const doc = sketch.getSelectedDocument()
  const selection = doc.selectedLayers
  const selectedCount = selection.length

  if (selectedCount == 0) {
    return sketch.UI.message('layers are not selected.')
  }

  let selectedLayer = selection.layers[0]
  let layerCss = getLayerCss(selectedLayer).filter(style => {
    let property = style.split(':')[0]

    return !exceptionCssProperties.includes(property)
  }).join('\n')
}