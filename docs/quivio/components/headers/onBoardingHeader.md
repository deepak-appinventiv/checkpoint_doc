# OnBoardingHeader

The `OnBoardingHeader` component is a React Native component designed for displaying onboarding screens with customizable heading, subheading, and span text elements. It provides a clean and structured way to present onboarding information with flexible styling options.

## Usage

### Basic Example

```typescript
import React from "react";
import OnBoardingHeader from "./OnBoardingHeader";

const MyComponent = () => {
  return (
    <OnBoardingHeader
      heading="Welcome"
      subHeading="To our "
      spanText="awesome app!"
      testID="onboarding-header"
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name              | Type        | Default     | Description                             |
| ---------------------- | ----------- | ----------- | --------------------------------------- |
| `heading`              | `string`    | `undefined` | Main heading text                       |
| `subHeading`           | `string`    | `undefined` | Subheading text                         |
| `spanText`             | `string`    | `undefined` | Additional text to append to subheading |
| `headerStyle`          | `TextStyle` | `undefined` | Custom styles for the heading text      |
| `subHeaderStyle`       | `TextStyle` | `undefined` | Custom styles for the subheading text   |
| `spanTextStyle`        | `TextStyle` | `undefined` | Custom styles for the span text         |
| `containerStyle`       | `ViewStyle` | `undefined` | Custom styles for the container         |
| `headingTestID`        | `string`    | `undefined` | Test ID for the heading element         |
| `subHeadingTestID`     | `string`    | `undefined` | Test ID for the subheading element      |
| `spanSubHeadingTestID` | `string`    | `undefined` | Test ID for the span text element       |
| `testID`               | `string`    | `undefined` | Test ID for the main container          |

## Features

- **Flexible Text Structure:** Supports heading, subheading, and optional span text
- **Customizable Styling:** Independent style control for each text element
- **Testing Support:** Comprehensive test IDs for all elements
- **Typography Components:** Uses H3 and H8 components for consistent text styling
- **Optional Elements:** Span text can be omitted if not needed

## Example: Styled Header

```typescript
import React from "react";
import OnBoardingHeader from "./OnBoardingHeader";
import { StyleSheet } from "react-native";

const MyComponent = () => {
  return (
    <OnBoardingHeader
      heading="Get Started"
      subHeading="Begin your journey "
      spanText="today!"
      headerStyle={styles.customHeader}
      subHeaderStyle={styles.customSubHeader}
      spanTextStyle={styles.customSpan}
      testID="custom-onboarding-header"
    />
  );
};

const styles = StyleSheet.create({
  customHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  customSubHeader: {
    fontSize: 18,
  },
  customSpan: {
    fontWeight: "bold",
    color: "blue",
  },
});
```

## Component Structure

```typescript
interface OnBoardingHeaderProps {
  heading?: string;
  subHeading?: string;
  spanText?: string;
  headerStyle?: TextStyle;
  subHeaderStyle?: TextStyle;
  spanTextStyle?: TextStyle;
  containerStyle?: ViewStyle;
  headingTestID?: string;
  subHeadingTestID?: string;
  spanSubHeadingTestID?: string;
  testID?: string;
}
```

## Notes

- Uses custom typography components (H3, H8) for consistent text styling
- Wraps content in a ViewWrapper component for layout management
- Span text is optional and only renders when provided
- All style props are optional for maximum flexibility
- Maintains accessibility through test IDs

## Dependencies

- ViewWrapper component from primitives/baseView
- H3 and H8 components from primitives/typography
