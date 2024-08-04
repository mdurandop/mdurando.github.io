import React from "react";
import { useState } from "react";

const Gallery = () => {
    const [isImgVisible, showIMG] = useState('');

    return (
        <div className="mx-3">
            <div className="flex gap-3 items-start">
                <img src="/star.svg" alt="" className="w-5" />
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
                            <img src="/galery/louis.png" alt="" className="h-full rounded-md"/>
                        </div>
                        <div>
                            <img src="/galery/coca-cola.png" alt="" className="h-full rounded-md"/>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-1/5">
                            <img src="/galery/girasoles.png" alt="" className="rounded-md"/>
                        </div>
                        <div style={{width: '55%'}}>
                            <img src="/galery/1D.png" alt="" className="rounded-md"/>
                        </div>
                        <div className="w-1/5">
                            <img src="/galery/minion.png" alt="" className="rounded-md"/>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <img src="/galery/iker.png" alt="" className="rounded-md" />
                        </div>
                        <div>
                            <img src="/galery/taylor.png" alt="" className="rounded-md"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
