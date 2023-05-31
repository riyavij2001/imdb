import React from "react";
import { Box, Button, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const UpNext = ({ movies }) => {
    return (
        <Box sx={{ width: "100vh", paddingLeft: "3vh" }}>
            <Typography
                sx={{
                    color: "#F5C518",
                    fontWeight: "bold",
                    padding: " 5px 0px 20px 0px",
                }}
            >
                Up next
            </Typography>
            {movies.splice(0, 3).map((movie) => (
                <Box display={"flex"} padding={"4px"}>
                    <img
                        height={"120vh"}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt="poster"
                    />
                    <Box paddingLeft={"10px"} >
                        <PlayCircleOutlineIcon
                            sx={{
                                height: "35px",
                                width: "35px",
                                color: "white",
                            }}
                        ></PlayCircleOutlineIcon>
                        <Typography color={"white"}>
                            {movie.original_title}
                        </Typography>
                    </Box>
                </Box>
            ))}
            <Box display={"flex"} paddingTop={"15px"}>
                <Button>
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "17px",
                        }}
                    >
                        Browse trailers
                    </Typography>
                    <ChevronRightIcon
                        sx={{ color: "white" }}
                    ></ChevronRightIcon>
                </Button>
            </Box>
        </Box>
    );
};

export default UpNext;
