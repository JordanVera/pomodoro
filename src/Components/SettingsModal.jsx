import { Modal, Box, TextField, Divider, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SettingsModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      id="settingsModal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>Settings</h2>
        <Divider />
        <h3>TIME (MINUTES)</h3>
        <form action="/">
          <TextField type="number" className="numberInput" />
          <TextField type="number" className="numberInput" />
          <TextField type="number" className="numberInput" />

          <Button className="submitButton" type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
export default SettingsModal;
