# BaseView

The `BaseView` component is a flexible wrapper designed for layout customization. It offers various styling options to align, justify, and structure child components, making it highly adaptable for different UI requirements.

## Code

```javascript
/* eslint-disable react/display-name */
import React, { ReactNode } from "react";
import { colors } from "../../utils";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

export const BaseView = (props: Props) => {
  const {
    self,
    row,
    wrap,
    center,
    around,
    evenly,
    between,
    children,
    customStyle,
    isDisabled = true,
    activeOpacity = 0.7,
    hitSlop,
    rowReverse,
    onPress = () => {},
    testID,
    ...rest
  } = props;

  const common: StyleProp<ViewStyle> = [
    wrap && { flexWrap: "wrap" },
    self && { alignSelf: "center" },
    row && { flexDirection: "row" },
    center && { alignItems: "center" },
    around && { justifyContent: "space-around" },
    evenly && { justifyContent: "space-evenly" },
    between && { justifyContent: "space-between" },
    rowReverse && { flexDirection: "row-reverse" },
    props.alignStart && { alignItems: "flex-start" },
    props.white && { backgroundColor: colors.whiteFFFFFF },
    props.black && { backgroundColor: colors.black000000 },
    props.justifyCenter && { justifyContent: "center" },
    customStyle,
  ];

  return (
    <TouchableOpacity
      hitSlop={hitSlop}
      {...rest}
      style={common}
      testID={testID}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={isDisabled}
    >
      {children}
    </TouchableOpacity>
  );
};
```

## Typescript

```typescript
interface Props {
  row?: boolean;
  onPress?: any;
  self?: boolean;
  hitSlop?: any;
  wrap?: boolean;
  white?: boolean;
  black?: boolean;
  center?: boolean;
  around?: boolean;
  evenly?: boolean;
  between?: boolean;
  activeOpacity?: any;
  rowReverse?: boolean;
  isDisabled?: boolean;
  alignStart?: boolean;
  children?: ReactNode;
  justifyCenter?: boolean;
  customStyle?: StyleProp<ViewStyle>;
  testID?: string;
}
```

## Usage

### Basic Example

```javascript
import React from "react";
import { Text } from "react-native";
import { BaseView } from "./BaseView";

const MyComponent = () => {
  return (
    <BaseView row center customStyle={{ padding: 10 }}>
      <Text>Child 1</Text>
      <Text>Child 2</Text>
    </BaseView>
  );
};

export default MyComponent;
```

## Props

| Prop Name       | Type                   | Default     | Description                                              |
| --------------- | ---------------------- | ----------- | -------------------------------------------------------- |
| `row`           | `boolean`              | `false`     | Sets `flexDirection` to `row` for horizontal alignment.  |
| `wrap`          | `boolean`              | `false`     | Enables `flexWrap` for wrapping child components.        |
| `center`        | `boolean`              | `false`     | Centers child components along both axes.                |
| `around`        | `boolean`              | `false`     | Applies `space-around` to justify content.               |
| `evenly`        | `boolean`              | `false`     | Applies `space-evenly` to justify content.               |
| `between`       | `boolean`              | `false`     | Applies `space-between` to justify content.              |
| `self`          | `boolean`              | `false`     | Aligns the component itself to the center.               |
| `rowReverse`    | `boolean`              | `false`     | Sets `flexDirection` to `row-reverse`.                   |
| `white`         | `boolean`              | `false`     | Sets the background color to white.                      |
| `black`         | `boolean`              | `false`     | Sets the background color to black.                      |
| `justifyCenter` | `boolean`              | `false`     | Justifies content to the center.                         |
| `alignStart`    | `boolean`              | `false`     | Aligns items to the start of the cross-axis.             |
| `isDisabled`    | `boolean`              | `true`      | Disables touch interactions when `true`.                 |
| `activeOpacity` | `number`               | `0.7`       | Sets the opacity for touch feedback.                     |
| `onPress`       | `() => void`           | `() => {}`  | Callback triggered on press.                             |
| `hitSlop`       | `object`               | `undefined` | Increases the touchable area of the component.           |
| `customStyle`   | `StyleProp<ViewStyle>` | `undefined` | Custom styles for the container.                         |
| `testID`        | `string`               | `undefined` | Test ID for the component (useful for testing purposes). |
| `children`      | `ReactNode`            | `undefined` | Child elements to render inside the component.           |

## Features

- **Flexible Layout:** Configure alignment, justification, and wrapping easily.
- **Touchable Support:** Supports `onPress` with customizable touch feedback.
- **Custom Styles:** Easily extend or override default styles using `customStyle`.

## Example: Custom Styling

```javascript
<BaseView
  row
  center
  customStyle={{ backgroundColor: "lightgray", padding: 20 }}
  onPress={() => console.log("Pressed")}
  activeOpacity={0.5}
>
  <Text>Custom Styled View</Text>
</BaseView>
```
