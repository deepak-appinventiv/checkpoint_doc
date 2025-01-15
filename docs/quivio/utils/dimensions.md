# Dimension Utilities

This file contains utility functions to handle responsive design and platform-specific dimensions in a React Native application.

## Static values

### `screenWidth`

**Description:**
Determines screen width.

**Output:**

- Width of the current device screen.

**Example Usage:**

```ts
console.log(screenWidth); // Output: Width of the current device screen
```

### `screenHeight`

**Description:**
Determines screen height.

**Output:**

- Height of the current device screen.

**Example Usage:**

```ts
console.log(screenHeight); // Output: Height of the current device screen
```

### `smallDevice`

**Description:**
Determines if device is small.

**Output:**

- `true`: If the device is small.
- `false`: If the device is not small.

**Example Usage:**

```ts
console.log(smallDevice); // Output: true/false
```

### `mediumDevice`

**Description:**
Determines if device is medium.

**Output:**

- `true`: If the device is medium.
- `false`: If the device is not medium.

**Example Usage:**

```ts
console.log(mediumDevice); // Output: true/false
```

### `largeDevice`

**Description:**
Determines if device is large.

**Output:**

- `true`: If the device is large.
- `false`: If the device is not large.

**Example Usage:**

```ts
console.log(largeDevice); // Output: true/false
```

### `isDeviceLarge`

**Description:**
Determines if device is extraLarge.

**Output:**

- `true`: If the device is extraLarge.
- `false`: If the device is not extraLarge.

**Example Usage:**

```ts
console.log(extraLargeDevice); // Output: true/false
```

### `platformVersion`

**Description:**
Determines if device is platform version.

**Output:**

- `string`: Platform version.

**Example Usage:**

```ts
console.log(platformVersion); // Output: Device platform version string.
```

## Functions

### `isIOS`

**Description:**
Checks if the platform is iOS.

**Parameters:**

- `None`: No Parameters

**Returns:**

- `true`: if the platform is iOS.
- `false`: if the platform is not iOS.

**Example Usage:**

```ts
const iosCheck = isIOS();
console.log(iosCheck); // Output: true (if the device is iOS) or false (if the device is Android)
```

### `isAndroid`

### `isTablet`

**Description:**
Determines if the device is a tablet based on its screen width and height.

**Parameters:**

- `None`: No Parameters

**Returns:**

- `true`: if the platform is Tablet.
- `false`: if the platform is not Tablet.

**Example Usage:**

```ts
const tabletCheck = isTablet();
console.log(tabletCheck); // Output: true (if the device is a tablet) or false (if the device is not a tablet)
```

### `normalize`

**Description:**
Normalizes a size value to ensure it fits the screen's pixel density.

**Parameters:**

- `size`: A numeric base size value to normalize.

**Returns:**

- `number`: The normalized size value based on the screen's pixel density.

**Example Usage:**

```ts
const normalizedValue = normalize(16);
console.log(normalizedValue); // Output: normalized pixel value based on the screen size
```

### `vw`

**Description:**
Converts a width value into a responsive width based on the design width (DesignWidth).

**Parameters:**

- `width`: The width value to convert to a responsive value.

**Returns:**

- `number`: The responsive width based on the device's screen size.

**Example Usage:**

```ts
const widthInVW = vw(200);
console.log(widthInVW); // Output: width based on design width
```

### `vh`

**Description:**
Converts a height value into a responsive height based on the design height (DesignHeight).

**Parameters:**

- `height`: The height value to convert to a responsive value.

**Returns:**

- `number`: The responsive height based on the device's screen size.

**Example Usage:**

```ts
const heightInVH = vh(300);
console.log(heightInVH); // Output: height based on design height
```

### `getDeviceOrientation`

**Description:**
Returns the current device orientation (portrait or landscape) based on the screen dimensions.

**Parameters:**

- `None`: No Parameters

**Returns:**

- `portrait | landscape`: The current orientation of the device.

**Example Usage:**

```ts
const orientation = getDeviceOrientation();
console.log(orientation); // Output: 'portrait' or 'landscape' based on the current device orientation
```

### `getResponsiveDimension`

**Description:**
Returns a responsive dimension value based on the device type (mobile, tablet portrait, or tablet landscape).

**Parameters:**

- `mobileValue`: The value to return for mobile devices.
- `tabletPortraitValue`: The value to return for tablets in portrait orientation.
- `tabletLandscapeValue`: The value to return for tablets in landscape orientation.

**Returns:**

- `number`: The responsive value based on the device type.

**Example Usage:**

```ts
const responsiveDimension = getResponsiveDimension(10, 20, 30);
console.log(responsiveDimension); // Output: mobile, tablet portrait, or tablet landscape value based on the device size
```

### `getHp`

**Description:**
Returns a responsive height value based on the device's screen size (mobile, tablet portrait, or tablet landscape).

**Parameters:**

- `mobileHeight`: The height value to return for mobile devices.
- `tabletPortraitHeight`: The height value to return for tablets in portrait orientation.
- `tabletLandscapeHeight`: The height value to return for tablets in landscape orientation.

**Returns:**

- `number`: The responsive height based on the device's screen size.

**Example Usage:**

```ts
const responsiveHeight = getHp(10, 20, 30);
console.log(responsiveHeight); // Output: responsive height value based on the device screen size
```

### `getWp`

**Description:**
Returns a responsive width value based on the device's screen size (mobile, tablet portrait, or tablet landscape).

**Parameters:**

- `mobileWidth`: The width value to return for mobile devices.
- `tabletPortraitWidth`: The width value to return for tablets in portrait orientation.
- `tabletLandscapeWidth`: The width value to return for tablets in landscape orientation.

**Returns:**

- `number`: The responsive width based on the device's screen size.

**Example Usage:**

```ts
const responsiveWidth = getWp(10, 20, 30);
console.log(responsiveWidth); // Output: responsive width value based on the device screen size
```

### `getWp`

**Description:**
Returns a responsive width value based on the device's screen size (mobile, tablet portrait, or tablet landscape).

**Parameters:**

- `mobileWidth`: The width value to return for mobile devices.
- `tabletPortraitWidth`: The width value to return for tablets in portrait orientation.
- `tabletLandscapeWidth`: The width value to return for tablets in landscape orientation.

**Returns:**

- `number`: The responsive width based on the device's screen size.

**Example Usage:**

```ts
const responsiveWidth = getWp(10, 20, 30);
console.log(responsiveWidth); // Output: responsive width value based on the device screen size
```
