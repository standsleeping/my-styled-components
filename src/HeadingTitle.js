import styled, { css } from "styled-components"

const HeadingTitle = styled.h2`
  margin-top: 20pt;
  text-shadow: 1px 1px 2px grey, 0 0 1em lightgray, 0 0 0.2em lightgray;
  letter-spacing: "2px";

  ${props =>
    props.minor &&
    css`
      font-size: 26pt;
    `};
`

export default HeadingTitle
