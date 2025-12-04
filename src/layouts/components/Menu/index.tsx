import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { X } from "lucide-react";
import { menuSections, type MainMenuProps } from "./utils";

const Menu = ({ open, onClose }: MainMenuProps) => {
  const theme = useTheme();
  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%",
          backgroundImage:
            "linear-gradient(to bottom, #050816 0%, #02040A 100%)",
          borderBottom: `1px solid ${theme.palette.divider}`,
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          mx: "auto",
          p: "4rem",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ letterSpacing: ".16em", textTransform: "uppercase" }}
          >
            EYES ON THE SOLAR SYSTEM
          </Typography>

          <IconButton size="small" onClick={onClose}>
            <X size={18} />
          </IconButton>
        </Box>

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{
            flex: 1,
          }}
        >
          {menuSections.map((section, index) => (
            <Box
              key={section.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: index === 0 ? "600px" : "200px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  textTransform: "none",
                  color: "text.secondary",
                }}
              >
                {section.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".75rem",
                  mt: 1,
                }}
              >
                {section.items.map((item) => (
                  <Box
                    key={item.to}
                    component={RouterLink}
                    to={item.to}
                    onClick={onClose}
                    sx={{
                      fontSize: 14,
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>

              {section.footer && (
                <Box
                  component={RouterLink}
                  to={section.footer.to}
                  onClick={onClose}
                  sx={{
                    mt: "auto",
                    pt: 1.5,
                    borderTop: "1px solid rgba(148,163,184,0.3)",
                    fontSize: 13,
                    color: "text.secondary",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {section.footer.label}
                </Box>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
};

export default Menu;
