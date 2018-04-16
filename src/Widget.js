import styled, { css } from 'styled-components'

export default styled.div`
  margin: 10pt auto;
  padding: 10pt;
  border-radius: 5px;
  border: 2px solid silver;
  width: 94%;

  ${props => props.width && css`
    width: ${props.width};
  `}

  ${props => props.primary && css`
    background: lightgrey;
  `}
`
