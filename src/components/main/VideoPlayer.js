import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const VideoPlayer = ({ props }) => {
  return (
    <PlayerWrapper>
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=q3xy4p2JTfU"
        width="100%"
        height="100%"
        muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
        playing={true}
        loop={true}
      />
    </PlayerWrapper>
  );
};

export default VideoPlayer;
