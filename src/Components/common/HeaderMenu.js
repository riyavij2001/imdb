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
import { Link } from "react-router-dom";
import { routePath } from "../../constants/route";

const HeaderMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Button
                sx={{ ml: 3 }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <MenuIcon className="Header_menu_button" />
                <Typography
                    className="Header_menu_button"
                    sx={{ textTransform: "none" }}
                >
                    Menu
                </Typography>
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <Link to={`${routePath.categories}?categories=popular`} style={{textDecoration:'none', color:'inherit'}}>
                    <MenuItem onClick={handleClose}>Popular</MenuItem>
                </Link>
                <Link to={`${routePath.categories}?categories=toprated`} style={{textDecoration:'none', color:'inherit'}}>
                    <MenuItem onClick={handleClose}>Top rated</MenuItem>
                </Link>
                <Link to={`${routePath.categories}?categories=upcoming`} style={{textDecoration:'none', color:'inherit'}}>
                    <MenuItem onClick={handleClose}>Upcoming</MenuItem>
                </Link>
            </Menu>
        </Box>
    );
};

export default HeaderMenu;
