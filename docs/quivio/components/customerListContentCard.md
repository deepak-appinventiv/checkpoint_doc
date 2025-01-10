# CustomerListContentCard

The `CustomerListContentCard` is a React Native component that renders a customer list item with profile information, vehicle licenses, and registration details. It includes features such as profile badges, expandable vehicle license list, and analytics tracking.

## Installation

```bash
import CustomerListContentCard from '@your-path/CustomerListContentCard'
```

## Usage

### Basic Example

```javascript
import React from "react";
import CustomerListContentCard from "./CustomerListContentCard";

const MyComponent = () => {
  const customerData = {
    first_name: "John",
    last_name: "Doe",
    customer_uuid: "123456",
    vehicle_licenses: ["ABC123", "XYZ789"],
    status: "ACTIVE",
    registered_through: "1",
  };

  const handleCardPress = (customer) => {
    console.log("Card pressed:", customer);
  };

  return (
    <CustomerListContentCard
      item={customerData}
      onPressCard={handleCardPress}
    />
  );
};
```

## Props

| Prop Name     | Type                           | Required | Default    | Description                                     |
| ------------- | ------------------------------ | -------- | ---------- | ----------------------------------------------- |
| `item`        | `CustomerData`                 | Yes      | -          | Customer data object containing profile details |
| `onPressCard` | `(item: CustomerData) => void` | No       | `() => {}` | Callback function for long press on card        |

## Component Features

1. **Profile Badge Display**

   - Shows customer initials with random background color
   - Active status indicator
   - Customizable badge size and styling

2. **Vehicle License Display**

   - Collapsible list of vehicle licenses
   - "Show more/less" functionality
   - Limited to 2 items when collapsed

3. **Registration Source Badge**
   - Displays registration source (POS/WTL)
   - Customizable styling

## Types

```typescript
interface CustomerData {
  first_name?: string;
  last_name?: string;
  customer_uuid: string;
  vehicle_licenses: string[];
  status?: string;
  registered_through?: string;
}

interface CustomerListRenderProps {
  item: CustomerData;
  onPressCard?: (item: CustomerData) => void;
}
```

## Navigation

The component integrates with navigation system:

```javascript
navigate(screenNames.customerDetail, { cust_id: item.customer_uuid });
```

## Analytics Integration

Tracks customer interactions using AnalyticsService:

```javascript
AnalyticsService.logEvent(EVENTS.CUSTOMER_SEARCH_OPTION_CLICK, {
  customer_name: determineFullName(),
});
```

## Helper Functions

### determineFullName

```javascript
function determineFullName() {
  if (item?.first_name && item?.last_name) {
    return item?.first_name.trim() + " " + item?.last_name.trim();
  } else if (item?.first_name) {
    return item?.first_name.trim();
  } else if (item?.last_name) {
    return item?.last_name.trim();
  } else {
    return localString.NA;
  }
}
```

### determineText

```javascript
function determineText() {
  if (!showMore) {
    return item?.vehicle_licenses.slice(0, 2).join(", ");
  } else {
    return item?.vehicle_licenses.join(", ");
  }
}
```

## Constants

```javascript
const REGISTERED_THROUGH = {
  1: "POS",
  2: "WTL",
};
```

## Styling

The component uses a combination of inline styles and imported style sheets:

```javascript
<ViewWrapper
  row
  alignItems={'center'}
  flexDirection={'row'}
  marginVertical={vh(15)}
  justifyContent={'space-between'}
>
```

## Example with Full Implementation

```javascript
import React, { useState } from "react";
import { View } from "react-native";
import CustomerListContentCard from "./CustomerListContentCard";

const CustomerListExample = () => {
  const sampleCustomer = {
    first_name: "John",
    last_name: "Doe",
    customer_uuid: "12345",
    vehicle_licenses: ["ABC123", "XYZ789", "DEF456"],
    status: "ACTIVE",
    registered_through: "1",
  };

  const handleCardPress = (customer) => {
    console.log("Customer selected:", customer);
    // Handle customer selection
  };

  return (
    <View>
      <CustomerListContentCard
        item={sampleCustomer}
        onPressCard={handleCardPress}
      />
    </View>
  );
};

export default CustomerListExample;
```

## Best Practices

1. **Error Handling**

   - Always validate customer data before rendering
   - Provide fallback values for optional fields
   - Handle missing vehicle licenses gracefully

2. **Performance**

   - Use `React.memo` for list optimization if needed
   - Implement virtualization for long lists
   - Minimize state updates in the show more/less toggle

3. **Accessibility**
   - Ensure touch targets are adequately sized
   - Provide meaningful accessibility labels
   - Support screen reader navigation

## Dependencies

- @primitives/baseView
- @quivio/primitives/typography
- @quivio/primitives/touchable
- @quivio/utils/dimensions
- @quivio/navigation/service
- @quivio/localization/localString
- @quivio/services/analytics

## Component Lifecycle

1. **Initialization**

   - Sets up initial showMore state
   - Generates random background color for profile badge

2. **Rendering**

   - Displays customer profile information
   - Shows truncated or full vehicle license list
   - Renders registration source badge if available

3. **Interaction**
   - Handles long press events
   - Manages navigation to detail screen
   - Tracks user interactions with analytics
