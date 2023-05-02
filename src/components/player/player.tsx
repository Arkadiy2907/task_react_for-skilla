import React from "react";
import { useEffect, useState, memo } from "react";
import { PlayerProps } from "../../types";

import pausePic from "../../assets/player/pause.svg";
import playPic from "../../assets/player/play.svg";
import arrow from "../../assets/player/arrow.svg";
import close from "../../assets/player/close.svg";
import "./style.scss";

let audio: HTMLAudioElement;
let newReturn: string; //return on no send fetch

const Player: React.FC<PlayerProps> = memo((props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(props.time);
  const [visible, setVisible] = React.useState(false);

  const playRecord = async (r: string, partnership_id: string) => {
    if (newReturn !== r) {
      const url = `https://api.skilla.ru/mango/getRecord?record=${r}&partnership_id=${partnership_id}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type":
            "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
          "Content-Transfer-Encoding": "binary",
          "Content-Disposition": 'attachment; filename="record.mp3"',
          Authorization: "Bearer testtoken",
        },
      });

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      audio = new Audio(audioUrl);
      setCurrentTime(audio.currentTime);
    }

    newReturn = r;
  };

  const playingButton = () => {
    if (isPlaying) {
      audio?.pause();
      setIsPlaying(false);
      setVisible(false);
    } else {
      audio?.play();
      setIsPlaying(true);
      setVisible(true);
    }
  };

  const handleSeekBarChange = (e: { target: { value: any } }) => {
    const time = e.target.value;
    audio.currentTime = time;
    setCurrentTime(time);
    setDuration(props.time - time);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(audio?.currentTime);
        setDuration(props.time - audio?.currentTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, props.time]);

  const getTime = (seconds: number) => {
    const minutes =
      Math.floor(seconds / 60) < 10
        ? `0${Math.floor(seconds / 60)}`
        : Math.floor(seconds / 60);
    const remainingSeconds =
      seconds % 60 < 10
        ? `0${Math.floor(seconds % 60)}`
        : Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds}`;
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${(currentTime * 100) / props.time}% 100%` };
  };

  return (
    <div
      className="player"
      onMouseEnter={() => playRecord(props.record, props.partnership_id)}
    >
      <div className="time">{getTime(duration)}</div>
      <div>
        {!isPlaying ? (
          <button className="play__button" onClick={() => playingButton()}>
            <img src={playPic} alt="play" />
          </button>
        ) : (
          <button className="play__button" onClick={() => playingButton()}>
            <img src={pausePic} alt="pause" />
          </button>
        )}
      </div>
      <div className="current__time">
        <div className="time__number">{getTime(currentTime)}</div>
        <input
          className="time__line"
          type="range"
          min="0"
          max={props.time}
          value={currentTime}
          onChange={handleSeekBarChange}
          style={getBackgroundSize()}
        />
      </div>
      <img src={arrow} alt="arrow" />
      <img
        src={close}
        alt="close"
        style={{
          visibility: visible ? "visible" : "hidden",
        }}
      />
    </div>
  );
});

export default Player;
