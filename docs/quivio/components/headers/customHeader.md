# CustomHeaderView

The `CustomHeaderView` component is an advanced header component for React Native applications that supports multiple icons, labels, notifications, and extensive styling options. It includes safe area handling, Redux integration for notifications, and transparent background options.

## Usage

### Basic Example

```typescript
import React from "react";
import CustomHeaderView from "./CustomHeaderView";
import { Icons } from "@quivio/assets";

const MyComponent = () => {
  return (
    <CustomHeaderView
      headerLabel="Screen Title"
      leftIcon={Icons.backIcon}
      onLeftIconPress={() => console.log("Back pressed")}
      rightSecIcon={Icons.bellIcon}
      isNotificationIcon={true}
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name                   | Type               | Default                     | Description                                   |
| --------------------------- | ------------------ | --------------------------- | --------------------------------------------- |
| `leftIcon`                  | `any`              | `undefined`                 | Source for the left icon image                |
| `onLeftIconPress`           | `() => void`       | `undefined`                 | Function to handle left icon press            |
| `headerLabel`               | `string`           | `undefined`                 | Primary header text                           |
| `headerSubLabel`            | `string \| number` | `undefined`                 | Secondary header text                         |
| `headerStyle`               | `ViewStyle`        | `{}`                        | Custom styles for header container            |
| `rightIcon`                 | `any`              | `undefined`                 | Source for primary right icon                 |
| `rightSecIcon`              | `any`              | `undefined`                 | Source for secondary right icon               |
| `onRightIconPress`          | `() => void`       | `Alert("Coming Soon")`      | Function for primary right icon press         |
| `onRightSecIconPress`       | `() => void`       | `navigate to notifications` | Function for secondary right icon press       |
| `isTransparent`             | `boolean`          | `false`                     | Enable transparent background                 |
| `rightIconDisabled`         | `boolean`          | `false`                     | Disable primary right icon                    |
| `rightSecIconDisabled`      | `boolean`          | `false`                     | Disable secondary right icon                  |
| `customButtonStyle`         | `ViewStyle`        | `{}`                        | Custom styles for icon buttons                |
| `headerLabelStyle`          | `TextStyle`        | `undefined`                 | Custom styles for header label                |
| `headerSubLabelStyles`      | `TextStyle`        | `undefined`                 | Custom styles for subheader label             |
| `labelCustomContainerStyle` | `ViewStyle`        | `undefined`                 | Custom styles for labels container            |
| `numberOfLinesSubHeading`   | `number`           | `undefined`                 | Number of lines for subheader                 |
| `isNotificationIcon`        | `boolean`          | `undefined`                 | Enable notification status for secondary icon |
| `testID`                    | `string`           | `undefined`                 | Test identifier for the component             |

## Features

- **Dynamic Notification Icons:** Automatically updates notification icon based on read/unread status
- **Safe Area Support:** Handles iOS and Android safe areas appropriately
- **Flexible Layout:** Supports multiple icons and text elements
- **Redux Integration:** Built-in notification state management
- **Customizable Styling:** Extensive style customization for all elements
- **Transparent Mode:** Optional transparent background support

## Example: Advanced Usage

```typescript
import React from "react";
import CustomHeaderView from "./CustomHeaderView";
import { Icons } from "@quivio/assets";
import { colors } from "@quivio/utils";

const MyComponent = () => {
  return (
    <CustomHeaderView
      headerLabel="Profile"
      headerSubLabel="User Settings"
      leftIcon={Icons.backIcon}
      rightIcon={Icons.editIcon}
      rightSecIcon={Icons.bellIcon}
      isNotificationIcon={true}
      isTransparent={true}
      headerLabelStyle={{ color: colors.black000000 }}
      customButtonStyle={{ backgroundColor: colors.whiteFFFFFF }}
      onLeftIconPress={() => console.log("Navigate back")}
      onRightIconPress={() => console.log("Edit profile")}
    />
  );
};
```

## Notes

- Requires `@quivio/assets` for icons
- Uses `react-native-safe-area-context` for safe area handling
- Integrates with Redux for notification state
- Supports iOS and Android platform-specific adjustments
- Automatically handles notification icon states
- Uses custom font family 'SEMI' for header text
- Supports view port height (vh) based sizing
- Default background color is `enableButtonBlue2A7BBB`

## Dependencies

- react-native-safe-area-context
- @react-navigation/native
- react-redux
- @quivio/assets
- @quivio/utils
- @quivio/navigation/service
- @quivio/primitives/typography
