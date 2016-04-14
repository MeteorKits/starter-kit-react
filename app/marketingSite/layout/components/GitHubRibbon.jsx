import React from 'react'

export default (props) => {
  return (
    <div className={`ribbon right ${props.style || 'white'}`}>
      <a href="https://github.com/MeteorKits/starter-kit-react">Fork me on GitHub</a>
    </div>
  )
}