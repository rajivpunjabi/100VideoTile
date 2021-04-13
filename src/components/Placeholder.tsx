import * as React from 'react';

type TPlaceHolder = {
  content?: string | React.ReactNode;
  username: string;
};

const Placeholder = (props: TPlaceHolder) => {
  return (
    <div className="paused">
      {typeof props.content === 'object' ? (
        props.content
      ) : (
        <div className="profile-wrapper">
          <div className="dummy">
            {typeof props.content === 'string' && props.content.length > 10 ? (
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
