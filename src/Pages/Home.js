import { useEffect, useState } from "react";

// components
import Header from "../Components/common/Header";
import { categoryMovies } from "../services/apis";
import {
    NOWPLAYING_API_URL,
    POPULAR_API_URL,
    UPCOMING_API_URL,
} from "../constants/constant";
import Box from "@mui/material/Box";
import Banner from "../Components/Banner";
import UpNext from "../Components/UpNext";
import Slide from "../Components/Slider";
import Upcoming_slide from "../Components/slider-home/upcoming_slide";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        };
        getData();
    });

    const [popmovies, setpopMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(POPULAR_API_URL);
            setpopMovies(response.results);
        };
        getData();
    });

    const [upmovies, setupMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(UPCOMING_API_URL);
            setupMovies(response.results);
        };
        getData();
    });

    const [topmovies, settopMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(POPULAR_API_URL);
            settopMovies(response.results);
        };
        getData();
    });

    return (
        <div>
            <Header />
            <Box
                sx={{
                    display: "flex",
                    padding: "20px 0px 60px 60px",
                    backgroundColor: "black",
                }}
            >
                <Banner movies={movies} />
                <UpNext movies={movies} />
            </Box>
            <Box
                sx={{
                    padding: "20px 60px 60px 60px",
                    backgroundColor: "black",
                }}
            >
                <Slide movies={popmovies} />
                <Slide movies={topmovies} />
                <Slide movies={upmovies} />
                <Slide movies={popmovies} />
                <Slide movies={movies} />
            </Box>
        </div>
    );
};

export default Home;
