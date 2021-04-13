import * as React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs';

export const TopbarIcons = () => {
	const [isStarFilled, setStarFilled] = React.useState(false);
	const [isFullScreen, setFullScreen] = React.useState(false);

	const screenProps = {
		color: 'blue',
		size: '18px',
		onClick: () => setFullScreen((val) => !val),
	};

	const starProps = {
		color: 'yellow',
		size: '18px',
		onClick: () => setStarFilled((val) => !val),
	};

	return (
		<div className="demo-icons">
			{isFullScreen ? (
				<BsFullscreen {...screenProps} />
			) : (
				<BsFullscreenExit {...screenProps} />
			)}
			{isStarFilled ? (
				<AiFillStar {...starProps} />
			) : (
				<AiOutlineStar {...starProps} />
			)}
		</div>
	);
};

export const TopBarStudy = () => {
	return (
		<div className="demo-study">
			<span>R-23</span>
		</div>
	);
};

export const TopBarFull = () => {
	return (
		<div className="demo-fullbar">
			<span>Demo user</span>
		</div>
	);
};
