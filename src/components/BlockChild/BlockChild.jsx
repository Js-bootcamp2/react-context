import React from 'react'

function BlockChild({mode, text}) {
  const style = {
    color: mode ? 'black' : 'white',
  }

  console.log('render', text)
  return (
    <div style={style}>{text}</div>
  )
}

export default BlockChild