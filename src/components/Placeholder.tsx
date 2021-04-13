//Import Modules
import * as React from 'react';

type TPlaceHolder = {
  content?: string | React.ReactNode;
  username: string;
};

//Placeholder is shown when video is paused.
const Placeholder = (props: TPlaceHolder) => {
  return (
    <div className="paused">
      {typeof props.content === 'object' ? (
        props.content
      ) : (
        <div className="profile-wrapper">
          <div className="dummy">
            {typeof props.content === 'string' && props.content.length > 2 ? (
              <img src={props.content} alt={props.username} loading="lazy" />
            ) : (
              <div className="avatar">{props.username[0]}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Placeholder;
