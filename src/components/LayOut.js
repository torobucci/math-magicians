import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function LayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>

  );
}
export default LayOut;
