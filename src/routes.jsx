import About from "./components/About";
import Home from "./components/Home";
import Errorpage from "./components/pages/Errorpage";
import Projects from "./components/Projects";
import Contacts  from "./components/Contacts";
import App from "./App"


const routes = [

  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Errorpage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Errorpage />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <Errorpage />,
  },
];

export default routes;
