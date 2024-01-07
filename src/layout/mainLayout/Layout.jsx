import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/footer/Footer";
import Header from "../../components/header/Header";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;