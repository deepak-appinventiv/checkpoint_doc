# RadioButton Component

## Description

The `RadioButton` component is a customizable radio button that can display a title and execute a callback function when selected. It allows developers to create interactive user interfaces with selectable options.

---

## Code Implementation

```typescript
// Import React & React Hooks
import React from "react";

// Import React Native - Core component
// None

// Import Base components - ( H7, Touchable)
import Touchable from "@quivio/primitives/touchable";
import { H7 } from "@quivio/primitives/typography";

// Import Custom components
// None

// Import Component's Custom Styles
import Style from "./style";

// Import colors ( containing colour codes )
import colors from "@quivio/utils/colors";

// Initialise RadioButton Component
const RadioButton: React.FC<RadioButtonProps> = ({
  // Get and Set default prop values ( if no prop is passed to component default values will be used)
  title = "", // Sets the button text
  isSelected, // Determines whether the radio button is in selected state or not
  onPress = () => {}, // Custom function to execute when button is pressed. Default to empty function
  // ...props // Remaining/Extra Props
}) => {
  // Return RadioButton Component
  return (
    <Touchable
      baseStyle={Style.container}
      onPress={() => {
        onPress(title);
      }}
      backgroundColor={isSelected ? colors.selectedTab : colors.whiteFFFFFF}
      paddingVertical={11}
      paddingHorizontal={22}
      borderRadius={6}
    >
      <H7 style={isSelected ? Style.textTitleSelected : Style.titleText}>
        {title}
      </H7>
    </Touchable>
  );
};

// Export default RadioButton Component
export default RadioButton;

// Component's props types declaration
interface RadioButtonProps {
  title?: string; // Optional: String value to display title
  onPress?: (title: string) => void; // Optional: Callback function to get the current selected radio button title
  isSelected?: boolean; // Optional: Boolean value to determine the radio button is selected or not
}
```

---

## Props

| Prop         | Type                      | Default     | Description                                            |
| ------------ | ------------------------- | ----------- | ------------------------------------------------------ |
| `title`      | `string`                  | `''`        | The text displayed inside the radio button.            |
| `onPress`    | `(title: string) => void` | `() => {}`  | Callback function executed when the button is pressed. |
| `isSelected` | `boolean`                 | `undefined` | Determines if the button is in the selected state.     |

---

## Styles

### Style Overview

The `RadioButton` component uses styles defined in `./style`. The styles applied are:

- **Container**: Determines the button layout.
- **Title Text**: Defines the style for the button's text, both selected and unselected states.

### Dynamic Styles

- **Background Color**: Changes based on the `isSelected` prop.
- **Text Style**: Applies different styles for selected and unselected states.

---

## Example Usage

```tsx
import React, { useState } from "react";
import RadioButton from "./RadioButton";

const App = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <>
      <RadioButton
        title="Option 1"
        isSelected={selected === "Option 1"}
        onPress={(title) => setSelected(title)}
      />
      <RadioButton
        title="Option 2"
        isSelected={selected === "Option 2"}
        onPress={(title) => setSelected(title)}
      />
    </>
  );
};

export default App;
```

---

## Key Features

1. **Dynamic Background Color**: Changes depending on whether the button is selected.
2. **Customizable Callback**: Execute a function when the button is pressed.
3. **Configurable Text**: Adjust the text and its styling dynamically.

---

## Dependencies

1. `@quivio/primitives/touchable`
2. `@quivio/primitives/typography`
3. `@quivio/utils/colors`
4. Custom styles from `./style`.

---

## Author

Developed by the `Quivio` team.

---
