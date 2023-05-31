import { Box, styled, Typography } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageListItem, ImageListItemBar } from "@mui/material";

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

const Banner = ({ movies }) => {
    return (
        <Box sx={{ width: "130vh" }}>
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
    );
};

export default Banner;
