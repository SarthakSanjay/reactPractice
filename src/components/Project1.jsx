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
      {console.log(data1.length)}
      {data1.map((e) => {
        return(
          <List img={e.image}
          name={e.name}
          age={e.age}
          key={e.id}  />
          
        )
      })}
      <List data={data1} />
      {/* {console.log(data1)} */}

      <button onClick={handleClick}>Clear All</button>
   </Container>
  )
}

const Container = styled.div`
background-color: white;
color: black;
width: 450px;
margin-top: 200px;
padding: 3rem;
button{
  
  background-color: pink;
  border: none;
  outline: none;
  width: 400px;
  margin: 0 25px;
}

`



export default Project1 