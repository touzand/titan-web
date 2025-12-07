import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  IconButton,
  useTheme,
  Stack,
} from "@mui/material";
import { Menu as MenuIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  label: string;
  path: string;
  Icon: LucideIcon;
};

const navItems: NavItem[] = [];

const Header = ({ setMenuOpen }: { setMenuOpen: () => void }) => {
  const theme = useTheme();
  const isActive = (path: string) => location.pathname === path;
  const navigate = useNavigate();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        bgcolor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" alignItems="center" sx={{}}>
        <Stack flexDirection="row" sx={{ width: "1500px", margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexGrow: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                px: 1.5,
                py: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="/titan_logo.png"
                alt="Logo Titan"
                sx={{
                  height: 50,
                  width: "auto",
                  display: "block",
                }}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{
                letterSpacing: ".15rem",
                transition: "letter-spacing 0.25s ease",
                whiteSpace: "nowrap",
                "&:hover": {
                  letterSpacing: ".25rem",
                },
              }}
            >
              TITAN · NASA SPACE APP CHALLENGE 2025
            </Typography>
          </Box>

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
              "&:focus": { outline: "none" },
              "&.Mui-focusVisible": {
                outline: "none",
                backgroundColor: "transparent",
              },
            }}
          >
            <MenuIcon size={25} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
