# BaseText

The `BaseText` component provides a customizable and flexible wrapper for text elements, enabling advanced styling and behavior such as font control, text transformations, and event handling.

## Code

```javascript
import React, { forwardRef } from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { BaseTextProps } from '../Types/BaseTextProps';

const BaseText = forwardRef<Text, BaseTextProps>((props, ref) => {
  const {
    testID,
    children,
    fontSize,
    fontFamily,
    uppercase,
    underline,
    strikeout,
    center,
    color,
    numberOfLines,
    onPress,
    onLongPress,
    ellipsizeMode,
    style,
  } = props;

  const baseStyle: any[] = [
    styles.base,
    fontSize && { fontSize },
    uppercase && { textTransform: 'uppercase' },
    underline && { textDecorationLine: 'underline' },
    strikeout && { textDecorationLine: 'line-through' },
    center && { textAlign: 'center' },
    color && { color },
    fontFamily && { fontFamily },
    style,
  ];

  return (
    <Text
      ref={ref}
      style={baseStyle}
      onPress={onPress}
      onLongPress={onLongPress}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      testID={testID}>
      {children}
    </Text>
  );
});

BaseText.displayName = 'BaseText';

export default BaseText;
```

## Usage

### Basic Example

```javascript
import React from "react";
import BaseText from "./BaseText";

const MyComponent = () => {
  return (
    <BaseText fontSize={16} color="blue" uppercase>
      Hello, World!
    </BaseText>
  );
};

export default MyComponent;
```

## Props

| Prop Name       | Type                   | Default     | Description                                               |
| --------------- | ---------------------- | ----------- | --------------------------------------------------------- | ------- | -------------------------------------------------------------------- |
| `fontSize`      | `number`               | `undefined` | Sets the font size of the text.                           |
| `fontFamily`    | `string`               | `undefined` | Applies a custom font family.                             |
| `uppercase`     | `boolean`              | `false`     | Transforms text to uppercase.                             |
| `underline`     | `boolean`              | `false`     | Adds an underline to the text.                            |
| `strikeout`     | `boolean`              | `false`     | Applies a line-through decoration to the text.            |
| `center`        | `boolean`              | `false`     | Aligns the text to the center.                            |
| `color`         | `string`               | `undefined` | Sets the text color.                                      |
| `numberOfLines` | `number`               | `undefined` | Limits the number of lines the text can span.             |
| `onPress`       | `() => void`           | `undefined` | Callback triggered when the text is pressed.              |
| `onLongPress`   | `() => void`           | `undefined` | Callback triggered on a long press.                       |
| `ellipsizeMode` | `"head"                | "middle"    | "tail"                                                    | "clip"` | Determines how text is truncated when it exceeds its container size. |
| `style`         | `StyleProp<TextStyle>` | `undefined` | Custom styles for the text component.                     |
| `testID`        | `string`               | `undefined` | Test ID for the component (useful for testing purposes).  |
| `children`      | `ReactNode`            | `undefined` | The text or elements to be rendered inside the component. |

## Features

- **Customizable Font and Style:** Allows control over font size, family, color, and decoration.
- **Event Handlers:** Supports `onPress` and `onLongPress` for interactivity.
- **Text Transformations:** Easily apply transformations like uppercase and underline.
- **Ellipsis Support:** Handle text overflow with different ellipsis modes.

## Example: Advanced Styling

```javascript
<BaseText
  fontSize={18}
  fontFamily="Roboto-Bold"
  color="darkgreen"
  underline
  strikeout
  center
  numberOfLines={1}
  ellipsizeMode="tail"
  onPress={() => console.log("Text Pressed")}
>
  Advanced Styled Text
</BaseText>
```
