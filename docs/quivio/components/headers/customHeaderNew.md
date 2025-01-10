# CustomHeaderPrimary

The `CustomHeaderPrimary` component is a sophisticated header component for React Native applications that provides a structured layout with main and sub headers, multiple icon buttons, and notification integration. It includes modular rendering functions and extensive TypeScript support.

## Usage

### Basic Example

```typescript
import React from "react";
import CustomHeaderPrimary from "./CustomHeaderPrimary";
import { Icons } from "@quivio/assets";

const MyComponent = () => {
  return (
    <CustomHeaderPrimary
      headerLabel="Screen Title"
      headerSubLabel="Subtitle"
      leftIcon={Icons.backIcon}
      rightIcon={Icons.messageIcon}
      rightSecIcon={Icons.bellIcon}
      isNotificationIcon={true}
    />
  );
};

export default MyComponent;
```

## Main Component Props

| Prop Name             | Type                  | Default                     | Description                                    |
| --------------------- | --------------------- | --------------------------- | ---------------------------------------------- |
| `headerLabel`         | `string`              | `undefined`                 | Main header text                               |
| `headerSubLabel`      | `string`              | `undefined`                 | Sub-header text                                |
| `leftIcon`            | `ImageSourcePropType` | `undefined`                 | Source for left icon                           |
| `disableLeftIcon`     | `boolean`             | `false`                     | Disables left icon interaction                 |
| `onLeftIconPress`     | `() => void`          | `Alert("Coming Soon")`      | Left icon press handler                        |
| `rightIcon`           | `ImageSourcePropType` | `undefined`                 | Source for primary right icon                  |
| `disableRightIcon`    | `boolean`             | `false`                     | Disables right icon interaction                |
| `onRightIconPress`    | `() => void`          | `Alert("Coming Soon")`      | Right icon press handler                       |
| `rightSecIcon`        | `ImageSourcePropType` | `undefined`                 | Source for secondary right icon                |
| `disableRightSecIcon` | `boolean`             | `false`                     | Disables secondary right icon interaction      |
| `onRightSecIconPress` | `() => void`          | `navigate to notifications` | Secondary right icon press handler             |
| `isNotificationIcon`  | `boolean`             | `undefined`                 | Enables notification status for secondary icon |

## Sub-Components

### RenderTextAndSubText

Renders the header and sub-header text section.

```typescript
interface RenderTextAndSubTextProps {
  headerLabel?: string;
  headerSubLabel?: string;
}
```

### RenderLeftIcon

Manages the left icon button rendering.

```typescript
interface RenderLeftIconProps {
  leftIcon?: ImageSourcePropType;
  onLeftIconPress?: () => void;
  disableLeftIcon?: boolean;
}
```

### RenderRightContent

Manages the right side content section.

```typescript
interface RenderRightContentProps {
  rightIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;
  disableRightIcon?: boolean;
  rightSecIcon?: ImageSourcePropType;
  onRightSecIconPress?: () => void;
  disableRightSecIcon?: boolean;
}
```

## Features

- **Modular Architecture:** Separate render functions for each component section
- **Safe Area Support:** Automatic safe area inset handling
- **Notification Integration:** Built-in notification state management
- **Type Safety:** Comprehensive TypeScript interfaces
- **Flexible Layout:** Support for multiple icons and text elements
- **Platform Specific:** iOS and Android specific adjustments

## Example: Advanced Usage

```typescript
import React from "react";
import CustomHeaderPrimary from "./CustomHeaderPrimary";
import { Icons } from "@quivio/assets";

const MyComponent = () => {
  return (
    <CustomHeaderPrimary
      headerLabel="Dashboard"
      headerSubLabel="User Profile"
      leftIcon={Icons.menuIcon}
      rightIcon={Icons.settingsIcon}
      rightSecIcon={Icons.bellIcon}
      isNotificationIcon={true}
      onLeftIconPress={() => console.log("Menu opened")}
      onRightIconPress={() => console.log("Settings opened")}
      disableRightSecIcon={false}
    />
  );
};
```

## Notes

- Uses `@quivio/primitives/typography` for text components (H1, H5)
- Integrates with Redux for notification state management
- Supports iOS and Android platform-specific adjustments
- Automatically handles notification icon states
- Uses viewport height (vh) based sizing
- Includes test IDs for automated testing

## Dependencies

- react-native-safe-area-context
- @react-navigation/native
- react-redux
- @quivio/assets
- @quivio/utils
- @quivio/navigation/service
- @quivio/primitives/typography
- @quivio/components/iconButton
