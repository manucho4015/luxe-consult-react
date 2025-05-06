
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// pages
import Root from './root.tsx';
import Home from './pages/home/Index.tsx'
import ContactUs from './pages/contact-us/Index.tsx';
import Blogs from './pages/blogs/Index.tsx';
import Blog from './pages/blog/Index.tsx';
import Team from './pages/team/Index.tsx';
import PropertySearch from './pages/property-search/Index.tsx';
import SingleProperty from './pages/single-property/Index.tsx';
import AboutUs from './pages/about-us/Index.tsx';
// import Services from './pages/services/Index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:blogId",
        element: <Blog />,
      },
      {
        path: "/meet-the-team",
        element: <Team />,
      },
      {
        path: "/property-search",
        element: <PropertySearch />,
      },
      {
        path: "/property/:propertyId",
        element: <SingleProperty />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      // {
      //   path: "/services",
      //   element: <Services />,
      // },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
