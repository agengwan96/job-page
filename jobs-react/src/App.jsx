import {Router, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Router path='/' elements={<MainLayout/>}>
      <Router index elements={<HomePage/>}/>
      <Router path='/jobs' elements={<JobsPage/>}/>
    </Router>
  )
);
const App = () => {
  return <RouterProvider router={router}/ß>
}

export default App
