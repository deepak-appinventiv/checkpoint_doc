# ImageWrapper

The `ImageWrapper` component is a lightweight wrapper around React Native's `Image` component. It provides additional flexibility for styling and supports optional props for customization.

## Usage

### Basic Example

```javascript
import React from "react";
import ImageWrapper from "./ImageWrapper";

const MyComponent = () => {
  return (
    <ImageWrapper
      source={require("./path-to-image.png")}
      iconStyle={{ width: 100, height: 100 }}
      resizeMode="cover"
      testID="customImage"
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name    | Type                  | Default     | Description                                                           |
| ------------ | --------------------- | ----------- | --------------------------------------------------------------------- |
| `source`     | `ImageSourcePropType` | `undefined` | The source of the image (local or remote).                            |
| `iconStyle`  | `ImageStyle`          | `undefined` | Custom style for the image.                                           |
| `resizeMode` | `ImageResizeMode`     | `'contain'` | Specifies how the image should be resized (e.g., `cover`, `contain`). |
| `testID`     | `string`              | `undefined` | Identifier for testing purposes.                                      |
| `...rest`    | `ImageProps`          | `undefined` | Any additional props supported by React Native's `Image` component.   |

## Features

- **Customizable Style:** Easily modify the appearance of the image using the `iconStyle` prop.
- **Flexible Sizing:** Supports different resize modes (`contain`, `cover`, `stretch`, etc.).
- **Extensibility:** Allows passing additional `ImageProps` for further customization.

## Example: Dynamic Resizing

```javascript
<ImageWrapper
  source={{ uri: "https://example.com/image.jpg" }}
  iconStyle={{ width: 200, height: 200 }}
  resizeMode="cover"
/>
```

```javascript
<ImageWrapper
  source={require("./local-image.png")}
  iconStyle={{ width: 150, height: 150 }}
  testID="accessibleImage"
  accessible={true}
/>
```
