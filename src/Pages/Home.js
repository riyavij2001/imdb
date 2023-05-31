import { useEffect, useState } from "react";

// components
import Header from "../Components/common/Header";
import { categoryMovies } from "../services/apis";
import { NOWPLAYING_API_URL } from "../constants/constant";
import Box from "@mui/material/Box";
import Banner from "../Components/Banner";
import UpNext from "../Components/UpNext";
import Slide from "../Components/Slider";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        };
        getData();
    });

    return (
        <div>
            <Header />
            <Box sx={{display:"flex", padding:"20px 0px 60px 60px", backgroundColor:"black"}}>
                <Banner movies={movies} />
                <UpNext movies={movies} />
            </Box>
            <Box sx={{padding:"20px 60px 60px 60px",backgroundColor:"black"}}>
                <Slide movies={movies}  />
                <Slide movies={movies}  />
                <Slide movies={movies}  />
                <Slide movies={movies}  />
                <Slide movies={movies}  />
            </Box>
        </div>
    );
};

export default Home;
