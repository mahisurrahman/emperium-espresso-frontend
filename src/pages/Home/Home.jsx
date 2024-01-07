import { useLoaderData } from "react-router-dom";
import AllProducts from "../../components/allProducts/AllProducts";
import Banner from "../../components/banner/Banner";
import Instagram from "../../components/instagram/Instagram";
import RibbonBanner from "../../components/ribbonBanner/RibbonBanner";

const Home = () => {
    const coffees = useLoaderData();

    return (
        <div className="bg-white">
            <Banner></Banner>
            <RibbonBanner></RibbonBanner>
            <AllProducts coffees={coffees}></AllProducts>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;