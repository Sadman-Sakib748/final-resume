import { Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import NavBer from "../Pages/Shared/NavBer/NavBer";


const Main = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;