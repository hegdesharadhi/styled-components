import React from 'react'
import styled from 'styled-components'

const RandomTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  )
}

const Wrapper = styled(RandomTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: red;
    margin: 0 auto;
  }
`
export default Wrapper
