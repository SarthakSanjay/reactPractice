import React from 'react'
import styled from 'styled-components'

const List = (props) => {
  return (
    <Container> 
      <img src={props.img} />
      <div>
      <h3>{props.name}</h3>
      <p>{props.age} years</p>
      </div>
    </Container>
  )
}
const Container = styled.div`
height: 60px;
width: 400px;
display: flex;

img{
  width: 50px;
  height: 50px;
  border-radius: 50%;

}
div{
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
}
`

export default List