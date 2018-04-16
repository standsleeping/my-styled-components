import styled, { css } from "styled-components"

export default styled.div`
  display: flex;
  margin: auto;
  padding: 5pt;
  border-radius: 2pt;
  font-size: 14pt;
  text-align: center;
  background: lightgreen;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  transition: all .15s ease;

  width: 80%;
  max-width: 220pt;

  :hover {
    transform: translateY(-1pt);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }

  ${props =>
    props.minor &&
    css`
      background: lightblue;
      box-shadow: none;
      transform: none;

      :hover {
        transform: none;
        box-shadow: none;
      }
    `}

  ${props =>
    props.neutral &&
    css`
      background: lightgray;
    `}

  ${props =>
    props.negative &&
    css`
      background: pink;
    `}
`
