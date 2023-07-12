import React from 'react'
import NavBarStatic from './NavBarStatic'
import QnABible from './QnaBible'

const Bible = () => {
  return (
    <div>
      <NavBarStatic title="BibleGPT."/>
      <QnABible/>
    </div>
  )
}

export default Bible
