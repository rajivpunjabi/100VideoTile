# 100ms Google Meet Components

# Meet

## Control Buttons

![Control Buttons](https://i.ibb.co/Qmd8706/Meets1.png 'Control Buttons')
![Controls](https://i.ibb.co/k97SFbx/Meets.png 'Controls')
![](https://i.ibb.co/KGr5pPB/Meets2.png)
![](https://i.ibb.co/5xTSST1/Meets3.png)

---

- Controls Buttons needs to be a component. Every button has 2 states which are enabled and disabled.
- When buttons are in disabled state they have a red background and when enabled they have white background with a shadow border.
- We can maintain a component that takes two icons as props, one for enabled and other for disabled state.
- Another prop indicating whats the current state and onClick listeners whenever the button is clicked.
- Also these buttons can have multiple sizes so we can accept a prop indicating the size of the button such as 'small' | 'medium' | 'large'
- For reference the Microphone icon is same at many places but different size.
- Within footer can create another component as Controls which will contain all the buttons.

## Control Bar

![](https://i.ibb.co/YQY3Cvb/Controlbar.png)

- Control bar will be responsible to hold all the control buttons and other functionalites.
- It will be primarily responsible for handling the layout.

## Avatar

![](https://i.ibb.co/nR50wzs/Meets-Avatar.png)
![](https://i.ibb.co/sbnCxM9/Meets-Avatar1.png)

- Avatar component which accepts img props or just a username.
- If username is passed then it will render just the initials else if image props are passed then it will render the appropriate image.
- Size props can be also provided as Avatar can be 'small' | 'medium' | 'large'
- For reference chat window has avatar of small size, Header has avatar of medium size and on video tile its of large size.

# Conference Window

- A view which contains details regarding all the video streams and these video streams are rendered using Video Tile component.
- It will be responsible for handling the core logic of video streams and other functionalities such as if pinned then it should take much bigger space and maintaining the states of the video stream such as if they are muted or removed from the layout.

## Video Tile

![](https://i.ibb.co/51hJMbc/Video-Tile.png)

- Video Tile component accepts the stream data / uri, username, profile picture and other flags such as if muted or if pinned or if paused.
- If muted then we can conditionally render microphone or soundbar.
- If paused then it shows a placeholder which will either a profile image or username initials.

## Popper Wrapper

![](https://i.ibb.co/c1LbLvf/Meets-Popover1.png)
![](https://i.ibb.co/Y24NhzT/Meets-Popover2.png)
![](https://i.ibb.co/B28WsHr/Meets-Popover.png)

- There are multiple element which show up on click as popper. So we make a popper wrapper by using libraries such as react-popper or use our own implementation.
- It can accept the content which needs to be displayed as children props and a ref to the dom node above which the popper needs to be positioned along with other configs such as offset, placement etc.

## Modal Wrapper

![](https://i.ibb.co/GkJZqxY/Modal3.png)
![](https://i.ibb.co/ZJ1Qx2t/Modal2.png)
![](https://i.ibb.co/GFmbdDG/Modal.png)

- A modal wrapper can be created that accepts the content which needs to be rendered as children.
- This can be done so we can wrap any content which we want to display as Modal and it will have consistent design.

# Sidebar ( Chat Window and Meeting Details)

- Sidebar will contain the Chat window and Meeting details component.
- It will show the tabs and be responsible for showing Chat window or Meeting details conditionally.

## Chat

- Chat can be broken down into several components such as chat messages, chat input and chat window.

### Chat message

![](https://i.ibb.co/ZfGqYz5/Meets-Chat-Message.png)
![](https://i.ibb.co/t4kmJGR/Meet-Chat-Message.png)

- Chat message component can be created which accepts username, time and message as props.

### Chat Input

![](https://i.ibb.co/v1cKtS5/Meets-Chat-Input.png)

- Chat input component will be used to take input from the user.
- It will be a controlled component so we can add any additional validations as well as enable and disable the send button.
- It will accept a function as props which will be fired when user tries to submit the message. So the function will be executed with input message as an argument.

### Chat Window

![](https://i.ibb.co/QdW5LfD/Chat-Window.png)

- A Chat window component will be responsible to handle all the core logic.
- It is responsible to render all the chat messages and chat input box.

## Meeting Details Window

![](https://i.ibb.co/qDLBbKP/Meeting-Details.png)

- It will get list of all the users as an array with their details and functions which needs to be executed when any action is performed for any user such as pin, mute, or other options which shows up when we click the three dot icon and popper is shown.
- Avatar component can be used here as well to display profile picture.

## Captions

![](https://i.ibb.co/f4NqWTX/Captions.png)

- Captions component will be displayed when its turned on.
- It will get an array of object's where each each object contains details about the user such as username, profile picture and the content which needs to be displayed.
- Same Avatar can be used here as well to show the user image.

## Settings

![](https://i.ibb.co/y8Vjqwm/Settings.png)

- Settings Component will contain all the logic with respect to tab switching and the layout which needs to be displayed. It will receive a function which is executed whenever any settings are changed.
- Settings component will be wrapped with Modal Wrapper.

## Tabs

![](https://i.ibb.co/jWKb49w/Meets-Tabs1.png)
![](https://i.ibb.co/m52f4HK/Meets-Tabs.png)

- Tabs is being used at several places within the poppers.
- So we can accept an array of element where each element contains tab label and icon and onClick listener function regarding what action needs to be performed.

---

# Website

## Logo

![![](https://i.ibb.co/jLMDVsq/Card-Component-2.png)Logo](https://i.ibb.co/kS0Pzjj/Logo.png 'Logo')

- Logo can be used at many places so we can covert it into a reuseable component.
- Logo can have multiple sizes so we can accept props with size such as 'small' | 'medium' | 'large'

## Navigation

### Desktop View

![Desktop View](https://i.ibb.co/3YvkpMS/Navigation.png 'Navigation')

### Mobile View

![Mobile View](https://i.ibb.co/YTM0Lqj/Navigation2.png 'Mobile View')

- Navigation list should be converted into a reuseable component so it can be used in sidebar when in mobile view or in header when in desktop view.
- If its a reuseable component then any changes will get reflected across all the views.

## Buttons

![Play Store](https://i.ibb.co/sb75fjy/Button1.png 'Play Store')![App Store](https://i.ibb.co/vDmqgWt/Button2.png 'App Store')
![Primary Button](https://i.ibb.co/rbZHLnb/Button3.png 'Primary Button')![Secondary Button](https://i.ibb.co/LgLgz7x/Button4.png 'Secondary Button')

- App Store and Play Store button can be used across many views. So we keep it as a common component with props to accept size such as
  'small' | 'medium' | 'large'
- Button Component can be maintained which accepts starticon or endicon , sizes, variant and other generic button props.

## Header & Sidebar

![Header](https://i.ibb.co/6H9F47C/Header.png 'Header')

- Header and sidebar can be created using above components.
- It will contain Logo, Navigation List and Buttons.

## Heading - Subheading - Content

![](https://i.ibb.co/MPjGhvm/Component1-1.jpg)

---

![](https://i.ibb.co/gSRZs9c/Heading-Subheading-Content3.png)

---

![](https://i.ibb.co/PYtJh1C/Heading-Subheading-Content4.png)

---

![](https://i.ibb.co/zH1LtHR/Heading-Subheading-Content.png)

### Mobile View

![](https://i.ibb.co/nB88bhW/Mobile-View.png)

- This component has alot of white spacing on left and right sides and spacing changes across the views.
- All the text content is center alligned.
- This component has a fixed width across views.
- Consistent spacing can be maintained.

## Cards

![Cards](https://i.ibb.co/SKhX4xS/Card-Component-3.png 'Cards')

---

![](https://i.ibb.co/CVZgZY4/Card-Components.png)

### Mobile View

![](https://i.ibb.co/YjR8MzJ/Mobile-View-Card.png)

- Card Component can be maintained which displays the above card.
- It can accept img attributes, title and content as props.
- The content can be dynamic as well. So if required we accept any valid JSX Element as prop for content.

## Card Component - 2

![](https://i.ibb.co/F3Ddg9x/Card-Component-21.png)

---

![](https://i.ibb.co/jLMDVsq/Card-Component-2.png)

- Card Component can be maintained which displays the above card.
- It can accept icon , title and content as props.
- The content can be dynamic as well. So if required we accept any valid JSX Element as prop for content.

## Wrapper Component

![](https://i.ibb.co/NjQ66qY/Wrapper1.png)

---

![](https://i.ibb.co/WxKDNw1/Wrapper2.png)

---

![](https://i.ibb.co/jLMDVsq/Card-Component-2.png)

---

![](https://i.ibb.co/7kfvMP3/Wrapper3.png)

- Several components have a blue wrapping around it.
- A Simple wrapper can be maintained to wrap any component with blue color and spacing on all sides.

## Table

![](https://i.ibb.co/zNd8Hz7/Table.png)

---

![](https://i.ibb.co/FsxQp7S/Table1.png)

- Table Component can be reused. So same styling can be maintined across tables
