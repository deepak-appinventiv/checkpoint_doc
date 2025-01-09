# MultiFieldModal

The `MultiFieldModal` component provides a customizable modal designed to handle multi-field permissions. It allows users to toggle permission states and submit or cancel their selections. The modal supports dynamic data rendering and robust state management.

## Usage

### Basic Example

```javascript
import React, { useRef } from "react";
import MultiFieldModal from "./MultiFieldModal";

const MyComponent = () => {
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    const mockData = {
      id: "1",
      name: "Sample Role",
      is_active: false,
      permissions: [
        { id: "view", name: "View", is_active: false },
        { id: "edit", name: "Edit", is_active: false },
      ],
    };
    modalRef.current?.open(mockData, 0);
  };

  const handleSubmit = (field, index) => {
    console.log("Submitted Field:", field);
  };

  const handleCancel = (field, index) => {
    console.log("Cancelled Field:", field);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      <MultiFieldModal
        ref={modalRef}
        subHeading="Manage permissions"
        onSubmitButtonPress={handleSubmit}
        onCancelPermissions={handleCancel}
      />
    </>
  );
};

export default MyComponent;
```

## Props

| Prop Name             | Type                           | Default     | Description                                                                |
| --------------------- | ------------------------------ | ----------- | -------------------------------------------------------------------------- |
| `subHeading`          | `string`                       | `undefined` | Subheading text to display below the title.                                |
| `onSubmitButtonPress` | `(field: Role, index: number)` | `undefined` | Callback function triggered when the submit button is pressed.             |
| `onCancelPermissions` | `(field: Role, index: number)` | `undefined` | Callback function triggered when the cancel button or backdrop is pressed. |

## Features

- **Dynamic Permissions:** Displays a list of permissions that can be toggled on or off.
- **State Management:** Ensures seamless updates to permission states with active and temporary states.
- **Customizable Callbacks:** Allows parent components to define behaviors for submission and cancellation.
- **Keyboard Avoidance:** Ensures proper rendering when the keyboard is open.

## Example: Custom Styling

```javascript
<MultiFieldModal
  ref={modalRef}
  subHeading="Custom Permissions"
  onSubmitButtonPress={(field, index) => console.log("Submitted:", field)}
  onCancelPermissions={(field, index) => console.log("Cancelled:", field)}
  customStyles={{ wrapperStyle: { backgroundColor: "lightblue" } }}
/>
```

## Notes

- Ensure that the `permissions` array in the data object contains a valid structure with `id`, `name`, and `is_active` properties.
- The `open` method requires both the data object and an index as parameters.
- The `close` method can be invoked to dismiss the modal programmatically.
- Use the `is_temp_active` property to manage temporary permission states.

## Role Interface

```typescript
interface Role {
  id: string;
  name: string;
  is_active: boolean;
  permissions: Array<{
    id: string;
    name: string;
    is_active: boolean;
    is_temp_active?: boolean;
  }>;
}
```

## Example Data

```javascript
const sampleRole = {
  id: "1",
  name: "Admin",
  is_active: false,
  permissions: [
    { id: "1", name: "View", is_active: true },
    { id: "2", name: "Edit", is_active: false },
  ],
};
```
