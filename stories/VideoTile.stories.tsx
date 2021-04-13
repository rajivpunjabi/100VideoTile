import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { VideoTile, TVideoTileProps } from '../src/index';
import {
  TopBarFull,
  TopbarIcons,
  TopBarStudy,
} from '../src/components/Demo/Topbar';
import { PopupList, PopupInfo } from '../src/components/Demo/Popups';
import { PlaceholderBubble } from '../src/components/Demo/Placeholder';

export default {
  title: 'VideoTile',
  component: VideoTile,
} as Meta;

const Template: Story<TVideoTileProps> = args => <VideoTile {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  uri:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  width: 400,
  height: 300,
  username: 'Dan Abhrmov',
  id: '1',
  isHandRaised: true,
  isMuted: true,
  placeholder: 'https://miro.medium.com/max/3150/1*xxVEfOOAmIKHWOUloRKLhw.jpeg',
};

export const WithTopbarIcons = Template.bind({});
WithTopbarIcons.parameters = {
  docs: {
    storyDescription: `Custom Component is being rendered within the topbar which is a set of icons. 
		\n It is a flexbox with justify as space-between so they are at extreme ends. Star can be clicked and it gets filled.
		\n So any custom component can be added with their own logic
		\n Topbar will be always be shown above the placeholder but below the popup if passed.
		`,
  },
};
WithTopbarIcons.args = {
  ...Normal.args,
  TopBar: <TopbarIcons />,
};

export const WithTopbarText = Template.bind({});
WithTopbarText.parameters = {
  docs: {
    storyDescription: `Custom Component is being rendered within the topbar which is a small textbox.
		 \n This could be used to show user's batch, roll number, department or any other text you want to show.
		 \n Topbar will be always be shown above the placeholder but below the popup if passed.

		`,
  },
};
WithTopbarText.args = {
  ...Normal.args,
  TopBar: <TopBarStudy />,
};

export const WithTopbarContainer = Template.bind({});
WithTopbarContainer.parameters = {
  docs: {
    storyDescription: `Custom component which takes up entire width at the top.
		\n Could be used to show any information. Basically any component can be passed which needs to be shown at the top based on your requirements.
		\n Topbar will be always be shown above the placeholder but below the popup if passed.
		`,
  },
};

WithTopbarContainer.args = {
  ...Normal.args,
  TopBar: <TopBarFull />,
};

export const WithPopupsList = Template.bind({});

WithPopupsList.parameters = {
  docs: {
    storyDescription: `A custom component is being passed to the popup props.
		\n Whenever a custom component is passed to popup props three dots icon is shown at the bottom right.
		\n If you click outside then automatically popup is closed. If clicked within then it won't close.
		\n It is implemented in this manner to provide better control to the developer. For example check mute option
		\n When mute option is clicked it shows unmute instantly allowing user to unmute without opening popup again.
		\n But when you click on other options then popup is closed. This is achieved using render props.
		\n You get a close function as a parameter and you can call this function if you want to close the popup.`,
  },
};

WithPopupsList.args = {
  ...Normal.args,
  Popup: close => <PopupList close={close} />,
};

export const WithPopupInfo = Template.bind({});

WithPopupInfo.parameters = {
  docs: {
    storyDescription: `A custom component is being passed to the popup props.
		\n Whenever a custom component is passed to popup props three dots icon is shown at the bottom right.
		\n If you click outside then automatically popup is closed. If clicked within then it won't close.
		\n It is implemented in this manner to provide better control to the developer.
		\n close function is provided an argument which should be called to close the popup`,
  },
};

WithPopupInfo.args = {
  ...Normal.args,
  Popup: close => <PopupInfo close={close} />,
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.parameters = {
  docs: {
    storyDescription: `Placeholder is shown when the camera has been paused by the user.
		\n placeholder can be a string or React Component.
		\n If string then an image is shown with curved border.`,
  },
};
WithCustomPlaceholder.args = {
  ...Normal.args,
  isPaused: true,
  placeholder: <PlaceholderBubble />,
};

export const WithProfileImagePlaceholder = Template.bind({});
WithProfileImagePlaceholder.parameters = {
  docs: {
    storyDescription: `Placeholder is shown when the camera has been paused by the user.
		\n placeholder can be a string or React Component.
		\n If string then an image is shown with curved border.`,
  },
};
WithProfileImagePlaceholder.args = {
  ...Normal.args,
  isPaused: true,
  placeholder: 'https://miro.medium.com/max/3150/1*xxVEfOOAmIKHWOUloRKLhw.jpeg',
};

export const WithoutPlaceholders = Template.bind({});
WithoutPlaceholders.parameters = {
  docs: {
    storyDescription: `Placeholder is shown when the camera has been paused by the user.
		\n When no placeholder is passed it fallbacks to custom placeholder by showing initials of the user within a curved box`,
  },
};
WithoutPlaceholders.args = {
  ...Normal.args,
  isPaused: true,
  placeholder: undefined,
};

export const WithHighlightedBorder = Template.bind({});
WithHighlightedBorder.args = {
  ...Normal.args,
  highlightBorder: '5px solid lightgreen',
};

export const WithTopbarPopupCustomPlaceholder = Template.bind({});
WithTopbarPopupCustomPlaceholder.parameters = {
  docs: {
    storyDescription: `Stack order is 
		popup - topbar & username - place-holder - video`,
  },
};
WithTopbarPopupCustomPlaceholder.args = {
  ...Normal.args,
  isPaused: true,
  TopBar: <TopbarIcons />,
  Popup: close => <PopupList close={close} />,
  placeholder: <PlaceholderBubble />,
};

export const WithTopbarPopupImagePlaceholder = Template.bind({});
WithTopbarPopupImagePlaceholder.parameters = {
  docs: {
    storyDescription: `Stack order is 
		popup - topbar & username - place-holder - video`,
  },
};
WithTopbarPopupImagePlaceholder.args = {
  ...Normal.args,
  isPaused: true,
  TopBar: <TopbarIcons />,
  Popup: close => <PopupList close={close} />,
  placeholder:
    'https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg',
};
