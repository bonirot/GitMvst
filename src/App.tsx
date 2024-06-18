import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import AppRoutes from "./routes/Approutes";

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
