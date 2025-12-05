import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  label: string;
  path: string;
  Icon: LucideIcon;
};

const navItems: NavItem[] = [
  //{ label: "Home", path: "/", Icon: Home },
  //{ label: "Sponsors", path: "/sponsors", Icon: Handshake },
  //{ label: "Team", path: "/team", Icon: Users },
];

const Header = ({ setMenuOpen }) => {
  const theme = useTheme();
  const isActive = (path: string) => location.pathname === path;
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            letterSpacing: ".15rem",
            cursor: "pointer",
            transition: "letter-spacing 0.25s ease",
            "&:hover": {
              letterSpacing: ".25rem",
            },
          }}
          onClick={() => navigate("/")}
        >
          TITAN · NASA SPACE APP CHALLENGE 2025
        </Typography>

        {navItems.map(({ label, path, Icon }) => (
          <Button
            key={path}
            component={Link}
            to={path}
            sx={{
              mx: 1,
              textTransform: "none",
              borderRadius: 0,
              ...(isActive(path) && {
                borderBottom: `2px solid ${theme.palette.primary.main}`,
              }),
            }}
            color="inherit"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Icon size={16} />
              {label}
            </Box>
          </Button>
        ))}

        <IconButton
          edge="end"
          color="inherit"
          aria-label="open menu"
          onClick={() => setMenuOpen(true)}
          disableRipple
          sx={{
            "&:focus": {
              outline: "none",
            },
            "&.Mui-focusVisible": {
              outline: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <MenuIcon size={20} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
