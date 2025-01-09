# BaseButton

The `BaseButton` component is a dynamic and adaptable button designed for application. It includes features such as loading indicators, customizable styling, and comprehensive accessibility support, ensuring an enhanced user experience.

## Usage

### Basic Example

```javascript
import React from "react";
import BaseButton from "./BaseButton";

const MyComponent = () => {
  const handlePress = () => {
    console.log("Button Pressed");
  };

  return (
    <BaseButton title="Click Me" onPress={handlePress} isLoading={false} />
  );
};

export default MyComponent;
```

## Props

| Prop Name       | Type               | Default              | Description                                             |
| --------------- | ------------------ | -------------------- | ------------------------------------------------------- |
| `title`         | `string`           | **Required**         | Text displayed on the button.                           |
| `disabled`      | `boolean`          | `false`              | Disables the button when `true`.                        |
| `children`      | `ReactNode`        | `undefined`          | Child elements to render inside the button.             |
| `testID`        | `string`           | `'base-button'`      | Test ID for the button (useful for testing purposes).   |
| `onPress`       | `() => void`       | `() => {}`           | Callback function triggered when the button is pressed. |
| `activeOpacity` | `number`           | `0.7`                | Opacity level for button press feedback.                |
| `isLoading`     | `boolean`          | `false`              | Shows a loading spinner when `true`.                    |
| `spinnerColor`  | `string`           | `colors.whiteFFFFFF` | Color of the loading spinner.                           |
| `customStyle`   | `any`              | `undefined`          | Custom style for the button container.                  |
| `height`        | `ViewStyle`        | `undefined`          | Custom height for the button.                           |
| `customColors`  | `[string, string]` | `undefined`          | Custom gradient colors for the button.                  |
| `titleStyle`    | `TextStyle`        | `undefined`          | Custom style for the button title.                      |
| `loaderTestID`  | `string`           | `undefined`          | Test identifier for the loader.                         |

## Features

- **Loading State:** Displays a spinner when the `isLoading` prop is `true`.
- **Accessibility:** Includes `accessibilityRole` and `accessibilityLabel` for better screen reader support.
- **Customizable Styles:** Allows overriding of default styles with `customStyle` and `titleStyle` props.
- **Gradient Colors:** Supports gradient backgrounds with customizable or default colors.

## Default Behavior

The component determines gradient colors based on the `disabled` state:

- **Disabled State:** Uses `colors.disableButtonBlue2A7BBB` for both gradient stops.
- **Enabled State:** Uses `colors.enableButtonBlue2A7BBB` for both gradient stops.
- **Custom Colors:** If `customColors` is provided, it overrides the default gradient.

## Example: Custom Styling

```javascript
<BaseButton
  title="Styled Button"
  customStyle={{ backgroundColor: "blue", borderRadius: 10 }}
  titleStyle={{ fontSize: 18, color: "yellow" }}
  onPress={() => console.log("Custom Styled Button Pressed")}
/>
```
