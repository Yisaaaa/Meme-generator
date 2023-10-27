import React, { useState, useEffect } from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg",
    });

    const [memesData, setMemesData] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setMemesData(data.data.memes));
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    function handleClick(event) {
        event.preventDefault();
        console.log("Meme changed");
        const randomNum = Math.floor(Math.random() * memesData.length);
        const randomMeme = memesData[randomNum];

        setMeme((prev) => {
            return {
                ...prev,
                url: randomMeme.url,
            };
        });
    }

    return (
        <section className="section--main container">
            <form className="meme-form">
                <div className="input-box">
                    <input
                        type="text"
                        className="top-text meme-input"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="bottom-text meme-input"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleClick} className="meme-submit">
                    Get a new meme image 🖼️
                </button>
            </form>
            <div className="meme">
                <img src={meme.url} className="meme-img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    );
}

export default Meme;
