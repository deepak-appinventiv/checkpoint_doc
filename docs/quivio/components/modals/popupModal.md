# PopUpModal

The `PopUpModal` is a flexible modal component designed to display custom content. It leverages the `CustomModalWrapper` for styling and functionality.

## Usage

### Basic Example

```javascript
import React, { useState } from "react";
import { Text, Button } from "react-native";
import { PopUpModal } from "./PopUpModal";

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => setIsVisible(!isVisible);

  return (
    <>
      <Button title="Open Modal" onPress={toggleModal} />
      <PopUpModal isVisible={isVisible} onBackPressDrop={toggleModal}>
        <Text>This is the modal content.</Text>
      </PopUpModal>
    </>
  );
};

export default MyComponent;
```

## Props

| Prop Name          | Type         | Default      | Description                                      |
| ------------------ | ------------ | ------------ | ------------------------------------------------ |
| `isVisible`        | `boolean`    | **Required** | Controls the visibility of the modal.            |
| `onBackPressDrop`  | `() => void` | **Required** | Callback triggered when the backdrop is pressed. |
| `children`         | `ReactNode`  | `undefined`  | Content to render inside the modal.              |
| `modalCustomStyle` | `ViewStyle`  | `undefined`  | Custom styles for the modal container.           |
| `testID`           | `string`     | `undefined`  | Test ID for the modal (useful for testing).      |

## Features

- **Customizable Content:** Allows rendering of custom content via the `children` prop.
- **Backdrop Interaction:** Handles backdrop press events to close or trigger custom actions.
- **Accessibility:** Supports `testID` for testing purposes.

## Example: Custom Styling

```javascript
<PopUpModal
  isVisible={true}
  onBackPressDrop={() => console.log("Backdrop pressed")}
  modalCustomStyle={{ padding: 20, backgroundColor: "white", borderRadius: 10 }}
>
  <Text>Custom styled modal content.</Text>
</PopUpModal>
```

## Dependencies

- `React`
- `CustomModalWrapper` (for core modal functionality and styling)

## Styling

Styling for the modal can be customized using the `modalCustomStyle` prop, allowing developers to apply their own styles to the modal container.
