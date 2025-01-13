# SheetWithRoles

The `SheetWithRoles` component is a component that presents a role selection interface with two options: Admin and Employee. It provides a clean, visual way for users to select their role in the application.

## Usage

```typescript
import React from "react";
import SheetWithRoles from "./SheetWithRoles";

const MyComponent = () => {
  const handleRoleSelection = (role) => {
    console.log("Selected role:", role);
    // Handle role selection
  };

  return <SheetWithRoles onPressRole={handleRoleSelection} />;
};
```

## Props

| Prop Name     | Type                       | Required | Description                               |
| ------------- | -------------------------- | -------- | ----------------------------------------- |
| `onPressRole` | `(role: RoleType) => void` | Yes      | Callback function when a role is selected |

## Types

```typescript
interface RoleType {
  id: number;
  name: string;
}

// User type constants from enum
enum USER_TYPE {
  CAR_WASH_ADMIN = 1,
  CAR_WASH_EMPLOYEE = 2,
}
```

## Features

### 1. Visual Role Selection

- Two distinct cards for different roles
- Icons representing each role type
- Clear visual hierarchy with titles and subtitles

### 2. Role Options

- Admin User (`CAR_WASH_ADMIN`)
- Employee (`CAR_WASH_EMPLOYEE`)

### 3. Layout

- Horizontal card layout
- Responsive sizing using normalize
- Custom styling for each role card

## Example Responses

```typescript
// When Admin is selected
{
  id: USER_TYPE.CAR_WASH_ADMIN,
  name: "Admin User"
}

// When Employee is selected
{
  id: USER_TYPE.CAR_WASH_EMPLOYEE,
  name: "Employee"
}
```

## Styling

The component uses:

- Custom fonts from `@quivio/assets/fonts`
- Normalized dimensions for consistent sizing
- Custom styles for cards and containers
- Image assets for role icons

```typescript
// Example of card styling
const styles = {
  card: {
    // Card styling for role selection
    padding: normalize(16),
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: normalize(8),
  },
  employeText: {
    marginTop: normalize(12),
    textAlign: "center",
  },
};
```

## Dependencies

- React Native
- @quivio/utils
- @quivio/assets
- @quivio/primitives
- @quivio/components
- @quivio/localization

## Notes

1. Role Selection:

   - Each role card triggers the `onPressRole` callback with role information
   - Role data includes both ID and display name
   - Uses enum values for consistent role identification

2. Layout:

   - Cards are arranged horizontally with equal spacing
   - Each card contains an icon and label
   - Responsive sizing using normalize utility

3. Typography:

   - Uses H1, H3, and H4 components for text hierarchy
   - Custom font family for headings
   - Localized strings for all text content

4. Accessibility:
   - Touch-friendly card sizes
   - Clear visual hierarchy
   - Distinct visual separation between options

## Example: With Custom Styling

```typescript
const MyRoleSelector = () => {
  const handleRoleSelect = (role) => {
    if (role.id === USER_TYPE.CAR_WASH_ADMIN) {
      // Handle admin selection
    } else {
      // Handle employee selection
    }
  };

  return (
    <ViewWrapper style={customContainerStyle}>
      <SheetWithRoles onPressRole={handleRoleSelect} />
    </ViewWrapper>
  );
};
```

The component is designed to be simple yet effective, providing a clear interface for role selection while maintaining consistency with the application's design system.
