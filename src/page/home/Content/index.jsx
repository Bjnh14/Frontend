import React from 'react'
import ForMen from './ForMen'
import ForWoMen from './ForWomen'
import NewCollection from './NewCollection'
function Content() {
  const [stateTitle, setStateTitle] = React.useState('NEW COLLECTION')

  return (
    <>
      <NewCollection title={stateTitle} />
      <ForMen />
      <ForWoMen />
    </>
  )
}

export default Content
