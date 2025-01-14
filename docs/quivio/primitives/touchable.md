# Touchable

The `Touchable` component is a wrapper around `TouchableOpacity` with extended props for event handling, and styling, providing a customizable touchable element for React Native applications.

## Code

```javascript
import React from "react";
import { TouchableOpacity } from "react-native";

const Touchable = (props: any) => {
  const {
    testID,
    children,
    disabled,
    accessible = true,
    onPress = () => {},
    activeOpacity = 0.7,
    onLongPress = () => {},
    ...rest
  } = props;

  const baseStyle = {
    ...rest,
  };

  return (
    <TouchableOpacity
      testID={testID}
      style={baseStyle}
      onPress={onPress}
      accessible={accessible}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      disabled={disabled || false}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;

import { ReactNode } from "react";
import { TouchableOpacityProps, ViewStyle } from "react-native";

export interface TouchableProps extends TouchableOpacityProps {
  children: ReactNode;
  style?: ViewStyle;
}
```

## Usage

### Basic Example

```javascript
import React from "react";
import Touchable from "./Touchable";

const MyComponent = () => {
  const handlePress = () => {
    console.log("Touchable Pressed");
  };

  return (
    <Touchable
      onPress={handlePress}
      activeOpacity={0.5}
      testID="touchable-component"
    >
      <Text>Click Me</Text>
    </Touchable>
  );
};

export default MyComponent;
```

## Props

| Prop Name       | Type         | Default     | Description                                              |
| --------------- | ------------ | ----------- | -------------------------------------------------------- |
| `testID`        | `string`     | `undefined` | Test ID for the component (useful for testing purposes). |
| `children`      | `ReactNode`  | `undefined` | Elements to render inside the `Touchable`.               |
| `disabled`      | `boolean`    | `false`     | Disables the touchable interaction when `true`.          |
| `accessible`    | `boolean`    | `true`      | Marks the component as accessible.                       |
| `onPress`       | `() => void` | `() => {}`  | Callback triggered on press.                             |
| `onLongPress`   | `() => void` | `() => {}`  | Callback triggered on long press.                        |
| `activeOpacity` | `number`     | `0.7`       | Sets the opacity for touch feedback.                     |
| `style`         | `ViewStyle`  | `undefined` | Custom style for the container.                          |

## Features

- **Event Handling:** Includes `onPress` and `onLongPress` for interaction handling.
- **Customizable Feedback:** Supports adjustable `activeOpacity` for touch feedback.
- **Styling:** Allows custom styles via the `style` prop.

## Example: Custom Styling

```javascript
<Touchable
  onPress={() => console.log("Styled Touchable Pressed")}
  style={{ padding: 10, backgroundColor: "lightblue", borderRadius: 5 }}
  activeOpacity={0.6}
>
  <Text>Custom Styled Touchable</Text>
</Touchable>
```
