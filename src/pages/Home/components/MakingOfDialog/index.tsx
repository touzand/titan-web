import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { X } from "lucide-react";

type VideoDialogProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
};

const MakingOfDialog = ({
  open,
  onClose,
  src,
  title = "MAKING OF · TITAN TEAM",
}: VideoDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: "background.paper",
          borderRadius: 2,
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          pt: 1.5,
          pb: 1.5,
        }}
      >
        <Typography variant="subtitle2" sx={{ letterSpacing: ".12em" }}>
          {title}
        </Typography>

        <IconButton
          size="small"
          onClick={onClose}
          sx={{ color: "text.secondary" }}
        >
          <X size={18} />
        </IconButton>
      </Box>

      <DialogContent
        sx={{
          pt: 0,
          pb: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            pt: "56.25%", // 16:9
            borderRadius: 1.5,
            overflow: "hidden",
            bgcolor: "black",
          }}
        >
          <Box
            key={open ? "playing" : "stopped"}
            component="video"
            src={src}
            controls
            autoPlay
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default MakingOfDialog;
