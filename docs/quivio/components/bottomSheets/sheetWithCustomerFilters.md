# SheetWithCustomerFilters

The `SheetWithCustomerFilters` component provides a user-friendly interface to apply filters, including date and multi-select options, within a sheet-like layout. This component integrates multiple sub-components like buttons, modals, and calendars to create a cohesive user experience.

## Usage

### Example

```javascript
import React from "react";
import SheetWithCustomerFilters from "./SheetWithCustomerFilters";

const MyComponent = () => {
  const handleReset = () => {
    console.log("Filters Reset");
  };

  const handleSubmit = (filters) => {
    console.log("Filters Submitted:", filters);
  };

  const handleCross = () => {
    console.log("Close Filter Sheet");
  };

  const sampleFilters = [
    {
      filter_type: "Category",
      multiselect: true,
      list: [
        { id: "1", name: "Option 1" },
        { id: "2", name: "Option 2" },
      ],
    },
  ];

  return (
    <SheetWithCustomerFilters
      label="Apply Filters"
      subLabel="Select your preferences"
      _data={sampleFilters}
      onPressReset={handleReset}
      onPressSubmit={handleSubmit}
      onPressCross={handleCross}
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name              | Type             | Default      | Description                                          |
| ---------------------- | ---------------- | ------------ | ---------------------------------------------------- |
| `label`                | `string`         | **Required** | The title of the sheet.                              |
| `subLabel`             | `string`         | **Required** | The subtitle or description of the sheet.            |
| `_data`                | `FilterType[]`   | **Required** | The array of filter data containing types and lists. |
| `filters`              | `any`            | `undefined`  | Current applied filters.                             |
| `onPressReset`         | `() => void`     | `() => {}`   | Callback for reset action.                           |
| `onPressCross`         | `() => void`     | `() => {}`   | Callback for closing the sheet.                      |
| `onPressSubmit`        | `(args) => void` | **Required** | Callback to handle filter submission.                |
| `primaryButtonLabel`   | `string`         | `"RESET"`    | Label for the primary (reset) button.                |
| `secondaryButtonLabel` | `string`         | `"APPLY"`    | Label for the secondary (apply) button.              |

## Sub-Components

### Calendar Integration

The component uses a `CustomCalendar` to handle date-specific filters. The `CustomCalendar` provides features like date selection, min/max date constraints, and default date handling.

### Buttons

- **Primary Button:** Used for resetting filters.
- **Secondary Button:** Used for applying filters.

### Modal

A `PopUpModal` is used to display the calendar for date selection.

## Internal Logic

### Filter State Management

The component maintains a state for selected filters and updates them dynamically as the user interacts with the UI. Filters are categorized by type (e.g., `Date`, `Status`).

### Helper Functions

- **determineAvailableStatus:** Checks if a filter option is already selected.
- **containsDateWord:** Determines if a filter type relates to dates.
- **determineDateValue:** Fetches the value of a selected date.
- **determineMaxDate / determineMinDate:** Calculates valid date ranges based on the current selection.

### Dynamic Rendering

The component dynamically renders filter options and handles both multi-select and date-related filters using `_listRenderItem` and `_renderItem` functions.

## Notes

- Ensure `CustomCalendar`, `BaseButton`, `PopUpModal`, and other sub-components are correctly imported and styled.
- Use appropriate styling through the provided `styles` object for a cohesive design.
