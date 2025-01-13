# ImageCarousel

The `ImageCarousel` component is a dynamic, auto-scrolling carousel designed for applications. It displays a series of images with descriptive text and includes smooth scrolling animations.

## Usage

### Basic Example

```javascript
import React from "react";
import ImageCarousel from "./ImageCarousel";

const MyComponent = () => {
  return (
    <ImageCarousel
      containerTestID="carouselContainer"
      animatedTestID="carouselAnimatedView"
      imgWrapperTestID="imageWrapper"
      isKeyboardVisible={false}
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name           | Type      | Default     | Description                                                         |
| ------------------- | --------- | ----------- | ------------------------------------------------------------------- |
| `containerTestID`   | `string`  | `undefined` | Test ID for the outer container view.                               |
| `animatedTestID`    | `string`  | `undefined` | Test ID for the animated carousel view.                             |
| `imgWrapperTestID`  | `string`  | `undefined` | Test ID for each image wrapper.                                     |
| `isKeyboardVisible` | `boolean` | `false`     | Determines if images should be hidden when the keyboard is visible. |

## Features

- **Auto-Scrolling:** The carousel smoothly scrolls through the images in a continuous loop.
- **Customizable Content:** Images and descriptions are provided dynamically from the `images` array.
- **Responsive Design:** The layout adapts to various screen widths using `Dimensions` and `vw`.
- **Test IDs:** Supports custom test IDs for easier testing and debugging.

## Example: Custom Test IDs

```javascript
<ImageCarousel
  containerTestID="customCarouselContainer"
  animatedTestID="customAnimatedView"
  imgWrapperTestID="customImageWrapper"
  isKeyboardVisible={true}
/>
```

## Implementation Details

### Animation

The component uses an `Animated.Value` for smooth horizontal scrolling. The scroll animation loops continuously and resets when reaching the end of the images.

### Images

The `images` array defines the content of the carousel. Each image object contains:

- `id`: A unique identifier.
- `src`: The image source (imported from assets).
- `description`: Text displayed alongside the image.

### Styling

The `styles.imageContainer`, `styles.image`, and `styles.textStyle` objects manage the visual appearance of the carousel.

### Example: Adding a New Image

To add a new image, include it in the `images` array:

```javascript
const images = [...{ id: "6", src: Icons.newIcon, description: "New Feature" }];
```
