import React from "react";
import SpotifyEmbed from "./SpotifyEmbed";
import star from '../assets/star.svg';

const Songs = () => {
    return (
        <div className="mx-3">
            <div className="flex gap-3 items-start">
                <img src={star} alt="" className="w-5" />
                <h1 className="text-xl">Canciones</h1>
            </div>
            <div>
                <p className="mb-4">
                    Estas son las canciones que comienzan a reproducirse en mi
                    cabeza cada vez que te veo.
                </p>
                <div className="flex flex-col gap-4">
                    <SpotifyEmbed trackUrl="https://open.spotify.com/embed/track/14k4ALBLN2FjtELYDcQUoi?utm_source=generator"/>
                    <SpotifyEmbed trackUrl="https://open.spotify.com/embed/track/6gcuJpHu0Ey30D5WR76y98?utm_source=generator"/>
                    <SpotifyEmbed trackUrl="https://open.spotify.com/embed/track/7zFXmv6vqI4qOt4yGf3jYZ?utm_source=generator"/>
                    <SpotifyEmbed trackUrl="https://open.spotify.com/embed/track/285Bh5EkbxGGE76ge8JDbH?utm_source=generator"/>
                </div>
            </div>
        </div>
    );
};

export default Songs;
