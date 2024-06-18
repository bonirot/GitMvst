import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Approutes";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
