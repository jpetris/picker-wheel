import { useState, useEffect, useMemo, useRef } from "react";
import selectSound from "picker-wheel/assets/blipSelect.wav";
import stopSound from "picker-wheel/assets/synth.wav";
import styled from "styled-components";

const Carousel = ({ startingOptions, initialSpeed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);
  const [speed, setSpeed] = useState(initialSpeed);
  const [options, setOptions] = useState([...startingOptions]);

  const stop: number = useMemo(() => initialSpeed + 1500, []);
  const step: number = useMemo(() => Math.floor(stop / 15), []);

  const selectSfx = useRef(new Audio(selectSound));
  const stopSfx = useRef(new Audio(stopSound));

  const carouselInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const stopInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isSpinning) {
      carouselInterval.current = setInterval(() => {
        setCurrentIndex((current) => {
          if (currentIndex >= options.length - 1) {
            clearInterval(carouselInterval.current);
            selectSfx.current.play();
            return 0;
          } else {
            selectSfx.current.play();
            return current + 1;
          }
        });
      }, speed);
    } else if (!isSpinning) {
      if (carouselInterval.current) {
        clearInterval(carouselInterval.current);
      }
    }

    return () => {
      if (carouselInterval.current) {
        clearInterval(carouselInterval.current);
      }
    };
  }, [currentIndex, isSpinning]);

  const handleStop = () => {
    stopInterval.current = setInterval(() => {
      setSpeed((currentSpeed) => {
        if (currentSpeed >= stop) {
          stopSfx.current.play();
          setIsSpinning(false);
          if (carouselInterval.current) clearInterval(carouselInterval.current);
          if (stopInterval.current) clearInterval(stopInterval.current);
          return currentSpeed;
        } else {
          return currentSpeed + step;
        }
      });
    }, 400);
  };

  const handleStart = () => {
    setSpeed(initialSpeed);
    setIsSpinning(true);
  };

  const hideOption = () => {
    setOptions((currentOptions) => {
      return currentOptions.filter((option) => {
        return option.key !== options[currentIndex].key;
      });
    });
    handleStart();
  };

  const restart = () => {
    setOptions(startingOptions);
    handleStart();
  };

  return isSpinning ? (
    <div onClick={handleStop}>{options[currentIndex]}</div>
  ) : (
    <RestartContainer onClick={handleStart}>
      {options[currentIndex]}
      <ActionButton onClick={hideOption}>Hide Option</ActionButton>
      <ActionButton onClick={restart}>Restart</ActionButton>
    </RestartContainer>
  );
};

const RestartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionButton = styled.button`
  height: 80px;
  margin-top: 8px;
`;

export default Carousel;
