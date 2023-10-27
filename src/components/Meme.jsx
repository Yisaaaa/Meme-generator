import React, { useState, useEffect } from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme((prev) => {
            return {
                ...prev,
                [name]: value,
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
                <button type="submit" className="meme-submit">
                    Get a new meme image 🖼️
                </button>
            </form>
            <div className="meme">
                <img src={meme.url} className="meme" />
            </div>
        </section>
    );
}

export default Meme;
