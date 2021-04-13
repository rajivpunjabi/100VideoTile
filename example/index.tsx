import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import VideoTile from '../src/index';

import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import { FaHandPointUp, FaHandPointDown } from 'react-icons/fa';

type TPopupProps = {
  isMuted: boolean;
  toggleMuted: () => void;
  isHandRaised: boolean;
  toggleHand: () => void;
  close: () => void;
};

const PopupTest = (props: TPopupProps) => {
  return (
    <div style={{ backgroundColor: 'navy' }}>
      <div onClick={props.close}>Close me on click</div>
      <div onClick={props.toggleMuted}>
        {props.isMuted ? (
          <React.Fragment>
            <BiVolumeFull /> Unmute
          </React.Fragment>
        ) : (
          <React.Fragment>
            <BiVolumeMute /> Mute
          </React.Fragment>
        )}
      </div>
      <div onClick={props.toggleHand}>
        {props.isHandRaised ? (
          <React.Fragment>
            <FaHandPointDown /> Lower Hand
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FaHandPointUp /> Raise Hand
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [isPinned, setPinned] = React.useState(false);
  const [isMuted, setMuted] = React.useState(false);
  const [isHandRaised, setHandRaised] = React.useState(true);

  const toggleMuted = () => setMuted(mute => !mute);
  const toggleHand = () => setHandRaised(hand => !hand);

  return (
    <VideoTile
      width={400}
      height={300}
      onPin={() => setPinned(true)}
      onUnpin={() => setPinned(false)}
      onHandClick={() => setHandRaised(false)}
      onMicrophoneClick={() => setMuted(false)}
      id="1"
      isPinned={isPinned}
      isPaused={false}
      placeholder={
        <img
          src="https://100ms.live/images/100ms-logo.png"
          width="80%"
          height="80%"
        />
      }
      isHandRaised={isHandRaised}
      isMuted={isMuted}
      uri="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
      username="Dan Abhrmov"
      Popup={close => (
        <PopupTest
          close={close}
          isMuted={isMuted}
          toggleMuted={toggleMuted}
          isHandRaised={isHandRaised}
          toggleHand={toggleHand}
        />
      )}
      TopBar={
        <div style={{ color: 'white', textAlign: 'center' }}>
          Could be any custom React Component
        </div>
      }
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
