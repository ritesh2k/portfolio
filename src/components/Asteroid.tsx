import { useEffect, useState } from 'react';
const apiKey = process.env.REACT_APP_NASA_API_KEY;

export const Asteroid = () => {
    const [asteroidInfo, setAsteroidInfo] = useState({} as any);
    const handleAsteroid = async () => {
        try {
            const data = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey);
            const res = await data.json();
            setAsteroidInfo(res);
        } catch (error) {
            console.log(`error`, error);
        }
    };

    useEffect(() => {
        handleAsteroid();
    }, []);
    return (
        <div className='asteroid-container' id='asteroid-info'>
            {asteroidInfo.url ? (
                <figure>
                    <img src={asteroidInfo?.url} alt='asteroid of the day' />
                    <figcaption>{asteroidInfo?.explanation}</figcaption>
                </figure>
            ) : null}
        </div>
    );
};
