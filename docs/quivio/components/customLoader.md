# CustomLoader

The `CustomLoader` component is a full-screen loading indicator designed for React Native applications. It displays a centered activity spinner that overlays other content, making it ideal for showing loading states during async operations.

## Usage

### Basic Example

```typescript
import React from "react";
import CustomLoader from "./CustomLoader";

const MyComponent = () => {
  return (
    <>
      {/* Your other components */}
      <CustomLoader testID="my-loader" />
    </>
  );
};

export default MyComponent;
```

## Props

| Prop Name | Type     | Default           | Description                                          |
| --------- | -------- | ----------------- | ---------------------------------------------------- |
| `testID`  | `string` | `'custom-loader'` | Test identifier for the loader (useful for testing). |

## Features

- **Centered Positioning:** Automatically centers in the middle of the screen using React Native's Dimensions API.
- **Overlay Display:** Uses absolute positioning and z-index to display above other content.
- **Customizable Testing:** Includes `testID` prop for testing purposes.
- **Predefined Styling:** Uses a consistent blue color (`colors.blue23679D`) and large size indicator.

## Example: Custom TestID

```typescript
<CustomLoader testID="loading-state-indicator" />
```

## Implementation Details

```typescript
interface CustomLoaderProps {
  testID?: string;
}

const CustomLoader: React.FC<CustomLoaderProps> = ({
  testID = "custom-loader",
}) => {
  return (
    <ActivityIndicator
      size="large"
      testID={testID}
      color={colors.blue23679D}
      style={{
        position: "absolute",
        zIndex: 2,
        top: Dimensions.get("screen").height / 2,
        alignSelf: "center",
      }}
    />
  );
};
```

## Notes

- The component requires `@quivio/utils` for color definitions.
- Uses React Native's built-in `ActivityIndicator` component.
- Position is calculated dynamically based on screen dimensions.
