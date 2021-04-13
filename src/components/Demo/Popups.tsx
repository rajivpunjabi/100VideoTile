import * as React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { GoUnmute, GoMute, GoReport } from 'react-icons/go';

type TPopupClose = {
	close: () => void;
};

export const PopupList = ({ close }: TPopupClose) => {
	const [isMute, setMute] = React.useState(false);

	const iconProps = {
		color: 'white',
		size: '18px',
	};

	return (
		<div className="popup-list">
			<div className="gg" onClick={() => setMute((val) => !val)}>
				{isMute ? (
					<React.Fragment>
						<GoUnmute {...iconProps} />
						<span>Unmute</span>
					</React.Fragment>
				) : (
					<React.Fragment>
						<GoMute {...iconProps} />
						<span>Mute</span>
					</React.Fragment>
				)}
			</div>
			<div className="gg" onClick={close}>
				<AiOutlineMessage {...iconProps} />
				<span>Send Message</span>
			</div>
			<div className="gg" onClick={close}>
				<GoReport {...iconProps} />
				<span>Report </span>
			</div>
		</div>
	);
};

export const PopupInfo = ({ close }: TPopupClose) => {
	return (
		<div className="popup-info" onClick={close}>
			<div className="gg">
				<span>College - XYZ College</span>
			</div>
			<div className="gg">
				<span>Branch - CS</span>
			</div>
			<div className="gg">
				<span>Batch - 24</span>
			</div>
		</div>
	);
};
