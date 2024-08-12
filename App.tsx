import Home from "@screens/Home";
import { StatusBar } from "react-native";


export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home 
        eventname = "Nome do Evento"
        eventdate = "Domingo, 11/08/2024"
        buttontext = "-"
      />
    </>
  );
}
