import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiOutlinePlus } from "react-icons/ai";
import UserQuestions from "./UserQuestions";
import { CryptoState } from "../../CryptoContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

export default function UserModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = CryptoState();

  return (
    <div>
      <div class="flex justify-center items-center">
        <Button onClick={handleOpen} class="text-4xl">
          <AiOutlinePlus className="text-white hover:text-red-400" />
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {user ? (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Your Questions
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <UserQuestions handleClose={handleClose}/>
            </Typography>
          </Box>
        ) : (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You need to log in
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        )}
      </Modal>
    </div>
  );
}
