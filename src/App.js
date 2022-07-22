import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Route } from "react-router-dom";
import Container from "./components/container";

function App() {
  return (
    <Route>
      <div>
        <Header></Header>
        <Container></Container>
      </div>
    </Route>
  );
}

export default App;
