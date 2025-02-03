import "./App.css";
import ButtonComponent from "./components/buttonComponent";
import Foto from "./components/Foto";

function App() {
  return (
    <>
      <ButtonComponent buttonText="aggiungi" />
      <Foto
        imgLink="https://media.istockphoto.com/id/1443157897/it/foto/pallone-da-calcio-doro-o-pallone-isolato-su-sfondo-bianco-dellillustrazione-3d.webp?a=1&b=1&s=612x612&w=0&k=20&c=J91fOHUzeZMlIb8rZ-E2dAX9UrKv7R3kzXNnCqjuzbI="
        imgAlt="Pallone d'oro"
        imgWidth="200px"
      ></Foto>
    </>
  );
}

export default App;
