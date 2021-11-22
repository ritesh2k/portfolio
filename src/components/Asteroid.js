import React, { useEffect, useState } from 'react'

export const Asteroid = () => {
    const [asteroidInfo, setAsteroidInfo] = useState({})
    const handleAsteroid = async () => {
        try {
            const data = await fetch('https://api.nasa.gov/planetary/apod?api_key=4jHBPhAg0L83McUEgQGcNbTqarWIuAteKT1lOxUg')
            const res = await data.json()
            setAsteroidInfo(res)
        } catch (error) {
            console.log(`error`, error)
        }
    }

    useEffect(() => {
        handleAsteroid()
    }, [])
    return (
        <div className='asteroid-container' id='asteroid-info'>
            {asteroidInfo.url ? (
                <>
                    <img src={asteroidInfo?.url} alt='asteroid of the day' />
                    <p>{asteroidInfo?.explanation}</p>
                </>
            ) : null}
        </div>
    )
}
