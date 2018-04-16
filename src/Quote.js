import styled, { css } from "styled-components"

export default styled.div`
  ${props =>
    props.text &&
    css`
      display: inline-block;
      font-size: 14pt;
      font-weight: normal;
      font-family: monospace;
      text-align: center;
      display: inline;
      font-size: 20pt;
      line-height: 1.4em;
    `};

  ${props =>
    props.author &&
    css`
      line-height: 1;
      margin: 9pt;
      font-size: 12pt;
      font-weight: normal;
      font-family: monospace;
      text-align: left;
    `};
`
