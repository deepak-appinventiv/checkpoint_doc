# CustomCalendar

The `CustomCalendar` component is a fully customizable calendar designed to allow users to select a date range efficiently. It provides support for showing date ranges, marking selected dates, and applying custom styles and components, enhancing the user experience.

## Usage

### Basic Example

```javascript
import React from "react";
import CustomCalendar from "./CustomCalendar";

const MyComponent = () => {
  const handleCrossPress = () => {
    console.log("Cross button pressed");
  };

  const handleApply = (selectedDate) => {
    console.log("Selected Date:", selectedDate);
  };

  return (
    <CustomCalendar
      showTitle={true}
      showFooter={true}
      defaultSelected="01-15-2025"
      onCrossPress={handleCrossPress}
      getSelectedDate={handleApply}
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name         | Type       | Default    | Description                                                                       |
| ----------------- | ---------- | ---------- | --------------------------------------------------------------------------------- |
| `showTitle`       | `boolean`  | `true`     | Determines whether the title and subtitle should be shown.                        |
| `showFooter`      | `boolean`  | `true`     | Determines whether the footer buttons should be shown.                            |
| `hideExtraDays`   | `boolean`  | `false`    | Hides extra days from the previous and next months.                               |
| `hideDaysNames`   | `boolean`  | `false`    | Hides the names of the days of the week (Sun, Mon, etc.).                         |
| `defaultSelected` | `string`   | `''`       | Default selected date in MM-DD-YYYY format.                                       |
| `onCrossPress`    | `function` | `() => {}` | Callback triggered when the cross button is pressed.                              |
| `getSelectedDate` | `function` | `() => {}` | Callback triggered when the "Apply" button is pressed, passing the selected date. |
| `minDate`         | `string`   | `false`    | Minimum selectable date in MM-DD-YYYY format.                                     |
| `maxDate`         | `string`   | `false`    | Maximum selectable date in MM-DD-YYYY format.                                     |

## Features

- **Customizable Header:** Allows the display of a header with a title and subtitle.
- **Date Selection:** Users can select dates, and the selected date is marked visually.
- **Date Range Limitation:** Supports min and max date restrictions.
- **Footer Buttons:** Includes customizable footer buttons for reset and apply actions.

## Default Props

The following default props are provided:

```javascript
CustomCalendar.defaultProps = {
  showTitle: true,
  showFooter: true,
  hideExtraDays: false,
  hideDaysNames: false,
  defaultSelected: "",
  onCrossPress: () => {},
  getSelectedDate: () => {},
  minDate: false,
  maxDate: false,
};
```

## Styling

The component uses a combination of inline styles and predefined styles from the `Style` object and `Theme` for customization. You can override the default styles using the `customStyle` prop in the individual components.

### Example: Custom Styling

```javascript
<CustomCalendar
  showTitle={true}
  showFooter={false}
  defaultSelected="02-28-2025"
  onCrossPress={() => console.log("Cross pressed")}
  getSelectedDate={(date) => console.log("Selected Date:", date)}
  minDate="01-01-2025"
  maxDate="12-31-2025"
/>
```
