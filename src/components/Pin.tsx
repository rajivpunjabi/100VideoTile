import * as React from 'react';
import PinOffIcon from 'mdi-react/PinOffIcon';
import PinIcon from 'mdi-react/PinIcon';

type TPin = {
  isPinned: boolean;
  onPin: () => unknown;
  onUnpin: () => unknown;
};

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
