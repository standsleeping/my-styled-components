import styled, { css } from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props => props.primary && css`
    background: grey;
  `}
`
