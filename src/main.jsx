
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'

import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routers from "./routers/Routers.jsx";
import ErrorPage from "./Errorpage/ErrorPage.jsx";
import Home from "./Home/Home.jsx";
import AddResearch from "./AddResearch/AddResearch.jsx";
import Blog from "./blog/Blog.jsx";
import BlogWriting from "./BlogWriting/BlogWriting.jsx";
import Contact from "./Contact/Contact.jsx";
import Achievement from "./Achievement/Achievement.jsx";
import Developers from "./Developers/Developers.jsx";
import Event from "./Event/Event.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import ResearchPapers from "./ResearchPapers/ResearchPapers.jsx";
import Toolkit from "./Toolkit/Toolkit.jsx";
import Volunteers from "./Volunteers/Volunteers.jsx";
import Webmaster from "./Webmaster/Webmaster.jsx";
import JoinIEEE from "./JoinIEEE/JoinIEEE.jsx";
import Megazine from "./Megazine/Megazine.jsx";
import News from "./News/News.jsx";
import Panel from "./Panel/Panel.jsx";
import Portal from "./Portal/Portal.jsx";
import ProgramCoordinator from "./ProgramCoordinator/ProgramCoordinator.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import SignUp from "./SignUp/SignUp.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routers></Routers>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/addResearch',
        element: <AddResearch></AddResearch>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/blogWriting',
        element: <BlogWriting></BlogWriting>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/achievement',
        element: <Achievement></Achievement>
      },
      {
        path: '/developers',
        element: <Developers></Developers>
      },
      {
        path: '/event',
        element: <Event></Event>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      
      {
        path: '/researchPapers',
        element: <ResearchPapers></ResearchPapers>
      },
      {
        path: '/toolkit',
        element: <Toolkit></Toolkit>
      },
      {
        path: '/volunteers',
        element: <Volunteers></Volunteers>
      },
      {
        path: '/webmaster',
        element: <Webmaster></Webmaster>
      },
      {
        path: '/joinIEEE',
        element: <JoinIEEE></JoinIEEE>
      },
      {
        path: '/megazine',
        element: <Megazine></Megazine>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: '/panel',
        element: <Panel></Panel>
      },
      {
        path: '/programCoordinator',
        element: <ProgramCoordinator></ProgramCoordinator>
      },
      










    ]


  },
  {
    path: '/portal',
    element: <Portal></Portal>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);