import Header from "../Components/common/Header";
import { useState, useEffect } from "react";
import { Box, styled, Divider } from "@mui/system";
import Typography, { Container } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { categoryMovies } from "../services/apis";
import { useLocation } from "react-router-dom";
import { POPULAR_API_URL } from "../constants/constant";
import { TOPRATED_API_URL } from "../constants/constant";
import { UPCOMING_API_URL, moviesType } from "../constants/constant";
import MovieList from "../Components/MovieList";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const CategoryMovies = () => {
    const [movies, setMovies] = useState([]);

    const { search } = useLocation();

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(API_URL);
            setMovies(response.results);
        };

        let API_URL;

        if (search.includes("popular")) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes("upcoming")) {
            API_URL = UPCOMING_API_URL;
        } else if (search.includes("toprated")) {
            API_URL = TOPRATED_API_URL;
        }
        getData();
    }, [search]);
    return (
        <>
            <div style={{textAlign:"center", backgroundColor:"black"}}>
                <Header />

                <Box
                    sx={{
                        width: "130vh",
                        height: "76.5vh",
                        backgroundColor: "black",
                        marginLeft: "37vh",
                    }}
                >
                    <Carousel
                        responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        slidesToSlide={1}
                    >
                        
                        {movies.map((movie) => (
                            <img
                                height={"470vh"}
                                width={"110%"}
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt="banner"
                            />
                        ))}
                    </Carousel>
                </Box>
                <Container
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "30px",
                    }}
                >
                    <div style={{color:"#F6C800"}} >
                        <h3>IMDB Charts</h3>
                        <h3>IMDB {moviesType[search.split(`=`)[1]]} Movies</h3>
                        <h3>
                            IMDB Top {movies.length} as rated by regular IMDB
                            Voters
                        </h3>
                    </div>
                    {/* <Divider< /> */}
                    <Box sx={{marginLeft:"75px" }}>
                        <MovieList movies={movies} />
                    </Box>
                </Container>
            </div>
        </>
    );
};

export default CategoryMovies;
