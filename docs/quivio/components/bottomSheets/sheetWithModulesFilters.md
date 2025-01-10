# ModuleFilterModal

The `ModuleFilterModal` component is a React Native modal component that provides a customizable filter interface with checkbox selections, apply and reset functionality, and ref-based control for opening and closing the modal.

## Usage

```typescript
import React, { useRef } from "react";
import ModuleFilterModal from "./ModuleFilterModal";

const MyComponent = () => {
  const modalRef = useRef(null);

  const fieldData = [
    {
      id: "1",
      name: "Filter Option 1",
      is_active: true,
    },
    {
      id: "2",
      name: "Filter Option 2",
      is_active: false,
    },
  ];

  const handleSubmit = (selectedFilters, updatedField) => {
    console.log("Applied filters:", selectedFilters);
  };

  return (
    <>
      <ModuleFilterModal
        ref={modalRef}
        heading="Filters"
        subHeading="Select options"
        fieldData={fieldData}
        onSubmitButtonPress={handleSubmit}
      />
      <Button onPress={() => modalRef.current?.open()} title="Open Filter" />
    </>
  );
};
```

## Props

| Prop Name             | Type                                                  | Required | Description                           |
| --------------------- | ----------------------------------------------------- | -------- | ------------------------------------- |
| `heading`             | `string`                                              | No       | Main title of the filter modal        |
| `subHeading`          | `string`                                              | No       | Subtitle displayed below the heading  |
| `fieldData`           | `Field[]`                                             | No       | Array of filter options               |
| `filtersApplied`      | `any[]`                                               | No       | Currently applied filters             |
| `testID`              | `string`                                              | No       | Test identifier for the modal         |
| `onSubmitButtonPress` | `(moduleFilterApplied: any[], field: any[]) => void`  | No       | Callback when apply button is pressed |
| `onResetButtonPress`  | `(activeFilters: any[], updatedArray: any[]) => void` | No       | Callback when reset button is pressed |
| `onResetFilter`       | `() => void`                                          | No       | Callback for filter reset             |

## Types

```typescript
interface Field {
  id: string;
  name: string;
  is_active: boolean;
}

interface ModuleFilterModalProps {
  field?: Field;
  heading?: string;
  filtersApplied?: any;
  fieldData?: any;
  subHeading?: string;
  testID?: string;
  onSubmitButtonPress?: (moduleFilterApplied: any[], field: any[]) => void;
  onResetFilter?: () => void;
  onResetButtonPress?: (activeFilters: any[], updatedArray: any[]) => void;
}

interface ListType {
  id: number;
  name: string;
}
```

## Features

### 1. Ref-Based Control

- Exposes `open()` and `close()` methods through ref
- Allows programmatic control of modal visibility

### 2. Checkbox Selection

- Visual feedback for selected/unselected states
- Maintains selection state across modal sessions
- Updates font weight and color based on selection

### 3. Modal Behavior

- Backdrop press handling for dismissal
- Keyboard avoidance support
- Custom styling options

### 4. Action Buttons

- Apply button (enabled when filters are selected)
- Reset button (enabled when filters are applied)
- Close button in header

## Imperative Handle Methods

```typescript
{
  open: () => void;  // Opens the modal
  close: () => void; // Closes the modal
}
```

## Styling

The component utilizes:

- Custom fonts from `@quivio/assets/fonts`
- Color system from `@quivio/utils`
- Responsive dimensions using `normalize` and `vh`
- Custom modal wrapper for consistent presentation

## Example: With Pre-selected Filters

```typescript
const MyFilterModal = () => {
  const modalRef = useRef(null);

  const initialData = [
    {
      id: "1",
      name: "Option 1",
      is_active: true,
    },
    {
      id: "2",
      name: "Option 2",
      is_active: true,
    },
  ];

  const handleSubmit = (selectedFilters, updatedField) => {
    console.log("Selected filters:", selectedFilters);
    console.log("Updated field data:", updatedField);
  };

  const handleReset = (activeFilters, updatedArray) => {
    console.log("Reset to:", activeFilters);
    console.log("Updated array:", updatedArray);
  };

  return (
    <ModuleFilterModal
      ref={modalRef}
      heading="Filter Options"
      subHeading="Select your preferences"
      fieldData={initialData}
      onSubmitButtonPress={handleSubmit}
      onResetButtonPress={handleReset}
      testID="filter-modal"
    />
  );
};
```

## Dependencies

- React Native
- @quivio/utils
- @quivio/assets
- @quivio/primitives
- @quivio/localization

## Notes

1. State Management:

   - Internal state for field data
   - Tracks active filters separately
   - Maintains modal visibility state

2. Reset Behavior:

   - Sets all options to active state
   - Triggers reset callback with updated data
   - Automatically closes modal

3. Submit Behavior:

   - Passes selected filters and updated field data
   - Closes modal after submission
   - Disabled when no filters are selected

4. The component uses the `forwardRef` pattern for external control

5. Supports localization through the `localString` utility
