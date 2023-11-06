import Navbar from "./components/ui/Navbar";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <AppRouter>
      <Navbar />
    </AppRouter>
  );
}

export default App;
