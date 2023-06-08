import { useState } from 'react';

import {
  Modal,
  Box,
  TextField,
  Divider,
  Button,
  ButtonGroup,
} from '@mui/material';

import { useForm } from 'react-hook-form';

const SettingsModal = ({
  open,
  setOpen,
  pomodoroSeconds,
  setPomodoroSeconds,
  shortBreakSeconds,
  setShortBreakSeconds,
  longBreakSeconds,
  setLongBreakSeconds,
  colorTheme,
  setColorTheme,
}) => {
  const { register, handleSubmit } = useForm();
  const [selectedColor, setSelectedColor] = useState(colorTheme); // Store the selected color option
  const [selectedFont, setSelectedFont] = useState('sans');

  const handleClose = () => setOpen(false);

  const submitSettingsForm = (data) => {
    const { pomodoro, shortBreak, longBreak, color } = data;
    console.log(data);

    setPomodoroSeconds(pomodoro * 60);
    setShortBreakSeconds(shortBreak * 60);
    setLongBreakSeconds(longBreak * 60);
    setLongBreakSeconds(longBreak * 60);
    setColorTheme(selectedColor);
    document.querySelector('body').setAttribute('data-color', selectedColor);
    document.querySelector('body').setAttribute('data-font', selectedFont);

    handleClose();
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  const handleFontSelection = (font) => {
    setSelectedFont(font);
  };

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

        <form onSubmit={handleSubmit(submitSettingsForm)}>
          <div className="formGid">
            <div className="time">
              <h3>TIME (MINUTES)</h3>
              <TextField
                {...register('pomodoro')}
                type="number"
                className="numberInput"
                defaultValue={pomodoroSeconds / 60}
              />
              <TextField
                {...register('shortBreak')}
                type="number"
                className="numberInput"
                defaultValue={shortBreakSeconds / 60}
              />
              <TextField
                {...register('longBreak')}
                type="number"
                className="numberInput"
                defaultValue={longBreakSeconds / 60}
              />
            </div>
            <Divider sx={{ marginTop: '2rem' }} />
            <div className="font">
              <h3>FONT</h3>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                className="btnGroup"
              >
                <Button
                  className="fontSelectBtn sans"
                  defaultChecked={selectedFont === 'sans'}
                  onClick={() => handleFontSelection('sans')}
                >
                  Aa
                </Button>
                <Button
                  className="fontSelectBtn slab"
                  defaultChecked={selectedFont === 'slab'}
                  onClick={() => handleFontSelection('slab')}
                >
                  Aa
                </Button>
                <Button
                  className="fontSelectBtn mono"
                  defaultChecked={selectedFont === 'mono'}
                  onClick={() => handleFontSelection('mono')}
                >
                  Aa
                </Button>
              </ButtonGroup>
            </div>
            <Divider sx={{ marginTop: '2rem' }} />
            <div className="color">
              <h3>COLOR</h3>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                className="btnGroup"
              >
                <Button
                  className="fontSelectBtn red"
                  defaultChecked={selectedColor === 'red'}
                  onClick={() => handleColorSelection('red')}
                ></Button>
                <Button
                  className="fontSelectBtn blue"
                  defaultChecked={selectedColor === 'blue'}
                  onClick={() => handleColorSelection('blue')}
                ></Button>
                <Button
                  className="fontSelectBtn purple"
                  defaultChecked={selectedColor === 'purple'}
                  onClick={() => handleColorSelection('purple')}
                ></Button>
              </ButtonGroup>
            </div>
          </div>

          <Button className="submitButton" type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

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

export default SettingsModal;
