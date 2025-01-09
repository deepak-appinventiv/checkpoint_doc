# SheetWithBasicSelectors

The `SheetWithBasicSelectors` component is a versatile and customizable sheet designed to display a list of selectable items. Each item includes an icon and a title, with optional separators between entries.

## Usage

### Basic Example

```javascript
import React from "react";
import SheetWithBasicSelectors from "./SheetWithBasicSelectors";

const MyComponent = () => {
  const data = [
    { id: "1", icon: require("./path-to-icon1.png"), title: "Option 1" },
    { id: "2", icon: require("./path-to-icon2.png"), title: "Option 2" },
  ];

  const handlePressOption = (item) => {
    console.log("Selected Item:", item);
  };

  return (
    <SheetWithBasicSelectors
      data={data}
      onPressOption={handlePressOption}
      customContainerStyle={{ padding: 10 }}
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name              | Type             | Default     | Description                                           |
| ---------------------- | ---------------- | ----------- | ----------------------------------------------------- |
| `data`                 | `any`            | `undefined` | Array of objects representing the selectable items.   |
| `customContainerStyle` | `ViewStyle`      | `undefined` | Custom styles to apply to the container.              |
| `onPressOption`        | `(item) => void` | `undefined` | Callback function triggered when an item is selected. |

## Features

- **Selectable Items:** Displays a list of items, each with an icon and title.
- **Custom Styling:** Supports custom container styles for flexibility.
- **Actionable Items:** Includes a callback to handle item selection.
- **Dynamic Rendering:** Automatically adds separators between items, excluding the last item.

## Example: Custom Styling

```javascript
<SheetWithBasicSelectors
  data={[
    { id: "1", icon: require("./icon1.png"), title: "Option A" },
    { id: "2", icon: require("./icon2.png"), title: "Option B" },
  ]}
  customContainerStyle={{ backgroundColor: "lightgray" }}
  onPressOption={(item) => console.log("Pressed:", item)}
/>
```

## Notes

- Ensure that each item in the `data` array includes an `id`, `icon`, and `title` property.
- The `onPressOption` callback receives the selected item as an argument.
- Custom styles can be passed to the `customContainerStyle` prop to override default container styling.

## Example Data

```javascript
const sampleData = [
  { id: "1", icon: require("./icon1.png"), title: "Item 1" },
  { id: "2", icon: require("./icon2.png"), title: "Item 2" },
  { id: "3", icon: require("./icon3.png"), title: "Item 3" },
];
```
