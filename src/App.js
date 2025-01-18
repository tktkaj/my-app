import { BrowserRouter, Routes, Route } from "react-router-dom";
import SampleMainPage from "./pages/samples/SampleMainPage";
import SampleDialogPage from "./pages/samples/SampleDialogPage";
import SampleComponentsPage from "./pages/samples/SampleComponentsPage";
import { PopupProvider } from "./utils/PopupContext";
import MainPage from "./pages/marketkurly/MainPage";
import LoginPage from "./pages/marketkurly/LoginPage";
import NewProduct from "./pages/marketkurly/NewProduct";
import ProductDetail from "./pages/marketkurly/ProductDetail";

function App() {
  const routers = [
    {
      path: "*",
      element: <SampleMainPage />,
    },
    {
      path: "/samples/SampleMain",
      element: <SampleMainPage />,
    },
    {
      path: "/samples/SampleDialog",
      element: <SampleDialogPage />,
    },
    {
      path: "/samples/SampleComponents",
      element: <SampleComponentsPage />,
    },
    {
      path: "/FG/FGMK/FGMKHM/FGMKHM001",
      element: <MainPage />,
    },
    {
      path: "/FG/FGMK/FGMKLO/FGMKLO002",
      element: <LoginPage />,
    },
    {
      path: "/FG/FGMK/FGMKPR/FGMKPR003",
      element: <NewProduct />,
    },

    {
      path: "/FG/FGMK/FGMKDT/FGMKDT004",
      element: <ProductDetail />,
    },
  ];

  return (
    <BrowserRouter>
      <PopupProvider>
        <Routes>
          {routers.map((route, index) => (
            <Route
              key={route + index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </PopupProvider>
    </BrowserRouter>
  );
}

export default App;
