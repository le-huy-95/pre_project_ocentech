import './App.css'
import routes from './routes'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App =()=> {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer theme='colored' />
    </>
  )
}

export default App
