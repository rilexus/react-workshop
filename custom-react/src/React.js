const isBasicType = (type) => typeof type === "string" || typeof type === "number"
const addStyle = (node, style) => Object.entries(style).forEach(([key, value]) => node.style[key] = value)

export const ReactDOM = (function () {

  function render(component, node){
    let _component = component;
    if (typeof _component.type === 'function'){
      _component = _component.type(_component.props)
    }
    if (isBasicType(_component)){
      node.appendChild(document.createTextNode(_component))
    } else {
      const elem = document.createElement(_component.type)
      node.appendChild(elem)
      if (_component.props.children){
        _component.props.children.forEach((child) => {
          this.render(child, elem)
        })
      }
    }
  }
  return {render}

})()

export const React = (function () {
  function createElement(elementType, props, ...children){
    const elem = {
      type: elementType,
      props: {}
    }
    if (!!props){
      elem.props = props
    }
    if (children) {
      elem.props['children'] = children
    }
    return elem
  }
  return {createElement}
})()