# Date Utilities 

This file contains utility functions to perform common operations on date strings in a more functional way. Each function is described below with its purpose and usage.

## Functions

### `formatDateWithoutMilliseconds`

**Description:**
Formats a given date string (in ISO format) into a human-readable format without milliseconds. The format returned is MM/DD/YYYY | hh:mm AM/PM.

**Parameters:**

- `createdDate`: The date string to be formatted.

**Returns:**
A formatted date and time string in the form MM/DD/YYYY | hh:mm AM/PM.

**Example Usage:**

```ts
const dateString = "2025-01-14T15:30:00.000Z";
const formattedDate = formatDateWithoutMilliseconds(dateString);
console.log(formattedDate); // Output: "01/14/2025 | 08:00 AM"
```

### `convertDateTo_MM_DD_YYYY`

**Description:**
Converts a date from YYYY-MM-DD format to MM-DD-YYYY format.

**Parameters:**

- `dateString`: The date in YYYY-MM-DD format to be converted.

**Returns:**
The date in MM-DD-YYYY format.

**Throws:**
Error if the input date string does not match the YYYY-MM-DD format.

**Example Usage:**

```ts
const date = "2025-01-14";
const formattedDate = convertDateTo_MM_DD_YYYY(date);
console.log(formattedDate); // Output: "01-14-2025"
```

### `convertDateTo_YYYY_MM_DD`

**Description:**
Converts a date from MM-DD-YYYY format to YYYY-MM-DD format.

**Parameters:**

- `dateString`: The date in MM-DD-YYYY format to be converted.

**Returns:**
The date in YYYY-MM-DD format.

**Throws:**
Error if the input date string does not match the MM-DD-YYYY format.

**Example Usage:**

```ts
const date = "01-14-2025";
const formattedDate = convertDateTo_YYYY_MM_DD(date);
console.log(formattedDate); // Output: "2025-01-14"
```

### `getISTDateAndTime`

**Description:**
Converts a given date (in any valid string, number, or Date format) to Indian Standard Time (IST) and formats it as MM/DD/YYYY | hh:mm AM/PM. Optionally, the time can be excluded from the returned string.

**Parameters:**

- `createdDate`: The date to be converted into IST.
- `isShowTime`: Flag indicating whether to include the time in the returned string. Defaults to true.

**Returns:**
The date and time in MM/DD/YYYY | hh:mm AM/PM format if isShowTime is true; otherwise, it returns only the date in MM/DD/YYYY format.

**Example Usage:**

```ts
const dateString = "2025-01-14T15:30:00.000Z";
const formattedIST = getISTDateAndTime(dateString);
console.log(formattedIST);  // Output: "01/14/2025 | 08:00 PM"
```

```ts
const dateStringWithoutTime = "2025-01-14T00:00:00.000Z";
const formattedISTWithoutTime = getISTDateAndTime(dateStringWithoutTime, false);
console.log(formattedISTWithoutTime);  // Output: "01/14/2025"
```
