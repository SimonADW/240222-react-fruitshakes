import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//COMPONENTS
import HomePage from "./pages/HomePage";
import ShakesPage from "./pages/ShakesPage";
import NutritionPage from "./pages/NutritionPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./layout/Layout";
import { FruitsProvider } from "./context/FruitsProvider";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shakes" element={<ShakesPage />} />
        <Route path="/nutrition-facts" element={<NutritionPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return (
    <>
      <FruitsProvider>
        <RouterProvider router={router} />
      </FruitsProvider>
    </>
  );
}

export default App;
