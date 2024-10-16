import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InputForm from './components/InputForm.jsx'
import Showcase from './components/Showcase.jsx'
import Home from './components/Home/Home.jsx'
import SignIn from './components/Form/SignIn.jsx'
import SignUp from './components/Form/SignUp.jsx'

// router
const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/registration",
        element: <SignUp />
      },
      {
        path: "/new",
        element: <InputForm />
      },
      {
        path: "/refurb",
        element: <Showcase />
      }, 
      {
        path: "/non-refurb",
        element: <Showcase />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={mainRouter} />
  </StrictMode>,
)
