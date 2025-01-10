# CustomInput

The `CustomInput` component is a highly customizable and interactive text input field designed for modern applications. It supports advanced features such as animated placeholders, error handling, secure text entry, and prefix or suffix icons.

## Usage

### Basic Example

```javascript
import React, { useRef } from "react";
import CustomInput from "./CustomInput";

const MyComponent = () => {
  const inputRef = useRef(null);

  return (
    <CustomInput
      label="Username"
      value=""
      onChangeText={(text) => console.log(text)}
      onFocus={() => console.log("Focused")}
      onBlur={() => console.log("Blurred")}
      ref={inputRef}
      error="Invalid username"
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name              | Type                       | Default            | Description                                                               |
| ---------------------- | -------------------------- | ------------------ | ------------------------------------------------------------------------- |
| `label`                | `string`                   | **Required**       | Label for the input field.                                                |
| `value`                | `string`                   | **Required**       | Current value of the input field.                                         |
| `onBlur`               | `() => void`               | `undefined`        | Callback triggered when the input loses focus.                            |
| `onFocus`              | `() => void`               | `undefined`        | Callback triggered when the input gains focus.                            |
| `maxLength`            | `number`                   | `40`               | Maximum number of characters allowed in the input field.                  |
| `style`                | `ViewStyle`                | `undefined`        | Custom style for the container view.                                      |
| `testID`               | `string`                   | `label-text-input` | Test identifier for the input field.                                      |
| `errorText`            | `string`                   | `null`             | Error message to display below the input field.                           |
| `textInputStyle`       | `StyleProp<TextStyle>`     | `undefined`        | Custom style for the text input.                                          |
| `onChangeText`         | `(_value: string) => void` | `() => {}`         | Callback triggered when the text changes.                                 |
| `onButtonPress`        | `() => void`               | `() => {}`         | Callback triggered when the action button is pressed.                     |
| `button`               | `boolean`                  | `false`            | Whether to display an action button inside the input field.               |
| `icon`                 | `any`                      | `undefined`        | Icon to display inside the input field.                                   |
| `secureTextEntry`      | `boolean`                  | `false`            | Enables secure text entry for password inputs.                            |
| `customIconStyle`      | `ImageStyle`               | `undefined`        | Custom style for the left icon.                                           |
| `customRightIconStyle` | `ImageStyle`               | `undefined`        | Custom style for the right icon or button.                                |
| `error`                | `string`                   | `undefined`        | Error message displayed when validation fails.                            |
| `prefix`               | `string`                   | `undefined`        | Text or symbol to display as a prefix.                                    |
| `disabled`             | `boolean`                  | `false`            | Disables the input field when `true`.                                     |
| `buttonIcon`           | `any`                      | `undefined`        | Icon to display inside the action button.                                 |
| `countryCode`          | `string`                   | `undefined`        | Country code to display inside the input field (useful for phone inputs). |
| `isDropDown`           | `boolean`                  | `false`            | Enables dropdown functionality.                                           |
| `isPhoneNumber`        | `boolean`                  | `false`            | Indicates whether the input field is for phone numbers.                   |
| `autoCapitalize`       | `any`                      | `'none'`           | Controls capitalization behavior of the input field.                      |

## Features

- **Animated Placeholder:** Smooth animations for label placement based on focus and value.
- **Error Handling:** Displays an error message and highlights the border when `error` is provided.
- **Secure Text Entry:** Supports password inputs with secure text entry enabled.
- **Prefix and Suffix Icons:** Customizable icons or text can be displayed at the start or end of the input field.
- **Responsive Design:** Adjusts styles based on device type (e.g., tablet, phone).

## Example: Secure Text Input with Button

```javascript
<CustomInput
  label="Password"
  value=""
  secureTextEntry={true}
  button={true}
  buttonIcon={require("./eye-icon.png")}
  onButtonPress={() => console.log("Toggle visibility")}
/>
```

## Example: Input with Prefix and Country Code

```javascript
<CustomInput
  label="Phone Number"
  value=""
  prefix="+1"
  countryCode="US"
  isPhoneNumber={true}
/>
```

## Example: Error State

```javascript
<CustomInput
  label="Email"
  value=""
  error="Invalid email address"
  textInputStyle={{ borderColor: "red" }}
/>
```
