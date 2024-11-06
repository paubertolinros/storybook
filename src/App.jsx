import "./App.css";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <>
      <Checkbox
        messageOn={"¡Me has seleccionado!"}
        messageOff={"¿Me seleccionas?"}
        backgroundColor={"#1f1f1f"}
      />
    </>
  );
}

export default App;
