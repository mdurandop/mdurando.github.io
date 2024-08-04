import React from "react";
import moon from '../assets/noche.svg';
import flowers from '../assets/flores.svg';
import hearts from '../assets/dia-de-san-valentin.svg'

const Welcome = () => {
    return (
        <div className="mx-3">
            <div className="flex gap-3 items-start">
                <img src="/star.svg" alt="" className="w-5" />
                <h1 className="text-xl">Bienvenida</h1>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm">
                    Cuando cae la noche, mis sentimientos por ti se desatan por
                    completo. Bajo la luz de la luna, compartimos ese beso que
                    hizo que mi corazón se sintiera vivo. Desde entonces, espero
                    con ansias tus llamadas y mensajes, deseando saber cada
                    detalle de tu día.
                </p>
                <p className="text-sm mb-4">
                    Por eso decidí llamar a esta página "Moonlight Garden",
                    porque desde que empezamos a hablar, mis noches son igual de
                    lindas que un jardín iluminado por la luna.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <img src="/star.svg" alt="" className="w-5" />
                <h1 className="text-xl">¿Por qué Moonlight Garden?</h1>
            </div>
            <div>
                <p className="text-sm">
                    Cuando estoy contigo, me brindas los mismos sentimientos que
                    me da un jardín a la luz de la luna
                </p>
                <div className="w-full gap-4 flex flex-wrap justify-center items-center my-4">
                   <div className="bg-card card-w flex flex-col justify-center items-center gap-2 p-4 rounded-xl">
                        <img src={moon} alt="" className="w-7/12"/>
                        <p className="text-sm text-text">Tranquilidad</p>
                   </div> 
                   <div className="bg-card card-w flex flex-col justify-center items-center gap-2 p-4 rounded-xl">
                        <img src={flowers} alt="" className="w-7/12"/>
                        <p className="text-sm text-text">Fascinación</p>
                   </div> 
                   <div className="bg-card card-w flex flex-col justify-center items-center gap-2 p-4 rounded-xl">
                        <img src={hearts} alt="" className="w-7/12"/>
                        <p className="text-sm text-text">Emoción</p>
                   </div> 
                   

                </div>
            </div>
        </div>
    );
};

export default Welcome;
