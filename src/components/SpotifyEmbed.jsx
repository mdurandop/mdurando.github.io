import React from "react";

const SpotifyEmbed = ({ trackUrl }) => {
    return (
        <div
            style={{
                left: 0,
                width: "100%",
                height: "152px",
                position: "relative",
            }}
        >
            <iframe
                src={trackUrl}
                style={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    border: 0,
                }}
                allowFullScreen
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
        </div>
    );
};

export default SpotifyEmbed;
