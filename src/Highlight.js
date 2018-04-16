import styled, { css } from 'styled-components'

// lightgreen RGB: 144, 238, 144
// indianred RGB: 204, 92, 92

export default styled.span`
  font-weight: bold;
  border-radius: 2pt;
  background-color: lemonchiffon;
  transform: translateY(-1px);
  transition: all .10s ease;

  :hover {
    transform: translateY(-0.5pt);
    box-shadow: 0 3px 7px rgba(50,50,93,.3), 0 3px 6px rgba(0,0,0,.08);
  }

  ${props => props.positive && css`
    font-size: 22pt;
    margin: 0pt 2pt;
    background-color: rgba(144, 238, 144, 0.3);
  `}

  ${props => props.negative && css`
    background-color: lightcoral;
  `}
`
