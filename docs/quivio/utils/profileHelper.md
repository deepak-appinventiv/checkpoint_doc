# Profile Utilities

This documentation provides an overview of utility functions for managing and manipulating user profile badge in JavaScript. Each function includes a detailed description, parameters, return values, and example usage.

## Functions

### 1. `getRandomColor`

#### Description
Generates a random color from a predefined array of colors based on the length of concatenated `firstName` and `lastName`.

#### Parameters
- `firstName` (string): The first name to include in the calculation.
- `lastName` (string): The last name to include in the calculation.

#### Returns
(string): A color string from the predefined colors array.

#### Example Usage
```typescript
const firstName = 'John';
const lastName = 'Doe';
const color = getRandomColor(firstName, lastName);
console.log(color); // Outputs a color string like "#AABBCC"
```

---

### 2. `getArrayFromObjects`

#### Description
Extracts and processes values from an array of objects based on a dynamic key. It returns a summary of extracted values, including a truncated string, full string, and extra count.

#### Parameters
- `dynamicKey` (string): The dynamic key (dot-separated) to access nested object values.
- `array` (any[]): The array of objects to process.

#### Returns
(object): An object containing:
  - `lesserString` (string): A truncated string of the first two extracted values.
  - `wholeString` (string): A concatenated string of all extracted values.
  - `extraCount` (number): The count of extra values beyond the first two.

#### Example Usage
```typescript
const data = [
  { name: { first: 'Alice' } },
  { name: { first: 'Bob' } },
  { name: { first: 'Charlie' } },
];
const result = getArrayFromObjects('name.first', data);
console.log(result);
/* Outputs:
{
  lesserString: "Alice, Bob",
  wholeString: "Alice, Bob, Charlie",
  extraCount: 1
}
*/
```
