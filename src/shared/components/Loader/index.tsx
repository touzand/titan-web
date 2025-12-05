import { Box, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

const coinTilt = keyframes`
  0% {
    transform: perspective(600px) rotateY(0deg);
  }
  25% {
    transform: perspective(600px) rotateY(90deg);
  }
  50% {
    transform: perspective(600px) rotateY(0deg);
  }
  75% {
    transform: perspective(600px) rotateY(-90deg);
  }
  100% {
    transform: perspective(600px) rotateY(0deg);
  }
`;

type LoaderProps = {
  size?: number | string;
  src?: string;
};

const Loader = ({ size = 100, src = "/titan_logo.png" }: LoaderProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        p: 1.5,
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `medium solid ${theme.palette.primary.main}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          animation: `${coinTilt} 3.5s ease-in-out infinite`,
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
          willChange: "transform",
        }}
      >
        <Box
          component="img"
          src={src}
          alt="Logo"
          sx={{
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default Loader;
