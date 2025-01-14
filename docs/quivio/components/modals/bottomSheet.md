# BottomBaseSheet

The `BottomBaseSheet` is a versatile bottom sheet component that wraps content in a customizable modal, leveraging the `CustomModalWrapper` for enhanced functionality and styling.

## Usage

### Basic Example

```javascript
import React, { useState } from "react";
import { Text, Button } from "react-native";
import { BottomBaseSheet } from "./BottomBaseSheet";

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSheet = () => setIsVisible(!isVisible);

  return (
    <>
      <Button title="Open Bottom Sheet" onPress={toggleSheet} />
      <BottomBaseSheet
        isVisible={isVisible}
        onBackdropPress={toggleSheet}
        topIcon={true}
        onPressIcon={() => console.log("Top icon pressed")}
      >
        <Text>This is the bottom sheet content.</Text>
      </BottomBaseSheet>
    </>
  );
};

export default MyComponent;
```

## Props

| Prop Name         | Type         | Default      | Description                                            |
| ----------------- | ------------ | ------------ | ------------------------------------------------------ |
| `containerStyle`  | `ViewStyle`  | `undefined`  | Custom styles for the main container inside the sheet. |
| `children`        | `ReactNode`  | `undefined`  | Content to render inside the bottom sheet.             |
| `isVisible`       | `boolean`    | **Required** | Controls the visibility of the bottom sheet.           |
| `onBackdropPress` | `() => void` | `undefined`  | Callback triggered when the backdrop is pressed.       |
| `topIcon`         | `boolean`    | `false`      | Determines if the top icon is displayed.               |
| `onPressIcon`     | `() => void` | `undefined`  | Callback triggered when the top icon is pressed.       |
| `topIconTestID`   | `string`     | `undefined`  | Test ID for the top icon, useful for testing.          |
| `testID`          | `string`     | `undefined`  | Test ID for the bottom sheet container.                |

## Features

- **Customizable Design:** Easily style the bottom sheet and its contents using `containerStyle` and other props.
- **Top Icon Support:** Includes an optional top icon with customizable behavior via `onPressIcon`.
- **Backdrop Interactions:** Handles backdrop press events for closing or other custom actions.

## Default Behavior

- The modal wraps content using the `CustomModalWrapper` component.
- The `onBackdropPress` prop is used to close the modal when the backdrop is pressed.
- If `topIcon` is `true`, a default icon (`Icons.passwordUpdate`) is rendered.

## Example: Custom Top Icon and Styles

```javascript
<BottomBaseSheet
  isVisible={true}
  onBackdropPress={() => console.log("Backdrop pressed")}
  topIcon={true}
  onPressIcon={() => console.log("Icon clicked")}
  containerStyle={{ padding: 20, backgroundColor: "white" }}
>
  <Text>Custom styled bottom sheet content.</Text>
</BottomBaseSheet>
```

## Dependencies

- `react-native`
- `CustomModalWrapper`
- `ViewWrapper`
- `ImageWrapper`
- `Icons` (imported from `../../../assets`)

## Styling

Styles for the component are imported from `./styles` and include:

- `wrapperStyle`: Default styles for the modal wrapper.
- `container`: Styles applied to the main content container.
