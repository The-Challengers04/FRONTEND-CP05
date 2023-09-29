import {}  from 'react';
import Nav from './componentes/NavBar/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
        <Nav />
        <Outlet/>
    </>
  );
}

export default App;
