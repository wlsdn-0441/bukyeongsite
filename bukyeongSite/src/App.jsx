import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/help/Faq";
import Contact from "./Pages/help/Contant";
import NotFound from "./Pages/NotFound";



// layouts
import HelpLayout from "./components/layout/HelpLayout";
import RootLayout from "./components/layout/RootLayout";
 
//라우터 기능 설정
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />} />
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}


