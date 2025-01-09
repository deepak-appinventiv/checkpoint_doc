# IconButtons

The `IconButtons` component is a versatile button designed specifically for use cases where buttons contain only icons. It provides customizable styles, optional SVG support, and robust accessibility options.

## Usage

### Basic Example

```javascript
import React from "react";
import IconButtons from "./IconButtons";

const MyComponent = () => {
  const handleIconPress = () => {
    console.log("Icon Pressed");
  };

  return (
    <IconButtons
      leftIcon={require("./path-to-icon.png")}
      onLeftIconPress={handleIconPress}
      testID="icon-button"
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name         | Type                  | Default     | Description                                                   |
| ----------------- | --------------------- | ----------- | ------------------------------------------------------------- |
| `onLeftIconPress` | `() => void`          | `undefined` | Function to handle the press event for the left icon.         |
| `leftIcon`        | `ImageSourcePropType` | `undefined` | Source for the left icon image.                               |
| `leftButtonStyle` | `ViewStyle`           | `undefined` | Custom style for the button containing the left icon.         |
| `svg`             | `any`                 | `undefined` | SVG element to render as an icon (alternative to `leftIcon`). |
| `svgStyle`        | `ImageStyle`          | `undefined` | Custom style for the SVG icon.                                |
| `disabled`        | `boolean`             | `false`     | Disables the button when `true`.                              |
| `imageStyle`      | `ImageStyle`          | `undefined` | Custom style for the left icon image.                         |
| `testID`          | `string`              | `undefined` | Test identifier for the button (useful for testing purposes). |

## Features

- **Icon Support:** Display icons using either `leftIcon` for images or `svg` for SVG elements.
- **Customizable Styles:** Allows overriding styles for the button and icons using `leftButtonStyle`, `imageStyle`, and `svgStyle` props.
- **Accessibility:** Includes `testID` and `disabled` props for enhanced testing and accessibility.

## Example: Custom Styling

```javascript
<IconButtons
  leftIcon={require("./custom-icon.png")}
  onLeftIconPress={() => console.log("Custom Icon Button Pressed")}
  leftButtonStyle={{ padding: 10, backgroundColor: "lightgray" }}
  imageStyle={{ width: 20, height: 20 }}
/>
```

## Notes

- Ensure that the `leftIcon` is a valid image source or provide an `svg` element for rendering.
- Use the `disabled` prop to prevent interaction when necessary.
