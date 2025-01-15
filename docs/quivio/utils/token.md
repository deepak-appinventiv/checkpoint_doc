# Token Utilities

This module provides utility functions for securely managing and accessing data using `react-native-mmkv`. It is used for storing and retrieving various tokens and configuration values efficiently.

## Functions

### `setAuthToken`
**Description:**
Stores the authentication token in MMKV storage.

**Parameters:**
- `token` (string): The authentication token to store.

**Example:**
```typescript
setAuthToken("your-auth-token");
```

---

### `getAuthToken`
**Description:**
Retrieves the authentication token from MMKV storage.

**Returns:**
- (string | undefined): The stored authentication token, or `undefined` if not found.

**Example:**
```typescript
const authToken = getAuthToken();
```

---

### `setFCMToken`
**Description:**
Stores the FCM (Firebase Cloud Messaging) token in MMKV storage.

**Parameters:**
- `token` (string): The FCM token to store.

**Example:**
```typescript
setFCMToken("your-fcm-token");
```

---

### `getFCMToken`
**Description:**
Retrieves the FCM token from MMKV storage.

**Returns:**
- (string | undefined): The stored FCM token, or `undefined` if not found.

**Example:**
```typescript
const fcmToken = getFCMToken();
```

---

### `setOrgValue`
**Description:**
Stores the organizational setup status in MMKV storage.

**Parameters:**
- `isOrgenable` (boolean): The status of organizational setup.

**Example:**
```typescript
setOrgValue(true);
```

---

### `getOrgValue`
**Description:**
Retrieves the organizational setup status from MMKV storage.

**Returns:**
- (boolean | undefined): The stored status, or `undefined` if not found.

**Example:**
```typescript
const isOrgSetup = getOrgValue();
```

---

### `setTenantID`
**Description:**
Stores the tenant ID token in MMKV storage.

**Parameters:**
- `token` (string): The tenant ID token to store.

**Example:**
```typescript
setTenantID("tenant-id-token");
```

---

### `getTenantID`
**Description:**
Retrieves the tenant ID token from MMKV storage.

**Returns:**
- (string | undefined): The stored tenant ID token, or `undefined` if not found.

**Example:**
```typescript
const tenantID = getTenantID();
```

---

### `removeTenantID`
**Description:**
Removes the tenant ID token from MMKV storage.

**Example:**
```typescript
removeTenantID();
```

---

### `removeAuthToken`
**Description:**
Removes the authentication token from MMKV storage.

**Example:**
```typescript
removeAuthToken();
```

---

### `removeOrg`
**Description:**
Removes the organizational setup status from MMKV storage.

**Example:**
```typescript
removeOrg();
```

---

## MMKV Instance Initialization
An MMKV instance is initialized at the beginning of the module:
```typescript
const storage = new MMKV();
```
This instance is used by all the functions to interact with the MMKV storage.
