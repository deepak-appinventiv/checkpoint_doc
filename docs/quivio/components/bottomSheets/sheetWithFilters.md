# SheetWithFilters

The `SheetWithFilters` component is a versatile filter interface that allows users to select and apply multiple filters from different categories. It features a two-column layout with filter types and their corresponding options, along with reset and apply functionality.

## Usage

```typescript
import React from "react";
import SheetWithFilters from "./SheetWithFilters";

const MyComponent = () => {
  const filterData = [
    {
      filter_type: "Department",
      multiselect: true,
      list: [
        { id: "1", name: "Engineering" },
        { id: "2", name: "Marketing" },
      ],
    },
  ];

  const handleSubmit = (selectedFilters) => {
    console.log("Applied filters:", selectedFilters);
  };

  return (
    <SheetWithFilters
      label="Filters"
      subLabel="Select filters"
      _data={filterData}
      onPressSubmit={handleSubmit}
      onPressCross={() => {}}
    />
  );
};
```

## Props

| Prop Name              | Type             | Required | Description                                  |
| ---------------------- | ---------------- | -------- | -------------------------------------------- |
| `_data`                | `FilterType[]`   | Yes      | Array of filter categories and their options |
| `label`                | `string`         | Yes      | Main title of the filter sheet               |
| `subLabel`             | `string`         | Yes      | Subtitle displayed below the main label      |
| `filters`              | `FilterType[]`   | No       | Pre-selected filters                         |
| `onPressCross`         | `() => void`     | Yes      | Callback when close button is pressed        |
| `onPressReset`         | `() => void`     | Yes      | Callback when reset button is pressed        |
| `onPressSubmit`        | `(args) => void` | Yes      | Callback when apply button is pressed        |
| `primaryButtonLabel`   | `string`         | No       | Label for reset button (defaults to "RESET") |
| `secondaryButtonLabel` | `string`         | No       | Label for apply button (defaults to "APPLY") |

## Types

```typescript
interface List {
  id?: string;
  key?: string;
  name: string | number;
}

interface FilterType {
  filter_type: string;
  multiselect: boolean;
  list: List[];
}

interface SelectedFilter {
  filter_type: string;
  multiselect: boolean;
}
```

## Features

### 1. Two-Column Layout

- Left column displays filter categories
- Right column shows options for the selected category

### 2. Selection Handling

- Supports both single and multi-select filters
- Visual feedback with checkboxes for selected items
- Maintains selection state across category switches

### 3. Responsive Design

- Adapts to tablet and phone layouts
- Scrollable lists for both categories and options
- Maximum height constraints for tablet view

### 4. Empty State Handling

- Displays an empty state image and message when no options are available
- Custom empty state message can be configured

### 5. Action Buttons

- Reset button to clear all selections
- Apply button to confirm selected filters
- Close button to dismiss the sheet

## Styling

The component uses a combination of custom styles and design system elements:

- Custom fonts from `@quivio/assets/fonts`
- Color palette from `@quivio/utils`
- Responsive dimensions using `vh` and `screenHeight`
- Custom button components with gradient support

## Example: Pre-selected Filters

```typescript
const MyFilterSheet = () => {
  const initialFilters = [
    {
      filter_type: "Department",
      list: [{ id: "1", name: "Engineering" }],
    },
  ];

  return (
    <SheetWithFilters
      label="Department Filters"
      subLabel="Select departments"
      _data={filterData}
      filters={initialFilters}
      onPressSubmit={(filters) => console.log("Selected:", filters)}
      onPressReset={() => console.log("Filters reset")}
      onPressCross={() => console.log("Sheet closed")}
      primaryButtonLabel="Clear All"
      secondaryButtonLabel="Save"
    />
  );
};
```

## Dependencies

- React Native
- @quivio/utils
- @quivio/assets
- @quivio/components
- @quivio/primitives
- @quivio/localization

## Notes

1. The component maintains internal state for:

   - Currently selected filter category
   - Applied filters across all categories

2. Filter selections are only applied when the submit button is pressed

3. The reset functionality clears all selections but keeps the sheet open

4. The component supports localization through the `localString` utility
