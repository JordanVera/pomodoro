import { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import {
//   percentage,
//   elapsedTimeInMinutes,
//   elapsedTimeInSeconds,
// } from '../config/vars';

const LongBreak = ({ expiryTimestamp, totalTimeInMinutes }) => {
  const [isExpired, setIsExpired] = useState(false);
  const [updatedExpiryTimestamp, setUpdatedExpiryTimestamp] =
    useState(expiryTimestamp);

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: updatedExpiryTimestamp,
      onExpire: () => {
        setIsExpired(true);
        console.log('onExpire called');
      },
    });

  const handleButtonClick = () => {
    if (isRunning) {
      pause();
    } else if (isExpired) {
      const restartTimer = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 900);
        restart(time);
      };

      restartTimer();
    } else {
      resume();
    }
  };

  const elapsedTimeInMinutes = totalTimeInMinutes - Math.ceil(seconds / 60);
  const elapsedTimeInSeconds = elapsedTimeInMinutes * 60 + seconds;
  const percentage = (elapsedTimeInSeconds / (totalTimeInMinutes * 60)) * 100;

  return (
    <Button id="pomodoro" onClick={handleButtonClick}>
      <div className="timer">
        <div className="inner">
          <h4>
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </h4>
          <p>{isRunning ? 'pause' : isExpired ? 'restart' : 'start'}</p>
        </div>

        <CircularProgressbar
          className="circularProgressBar"
          value={percentage}
        />
      </div>
    </Button>
  );
};

export default LongBreak;
