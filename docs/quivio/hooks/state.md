# useSimpleReducer

The `useSimpleReducer` hook is a custom React hook that simplifies state management using the `useReducer` hook. It provides a mechanism for updating the state in a functional way with a minimal setup.

## Code

```javascript
import { useCallback, useReducer } from "react";

const reducer = (state: any, action: { type: string, payload: any }) => {
  if (action.type === "update") {
    return { ...state, ...action.payload };
  } else {
    throw new Error();
  }
};

function useSimpleReducer(initialState: any, init?: any) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const updateState = useCallback(
    (payload: any) =>
      dispatch({
        type: "update",
        payload,
      }),
    []
  );

  return [state, updateState];
}

export { useSimpleReducer };
```

## Usage

### Basic Example

```javascript
import React from "react";
import { View, Text, Button } from "react-native";
import { useSimpleReducer } from "./useSimpleReducer";

const MyComponent = () => {
  const [state, updateState] = useSimpleReducer({ count: 0 });

  const increment = () => {
    updateState({ count: state.count + 1 });
  };

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default MyComponent;
```

## Props

| Function      | Type                     | Description                                      |
| ------------- | ------------------------ | ------------------------------------------------ |
| `updateState` | `(payload: any) => void` | Dispatches an update action to modify the state. |

## Features

- **State Update:** A simple and flexible way to update state with a single action type ('update').
- **Optimized Performance:** Uses useCallback to memoize the updateState function for performance optimization.
- **Custom Initial State:** Allows setting a custom initial state and initialization logic.

## Example: Managing Multiple Inputs

```javascript
import React from "react";
import { View, Text, Button } from "react-native";
import { useSimpleReducer } from "./useSimpleReducer";

const FormComponent = () => {
  const [state, updateState] = useSimpleReducer({ name: "", age: 0 });

  const updateName = () => {
    updateState({ name: "John" });
  };

  const incrementAge = () => {
    updateState({ age: state.age + 1 });
  };

  return (
    <View>
      <Text>Name: {state.name}</Text>
      <Button title="Update Name" onPress={updateName} />
      <Text>Age: {state.age}</Text>
      <Button title="Increment Age" onPress={incrementAge} />
    </View>
  );
};

export default FormComponent;
```
