import React from "react";
import star from '../assets/star.svg';
import OneDirection from '../assets/gallery/1D.png'
import CocaCola from '../assets/gallery/coca-cola.png'
import Sunflower from '../assets/gallery/girasoles.png'
import Iker from '../assets/gallery/iker.png'
import Louis from '../assets/gallery/louis.png'
import Minion from '../assets/gallery/minion.png'
import Taylor from '../assets/gallery/taylor.png'

const Gallery = () => {
    return (
        <div className="mx-3">
            <div className="flex gap-3 items-start">
                <img src={star} alt="" className="w-5" />
                <h1 className="text-xl">Galería</h1>
            </div>
            <div className="flex flex-col gap-2">
                <p>
                    Aquí tienes un bento (🍱) de tus cosas y personas favoritas
                    ¡Toca cada una!
                </p>
                <div className="flex flex-col justify-center items-center w-full  gap-2 h-96 bg-accent">
                    <p className="font-medium">🚧 En mantenimiento! ⚠️</p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
