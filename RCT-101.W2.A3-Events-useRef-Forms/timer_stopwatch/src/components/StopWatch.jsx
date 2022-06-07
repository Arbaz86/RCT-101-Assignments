import React, { useState, useRef } from "react";
import styles from "./StopWatch.module.css";

export const StopWatch = () => {
  // const [timerId, setTimeId] = useState(null);
  const timerId = useRef(null);
  const [watch, setWatch] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [startPause, setStartPause] = useState(false);

  const start = () => {
    setStartPause(true);
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => {
          if (prev <= 100) {
            return prev + 1;
          } else {
            setSec((prev) => {
              if (prev < 60) {
                return prev + 1;
              } else {
                setMin((prev) => {
                  if (prev < 60) {
                    return prev + 1;
                  } else {
                    setHour((prev) => {
                      if (prev < 24) {
                        return prev + 1;
                      } else {
                        return (prev = 0);
                      }
                    });
                    return (prev = 0);
                  }
                });
                return (prev = 0);
              }
            });
            return (prev = 0);
          }
        });
      }, 10);
      timerId.current = id;
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setStartPause(false);
  };

  const reset = () => {
    clearInterval(timerId.current);
    setWatch(0);
    setSec(0);
    setMin(0);
    timerId.current = null;
    setStartPause(false);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Stopwatch</h3>
      <div className={styles.stopWatch_div}>
        <span>
          {hour < 10 ? "0" : ""}
          {hour}
          {hour <= 24 ? "h" : ""}{" "}
        </span>
        <span>
          {min < 10 ? "0" : ""}
          {min}
          {min <= 60 ? "m" : ""}{" "}
        </span>
        <span>
          {sec < 10 ? "0" : ""}
          {sec}
          {sec <= 60 ? "s" : ""}{" "}
        </span>
        <span>
          {watch < 10 ? "0" : ""}
          {watch}
        </span>
      </div>
      <div className={styles.btnDiv}>
        <button onClick={startPause === true ? pause : start}>
          {startPause === true ? "Pause" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
