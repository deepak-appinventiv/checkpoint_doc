# String Utilities

This module provides a collection of utility functions for manipulating and formatting strings, dates, and more. These functions are useful for various tasks like capitalization, formatting dates, removing emojis, and more.

## Functions

### `capitalizeFirstLetter`

**Description:**
Capitalizes the first letter of a given string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): The input string with the first letter capitalized.

**Example:**

```typescript
capitalizeFirstLetter("hello"); // "Hello"
```

---

### `capitalizeFirstLetters`

**Description:**
Capitalizes the first letter of each word in the given string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): The input string with each word's first letter capitalized.

**Example:**

```typescript
capitalizeFirstLetters("hello world"); // "Hello World"
```

---

### `toLowerCase`

**Description:**
Converts the input string to lowercase.

**Parameters:**

- `str` (string): The input string. Defaults to an empty string.

**Returns:**

- (string): The lowercase version of the input string.

**Example:**

```typescript
toLowerCase("HELLO"); // "hello"
```

---

### `toUpperCase`

**Description:**
Converts the input string to uppercase.

**Parameters:**

- `str` (string): The input string. Defaults to an empty string.

**Returns:**

- (string): The uppercase version of the input string.

**Example:**

```typescript
toUpperCase("hello"); // "HELLO"
```

---

### `getFirstLetter`

**Description:**
Returns the first character of the input string.

**Parameters:**

- `str` (string): The input string. Defaults to an empty string.

**Returns:**

- (string): The first character of the input string.

**Example:**

```typescript
getFirstLetter("hello"); // "h"
```

---

### `replaceInString`

**Description:**
Replaces multiple values in a string based on a mapping object.

**Parameters:**

- `str` (string): The input string. Defaults to an empty string.
- `values`: An object where keys are the values to search for and values are the replacements.

**Returns:**

- (string): The modified string with replacements applied.

**Example:**

```typescript
replaceInString("Hello, world!", { world: "everyone" }); // "Hello, everyone!"
```

---

### `appendToStr`

**Description:**
Appends one string to another with an optional separator.

**Parameters:**

- `str1` (string): The base string.
- `str2` (string): The string to append.
- `separator` (string): The separator to use. Defaults to `","`.

**Returns:**

- (string): The concatenated string.

**Example:**

```typescript
appendToStr("hello", "world", " "); // "hello world"
```

---

### `toBool`

**Description:**
Casts a string to a boolean.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (boolean): The boolean representation of the string.

**Example:**

```typescript
toBool("1"); // true
toBool("0"); // false
```

---

### `isEmpty`

**Description:**
Checks if a string is empty.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (boolean): `true` if the string is empty, otherwise `false`.

**Example:**

```typescript
isEmpty(""); // true
isEmpty("hello"); // false
```

---

### `getFirstTwoProductNames`

**Description:**
Retrieves the names of the first two products from a product array.

**Parameters:**

- `products` (any[]): An array of product objects.

**Returns:**

- (string): A string containing the first two product names, separated by a comma.

**Example:**

```typescript
getFirstTwoProductNames([{ product_name: "A" }, { product_name: "B" }]); // "A, B"
```

---

### `getAllProductNames`

**Description:**
Retrieves all product names from a product array.

**Parameters:**

- `products` (any[]): An array of product objects.

**Returns:**

- (string): A string containing all product names, separated by commas.

**Example:**

```typescript
getAllProductNames([{ product_name: "A" }, { product_name: "B" }]); // "A, B"
```

---

### `formatDate`

**Description:**
Formats a date string into `DD/MM/YYYY` format.

**Parameters:**

- `isoString` (string): The ISO date string.

**Returns:**

- (string): The formatted date.

**Example:**

```typescript
formatDate("2023-01-01T00:00:00Z"); // "01/01/2023"
```

---

### `removeEmojis`

**Description:**
Removes emojis from a string.

**Parameters:**

- `str` (string): The input string.

**Returns:**

- (string): The string without emojis.

**Example:**

```typescript
removeEmojis("Hello 😀👋"); // "Hello "
```

---

### `mergeRefs`

**Description:**
Merges multiple refs into one.

**Parameters:**

- `refs` (any[]): An array of refs to merge.

**Returns:**

- (function): A function that updates all refs with the same value.

**Example:**

```typescript
const ref1 = useRef(null);
const ref2 = useRef(null);
const mergedRef = mergeRefs(ref1, ref2);
```

---

### `getStringInitials`

**Description:**
Gets the initials from a string.

**Parameters:**

- `value` (string): The input string.

**Returns:**

- (string): A string containing the initials.

**Example:**

```typescript
getStringInitials("John Doe"); // "JD"
```

---

### `formatDateAndTime`

**Description:**
Formats a date and time string into `DD/MM/YYYY | HH:MM AM/PM` format.

**Parameters:**

- `dateString` (string): The input date string.

**Returns:**

- (string): The formatted date and time.

**Example:**

```typescript
formatDateAndTime("2023-01-01T15:30:00Z"); // "01/01/2023 | 03:30 PM"
```

---

### `slugify`

**Description:**
Converts a string into a slug format.

**Parameters:**

- `str` (string): The input string. Defaults to an empty string.
- `replacement` (string): The character to replace spaces with. Defaults to `_`.

**Returns:**

- (string): The slugified string.

**Example:**

```typescript
slugify("Hello World"); // "hello_world"
```

---

### `pascalCaseToSnakeCase`

**Description:**
Converts a PascalCase string to snake_case.

**Parameters:**

- `s` (string): The PascalCase string.

**Returns:**

- (string): The snake_case string.

**Example:**

```typescript
pascalCaseToSnakeCase("PascalCaseString"); // "pascal_case_string"
```

---

### `toTitleCase`

**Description:**
Converts a given phrase to title case, where the first letter of each word is capitalized.

**Parameters:**

- `s` (string): Input string.

**Returns:**

- (string): The snake_case string.

**Example:**

````typescript
const inputPhrase = "hello world this is a test";
const titleCasePhrase = toTitleCase(inputPhrase);

console.log(titleCasePhrase); // Output: "Hello World This Is A Test"
````
---
