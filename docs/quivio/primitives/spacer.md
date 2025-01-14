# Spacer

The `Spacer` component is a utility component designed to add spacing between elements in a React Native layout. It supports customizable dimensions, full-width styling, and flexible usage options.

## Code

```javascript
import React from 'react';
import { ViewStyle } from 'react-native';
import { SpacerProps } from '../@types/spacesTypes';
import ViewWrapper from '../../primitives/baseView';

const SIZES = {
  smallest: 5,
  small: 10,
  default: 15,
  medium: 20,
  large: 25,
  largest: 40,
};

const getDimensions = ({
  smallest,
  small,
  medium,
  large,
  largest,
}: SpacerProps) => {
  let type: keyof typeof SIZES = 'default';
  if (smallest) type = 'smallest';
  if (small) type = 'small';
  if (medium) type = 'medium';
  if (large) type = 'large';
  if (largest) type = 'largest';

  const size = SIZES[type];
  return {
    width: size,
    height: size,
  };
};

const Spacer: React.FC<SpacerProps> = (props) => {
  const { fullWidth, style } = props;

  const dimensions = getDimensions(props);
  const baseStyle: ViewStyle[] = [
    dimensions,
    fullWidth ? { width: '100%' } : {},
    style || {},
  ];

  return <ViewWrapper customStyle={baseStyle} testID={props.testID}/>;
};

export default Spacer;
```

## Usage

### Basic Example

```javascript
import React from "react";
import { Spacer } from "./Spacer";

const MyComponent = () => {
  return (
    <>
      <Text>Element 1</Text>
      <Spacer medium />
      <Text>Element 2</Text>
    </>
  );
};

export default MyComponent;
```

## Props

| Prop Name   | Type        | Default     | Description                                                     |
| ----------- | ----------- | ----------- | --------------------------------------------------------------- |
| `smallest`  | `boolean`   | `false`     | Sets the spacing to the smallest predefined size.               |
| `small`     | `boolean`   | `false`     | Sets the spacing to the small predefined size.                  |
| `medium`    | `boolean`   | `false`     | Sets the spacing to the medium predefined size.                 |
| `large`     | `boolean`   | `false`     | Sets the spacing to the large predefined size.                  |
| `largest`   | `boolean`   | `false`     | Sets the spacing to the largest predefined size.                |
| `fullWidth` | `boolean`   | `false`     | Expands the spacer to take up the full width of its container.  |
| `style`     | `ViewStyle` | `undefined` | Custom styles for the spacer component.                         |
| `testID`    | `string`    | `undefined` | Test ID for the spacer component (useful for testing purposes). |

## Features

- **Predefined Sizes:** Simplifies spacing by using predefined size categories.
- **Customizable Styles:** Accepts custom styles for unique layout requirements.
- **Full-Width Support:** Easily expands the spacer to fill the width of its container.

## Example: Custom Styling

```javascript
<Spacer
  style={{ backgroundColor: "lightgray" }}
  medium
  fullWidth
  testID="custom-spacer"
/>
```
