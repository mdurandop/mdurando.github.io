import Card from "./components/Card";
import Welcome from "./components/Welcome";
import Songs from "./components/Songs";
import Gallery from "./components/Gallery";
import Envelope from "./components/Envelope";
import Message from "./components/Message";
import Carrousel from "./components/Carrousel";

function App() {
    return (
        <div className="flex justify-center items-center">
            <div className="mobile flex flex-col gap-4">
                <h1 className="text-3xl mt-4">Moonlight Garden</h1>
                <Message
                    title="Mensaje 13/09/2024"
                    msg="
El 5 siempre ha sido mi número favorito. Nací un 5 de mayo, a las 5 de la tarde, un viernes, quinto día de la semana. Pero hoy tengo una razón más para que siga siendo el mejor número. En solo 5 meses has cambiado tantas cosas en mí, sacaste la mejor versión de mí y necesitaría más de 5 años para agradecer todo lo que has hecho. "
                />

                <Carrousel />

                <Message
                    title="Mensaje 10/08/2024"
                    msg="
                    Hola nelsi, hace tiempo que no me sentía tan alejada de ti como ahora, y me duele mucho saber que no quieres hablarme. Han pasado menos de dos días desde que estamos distanciadas, pero mi alma arde por la necesidad de estar contigo. Te extraño con cada fibra de mi ser y lamento profundamente no haber pensado antes de decir lo que te molestó. Perdóname, por favor. Hay tantas cosas que quiero contarte, tantas cosas que me han recordado a ti. Si así es como se sentirá cuando me dejes, preferiría morirme.         
                    "
                    msg2="Lamento no haber contestado cuando ya ibas a salir de tu casa. Ojalá hubiera visto tu mensaje antes. Créeme que llorar en un lolaya fue uno de mis momentos más humildes. Cuando llegué a mi casa y vi que había llegado tu rubor, me puse a llorar de nuevo. Me duele tanto no poder contarte las cosas que hago, no poder decirte algún chisme que me contaron o algo tan simple como mandarte los tiktoks de novias que me aparecen en el fyp."
                    msg3="De verdad espero que puedas perdonarme y que vuelvas a tener ganas de hablarme, no tuve ganas de hacer nada hoy, pero de escribirte esto sí. Te amo nelsi."
                />
                <Card />
                <Welcome />
                <Songs />
                <Gallery />
                <Envelope />
            </div>
        </div>
    );
}

export default App;
