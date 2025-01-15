# Object Utilities

This documentation provides an overview of utility functions for managing and manipulating objects in JavaScript. Each function includes a detailed description, parameters, return values, and example usage.

## Functions

### 1. `setProperty`

**Description:**
Sets a property of an object at a specified path with a given value.

**Parameters:**
- `obj` (SimpleObjectType): The object to update.
- `path` (string): The key to set the value for.
- `payload` (any): The value to assign to the key.

#### Returns
(SimpleObjectType): A new object with the updated key-value pair.

#### Example Usage
```typescript
const obj = { a: 1, b: 2 };
const updatedObj = setProperty(obj, 'c', 3);
console.log(updatedObj); // { a: 1, b: 2, c: 3 }
```

---

### 2. `stringifyAllValues`

**Description:**
Converts all values of an object to strings.

**Parameters:**
- `obj` (SimpleObjectType): The object to process.

#### Returns
(SimpleObjectType): A new object with all values converted to strings.

#### Example Usage
```typescript
const obj = { a: 1, b: true, c: null };
const stringifiedObj = stringifyAllValues(obj);
console.log(stringifiedObj); // { a: "1", b: "true", c: "null" }
```

---

### 3. `getProperty`

**Description:**
Retrieves a property value from an object by its path. Returns a default value if the property is not found or is null.

**Parameters:**
- `obj` (SimpleObjectType): The object to search.
- `path` (string): The key to retrieve the value for.
- `defaultValue` (any): The default value to return if the key is not found.

#### Returns
(any): The value of the property or the default value.

#### Example Usage
```typescript
const obj = { a: 1, b: 2 };
const value = getProperty(obj, 'c', 0);
console.log(value); // 0
```

---

### 4. `shallowDiff`

**Description:**
Computes the shallow difference between two objects, returning an object with values from the second object that differ from the first.

**Parameters:**
- `obj1` (NestedDynamicObjectType): The first object.
- `obj2` (NestedDynamicObjectType): The second object.

#### Returns
(NestedDynamicObjectType): An object containing the differing key-value pairs.

#### Example Usage
```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 3, c: 4 };
const diff = shallowDiff(obj1, obj2);
console.log(diff); // { b: 3, c: 4 }
```

---

### 5. `removeKey`

**Description:**
Removes a key from an object.

**Parameters:**
- `obj` (object): The object to modify.
- `key` (string): The key to remove.

#### Returns
(object): A new object without the specified key.

#### Example Usage
```typescript
const obj = { a: 1, b: 2 };
const updatedObj = removeKey(obj, 'b');
console.log(updatedObj); // { a: 1 }
```

---

### 6. `isEmpty`

**Description:**
Checks if an object is empty.

**Parameters:**
- `obj` (SimpleObjectType): The object to check.

#### Returns
(boolean): `true` if the object is empty, `false` otherwise.

#### Example Usage
```typescript
const obj = {};
console.log(isEmpty(obj)); // true
```

---

### 7. `clean`

**Description:**
Removes null, undefined, and empty string values from an object.

**Parameters:**
- `obj` (SimpleObjectType): The object to clean.

#### Returns
(SimpleObjectType): A new object without null, undefined, or empty string values.

#### Example Usage
```typescript
const obj = { a: 1, b: null, c: '', d: 4 };
const cleanedObj = clean(obj);
console.log(cleanedObj); // { a: 1, d: 4 }
```

---

### 8. `condApply`

**Description:**
Applies a condition to an object, returning the object if the condition is true or an empty object otherwise.

**Parameters:**
- `condition` (any): The condition to evaluate.
- `obj` (NestedDynamicObjectType): The object to apply.

#### Returns
(NestedDynamicObjectType): The original object if the condition is true, or an empty object.

#### Example Usage
```typescript
const obj = { a: 1, b: 2 };
console.log(condApply(true, obj)); // { a: 1, b: 2 }
console.log(condApply(false, obj)); // {}
```

---

### 9. `toArray`

**Description:**
Converts an object into an array of objects, where each object includes a `key` field and the corresponding value.

**Parameters:**
- `obj` (NestedDynamicObjectType): The object to convert.

#### Returns
(array|null): An array of key-value pairs or `null` if an error occurs.

#### Example Usage
```typescript
const obj = { a: 1, b: 2 };
const arr = toArray(obj);
console.log(arr); // [{ key: 'a', value: 1 }, { key: 'b', value: 2 }]
```

---

### 10. `queryString`

**Description:**
Converts an object into a query string.

**Parameters:**
- `obj` (NestedDynamicObjectType): The object to convert.

#### Returns
(string): The resulting query string.

#### Example Usage
```typescript
const obj = { name: 'John', age: 30 };
const query = queryString(obj);
console.log(query); // "name=John&age=30"
```

---

### 11. `deepCopy`

**Description:**
Performs a deep copy of an object.

**Parameters:**
- `obj` (NestedDynamicObjectType): The object to copy.

#### Returns
(NestedDynamicObjectType): A deep copy of the object.

#### Example Usage
```typescript
const obj = { a: 1, b: { c: 2 } };
const copiedObj = deepCopy(obj);
copiedObj.b.c = 3;
console.log(obj.b.c); // 2
```

---

### 12. `deepAssign`

**Description:**
Deeply assigns new values to an object based on a key path.

**Parameters:**
- `keys` (string): A list of keys representing the path.
- `obj` (NestedDynamicObjectType): The object to update.
- `newValues` (NestedDynamicObjectType): The new values to assign.

#### Returns
(NestedDynamicObjectType): A new object with updated values.

#### Example Usage
```typescript
const obj = { a: { b: 1 } };
const updatedObj = deepAssign(['a', 'b'], obj, { c: 2 });
console.log(updatedObj); // { a: { b: { c: 2 } } }
```

---

### 13. `isObject`

**Description:**
Checks if a variable is a plain object.

**Parameters:**
- `a` (any): The variable to check.

#### Returns
(boolean): `true` if the variable is a plain object, `false` otherwise.

#### Example Usage
```typescript
console.log(isObject({})); // true
console.log(isObject([])); // false
```
