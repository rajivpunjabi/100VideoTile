//Import Modules
import * as React from 'react';

//Import Styles
import './styles.css';

//Import Components
import Placeholder from './components/Placeholder';
import { BiMicrophoneOff } from 'react-icons/bi';
import { IoHandRightSharp } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Pin from './components/Pin';
import PinIcon from 'mdi-react/PinIcon';

export type TVideoTileProps = {
  /**
   * A unique Id to be attached to <video> tag.
   */
  id: string;
  /**
   * URI for the src attribute of the <video> tag
   */
  uri: string;
  /**
   * A flag to indicate when user has stopped sharing their camera.
   * If true then a placeholder is shown which could be a custom component, an image or intials of the user based on placeholder props.
   * If false then a the video is shown is shown.
   */
  isPaused: boolean;
  /**
   * A flag to indicate when user has stopped sharing their audio.
   * If true then a disabled microphone icon is shown adjacent to the username.
   *
   */
  isMuted: boolean;
  /**
   * A flag to indicate when user has raised their hand.
   * If true then a raised hand icon is shown adjacent to the username.
   */
  isHandRaised: boolean;
  /**
   * A flag to indicate when user has pinned particular tile.
   * If true then a pinned icon is show adjacent to the username.
   */
  isPinned: boolean;
  /**
   * Full Name of the user. Such as Elon Musk.
   * Required field because it is shown at bottom on video tile and when no placeholder is passed initals are extracted from username.
   */
  username: string;
  /**
   * Pass CSS Border property to highlight the window such as "1px solid green" or "3px solid #aaa"
   */
  highlightBorder?: string;
  /**
   * Placeholder is shown when the user has stopped sharing their camera.
   * A string can be passed which needs to URL to an image because if string is passed it is attached to the <img> tag.
   * A React.ReactNode can be passed which means a custom React Component.
   * So whenever user has paused sharing custom component will be rendered and shown.
   */
  placeholder?: string | React.ReactNode;
  /**
   * Width of the video tile. It could be absolute number such as 200 or a string "200px".
   * All valid CSS width can be passed. If no width is passed then it takes as much width available
   */
  width?: number | string;
  /**
   * Height of the video tile. It could be absolute number such as 200 or a string "200px".
   * All valid CSS width can be passed.
   * If no width is passed then it takes as much width available
   */
  height?: number | string;
  /**
   * If you want to show any additional data on video tile it can be shown either on top of video tile or within the popups.
   * You can pass any valid React Component and it will be rendered at the top of the video tile.
   * It is wrapped within a div which is absolute positioned at the top of the video tile.
   */
  TopBar?: React.ReactNode;
  /**
   * If you want to provide user with additional options you can render it within the popups.
   * Three dots icon is shown at right bottom when a popup is passed and shown whenever user clicks on it.
   * Now whenever a click action is performed outside the popup then popup automatically closes but within the popup that doesn't happen.
   *
   * So we use render props pattern where a function is passed as an argument.
   * So whenever you would like to close the popup then just execute close function.
   */
  Popup?: (close: () => void) => React.ReactNode;
  /**
   * Function to be executed when user pin's the video tile.
   */
  onPin: () => void;
  /**
   * Function to be executed when user unpin's the video tile.
   */
  onUnpin: () => void;
  /**
   * Function to be executed when hand is clicked.
   */
  onHandClick?: () => void;
  /**
   * Function to be executed when microphone is clicked.
   */
  onMicrophoneClick?: () => void;
};

export const VideoTile = (props: TVideoTileProps) => {
  const [isPopupVisible, setPopupVisible] = React.useState(false);
  const popupRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    //To automatically close popup when clicked outside.
    document.addEventListener('click', event => {
      if (popupRef.current?.contains(event.target as HTMLElement)) {
        return;
      }
      if (isPopupVisible) setPopupVisible(false);
    });
  }, [isPopupVisible]);

  return (
    <div
      className={`video-tile video-tile-${props.id}`}
      style={{
        width: props.width,
        height: props.height,
        border: props.highlightBorder,
      }}
    >
      {props.TopBar && <div className="top-bar">{props.TopBar}</div>}
      <video
        src={props.uri}
        muted={props.isMuted}
        id={props.id}
        autoPlay
        playsInline
      />
      {props.isPaused && (
        <Placeholder content={props.placeholder} username={props.username} />
      )}
      {!isPopupVisible && (
        <Pin
          isPinned={props.isPinned}
          onPin={props.onPin}
          onUnpin={props.onUnpin}
        />
      )}
      <div className="bottom-bar">
        <div className="bottom-bar__left">
          {props.isMuted && (
            <BiMicrophoneOff
              size="18px"
              color="#FF3333"
              onClick={props.onMicrophoneClick}
            />
          )}
          {props.isHandRaised && (
            <IoHandRightSharp
              onClick={props.onHandClick}
              size="17px"
              color="yellow"
            />
          )}
          {props.isPinned && (
            <PinIcon size="18px" color="lime" onClick={props.onUnpin} />
          )}
          <span>{props.username}</span>
        </div>

        <div className="bottom-bar__right" ref={popupRef}>
          {props.Popup && (
            <React.Fragment>
              <BsThreeDotsVertical
                size="18px"
                color="white"
                onClick={() => setPopupVisible(val => !val)}
              />
              {isPopupVisible && (
                <div className="popup">
                  {props.Popup(() => setPopupVisible(false))}
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoTile;
