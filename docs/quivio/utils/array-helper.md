# Array Utilities

These utility functions to perform common operations on arrays in a more functional way. Each function is described below with its purpose and usage.

## Functions

### `insertAtIndex`

**Description:**
Inserts an element at a specific index in the array.

**Parameters:**

- `arr`: The original array.
- `index`: The index where the element will be inserted.
- `item`: The element to insert.

**Returns:**
A new array with the element inserted at the specified index.

**Example Usage:**

```ts
const arr = [1, 2, 4];
const result = insertAtIndex(arr, 2, 3);
console.log(result); // Output: [1, 2, 3, 4]
```

### `replaceAtIndex`

**Description:**
Replaces the element at the specified index with a new item.

**Parameters:**

- `arr`: The original array.
- `index`: The index where the element will be replaced.
- `item`: The new item to replace the current one.

**Returns:**
A new array with the replaced element.

**Example Usage:**

```ts
const arr = [1, 2, 3];
const result = replaceAtIndex(arr, 1, 4);
console.log(result); // Output: [1, 4, 3]
```

### `getLastItem`

**Description:**
Returns the last element of the array, or null if the array is empty.

**Parameters:**

- `arr`: The array to fetch the last element from.

**Returns:**
The last element of the array, or null if empty.

**Example Usage:**

```ts
const arr = [1, 2, 3];
const lastItem = getLastItem(arr);
console.log(lastItem); // Output: 3
```

### `setValueAtIndex`

**Description:**
Sets a value at a specific index in the array.

**Parameters:**

- `arr`: The original array.
- `index`: The index where the value will be set.
- `item`: The value to set at the given index.

**Returns:**
A new array with the updated value at the specified index.

**Example Usage:**

```ts
const arr = [1, 2, 3];
const result = setValueAtIndex({ arr, index: 1, value: 4 });
console.log(result); // Output: [1, 4, 3]
```

### `indexByKeyInObj`

**Description:**
Indexes the array of objects by a specific key, grouping items by the key value.

**Parameters:**

- `arr`: The array of objects to index.
- `key`: The key to index the array by.

**Returns:**
An object where each key is a unique value from the specified key in the array, and the value is an array of objects that share that key value.

**Example Usage:**

```ts
const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "Jack" },
];
const indexed = indexByKeyInObj(arr, "id");
console.log(indexed);
// Output: { '1': [{ id: 1, name: 'John' }, { id: 1, name: 'Jack' }], '2': [{ id: 2, name: 'Jane' }] }
```

### `toString`

**Description:**
Converts an array of items into a string, using a specified separator. Objects are stringified.

**Parameters:**

- `arr`: The array of items to convert.
- `separator`: The separator to use between elements.

**Returns:**
A string representation of the array or null if an error occurs.

**Example Usage:**

```ts
const arr = [1, { id: 1, name: "John" }, 3];
const result = toString(arr, { separator: ", " });
console.log(result); // Output: '1, {"id":1,"name":"John"}, 3'
```

### `getProperties`

**Description:**
Extracts the values of a given property or fallback property from an array of objects.

**Parameters:**

- `arr`: The array of objects.
- `path`:The primary path to extract from each object.
- `fallbackPath`: The fallback path if the primary path is not found.
- `fallback`: A fallback value if both paths are missing.

**Returns:**
An array of the extracted values, or null if an error occurs.

**Example Usage:**

```ts
const arr = [{ id: 1, name: "John" }, { id: 2 }];
const result = getProperties(arr, { path: "name", fallback: "Unknown" });
console.log(result); // Output: ['John', 'Unknown']
```

### `sum`

**Description:**
Calculates the sum of all numbers in the array.

**Parameters:**

- `arr`: The array of numbers.

**Returns:**
The sum of all elements in the array.

**Example Usage:**

```ts
const arr = [1, 2, 3, 4];
const result = sum(arr);
console.log(result); // Output: 10
```

### `findIndex`

**Description:**
Finds the index of the first item that satisfies the given condition. Returns a fallback index if not found.

**Parameters:**

- `arr`: The array to search through.
- `cond`: A function that returns a boolean when applied to each item.
- `fallback`: The index to return if no item matches the condition.

**Returns:**
The index of the matching item, or the fallback index if no match is found.

**Example Usage:**

```ts
const arr = [1, 2, 3];
const result = findIndex({ arr, cond: (item) => item === 2, fallback: -1 });
console.log(result); // Output: 1
```

### `arrDiff`

**Description:**
Returns the difference between two arrays.

**Parameters:**

- `arr1`: The first array.
- `arr2`: The second array.

**Returns:**
The elements that are in arr1 but not in arr2.

**Example Usage:**

```ts
const arr1 = [1, 2, 3];
const arr2 = [2, 3];
const result = arrDiff(arr1, arr2);
console.log(result); // Output: [1]
```

### `range`

**Description:**
Generates an array of numbers from start to end with a given step.

**Parameters:**

- `start`: The start of the range.
- `end`: The end of the range.
- `step`: The step between each number in the range (default is 1).

**Returns:**
An array of numbers from start to end.

**Example Usage:**

```ts
const result = range(1, 5);
console.log(result); // Output: [1, 2, 3, 4, 5]
```

### `floatSorter`

**Description:**
Returns a sorting function that can be used to sort numbers represented as strings or numbers.
**Parameters:**

- `extractor`: A function to extract the value to be sorted.

**Returns:**
A sorting function to use with .sort().

**Example Usage:**

```ts
const arr = [{ value: "2.5" }, { value: "1.2" }];
arr.sort(floatSorter((item) => item.value));
console.log(arr); // Output: [{ value: '1.2' }, { value: '2.5' }]
```

### `moveArrayItemToNewIndex`

**Description:**
Moves an item in an array from one index to another.

**Parameters:**

- `arr`: The array.
- `fromIndex`: The index of the item to move.
- `toIndex`: The target index where the item should be moved.

**Returns:**
None (mutates the original array).

**Example Usage:**

```ts
const arr = [1, 2, 3];
moveArrayItemToNewIndex(arr, 0, 2);
console.log(arr); // Output: [2, 3, 1]
```
