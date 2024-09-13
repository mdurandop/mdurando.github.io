import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mayo from "../assets/carousel/EllaConmigoMayo.jpg";
import Abril from "../assets/carousel/EllaConmigoAbril.jpg";
import Junio from "../assets/carousel/EllaConmigoJunio.jpg";
import Julio from "../assets/carousel/EllaConmigoJulio.jpg";
import Agosto from "../assets/carousel/EllaConmigoAgosto.jpg";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import five from "../assets/five.svg";

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [Mayo, Abril, Junio, Julio, Agosto];

    return (
        <div className="mx-3 flex flex-col gap-4">
            <div className="flex items-start">
                <h2 className="text-xl">
                5 razones por las que cambiaste mi vida
                </h2>
            </div>
            <div className="flex gap-3 items-start">
                <img src={one} alt="" className="w-6" />
                <p className="text-sm">
                    En los momentos más difíciles, siempre estás para mí. No
                    importa cuán complicadas se pongan las cosas o los errores
                    que cometemos, nunca me fallas.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <img src={two} alt="" className="w-6" />
                <p className="text-sm">
                    Desde que llegaste a mi vida, ningún día es igual. Cada vez
                    que te veo, siento emociones nuevas. Hago cosas que nunca
                    imaginé y descubro partes de mí que no conocía gracias a ti.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <img src={three} alt="" className="w-6" />
                <p className="text-sm">
                    Me he vuelto más agradecida. Cuando te miro, solo pienso:
                    '¿Cómo es posible que una mujer tan preciosa se haya fijado
                    en mí?' Debe ser un milagro.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <img src={four} alt="" className="w-6" />
                <p className="text-sm">
                    Antes, pensaba que vivir era aburrido, sin sentido. No
                    encontraba la motivación para seguir. Ahora, contigo, solo
                    quiero darte lo mejor de mí. Te mereces alguien que lo dé
                    todo por ti, y haré lo imposible para que lo tengas.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <img src={five} alt="" className="w-6" />
                <p className="text-sm">
                    He aprendido lo fuerte que mi corazón puede amar. Este
                    sentimiento me llena de energía y hace que todo sea más
                    brillante. ¿Me crees si te digo que hasta la música suena
                    mejor cuando estoy contigo? Solo me falta aprender a bailar
                    para conquistarte por completo.
                </p>
            </div>
            <div className="flex items-start">
                <h2 className="text-xl">
                5 fotos, una de cada mes juntas
                </h2>
            </div>

            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`slide ${index + 1}`}
                            style={{ width: "100%" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
