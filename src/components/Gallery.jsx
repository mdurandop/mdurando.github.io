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
                <div className="flex flex-col gap-2">
                    <div className="flex h-full gap-2">
                        <div>
                            <img src={Louis} alt="" className="h-full rounded-md"/>
                        </div>
                        <div>
                            <img src={CocaCola} alt="" className="h-full rounded-md"/>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-1/5">
                            <img src={Sunflower} alt="" className="rounded-md"/>
                        </div>
                        <div style={{width: '55%'}}>
                            <img src={OneDirection} alt="" className="rounded-md"/>
                        </div>
                        <div className="w-1/5">
                            <img src={Minion} alt="" className="rounded-md"/>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <img src={Iker} alt="" className="rounded-md" />
                        </div>
                        <div>
                            <img src={Taylor} alt="" className="rounded-md"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
