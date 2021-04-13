//Import Modules
import * as React from 'react';

//Import Icons
import PinOffIcon from 'mdi-react/PinOffIcon';
import PinIcon from 'mdi-react/PinIcon';

type TPin = {
  isPinned: boolean;
  onPin: () => void;
  onUnpin: () => void;
};

//Pin is shown when user hovers upon the video tile.
const Pin = (props: TPin) => {
  return (
    <div className="pin-wrapper">
      <div className="pin">
        {props.isPinned ? (
          <PinOffIcon size="20px" color="white" onClick={props.onUnpin} />
        ) : (
          <PinIcon size="20px" color="white" onClick={props.onPin} />
        )}
      </div>
    </div>
  );
};

export default Pin;
