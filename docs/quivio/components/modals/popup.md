# PopupCard

The `PopupCard` is a reusable and customizable popup component designed to display a combination of text, images, and action buttons. It provides flexibility through various props for styling and functionality.

## Usage

### Basic Example

```javascript
import React from "react";
import PopupCard from "./PopupCard";

const MyComponent = () => {
  const handleButtonPress = () => {
    console.log("Primary button pressed");
  };

  const handleSecondaryButtonPress = () => {
    console.log("Secondary button pressed");
  };

  return (
    <PopupCard
      title="Popup Title"
      subTitle="This is a subtitle for the popup."
      imageSource={require("../../assets/example.png")}
      buttonTitle="Confirm"
      buttonTitle2="Cancel"
      onPressButton={handleButtonPress}
      onPressButton2={handleSecondaryButtonPress}
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name        | Type                  | Default      | Description                                              |
| ---------------- | --------------------- | ------------ | -------------------------------------------------------- |
| `title`          | `string`              | **Required** | The main title displayed in the popup.                   |
| `subTitle`       | `string`              | `undefined`  | The subtitle displayed below the title.                  |
| `titleStyle`     | `TextStyle`           | `undefined`  | Custom styles for the title text.                        |
| `subTitleStyle`  | `TextStyle`           | `undefined`  | Custom styles for the subtitle text.                     |
| `isLoading`      | `boolean`             | `false`      | Displays a loading indicator on the primary button.      |
| `isDisabled`     | `boolean`             | `false`      | Disables the primary button when `true`.                 |
| `imageSource`    | `ImageSourcePropType` | **Required** | The source for the image displayed in the popup.         |
| `onPressButton`  | `() => void`          | **Required** | Callback triggered when the primary button is pressed.   |
| `onPressButton2` | `() => void`          | `undefined`  | Callback triggered when the secondary button is pressed. |
| `buttonTitle`    | `string`              | `''`         | Title for the primary button.                            |
| `buttonTitle2`   | `string`              | `''`         | Title for the secondary button (optional).               |
| `buttonStyle`    | `ViewStyle`           | `undefined`  | Custom styles for the primary button.                    |
| `buttonStyle1`   | `ViewStyle`           | `undefined`  | Additional styles for the primary button.                |
| `testID`         | `string`              | `undefined`  | Test ID for the image in the popup (useful for testing). |

## Features

- **Customizable Content:** Provides customizable titles, subtitles, and button styles.
- **Dual Buttons:** Supports two action buttons with independent callbacks.
- **Image Support:** Displays an image above the popup content.
- **Loading State:** Includes a loading state for the primary button.

## Default Behavior

- The popup ensures alignment and spacing for single or dual button setups.
- If `buttonTitle2` is provided, both buttons are displayed side by side with equal spacing.

## Example: Custom Styling

```javascript
<PopupCard
  title="Custom Popup"
  subTitle="This popup uses custom styles."
  imageSource={require("../../assets/custom-image.png")}
  buttonTitle="OK"
  buttonTitle2="Cancel"
  onPressButton={() => console.log("OK pressed")}
  onPressButton2={() => console.log("Cancel pressed")}
  titleStyle={{ fontSize: 20, color: "blue" }}
  subTitleStyle={{ fontSize: 16, color: "gray" }}
  buttonStyle={{ backgroundColor: "green" }}
/>
```

## Dependencies

- `React`
- `@primitives/typography` (for `H11`, `H4`, `H6` typography components)
- `ImageWrapper`, `ViewWrapper` (for layout and image rendering)
- `BaseButton` (for buttons)
- `@quivio/utils` (for colors and dimensions utilities)

## Styling

Styles for the component are imported from `./styles` and include:

- `modalContainer`: Styles for the outermost container of the popup.
- `modalInnerContainer`: Styles for the content inside the popup.
- `iconStyle`: Styles for the image displayed in the popup.
- `buttonContainer`: Styles for the container holding the buttons.
- `buttonText`: Default styles for the button text.
- `title`: Default styles for the title text.
- `subtitleView`: Default styles for the subtitle text.
