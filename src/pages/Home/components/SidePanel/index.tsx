import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { teamMembers } from "./utils";

const SidePanel = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: ".5rem",
        height: "100%",
        minHeight: 0,
        overflowY: "hidden",
        overflowX: "visible",
      }}
    >
      <Stack>
        <Typography
          variant="overline"
          sx={{
            color: "text.secondary",
            letterSpacing: ".16em",
            padding: "0rem 0rem 0rem 1rem",
          }}
        >
          MEMBERS
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overflowX: "visible",
            padding: "0rem 3rem 0rem 1rem",
          }}
        >
          {teamMembers.map((member) => (
            <Box
              key={member.id}
              component={RouterLink}
              to={`/team/${member.slug}`}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  position: "relative",
                  bgcolor: "background.paper",
                  display: "flex",
                  alignItems: "stretch",
                  border: `solid thin ${theme.palette.divider + "50"}`,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.02)",
                  overflow: "visible",
                  transition:
                    "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
                  "&:hover": {
                    transform: "translateX(12px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.7)",
                    "& .member-photo": {
                      filter: "grayscale(0%)",
                      transform: "translateX(10px) scale(1.05)",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    padding: "1.5rem 2rem",
                    pr: "5.5rem",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 500, mb: 0.5, color: "text.primary" }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "text.secondary",
                      mb: 0.5,
                    }}
                  >
                    {member.role}
                  </Typography>
                  {member.subtitle && (
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: 12 }}
                    >
                      {member.subtitle}
                    </Typography>
                  )}
                </Box>

                <Box
                  component="img"
                  src={member.avatar}
                  alt={member.name}
                  className="member-photo"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: -20,
                    width: 110,
                    height: 110,
                    objectFit: "cover",
                    borderRadius: 1.5,
                    filter: "grayscale(100%)",
                    transition: "filter 0.25s ease, transform 0.25s ease",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default SidePanel;
