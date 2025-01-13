# ImageBackground Wrapper

The `ImageBackground` component is a flexible and reusable component for rendering content over a customizable background image. This component supports styling and integrates seamlessly with other  elements.

## Usage

### Basic Example

```javascript
import React from "react";
import ImageBackground from "./ImageBackground";
import { Text } from "react-native";

const MyComponent = () => {
  return (
    <ImageBackground
      imageSource={require("./path-to-image.jpg")}
      imageStyle={{ resizeMode: "cover" }}
    >
      <Text>Hello, World!</Text>
    </ImageBackground>
  );
};

export default MyComponent;
```

## Props

| Prop Name     | Type                  | Default      | Description                                        |
| ------------- | --------------------- | ------------ | -------------------------------------------------- |
| `children`    | `ReactNode`           | `undefined`  | Content to render inside the image background.     |
| `imageSource` | `ImageSourcePropType` | **Required** | Source of the background image.                    |
| `imageStyle`  | `ImageStyle`          | `undefined`  | Style object for customizing the background image. |

## Features

- **Customizable Background:** Use the `imageSource` prop to set any image as the background.
- **Flexible Layout:** Supports `children` to overlay any content over the background image.
- **Styling Options:** Allows additional styling through the `imageStyle` prop.

## Example: Custom Styling

```javascript
<ImageBackground
  imageSource={require("./background.jpg")}
  imageStyle={{ opacity: 0.8 }}
>
  <Text style={{ color: "white", fontSize: 24 }}>Welcome</Text>
</ImageBackground>
```
