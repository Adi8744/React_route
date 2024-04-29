import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import Home from'./components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom'
import Github, {githubInfoLoader} from './components/github/Github.jsx'
// const router =createBrowserRouter([
//   {
//     path:'/',
//     element : <Layout/>,
//     children:[
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]

//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>

    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
