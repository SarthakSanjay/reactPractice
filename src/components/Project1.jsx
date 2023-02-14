import React from 'react'
import styled from 'styled-components'
import List from './List'
const Project1 = () => {
  return (
   <Container>
      <h1>0 birthdays today</h1>
      <List />

      <button>Clear All</button>
   </Container>
  )
}

const Container = styled.div`
background-color: white;
color: black;
width: 450px;

button{
  
  background-color: pink;
  border: none;
  outline: none;
  width: 400px;
  margin: 0 25px;
}

`



export default Project1 