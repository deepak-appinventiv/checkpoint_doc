# useDebounce

The `useDebounce` hook is a custom React hook that delays updating the value until a certain amount of time has passed since the last change. This is useful for limiting the number of times a function or operation is called, for example, when dealing with user input.

## Code

```javascript
import { useState, useEffect } from "react";

const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
```

## Usage

### Basic Example

```javascript
import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import useDebounce from "./useDebounce";

const MyComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <View>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Type something"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Text>Debounced Value: {debouncedValue}</Text>
    </View>
  );
};

export default MyComponent;
```

## Props

| Function         | Type  | Description                                           |
| ---------------- | ----- | ----------------------------------------------------- |
| `debouncedValue` | `Any` | The debounced value that will update after the delay. |
| `debouncedDelay` | `Number` | The delay after which debounced value will be updated. |
## Features

- **Delays Updates:** Ensures that updates are only applied after a specified delay, which is useful for debouncing user input or expensive operations.
- **Automatic Cleanup:** Cleans up the timeout when the component is unmounted or when the value or delay changes.
- **Flexible:** Works with any type of value.

## Example: Managing Multiple Inputs

```javascript
import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import useDebounce from "./useDebounce";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Here you can make an API call with debouncedSearchQuery

  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Text>Searching for: {debouncedSearchQuery}</Text>
    </View>
  );
};

export default SearchComponent;
```
