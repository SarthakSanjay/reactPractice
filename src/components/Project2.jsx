import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Tour from './Tour'

const Project2 = () => {
    const [tourData, setTourData] = useState([])

    const getData = async () => {
        let url = "https://course-api.com/react-tours-project"
        let data = await fetch(url)
        let parsedData = await data.json()
        // console.log(parsedData)
        setTourData(parsedData)

    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <Container>
            {tourData.map((obj) => {
                let count = 0;
                if (count != tourData.length) {

                    return (

                        <Tour key={obj.id}
                            name={obj.name}
                            info={obj.info}
                            img={obj.image}
                            price={obj.price}
                            tourLength={tourData.length}
                        />
                    )
                }
                if (count === tourData.length) {
                    return <h1>No data</h1>
                }
            })}
        </Container>
    )
}
const Container = styled.div``
export default Project2