import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './componets/Pages/aboutMe.jsx';
import ContactMe from './componets/Pages/contact.jsx';
import Resume from './componets/Pages/Resume.jsx';
import Project from './componets/Project/project.jsx'
import {ChakraProvider} from '@chakra-ui/react'

const router =createBrowserRouter([//changes the body depending what they click on the tabs
  {
    path: '/',
    element: <App />,
    children:[
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Contact',
        element: <ContactMe />
      },
      {
        path: '/Resume',
        element: <Resume />
      },
      {
        path: '/Project',
        element: <Project />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <ChakraProvider>
 <RouterProvider router={router} />
</ChakraProvider>
 )
