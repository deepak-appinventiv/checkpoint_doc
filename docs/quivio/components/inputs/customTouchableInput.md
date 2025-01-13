# CustomTouchableInput

## Description

`CustomTouchableInput` is a component that provides a custom touchable input field with various features such as animations, error handling, and dynamic styling. This component supports prefixes, icons, and interactive labels, making it suitable for modern UI requirements.

---

## Usage

### Import Component

```javascript
import CustomTouchableInput from "path-to-your-component";
```

### Props

| Prop                   | Type       | Default Value                    | Description                                               |
| ---------------------- | ---------- | -------------------------------- | --------------------------------------------------------- |
| `label`                | `string`   | `undefined`                      | Label text displayed above the input.                     |
| `value`                | `string`   | `undefined`                      | Value of the input field.                                 |
| `onBlur`               | `function` | `undefined`                      | Callback triggered when the input loses focus.            |
| `onFocus`              | `function` | `undefined`                      | Callback triggered when the input gains focus.            |
| `maxLength`            | `number`   | `40`                             | Maximum number of characters allowed in the input.        |
| `textInputStyle`       | `object`   | `undefined`                      | Custom styles for the `TextInput`.                        |
| `onChangeText`         | `function` | `() => {}`                       | Callback triggered when the input value changes.          |
| `testID`               | `string`   | `${label}-text-input`            | Identifier for testing purposes.                          |
| `onButtonPress`        | `function` | `() => {}`                       | Callback triggered when the associated button is pressed. |
| `error`                | `string`   | `undefined`                      | Error message displayed below the input.                  |
| `secureTextEntry`      | `boolean`  | `false`                          | Hides the input text for sensitive fields like passwords. |
| `prefix`               | `string`   | `undefined`                      | Prefix text displayed before the input value.             |
| `disabled`             | `boolean`  | `false`                          | Disables user interaction with the input.                 |
| `countryCode`          | `string`   | `undefined`                      | Displays a country code before the input field.           |
| `customRightIconStyle` | `object`   | `undefined`                      | Custom styles for the right-side button icon.             |
| `errorIconStyle`       | `object`   | `styles.errorIconStyleDimension` | Styles for the error icon.                                |
| `products`             | `array`    | `undefined`                      | List of products to be rendered below the input.          |
| `icon`                 | `object`   | `undefined`                      | Icon to display on the left side of the input field.      |
| `buttonIcon`           | `object`   | `undefined`                      | Icon for the right-side button.                           |

---

## Example

```javascript
<CustomTouchableInput
  label="Username"
  value=""
  onChangeText={(text) => console.log(text)}
  onButtonPress={() => console.log("Button pressed")}
  error="Invalid username"
  prefix="@"
  icon={Icons.userIcon}
  buttonIcon={Icons.clearIcon}
  countryCode="+1"
  maxLength={30}
  textInputStyle={{ color: "blue" }}
/>
```

---

## Key Features

### Animated Placeholder

The placeholder text animates to adjust its position and size when the input gains or loses focus.

### Error Handling

If an error message is provided, it displays an error icon and a message below the input field.

### Support for Prefix and Country Code

You can prepend a prefix or a country code to the input field.

### Customizable Styles

You can provide custom styles for the input, icons, and error message.

---

## Helper Functions

### `getPaddingValue`

Determines the horizontal padding of the input field based on the presence of a prefix or device type.

```javascript
const getPaddingValue = (prefix) => {
  if (prefix) return vw(6);
  if (isTablet()) return vw(5);
  return vw(20);
};
```

### `getLabelLeftPosition`

Calculates the left position of the animated label based on the presence of an icon or country code.

```javascript
const getLabelLeftPosition = (icon, countryCode) => {
  if (icon || countryCode) {
    return isTablet() ? vh(60) : vh(52);
  }
  return vh(20);
};
```

### `renderProductList`

Renders a list of products below the input field if the `products` prop is provided.

```javascript
const renderProductList = (products) => {
  if (products?.length > 0) {
    return (
      <ViewWrapper customStyle={styles.productContainer}>
        {products?.map((_item) => (
          <ViewWrapper
            customStyle={styles.itemContainer}
            key={_item?.product_id}
          >
            <ViewWrapper customStyle={styles.dotView} />
            <H6 style={{ marginLeft: normalize(8) }}>{_item?.product_name}</H6>
          </ViewWrapper>
        ))}
      </ViewWrapper>
    );
  }
  return null;
};
```

### `renderError`

Displays the error icon and message if an error is present.

```javascript
const renderError = (errorIconStyle, error) => {
  return (
    <ViewWrapper customStyle={styles.imgStyle}>
      <ImageWrapper source={Icons.errorIcon} style={errorIconStyle} />
      <H5 style={styles.errorText}>{error}</H5>
    </ViewWrapper>
  );
};
```
