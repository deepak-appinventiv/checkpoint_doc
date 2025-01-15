# useFormHandler

The `useFormHandler` hook is a custom hook used to handle form submissions, validations, and state management for adding or editing employee details in a React application. It integrates with the `react-hook-form` library for form handling, utilizes `yup` validation schema, and dispatches Redux actions for employee data creation.

## Code

```javascript
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@quivio/screens/core/addEmployee/utils/validationSchema";
import { useDispatch } from "react-redux";
import addEmployeeAction from "@redux/addEmployee/action";
import localString from "@quivio/localization/localString";
import { isArray } from "lodash";

export const useFormHandler = ({
  values,
  state,
  handleSuccessModal,
  employeeData,
  isEdit,
  requiredAdditionalKeys,
  updateState,
  configurationData,
}: any) => {
  const dispatch = useDispatch();
  const departmentsArray =
    values?.department?.length > 0 &&
    values?.department?.map((item: any) => item?.id);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      Fname: employeeData?.first_name,
      Lname: employeeData?.last_name,
      email: employeeData?.email,
    },
  });

  const validateFixedFields = () => {
    let isValidated = true;
    if (!state?.values?.role) {
      updateState({
        ...state,
        fixedInputsError: [
          ...state.fixedInputsError,
          localString.PLEASE_SELECT_ROLE,
        ],
      });
      isValidated = false;
    } else if (
      state?.values?.phoneNumber?.length > 0 &&
      state?.values?.phoneNumber?.length < 10
    ) {
      updateState({
        ...state,
        fixedInputsError: [
          ...state.fixedInputsError,
          localString.PHONE_NUMBER_REQUIRED,
        ],
      });
      isValidated = false;
    }
    return isValidated;
  };

  const validateData = () => {
    let errorInputs: any = [];
    if (state?.additionalDetails) {
      Object.keys(state.additionalDetails).forEach((key) => {
        if (
          !state.additionalDetails[key] &&
          requiredAdditionalKeys?.includes(key)
        ) {
          errorInputs.push(key);
          updateState({ ...state, errorInputs: errorInputs });
        } else {
          errorInputs?.includes(key) &&
            errorInputs?.splice(errorInputs.indexOf(key), 1);
          errorInputs?.includes(key) && updateState({ ...state });
        }
      });
      if (errorInputs.length > 0) {
        return false;
      }
      return true;
    }
  };

  const setValue = (key: string, value?: any) => {
    let isSingleSelected = configurationData?.filter(
      (ele: any) => ele?.key === key
    );
    let value1 = isSingleSelected[0]?.is_multi_select;
    if (!value1 && isArray(value)) {
      return value[0];
    }
    return value;
  };

  const onSubmit = (data?: any) => {
    if (!validateFixedFields()) {
      console.log("dfghjhgfghj 22");
      return;
    }
    if (state?.additionalDetails) {
      console.log("dfghjhgfghj 223");
      if (!validateData()) {
        console.log("dfghjhgfghj 224");
        return;
      }
    }

    const payload = {
      first_name: data?.Fname,
      last_name: data?.Lname,
      email: data?.email,
      phone_number: values?.phoneNumber,
      organization_site_id: values?.associatedSite[0]?.id,
      user_type: values?.role?.id,
      access_group_id: values?.accessGroup[0]?.id,
      departments: departmentsArray || [],
      attributes: state?.additionalDetails
        ? Object.keys(state?.additionalDetails)
            .map((ele) => ({
              key: ele,
              value: setValue(ele, state?.additionalDetails?.[ele]),
            }))
            ?.filter((item) => {
              if (isArray(item?.value)) {
                return item?.value?.length !== 0;
              } else {
                return (
                  item?.value !== null &&
                  item?.value !== "" &&
                  item?.value !== undefined
                );
              }
            })
        : [],
      ...(data?.reason ? { reason: data?.reason } : null),
    };

    console.log("Form data:", payload, data);
    dispatch(
      addEmployeeAction.createEmployee.pending({
        emp_id: employeeData?.id,
        isEdit,
        data: payload,
        successCallback: (res: any) => {
          if (res.statusCode === 200) {
            handleSuccessModal(res?.message);
          }
        },
      })
    );
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    watch,
  };
};
```

## Usage

### Basic Example

```javascript
import React, { useState } from "react";
import { TextInput, View, Button } from "react-native";
import { useFormHandler } from "./useFormHandler";

const AddEmployeeComponent = () => {
  const [state, setState] = useState({ values: {}, errorInputs: [] });
  const handleSuccessModal = (message) => {
    alert(message);
  };

  const { control, handleSubmit, errors, onSubmit } = useFormHandler({
    values: { role: "Manager" },
    state,
    handleSuccessModal,
    employeeData: {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
    },
    isEdit: false,
    requiredAdditionalKeys: ["address", "phone"],
    updateState: setState,
    configurationData: [],
  });

  return (
    <View>
      <TextInput
        placeholder="First Name"
        style={{ borderWidth: 1, marginBottom: 10 }}
        onChangeText={(value) =>
          setState({ ...state, values: { ...state.values, Fname: value } })
        }
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default AddEmployeeComponent;
```

## Props

| Function       | Type                                      | Description                                                      |
| -------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| `control`      | `Control`                                 | Provides methods for controlling the form input components.      |
| `handleSubmit` | `(onSubmit: (data: any) => void) => void` | Handles form submission, invokes the provided onSubmit function. |
| `errors`       | `FormState['errors']	`                     | Contains validation error messages for the form fields.          |
| `onSubmit`     | `(data?: any) => void	`                    | Submits the form and triggers validation and state update.       |
| `watch`        | `(field: string) => any`                  | Watches the value of form fields in real-time.                   |

## Features

- **Form Validation:** Integrates yup validation schema to handle form validation.
- **Dynamic State Management:** Provides validation for fixed fields and dynamic input fields.
- **Error Handling:** Tracks and displays errors for required fields and additional inputs.
- **Redux Integration:** Dispatches Redux actions to create or edit employee data.
- **Custom Field Handling:** Handles multi-select and single-select fields dynamically.

## Example: Managing Multiple Inputs

```javascript
import React from "react";
import { View, TextInput, Button } from "react-native";
import { useFormHandler } from "./useFormHandler";

const EmployeeForm = () => {
  const [state, setState] = useState({ values: {}, errorInputs: [] });
  const handleSuccessModal = (message) => {
    alert(message);
  };

  const { control, handleSubmit, errors, onSubmit } = useFormHandler({
    values: { role: "Manager" },
    state,
    handleSuccessModal,
    employeeData: {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
    },
    isEdit: false,
    requiredAdditionalKeys: ["address"],
    updateState: setState,
    configurationData: [],
  });

  return (
    <View>
      <TextInput
        placeholder="First Name"
        style={{ borderWidth: 1, marginBottom: 10 }}
        onChangeText={(value) =>
          setState({ ...state, values: { ...state.values, Fname: value } })
        }
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default EmployeeForm;
```
