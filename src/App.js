import './assets/styles/main.scss';
import AppRoutes from "./routes/Routes";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <AppRoutes />
    </div>
  );
}

export default App;
