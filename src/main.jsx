import React, { } from 'react'
import ReactDOM from 'react-dom/client'
/* importando as dependencias do browserRouter e Router Provider*/
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
 /* importando os elementos */
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Error from './Error.jsx'
import Casual from './pages/Casual.jsx'
import Masculino from './pages/Masculino.jsx'
import Feminino from './pages/Feminino.jsx'
import Outlet from './pages/Outlet.jsx'


 /* criando a função createBrowser */
const router =createBrowserRouter([
{
   /* chamando o elemento principal(pai) */
  path: '/', element: <App />,
   /*  chamando o elemento de erro*/
  errorElement: <Error />,

   /* chamando elementos filhos */
children:[
  {path: '/', element:<Home />},
  {path: '/Casual', element:<Casual />},
  {path: '/Masculino', element:<Masculino />},
  {path: '/Feminino', element:<Feminino />},
  {path: '/Outlet', element:<Outlet />},
]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/*chamando a função que será renderizada */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

