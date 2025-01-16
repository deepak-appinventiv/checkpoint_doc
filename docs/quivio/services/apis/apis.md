# API Utilities

This document provides details about the common utility functions for making API calls in a React Native project using Axios.

## Overview

These utility functions simplify making HTTP requests (`POST`, `PUT`, `GET`, `PATCH`, and `DELETE`) by encapsulating Axios methods. Each function logs the API call and handles errors gracefully.

## Functions

### `postApiCall`

**Description:**
Makes a `POST` request to the specified API endpoint.

**Parameters:**

- `endPoint`(string): The API endpoint URL.
- `params`(object): The data to be sent in the request body.

**Returns:**

- `promise`:The response data from the API.

**Example Usage:**

```ts
const response = await postApiCall("/api/create-user", {
  name: "John",
  age: 30,
});
console.log(response);
```

### `putApiCall`

**Description:**
Makes a PUT request to the specified API endpoint.

**Parameters:**

- `endPoint`(string): The API endpoint URL.
- `params`(object, optional): The data to be sent in the request body.

**Returns:**

- `promise`: The full response from the API.

**Example Usage:**

```ts
const response = await putApiCall("/api/update-user", { name: "Jane" });
console.log(response);
```

### `getApiCall`

**Description:**
Makes a GET request to the specified API endpoint with optional query parameters.

**Parameters:**

- `endPoint`(string): The API endpoint URL.
- `body`(object, optional): Query parameters to be included in the request.

**Returns:**

- `promise`: The response data from the API.

**Example Usage:**

```ts
const response = await getApiCall("/api/users", { page: 1, limit: 10 });
console.log(response);
```

### `patchApiCall`

**Description:**
Makes a PATCH request to the specified API endpoint.

**Parameters:**

- `endPoint`(string): The API endpoint URL.
- `body`(object, optional): The full response from the API.

**Returns:**

- `promise`: The full response from the API.

**Example Usage:**

```ts
const response = await patchApiCall("/api/update-status", { status: "active" });
console.log(response);
```

### `deleteApiCall`

**Description:**
Makes a DELETE request to the specified API endpoint.

**Parameters:**

- `endPoint`(string): The API endpoint URL.
- `paramsData`(object, optional): Additional parameters for the URL.
- `requestBody`(object, optional): The data to be sent in the request body.

**Returns:**

- `promise`: The full response from the API.

**Example Usage:**

```ts
const response = await deleteApiCall("/api/delete-user", { userId: 123 });
console.log(response);
```
