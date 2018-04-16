import styled, { css } from 'styled-components'

// darkseagreen: rgba(143,188,143, 0.9);

const FeedbackBackground = styled.div`
  padding: 8pt;
  border: 1pt solid lightgrey;

  ${props => props.passing === false && css`
      border-color: rgba(204, 92, 92, 0.9);
      background-color: rgba(204, 92, 92, 0.05);
  `}

  ${props => props.passing === true && css`
      border-color: rgba(143,188,143, 0.9);
      background-color: rgba(144, 238, 144, 0.1);
  `}
`

export default FeedbackBackground
