import { useState } from 'react';
import { Container, Button, Modal, Box, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Pomodoro from './Pomodoro';
import ToggleButtons from './ToggleButtons';
import ShortBreak from './ShortBreak';
import LongBreak from './LongBreak';
import SettingsModal from './SettingsModal';

const App = () => {
  const [clockType, setClockType] = useState(0);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(1500);
  const [shortBreakSeconds, setShortBreakSeconds] = useState(300);
  const [longBreakSeconds, setLongBreakSeconds] = useState(900);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const getExpiryTimestamp = () => {
    const time = new Date();

    switch (clockType) {
      case 0:
        time.setSeconds(time.getSeconds() + pomodoroSeconds);
        break;
      case 1:
        time.setSeconds(time.getSeconds() + shortBreakSeconds);
        break;
      case 2:
        time.setSeconds(time.getSeconds() + longBreakSeconds);
        break;
      default:
        break;
    }

    return time;
  };

  const expiryTimestamp = getExpiryTimestamp();

  return (
    <Container className="container">
      <h1>pomodoro</h1>
      <ToggleButtons clockType={clockType} setClockType={setClockType} />

      <div className="timers">
        {clockType === 0 && (
          <Pomodoro expiryTimestamp={expiryTimestamp} totalTimeInMinutes={25} />
        )}

        {clockType === 1 && (
          <ShortBreak
            expiryTimestamp={expiryTimestamp}
            totalTimeInMinutes={5}
          />
        )}

        {clockType === 2 && (
          <LongBreak
            expiryTimestamp={expiryTimestamp}
            totalTimeInMinutes={15}
          />
        )}
      </div>

      <div id="settings">
        <Button onClick={handleOpen}>
          <SettingsIcon />
        </Button>
      </div>

      <SettingsModal open={open} setOpen={setOpen} />
    </Container>
  );
};

export default App;
