import React from "react";
import {styled} from "./styled";

function some(...args) {
  console.log(args)
}
const num = 2;
some`hey${num}mom${3}`

const StyledDiv = styled.div`
  color: blue;
  fontSize: 4rem;
`

export function StyledComponent() {
  return <StyledDiv>2</StyledDiv>
}