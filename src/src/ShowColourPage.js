import React from 'react'

const ShowColoredPage = (props) => <div style={{
  backgroundColor: `${props.match.params.color}`,
  width: '100%',
  height: '100%',
  position: 'absolute'
}} />

export default ShowColoredPage
