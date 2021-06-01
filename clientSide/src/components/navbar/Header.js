import React from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),

      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  headerOptions: {
    display: "flex",
    flexGorw: 1,
    flex: 1,
    marginLeft: theme.spacing(1)
    // justifyContent: "space-evenly"
  },
  appbar: {
    backgroundColor: "#2a2a2a",
    color: "#cccccc"
  },
  buttonStyle: {
    color: "#cccccc"
  },
  loginWrapper: {
    display: "flex",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)

    // [theme.breakpoints.down('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   marginRight: theme.spacing(1),
    //   color:'red',
    //   fontSize:'0.8rem',
    //   // width: 'auto',
    // },
  },
  typography: {
    fontSize: "5rem",
    "@media (max-width:655px)": {
      fontSize: "1rem",
      color: "red"
    }
  },
  "@global": {
    html: {
      "@media (max-width:672px)": {
        fontSize: 15
      },
      "@media (max-width:644px)": {
        fontSize: 13
      }
    }
  }
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Browse",
      pageURL: "/browse"
    },
    {
      menuTitle: "Faq",
      pageURL: "/faq"
    },
    {
      menuTitle: "Help",
      pageURL: "/about"
    },
    {
      menuTitle: "Log-In",
      pageURL: "/login"
    },
    {
      menuTitle: "Cart",
      pageURL: "/cart"
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
        <Button
                  className={classes.buttonStyle}
                  variant="outline"
                  onClick={() => handleButtonClick("/")}
                >
          <Typography style={{color:'#0078F2'}} variant="h6" className={classes.title}>
            GamesOverflow
          </Typography>
          </Button>

          {isMobile ? (
            <>
              {/* <div className={classes.search}>                      Search
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div> */}
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems.map((menuItem) => {
                    const { menuTitle, pageURL } = menuItem;
                    return (
                      <MenuItem onClick={() => handleMenuClick(pageURL)}>
                        {menuTitle}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            </>
          ) : (
            <>
              <div className={classes.headerOptions}>
                <Button
                  className={classes.buttonStyle}
                  variant="outline"
                  onClick={() => handleButtonClick("/browse")}
                >
                  Browse
                </Button>
                <Button
                  className={classes.buttonStyle}
                  variant="outline"
                  onClick={() => handleButtonClick("/faq")}
                >
                  Faq
                </Button>
                <Button
                  className={classes.buttonStyle}
                  variant="outline"
                  onClick={() => handleButtonClick("/about")}
                >
                  Help
                </Button>
              </div>
              {/* <div className={classes.search}>                           Search
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div> */}
              <Button className={classes.buttonStyle}
                  variant="outline"
                  onClick={() => handleButtonClick("/cart")}>
              <div className={classes.loginWrapper}>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
              </div>
              </Button>
              <Button className={classes.buttonStyle}
                  variant="outline"
                  onClick={() => handleButtonClick("/login")}>
              <div className={classes.loginWrapper}>
                <AccountCircleIcon />
                <Typography>Log-In</Typography>
              </div>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
