import {useQuery} from "react-query";
import {getProducts} from "../api";

const Home = () => {
    const {isLoading, data} = useQuery("products", getProducts);
    console.log(isLoading);

    console.log(data);
    return null;
};

export default Home;
