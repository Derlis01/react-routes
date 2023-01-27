import React from 'react'

const Number = ({ match }) => {
  return (
    <div>
        {match.params.number}
    </div>
  )
}

export default Number