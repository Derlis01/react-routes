import React from 'react'

const Hello = ({ match }) => {
  return (
    <div style={{color: match.params.color, backgroundColor: match.params.bgColor,}}>
        <h2>{match.params.word}</h2>
    </div>
  )
}

export default Hello