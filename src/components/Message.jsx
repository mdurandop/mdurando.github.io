import React from "react";
import warningSing from "../assets/anuncio.svg";

const Message = ({ title, msg, msg2, msg3, msg4, msg5 }) => {
    return (
        <div className="mx-3">
            <div className="flex items-start gap-2">
                <img src={warningSing} alt="" className="w-5" />
                <h1 className="text-xl">{title}</h1>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm">{msg}</p>
                <p className="text-sm">{msg2}</p>
                <p className="text-sm">{msg3}</p>
                <p className="text-sm">{msg4}</p>
                <p className="text-sm">{msg5}</p>
            </div>
        </div>
    );
};

export default Message;
