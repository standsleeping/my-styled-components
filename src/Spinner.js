import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Loading = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12pt;
  padding 5pt;
  margin: 2pt auto;
`
const Spinner = ({ text }) => {
  return (
    <Loading>
      <div>
        <FontAwesome name='spinner' spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
      </div>
      <div style={{ marginLeft: '5pt' }}> {text}</div>
    </Loading>
  )
}

export default Spinner
