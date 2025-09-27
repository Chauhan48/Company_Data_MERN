import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";

export default function Popup({ updatedData }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    setOpen(false);
  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            minWidth: 400,
          }}
        >
          <form>
            <label>Name: </label>
            <input type="text" /> <br />
            <label>Industry: </label>
            <input type="text" />
            <br />
            <label>Location: </label>
            <input type="text" /> <br />
            <label>Founded: </label>
            <input type="text" />
            <br />
            <label>Employee count: </label>
            <input type="text" />
            <br />
            <label>Revenue: </label>
            <input type="text" />
            <br />
          </form>
          <Button sx={{ mt: 2 }} variant="contained" onClick={handleUpdate}>
            Update
          </Button>
        </Box>
      </Modal>
    </>
  );
}
