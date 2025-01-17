import { BrowserRouter, Routes, Route } from "react-router-dom";
import SampleMainPage from "./pages/samples/SampleMainPage";
import SampleDialogPage from "./pages/samples/SampleDialogPage";
import SampleComponentsPage from "./pages/samples/SampleComponentsPage";
import { PopupProvider } from "./utils/PopupContext";

function App() {
  return (
    <BrowserRouter>
      <PopupProvider>
        <Routes>
          <Route path="*" element={<SampleMainPage />} />
          <Route
            path="/samples/SampleMain"
            element={<SampleMainPage />}
          ></Route>
          <Route
            path="/samples/SampleDialog"
            element={<SampleDialogPage />}
          ></Route>
          <Route
            path="/samples/SampleComponents"
            element={<SampleComponentsPage />}
          ></Route>
        </Routes>
      </PopupProvider>
    </BrowserRouter>
  );
}
export default App;
