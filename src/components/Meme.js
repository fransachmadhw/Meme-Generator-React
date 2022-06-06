// import memesData from '../memesData'
import { useState, useEffect } from 'react'

export default function Meme()
{
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "https:/i.imgflip.com/4t0m5.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    // useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMemes(data)
    // }, [])

    function getMemeImage()
    {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event)
    {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <div className="meme">
            <div className="container">
                <div className="meme--form">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                        />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                        />
                    <button
                        type="submit"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className='meme--image'>
                    <img src={meme.randomImage} alt='meme'/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}