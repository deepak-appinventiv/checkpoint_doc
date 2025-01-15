# Validation Utilities

This file contains various regular expressions and validation functions for validating inputs such as passwords, email addresses, names, and mobile numbers. These utilities are particularly useful for ensuring input conforms to expected patterns.

## Regular Expressions

### 1. **Password Validation**

- **Length Check:**
  ```regex
  /^(?=.{8,15}$)/
  ```
  Ensures the string length is between 8 and 15 characters.

- **Uppercase Letter Check:**
  ```regex
  /(.*[A-Z].*)/
  ```
  Ensures the presence of at least one uppercase letter.

- **Lowercase Letter Check:**
  ```regex
  /(.*[a-z].*)/
  ```
  Ensures the presence of at least one lowercase letter.

- **Numeric Character Check:**
  ```regex
  /(.*\d.*)/
  ```
  Ensures the presence of at least one numeric character.

- **Special Character Check:**
  ```regex
  /[!@$%&#*^]+/
  ```
  Ensures the presence of at least one special character.

- **Comprehensive Password Validation:**
  ```regex
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/
  ```
  Validates passwords with:
  - At least one lowercase letter.
  - At least one uppercase letter.
  - At least one numeric character.
  - At least one special character.
  - Length between 8 and 16 characters.

### 2. **Email Validation**

```regex
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```
Validates email addresses.

### 3. **Name Validation**

- **Edit Profile Name Validation:**
  ```regex
  /^(?!.*\.\.)(?!.*\. )[A-Za-z][A-Za-z. ]{0,23}[A-Za-z]$/
  ```
  Validates names for editing profiles, disallowing double periods and spaces after periods.

- **General Name Validation:**
  ```regex
  /^[a-zA-Z.]{2,25}(?: [a-zA-Z.]{2,25})?(?: [a-zA-Z.]{2,25})?$/
  ```
  Validates names with 2 to 25 characters, allowing up to 3 words.

### 4. **Mobile Number Validation**

```regex
/^\d{10}$/
```
Validates a 10-digit mobile number.

### 5. **Alphanumeric Validation with Spaces**

```regex
/^[a-zA-Z0-8\s]+$/
```
Allows alphanumeric characters (letters, numbers) and spaces.

## Utility Functions

### 1. **Email Validation Function**

```typescript
const handleValidEmail = (email: string) => {
  if (email?.trim()?.length === 0) {
    return false
  }
  return !emailRegex?.test(email)
}
```
- Validates an email.
- Returns `false` if the email is empty or does not match the regex.

### 2. **Password Validation Function**

```typescript
const handleValidPassword = (password: string) => {
  if (password?.trim()?.length <= 0) {
    return false
  }
  return true
}
```
- Validates a password.
- Returns `false` if the password is empty.
