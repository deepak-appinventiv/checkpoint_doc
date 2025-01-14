# ListContentCard

The `ListContentCard` component is used to display individual items (e.g., employees) in a list with various attributes, clickable behavior, and additional interactive elements.

## Usage

### Basic Example

```javascript
import React from "react";
import ListContentCard from "./ListContentCard";

const MyComponent = () => {
  const handleCardPress = (item) => {
    console.log("Card Pressed", item);
  };

  const mockItem = {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    status: 1,
    user_type: "Employee",
    employee_departments: [
      { department_id: { name: "Engineering" } },
      { department_id: { name: "Marketing" } },
    ],
  };

  return (
    <ListContentCard
      item={mockItem}
      onPressCard={handleCardPress}
      testID="employee-card"
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name     | Type       | Default      | Description                                            |
| ------------- | ---------- | ------------ | ------------------------------------------------------ |
| `item`        | `object`   | **Required** | Data object containing the details for the card.       |
| `onPressCard` | `function` | `() => {}`   | Callback function triggered on long press of the card. |
| `testID`      | `string`   | `undefined`  | Test ID for the card (useful for testing purposes).    |

## Features

- **Dynamic Name Badge:** Displays a badge with the employee's initials and a random background color.
- **Interactive Department View:** Conditionally displays department names with an option to expand/collapse additional departments.
- **Admin Badge:** Shows an admin badge if the user type is not "Employee".
- **Locked Status Indicator:** Displays a lock icon if the employee is in a locked state.
- **Navigation Support:** Navigates to the employee detail screen on card press.

## Default Behavior

1. **Name and Badge:**

   - A `ProfileBadge` component is rendered with the initials of the employee's name and a random background color.
   - An indicator is displayed if the employee's status is active.

2. **Departments:**

   - Displays a list of departments associated with the employee.
   - If there are more departments than can fit, a "+ more" link allows toggling visibility.

3. **Locked State:**

   - If the employee's `status` equals `5`, a lock icon is displayed instead of the profile badge.

4. **Admin Badge:**
   - If the `user_type` is not "Employee" and the employee is not locked, an admin badge with the user type is displayed.

## Example: Custom Item Data

```javascript
const customItem = {
  id: 2,
  first_name: "Jane",
  last_name: "Smith",
  status: 5, // Locked state
  user_type: "Admin",
  employee_departments: [{ department_id: { name: "HR" } }],
};

<ListContentCard
  item={customItem}
  onPressCard={(item) => console.log("Card pressed for:", item)}
  testID="custom-card"
/>;
```

## Styling

The `ListContentCard` component relies on the `styles` module for its layout and design. Key styles include:

- **`styles.itemContainer`:** Defines the outer container for the card.
- **`styles.lockedView`:** Styling for the lock icon view.
- **`styles.nameText`:** Text style for the employee name.
- **`styles.departmentText`:** Text style for department names.
- **`styles.moreText`:** Text style for the "+ more" link.
- **`styles.adminBadge`:** Styling for the admin badge.
