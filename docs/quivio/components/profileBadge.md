# ProfileBadge Component

The `ProfileBadge` component renders a customizable circular profile badge with user initials and an optional status indicator. This component is flexible and can adapt to various design and functional requirements.

---

## Usage

### Example

```tsx
import React from "react";
import ProfileBadge from "./ProfileBadge";

const App = () => {
  return (
    <ProfileBadge
      name="John Doe"
      badgeBgColor="blue"
      textColor="white"
      badgeRadius={40}
      showIndicator={true}
      indicatorRadius={10}
    />
  );
};

export default App;
```

---

## Components

### ProfileBadge

Renders the main profile badge with user initials.

#### Props

| Prop Name          | Type      | Default      | Description                                           |
| ------------------ | --------- | ------------ | ----------------------------------------------------- |
| `name`             | `string`  | **Required** | The name of the user to generate initials from.       |
| `textColor`        | `string`  | `undefined`  | Sets the text color of the initials.                  |
| `badgeBgColor`     | `string`  | `undefined`  | Sets the background color of the badge.               |
| `showIndicator`    | `boolean` | `false`      | Determines if a status indicator should be displayed. |
| `fontSize`         | `number`  | `20`         | Sets the font size of the initials text.              |
| `badgeRadius`      | `number`  | `36`         | Defines the radius of the circular badge.             |
| `indicatorRadius`  | `number`  | `undefined`  | Defines the radius of the status indicator.           |
| `numberOfInitials` | `number`  | `2`          | Maximum number of initials to display from the name.  |

---

### ProfileStatusIndicator

A helper component to render a status indicator below the profile badge.

#### Props

| Prop Name         | Type      | Default      | Description                                                  |
| ----------------- | --------- | ------------ | ------------------------------------------------------------ |
| `showIndicator`   | `boolean` | **Required** | Determines whether the status indicator should be displayed. |
| `indicatorRadius` | `number`  | `undefined`  | Customizes the radius of the status indicator.               |

---

## Features

- **Customizable Appearance:** Configure the badge size, background color, text color, and font size.
- **Initials Display:** Automatically generates initials from a user's full name.
- **Status Indicator:** Optionally display a circular status indicator.
- **Dynamic Sizing:** Adjust sizes for both the badge and the status indicator.

---

## Implementation Details

### Initials Generation

The `getInitials` function extracts initials from a provided full name. It supports dynamic lengths based on the `numberOfInitials` prop.

### Custom Styling

The badge and indicator styles can be customized by overriding default styles using props such as `badgeRadius`, `indicatorRadius`, `badgeBgColor`, and `textColor`.

---

## Example: Custom Badge

```tsx
<ProfileBadge
  name="Jane Smith"
  badgeRadius={50}
  badgeBgColor="green"
  textColor="white"
  fontSize={25}
  showIndicator={true}
  indicatorRadius={12}
/>
```

---

## Default Styles

The component uses default styles provided in the `Style` module. These can be overridden by passing custom props.

---

## Notes

- Ensure `name` is passed as a non-empty string to generate meaningful initials.
- Use `indicatorRadius` to maintain proportionality with the badge size when enabling the status indicator.
