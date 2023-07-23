import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { DashBoard } from './page/components/DashBoard'
import { Assesment } from './page/components/Assesment'
import { Library } from './page/components/Library'
import { Status } from './page/components/Status'
import './App.css'
import { Home } from './page/Home'
import { AssessmentContextProvider } from './store/Context'


function App() {

  const router=createBrowserRouter([
    {path:"/",element:<Home/>,children:[
      {path:"/",element:<DashBoard/>},
      {path:"/assessment",element:<Assesment/>},
      {path:"/library",element:<Library/>},
      {path:"/status",element:<Status/>},
    ]},
  ])
  return (
    <>
      <AssessmentContextProvider>
        <RouterProvider router={router}/>
        
      </AssessmentContextProvider>
    </>
  )
}

export default App
