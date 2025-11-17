import { Outlet } from "react-router-dom";
import {Header} from '/src/Components/Header/Header.jsx';


export const MainLayout = () => {
    return (
    <>
      <Header />
      <div className="main-content">
       <Outlet/>
      </div>
    </>
 );
};