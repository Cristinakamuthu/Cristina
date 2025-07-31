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
        path:"/",
        Element: <About />  ,
        errorElement:<Errorpage/>,

    },
    { 
        path:"/",
        Element:<Projects />,
        errorElement:<Errorpage/>,

    }, 
    { 
        path:"/",
        Element:<Contacts />,
        errorElement:<Errorpage/>,

    }, 
    

    
]
export default routes;