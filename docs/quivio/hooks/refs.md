# useRefs

The `useRefs` hook simplifies the process of managing multiple refs in React Native applications. It provides a flexible way to dynamically assign and focus on specific elements.

## Code

```javascript
import { useRef } from 'react';

const useRefs = () => {
  const refs = useRef<any>({});

  const setRef = (fieldName: string) => (ref: any) => {
    if (!ref) {
      return;
    }
    if (fieldName) {
      refs.current[fieldName] = ref;
    }
  };

  const focusOnElement = (elementName: string) => {
    if (!elementName) {
      return;
    }
    refs.current[elementName].focus();
  };

  return {
    setRef,
    focusOnElement,
  };
};

export { useRefs };
```

## Usage

### Basic Example

```javascript
import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { useRefs } from './useRefs';

const MyComponent = () => {
  const { setRef, focusOnElement } = useRefs();

  return (
    <View>
      <TextInput
        ref={setRef('input1')}
        placeholder="First Input"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        ref={setRef('input2')}
        placeholder="Second Input"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Focus on Second Input" onPress={() => focusOnElement('input2')} />
    </View>
  );
};

export default MyComponent;
```

## Props

| Function         | Type                    | Description                                           |
| ---------------- | ----------------------- | ----------------------------------------------------- |
| `setRef`         | `(fieldName: string) => (ref: any) => void` | Assigns a ref to a specified field name.              |
| `focusOnElement` | `(elementName: string) => void`            | Focuses on the element associated with the given name.|

## Features

- **Dynamic Ref Management:** Simplifies assigning refs to dynamically created elements.
- **Programmatic Focus:** Enables focusing on specific elements using their field name.
- **Reusable Logic:** Encapsulates ref-related logic for better code reusability.

## Example: Managing Multiple Inputs

```javascript
import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { useRefs } from './useRefs';

const FormComponent = () => {
  const { setRef, focusOnElement } = useRefs();

  return (
    <View>
      <TextInput
        ref={setRef('email')}
        placeholder="Email Address"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        ref={setRef('password')}
        placeholder="Password"
        style={{ borderWidth: 1, marginBottom: 10 }}
        secureTextEntry
      />
      <Button title="Focus on Password" onPress={() => focusOnElement('password')} />
    </View>
  );
};

export default FormComponent;
