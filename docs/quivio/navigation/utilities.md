# Navigation Utilities

This module provides a set of utility functions for managing navigation in a React Native application using `@react-navigation/native`. The functions support navigation actions such as navigating, going back, resetting the stack, and more.

## Code

```javascript
import {
  CommonActions,
  NavigationAction,
  NavigationState,
} from '@react-navigation/native'
import { createRef } from 'react'

// Define the ParamValue type alias
type ParamValue = object | string | undefined | boolean

export const navigationRef = createRef<any>()

// Updated navigate function with the ParamValue type alias
export function navigate(
  routeName: string,
  params: { [key: string]: ParamValue } = {},
): void {
  navigationRef.current?.navigate(routeName, params)
}

export function goBack() {
  return navigationRef?.current.goBack()
}

export const reset = (routeName: string, params: any = {}) => {
  navigationRef?.current?.dispatch({
    ...CommonActions.reset({
      index: 0,
      routes: [{ name: routeName, params: params }],
    }),
  })
}

export const getRecentRoutes = () => {
  const rootState = navigationRef.current?.getRootState()
  const routes = rootState?.routes
  const previousRoute = routes?.[routes?.length - 2]
  const currentRoute = routes?.[routes?.length - 1]
  return {
    currentRoute:
      currentRoute?.state?.index > -1 && currentRoute?.state?.routes
        ? currentRoute?.state?.routes?.[currentRoute?.state?.index]
        : currentRoute,
    previousRoute:
      previousRoute?.state?.index > -1 && previousRoute?.state?.routes
        ? previousRoute?.state?.routes?.[previousRoute?.state?.index]
        : previousRoute,
  }
}

export function replace(
  routeName: string,
  params: { [key: string]: ParamValue } = {},
): void {
  navigationRef.current?.reset(routeName, params)
}

export function dispatch(
  action: NavigationAction | ((state: NavigationState) => NavigationAction),
): void {
  navigationRef.current?.dispatch(action)
}

// New function to reset stack after removing a specific number of screens
export const resetToScreenAfterRemoving = (
  routeName: string,
  screensToRemove: number,
  params: { [key: string]: ParamValue } = {},
) => {
  const rootState = navigationRef.current?.getRootState()
  const routes = rootState?.routes || []

  const remainingRoutes = routes.slice(0, routes.length - screensToRemove)

  navigationRef?.current?.dispatch(
    CommonActions.reset({
      index: remainingRoutes.length, // Set index to the last position
      routes: [
        ...remainingRoutes,
        { name: routeName, params }, // Target screen as the last route
      ],
    }),
  )
}

```

## Usage

### Basic Example

```javascript
import {
  navigate,
  goBack,
  reset,
  replace,
  dispatch,
  resetToScreenAfterRemoving,
} from "./navigationUtils";

// Navigating to a screen with parameters
navigate("Home", { userId: 123 });

// Going back to the previous screen
goBack();

// Resetting the navigation stack to a specific screen
reset("Login");

// Replacing the current screen with a new one
replace("Dashboard");

// Dispatching a navigation action
dispatch(CommonActions.navigate({ name: "Profile" }));

// Resetting the stack after removing 2 screens
resetToScreenAfterRemoving("Home", 2, { userId: 456 });
```

## Props

| Function          | Type                                                                 | Description                                                                   |
| ----------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `navigate`        | `navigate(routeName: string, params: { [key: string]: ParamValue })` | Navigates to a specified route with optional parameters.                      |
| `goBack`          | `()=> void`                                                          | Returns to the previous screen in the navigation stack.                       |
| `reset`           | `reset(routeName: string, params: any)`                              | Resets the navigation stack and navigates to a specified route.               |
| `getRecentRoutes` | `()=> void`                                                          | Returns the current and previous routes in the navigation stack.              |
| `replace`         | `replace(routeName: string, params: { [key: string]: ParamValue })`  | Replaces the current screen with a new one while passing optional parameters. |

## Features

- **Navigate with Parameters:** Allows passing parameters when navigating between screens.
- **Flexible Reset:** Resets the navigation stack to a specific screen.
- **Access Recent Routes:** Retrieve the current and previous routes from the navigation stack.
- **Replace Current Route:** Replace the current screen with a new one, maintaining navigation flow.
- **Advanced Stack Management:** Reset the stack while removing specific screens.
