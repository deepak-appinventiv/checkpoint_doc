# CollapsibleContainer

The `CollapsibleContainer` is a flexible React Native component that provides collapsible/expandable functionality with customizable header and content sections. It supports analytics tracking and allows for both standard and inverted collapse behaviors.

## Installation

```bash
import CollapsibleContainer from '@your-path/CollapsibleContainer'
```

## Usage

### Basic Example

```javascript
import React, { useState } from "react";
import { Text, View } from "react-native";
import CollapsibleContainer from "./CollapsibleContainer";

const MyComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const header = (
    <View>
      <Text>Click to Expand/Collapse</Text>
    </View>
  );

  return (
    <CollapsibleContainer
      collapse={isCollapsed}
      setCollapse={setIsCollapsed}
      headerComponent={header}
      analyticsEventType="TOGGLE_COLLAPSE"
    >
      <Text>This is the collapsible content</Text>
    </CollapsibleContainer>
  );
};
```

### Advanced Example with Inverted Collapse

```javascript
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const MyAdvancedComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <CollapsibleContainer
      collapse={isCollapsed}
      setCollapse={setIsCollapsed}
      headerComponent={<CustomHeader />}
      invertedCollapse={true}
      containerStyle={styles.customContainer}
      analyticsEventType="CUSTOM_COLLAPSE_EVENT"
    >
      <CustomContent />
    </CollapsibleContainer>
  );
};

const styles = StyleSheet.create({
  customContainer: {
    marginVertical: 10,
    borderRadius: 8,
  },
});
```

## Props

| Prop Name            | Type                       | Required | Default | Description                                     |
| -------------------- | -------------------------- | -------- | ------- | ----------------------------------------------- |
| `collapse`           | `boolean`                  | Yes      | -       | Controls the visibility of the children content |
| `setCollapse`        | `(value: boolean) => void` | Yes      | -       | Function to update the collapse state           |
| `headerComponent`    | `ReactNode`                | Yes      | -       | Component to be rendered as the header          |
| `invertedCollapse`   | `boolean`                  | No       | `false` | When true, shows content above the header       |
| `containerStyle`     | `ViewStyle`                | No       | -       | Custom styles for the container                 |
| `children`           | `ReactNode`                | No       | -       | Content to be collapsed/expanded                |
| `analyticsEventType` | `string`                   | Yes      | -       | Event type for analytics tracking               |

## Component Structure

The component is structured into three main parts:

1. **RenderHeader Component**: Handles the header rendering and click events
2. **RenderChildren Component**: Manages the content visibility based on collapse state
3. **Main Container**: Wraps everything in a customizable View component

### RenderHeader

The header component is wrapped in a `Touchable` component that:

- Toggles the collapse state on press
- Triggers analytics event logging
- Renders the provided `headerComponent`

### RenderChildren

This function determines content visibility based on:

- The `invertedCollapse` prop
- Current collapse state
- Returns the children when appropriate conditions are met

## Analytics Integration

The component automatically logs events using `AnalyticsService` when the header is pressed. The event type is customizable through the `analyticsEventType` prop.

```javascript
AnalyticsService.logEvent(analyticsEventType, {});
```

## Styling

The component accepts custom styles through the `containerStyle` prop, which will be merged with the default styles:

```javascript
const Style = {
  container: {
    // Default container styles
  },
};
```

## Types

```typescript
interface RenderHeaderProps {
  headerComponent: React.ReactNode;
  collapse: boolean;
  setCollapse: (value: boolean) => void;
  analyticsEventType: string;
}

interface RenderChildrenProps {
  inverted: boolean;
  isCollapse: boolean;
  child: React.ReactNode;
}

interface CollapsibleContainerProps {
  collapse: boolean;
  setCollapse: (value: boolean) => void;
  headerComponent: React.ReactNode;
  invertedCollapse?: boolean;
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
  analyticsEventType: string;
}
```

## Best Practices

1. **State Management**: Always manage the collapse state in the parent component
2. **Analytics**: Provide meaningful event types for better tracking
3. **Performance**: Keep the header component lightweight to ensure smooth animations
4. **Accessibility**: Ensure the header component includes appropriate accessibility props

## Example Implementation with Error Handling

```javascript
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CollapsibleContainer from "./CollapsibleContainer";

const SafeCollapsibleExample = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleError = (error) => {
    console.error("CollapsibleContainer Error:", error);
    // Handle error appropriately
  };

  try {
    return (
      <CollapsibleContainer
        collapse={isCollapsed}
        setCollapse={setIsCollapsed}
        headerComponent={
          <View style={styles.header}>
            <Text>{isCollapsed ? "Expand" : "Collapse"}</Text>
          </View>
        }
        analyticsEventType="SAFE_COLLAPSE_TOGGLE"
      >
        <View style={styles.content}>
          <Text>Collapsible Content</Text>
        </View>
      </CollapsibleContainer>
    );
  } catch (error) {
    handleError(error);
    return null;
  }
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  content: {
    padding: 15,
    backgroundColor: "#ffffff",
  },
});

export default SafeCollapsibleExample;
```
