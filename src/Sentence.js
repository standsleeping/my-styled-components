import styled, { css } from "styled-components"

export default styled.div`
  font-size: 16pt;
  border-radius: 2pt;
  width: 90%;
  margin: 18pt;

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}

  ${props =>
    props.wide &&
    css`
      width: 60%;
    `}

  ${props =>
    props.size &&
    css`
      font-size: ${props.size};
    `}

  ${props =>
    props.nomargin &&
    css`
      margin: 4pt 0 0 0;
    `}

  ${props =>
    props.quoteContainer &&
    css`
      font-style: italic;
      font-weight: bold;
      font-size: 22pt;
      line-height: 0.9;
      font-family: Baskerville, "Times New Roman", serif;
      box-shadow: 0 2px 4px rgba(50, 50, 93, 0.3), 0 3px 6px rgba(0, 0, 0, 0.08);
      background-color: lemonchiffon;
      padding: 10pt;
    `}

`
