# CustomModalWrapper

The `CustomModalWrapper` is a reusable modal component built on top of `react-native-modal`, providing enhanced customization options and consistent styling for modal dialogs.

## Usage

### Basic Example

```javascript
import React from "react";
import CustomModalWrapper from "./CustomModalWrapper";

const MyComponent = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <CustomModalWrapper
        isVisible={isModalVisible}
        onBackPress={toggleModal}
        onBackPressDrop={toggleModal}
      >
        <Text>This is a custom modal!</Text>
      </CustomModalWrapper>
      <Button title="Toggle Modal" onPress={toggleModal} />
    </>
  );
};

export default MyComponent;
```

## Props

| Prop Name          | Type         | Default      | Description                                             |
| ------------------ | ------------ | ------------ | ------------------------------------------------------- |
| `isVisible`        | `boolean`    | **Required** | Controls the visibility of the modal.                   |
| `modalCustomStyle` | `ViewStyle`  | `undefined`  | Custom styles applied to the modal container.           |
| `onBackPress`      | `() => void` | `undefined`  | Callback for the back button press event.               |
| `onBackPressDrop`  | `() => void` | `undefined`  | Callback for when the backdrop is pressed.              |
| `onModalHide`      | `() => void` | `undefined`  | Callback triggered when the modal has finished hiding.  |
| `onModalShow`      | `() => void` | `undefined`  | Callback triggered when the modal has finished showing. |
| `children`         | `ReactNode`  | `undefined`  | Content to render inside the modal.                     |
| `...rest`          | `ModalProps` | `undefined`  | Additional props forwarded to `react-native-modal`.     |

## Features

- **Backdrop and Animation:** Includes a semi-transparent backdrop with animation support.
- **Customizable Styles:** Allows overriding of modal container styles using `modalCustomStyle`.
- **Event Handlers:** Supports event handlers for modal lifecycle events such as `onModalHide` and `onModalShow`.
- **Accessibility:** Utilizes native drivers for smoother animations and better performance.

## Default Behavior

- The backdrop color is set to `colors.greyModalBack`.
- Backdrop opacity is configured at `0.6`.
- Animations are optimized by hiding modal content while animating.

## Example: Custom Styling

```javascript
<CustomModalWrapper
  isVisible={true}
  modalCustomStyle={{ borderRadius: 20, margin: 10 }}
  onBackPress={() => console.log("Back button pressed")}
  onBackPressDrop={() => console.log("Backdrop pressed")}
>
  <Text>Custom styled modal content!</Text>
</CustomModalWrapper>
```

## Dependencies

This component relies on `react-native-modal` for modal functionalities and `colors` from the `utils` directory for consistent styling.
