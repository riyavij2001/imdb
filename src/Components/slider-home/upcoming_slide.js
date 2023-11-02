import { Box, styled, typography } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageListItem, ImageListItemBar } from "@mui/material";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Upcoming_slide = ({ upmovies }) => {
    return (
        <Box>
            <h3 style={{ color: "yellow" }}>Upcoming</h3>
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
                {upmovies.map((movie) => (
                    <Box
                        sx={{
                            color: "white",
                            backgroundColor: "Black",
                            marginTop: "20px",
                        }}
                    >
                        <ImageListItem key={movie.img} sx={{ padding: "4px" }}>
                            <img
                                // height={"470vh"}
                                width={"100%"}
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt="banner"
                            />
                            <ImageListItemBar
                                title={movie.original_title}
                                // subtitle={<span>by: {movie.author}</span>}
                                position="below"
                            />
                        </ImageListItem>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default Upcoming_slide;
