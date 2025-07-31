import About from "./components/About";
import Home from "./components/Home";
import Errorpage from "./components/pages/Errorpage";
import Projects from "./components/Projects";
import Contacts  from "./components/Contacts";
const routes = [
    {
        path:"/",
        Element: <Home/>,
        errorElement:<Errorpage/>,

    },
    {
        path:"/about",
        Element: <About />  ,
        errorElement:<Errorpage/>,

    },
    { 
        path:"/projects",
        Element:<Projects />,
        errorElement:<Errorpage/>,

    }, 
    { 
        path:"/contacts",
        Element:<Contacts />,
        errorElement:<Errorpage/>,

    }, 
    

    
]
export default routes;