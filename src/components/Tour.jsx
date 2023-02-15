import React, { useState } from 'react'
import styled from 'styled-components'

const Tour = (props) => {
    let words = props.info.split(" ")
    let first30words = words.slice(0 , 30).join(" ")

    const [paragraph , setParagraph] = useState(first30words)
    const [readStatus , setReadStatus] = useState("Read More")
    const [display ,setDisplay] = useState("block")
    
    const handleCLick = () => {
        setDisplay("none")
    }
    const readMore = () => {
        setParagraph(props.info)
        setReadStatus("Read Less")
        
    }
    const readLess = () =>{
        setParagraph(first30words)
        setReadStatus("Read More")
    }
    // console.log(props.info.split(" ").length)
// 
return (
        <Container style={{display:`${display}`}}>
            <img src={props.img} />
            <div className='heading'>
            <h4>{props.name}</h4>
            <h4 className='price'>$ {props.price}</h4>
            </div>
            <p>{paragraph}...{readStatus ==="Read More" ? <span onClick={readMore}>{readStatus}</span> : <span onClick={readLess}>{readStatus}</span>}
            </p>
            <button onClick={handleCLick}>Not Interested</button>
        </Container>
      )


}

const Container = styled.div`
min-height:400px;
width: 600px;
background-color: white;
margin: 50px 0px;
img{
    width: 100%;
    height:65%
}
.heading{
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
}
.price{
    background-color: rgb(212 248 255);
    color: #0fbaff;
}

p{
    padding: 20px;
    font-size: 15px;
    span{
        color: #0fbaff;
    }
}

button{
    background-color: white;
    border: 2px solid red;
    color: red;
    border-radius: 5px;
    width:200px;
    height: 30px;
    margin: 10px 180px;
}

`

export default Tour