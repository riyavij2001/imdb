import { List, ListItem, Typography, Box } from "@mui/material";

const MovieList =({movies})=>{
    return(
        <>
           {
            movies.map(movie=>(
                <Box>
                    <List sx={{display:'flex'}}>
                        <ListItem>
                            <img height={"120vh"} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt = "poster"></img>
                        </ListItem>
                        <ListItem>
                            <Typography>{movie.original_title}</Typography>
                        </ListItem>
                        <ListItem>
                            {/* <Star /> */}
                            <Typography>{movie.vote_average}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>{movie.release_date}</Typography>
                        </ListItem>
                    </List>
                </Box>
            ))
           } 
        </>
    )
}

export default MovieList;