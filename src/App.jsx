import Message from "./components/Message";
import Welcome from "./components/Welcome";
import Songs from "./components/Songs";
import Gallery from "./components/Gallery";
import Envelope from "./components/Envelope";

function App() {
    return (
        <div className="flex justify-center items-center">
            <div className="mobile flex flex-col gap-4">
                <h1 className="text-3xl mt-4">Moonlight Garden</h1>
                <Message/>
                <Welcome/>
                <Songs/>
                <Gallery/>
                <Envelope/>
            </div>
        </div>
    );
}

export default App;
