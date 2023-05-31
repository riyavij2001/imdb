import React from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
    Divider,
    IconButton,
} from "@mui/material";
import { logoURL, logourlpro } from "../../constants/constant";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu"; 
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAdd from "@mui/icons-material/BookmarkAdd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../constants/route";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    return (
        <AppBar position="static">
            <Toolbar className="Styledtoolbar">
                {/* LOGO */}
                <img src={logoURL} onClick={()=> navigate(routePath.home)}></img>
                {/* MENU BUTTON */}
                <HeaderMenu />
                
                {/* SEARCH BOX */}
                <div className="Searchbar">
                    <TextField
                        placeholder="Search IMDB"
                        inputProps={{
                            style: {
                                padding: 3.5,
                                width: "105vh",
                                fontSize: 16,
                            },
                        }}
                    >
                        {/* <IconButton> */}
                        <SearchIcon />
                        {/* </IconButton> */}
                    </TextField>
                </div>

                <Button sx={{ ml: 2 }}>
                    <img src={logourlpro} height="25px"></img>
                </Button>

                <Button sx={{ color: "white", ml: 2 }}>
                    <BookmarkAdd />
                    <Typography
                        sx={{ fontSize: 13, fontWeight: "bold", ml: 1 }}
                    >
                        WatchList
                    </Typography>
                </Button>

                <Button sx={{ color: "white", ml: 2 }}>
                    <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                        Sign In
                    </Typography>
                </Button>

                <Button sx={{ color: "white", ml: 2 }}>
                    <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                        En
                    </Typography>
                    <ArrowDropDownIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
