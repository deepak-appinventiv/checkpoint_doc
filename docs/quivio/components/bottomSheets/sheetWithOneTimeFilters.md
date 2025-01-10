# SheetWithOneTimeFilters

The `SheetWithOneTimeFilters` component is a React Native filter interface that combines standard checkbox filters with date-based filtering capabilities. It features a two-column layout with filter types and their corresponding options, including special handling for date selections.

## Usage

```typescript
import React from "react";
import SheetWithOneTimeFilters from "./SheetWithOneTimeFilters";

const MyComponent = () => {
  const filterData = [
    {
      filter_type: "Status",
      multiselect: true,
      list: [
        { id: "1", name: "Active" },
        { id: "2", name: "Inactive" },
      ],
    },
    {
      filter_type: "Active Since",
      multiselect: false,
      list: [
        { id: "from_date", name: "From Date" },
        { id: "to_date", name: "To Date" },
      ],
    },
  ];

  const handleSubmit = (selectedFilters) => {
    console.log("Applied filters:", selectedFilters);
  };

  return (
    <SheetWithOneTimeFilters
      label="Filters"
      subLabel="Select options"
      _data={filterData}
      onPressSubmit={handleSubmit}
    />
  );
};
```

## Props

| Prop Name              | Type                  | Required | Description                                  |
| ---------------------- | --------------------- | -------- | -------------------------------------------- |
| `_data`                | `FilterType[]`        | Yes      | Array of filter categories and their options |
| `label`                | `string`              | Yes      | Main title of the filter sheet               |
| `subLabel`             | `string`              | Yes      | Subtitle displayed below the main label      |
| `filters`              | `FilterType[]`        | No       | Pre-selected filters                         |
| `onPressCross`         | `() => void`          | No       | Callback when close button is pressed        |
| `onPressReset`         | `() => void`          | No       | Callback when reset button is pressed        |
| `onPressSubmit`        | `(args: any) => void` | Yes      | Callback when apply button is pressed        |
| `primaryButtonLabel`   | `string`              | No       | Label for reset button (defaults to "RESET") |
| `secondaryButtonLabel` | `string`              | No       | Label for apply button (defaults to "APPLY") |

## Types

```typescript
interface List {
  id?: string;
  key?: string;
  name: string;
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

interface SheetWithOneTimeFiltersProps {
  label: string;
  filters?: any;
  subLabel: string;
  _data: FilterType[];
  onPressReset?: any;
  onPressCross?: () => void;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPressSubmit: (args: any) => void;
}
```

## Features

### 1. Dual Filter Types

- Standard checkbox-based filters
- Date-range filters with calendar selection
- Support for both single and multi-select options

### 2. Calendar Integration

- Custom calendar modal for date selection
- Date range validation (min/max date constraints)
- Separate handling for "from_date" and "to_date"

### 3. Two-Column Layout

- Filter categories in the left column
- Corresponding options in the right column
- Dynamic rendering based on filter type

### 4. State Management

- Maintains selected filters state
- Handles complex date filter updates
- Supports pre-selected filters

### 5. Visual Feedback

- Active/inactive state indicators
- Custom styling for selected items
- Empty state handling

## Date Filter Functionality

### Date Selection Process

1. User selects a date-type filter
2. Calendar modal appears on option selection
3. Selected dates are validated against min/max constraints
4. Date selections are stored in the filter state

```typescript
// Example of date filter structure
const dateFilter = {
  filter_type: "Date Of Reg.",
  list: [
    { id: "from_date", name: "01-01-2024" },
    { id: "to_date", name: "01-31-2024" },
  ],
};
```

## Special Handlers

### Date Validation

```typescript
const determineMaxDate = (
  data: any[],
  currentDateType: DateType
): string | boolean => {
  if (currentDateType === "to_date") return true;
  // Find and return from_date if exists
  return findFromDate(data) || false;
};
```

### Filter Status Check

```typescript
const determineAvailableStatus = (
  filters: FilterType[],
  searchString: string
): boolean => {
  return (
    filters?.some((filter) =>
      filter.list?.some((item) => item.name === searchString)
    ) || false
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

1. Data Management:

   - Maintains separate states for selected filters and current filter type
   - Handles complex date range selections
   - Supports multi-select for non-date filters

2. Calendar Integration:

   - Uses CustomCalendar component for date selection
   - Implements date range validation
   - Maintains date selection state

3. Filter Types:

   - Regular filters use checkbox selection
   - Date filters open calendar modal
   - Different UI/UX for different filter types

4. Performance Considerations:

   - Uses FlatList for efficient rendering
   - Implements proper key handling
   - Optimizes re-renders with proper state management

5. Accessibility:
   - Supports touch feedback
   - Clear visual indicators
   - Proper contrast for selected/unselected states
