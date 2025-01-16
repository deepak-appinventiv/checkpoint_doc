# Analytics Utilities

This document provides detailed information on the `AnalyticsService` module, including its functions, parameters, return values, and usage examples.

## Overview

The `AnalyticsService` module facilitates analytics tracking, such as logging events, user attributes, and screen views. It integrates Firebase for event logging and uses utility services for handling device and time information.

## Functions

### 1. `setDeviceId`

#### Description

Sets the device ID and initializes metadata like version, build number, and platform.

#### Parameters

- `None`: No Params

#### Returns

- `promise`: A promise that resolves after setting the device information.

#### Example Usage

```typescript
await AnalyticsService.setDeviceId();
console.log(AnalyticsService.deviceId);
```

---

### 2. `setUserAttributes`

#### Description

Sets user attributes for analytics tracking.

#### Parameters

- `data` (object, optional): A data set with key value pair.

#### Example Usage

```typescript
AnalyticsService.setUserAttributes({ age: 25, location: "India" });
```

---

### 3. `getDeviceIdParam`

#### Description

Returns an object containing the device ID parameter used for analytics tracking.

#### Parameters

- `None`: No params

#### Returns

- `promise`: An object with the device ID.

#### Example Usage

```typescript
const deviceParams = await AnalyticsService.getDeviceIdParam();
console.log(deviceParams.device_id);
```

---

### 4. `logEvent`

#### Description

Logs an event with a given name and parameters.

#### Parameters

- `name` (string): The name of the event.
- `params` (object, optional): Additional parameters for the event.

#### Example Usage

```typescript
AnalyticsService.logEvent("user_login", { method: "email" });
```

---

### 4. `logScreenView`

#### Description

Logs a screen view event.

#### Parameters

- `previousScreenName` (string, optional): The name of the previous screen.
- `currentScreenName` (string, optional): The name of the current screen.

#### Example Usage

```typescript
AnalyticsService.logScreenView("HomeScreen", "ProfileScreen");
```

----
