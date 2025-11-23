import { Outlet } from 'react-router-dom';
import NewToolbar from './Toolbar/NewToolbar';

export default function Layout(){
  localStorage.setItem('visited', 1); // Note: This makes the initial fade-in happen only once.
  return(
    <div id="Layout" className="min-h-screen flex flex-col">
      <NewToolbar/>
      <div className="flex flex-col flex-grow pt-14" style={{ backgroundImage: "url(/img/bg1.jpg)", backgroundSize: "cover"}}>
        <div className="flex flex-grow justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}