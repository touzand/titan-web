import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

const spinEaseOut = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

type LoaderProps = {
  size?: number | string;
  src?: string;
};

const Loader = ({ size = 50, src = "/vite.svg" }: LoaderProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        padding: 1.5,
        backdropFilter: "blur(6px)",
      }}
    >
      <Box
        component="img"
        src={src}
        alt="Logo"
        sx={{
          width: size,
          height: size,
          animation: `${spinEaseOut} 1.6s cubic-bezier(0.2, 0.9, 0.3, 1) infinite`,
          transformOrigin: "50% 50%",
        }}
      />
    </Box>
  );
};

export default Loader;
