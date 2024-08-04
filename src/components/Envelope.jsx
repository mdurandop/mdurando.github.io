import React, { useEffect, useRef } from "react";
import "../envelope.css";
import star from '../assets/star.svg';

const Envelope = () => {
    const envelopeRef = useRef(null);
    const openBtnRef = useRef(null);
    const resetBtnRef = useRef(null);

    useEffect(() => {
        const envelope = envelopeRef.current;
        const btn_open = openBtnRef.current;
        const btn_reset = resetBtnRef.current;

        const open = () => {
            envelope.classList.add("open");
            envelope.classList.remove("close");
        };

        const close = () => {
            envelope.classList.add("close");
            envelope.classList.remove("open");
        };

        envelope.addEventListener("click", open);
        btn_open.addEventListener("click", open);
        btn_reset.addEventListener("click", close);

        return () => {
            envelope.removeEventListener("click", open);
            btn_open.removeEventListener("click", open);
            btn_reset.removeEventListener("click", close);
        };
    }, []);

    return (
        <div className="mx-3">
            <div className="flex gap-3 items-start">
                <img src={star} alt="estrella" />
                <h1 className="text-xl">Happy Valentines Day!</h1>
            </div>
            <div className="my-2">
                <p>Por ultimo, toca el sobre</p>
            </div>
            <div className="envlope-wrapper">
                <div id="envelope" ref={envelopeRef} className="close">
                    <div className="front flap"></div>
                    <div className="front pocket"></div>
                    <div className="letter">
                        <div className="words line1">
                            Me gustas mucho, bonita
                        </div>
                        <div className="words line2"></div>
                        <div className="words line3"></div>
                        <div className="words line4"></div>
                    </div>
                </div>
            </div>
            <div className="reset">
                <button id="open" ref={openBtnRef}>
                    Abrir
                </button>
                <button id="reset" ref={resetBtnRef}>
                    Cerrar
                </button>
            </div>
            <br /> <br />
        </div>
    );
};

export default Envelope;
