import React from 'react'
import styled, { css } from 'styled-components'
const fruits = ['apple', 'banana', 'orange', 'peach']

const Item = styled.li`
  list-style-type: none;
  ${({ odd }) => {
    return odd
      ? css`
          color: white;
          background: red;
          padding: 1.5rem;
          font-size: 1.5rem;
        `
      : css`
          color: #222;
          padding: 1rem;
        `
  }}
`

const List = () => {
  return (
    <ul>
      {fruits.map((fruit, index) => {
        return (
          <Item key={index} odd={(index + 1) % 2 !== 0}>
            {fruit}
          </Item>
        )
      })}
    </ul>
  )
}

export default List
