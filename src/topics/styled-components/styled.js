import React from "react";

const DOM_ELEMENTS = ['div', 'span', 'input']


function createElement(tag, styleString) {
  const cleanedStyle = styleString
    .split(';')
    .map((elString) => elString.trim())
    .filter((elString) => elString !== '' )
    .map((s) => s.split(':'))

  const style = cleanedStyle.reduce((acc,style) => {
    return {...acc, [style[0]]: style[1]}
  }, {})

  return (props) => React.createElement(tag, {...props, style})
}

DOM_ELEMENTS.forEach((elem/* div, span, input, ... */) => {
  // styled.div
  // styled.span
  styled[elem] = styled(elem)
})

export function styled(tag) {
  return (...styleArgs) => {
    const styleString = styleArgs[0][0]
    return createElement(tag, styleString)
  }
}

