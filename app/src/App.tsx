import Header from "./components/header";
import { AppRouter } from "./routes";

function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
