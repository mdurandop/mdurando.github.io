import React from "react";
import warningSing from "../assets/anuncio.svg";
import postalSing from "../assets/postal.svg";
import photo from "../assets/photo.png";

const Message = () => {
    return (
        <div className="mx-3 flex flex-col gap-2">
            <div className="flex items-start gap-2">
                <img src={warningSing} alt="" className="w-7" />
                <h1 className="text-xl">Mensaje 13/06/2024</h1>
            </div>
            <div className="message-card w-full bg-background rounded-xl px-4 py-3 flex justify-between border-2 border-solid border-primary">
                <div className="flex flex-col gap-1 w-8/12">
                    <p className="text-text text-xs">Querida Nels,</p>
                    <p className="text-primary text-xs font-semibold">
                        Felices dos meses!!!
                    </p>
                    <p className="text-text text-xs mr-4">
                        Tus sonrisas, tus abrazos, y tu compañía han hecho que
                        cada día desde que te conozco sea especial ¿Es egoista
                        querer que estes aquí conmigo? Te amo y te extraño
                        mucho.
                    </p>
                    <p className="text-text text-xs">Atentamente,</p>
                    <p className="text-text text-xs">- Mai 💙</p>
                </div>
                <div className="photo-w flex flex-col gap-4 items-end">
                    <img src={postalSing} alt="" className="w-1/2" />
                    <img src={photo} alt="" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Message;
