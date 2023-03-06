import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
  return (
    <CardDiv>{props.children}</CardDiv>
  )
}

export default Card;
const CardDiv = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 7);
  border-radius: 13px; 
  width: 70%;
  max-width: 40rem;
  margin-top:9rem;
  padding: 2rem;
  margin: 7rem auto;    
  text-align: center;
`