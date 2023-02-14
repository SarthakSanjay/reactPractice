import React, { useState } from 'react'
import styled from 'styled-components'
import data1 from './data1'
import List from './List'
const Project1 = () => {
  const [data_length , setDataLength] =useState(data1.length)

  const handleClick = () => {
    setDataLength(0)
  }
  return (
   <Container>
      <h1>{data_length} birthdays today</h1>
      {data_length?  
        data1.map((e) => {
        return(
          <List img={e.image}
          name={e.name}
          age={e.age}
          key={e.id}  />
          
        )
      }):
      ""
      }
   

      <button onClick={handleClick}>Clear All</button>
   </Container>
  )
}

const Container = styled.div`
background-color: white;
color: black;
width: 250px;
margin: 100px 0px;
padding: 1rem;
button{
  
  background-color: pink;
  border: none;
  outline: none;
  width: 200px;
  height: 50px;
  margin: 0 25px;
}

`



export default Project1 