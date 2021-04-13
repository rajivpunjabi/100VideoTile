import * as React from 'react';

export const PlaceholderBubble = () => {
	return (
		<React.Fragment>
			<svg width="0" height="0">
				<filter id="gooey-plasma">
					<feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
						result="goo"
					/>
				</filter>
			</svg>
			<div className="plasma">
				<div className="gooey-container">
					<span className="bubble"></span>
					<span className="bubble"></span>
					<span className="bubble"></span>
					<span className="bubble"></span>
					<span className="bubble"></span>
					<span className="bubble"></span>
				</div>
			</div>
		</React.Fragment>
	);
};
