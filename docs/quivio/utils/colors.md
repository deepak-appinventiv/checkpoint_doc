

# Color Palette

This Palette defines a comprehensive set of colors to be used throughout the project for consistency and clarity in UI design. Each color is represented with a key-value pair where the key describes the color's usage and the value is its hexadecimal or RGBA code.

## Colors

### Primary Colors

| Color Name        | Key            | Hex/RGBA Code      |
|-------------------|----------------|--------------------|
| Black             | black000000    | `#000000`          |
| Black (Dark)      | black0B1721    | `#0B1721`          |
| White             | whiteFFFFFF    | `#FFFFFF`          |
| White (Light)     | whiteF8F9F9    | `#F8F9F9`          |

### Blue Shades

| Color Name             | Key                      | Hex/RGBA Code        |
|------------------------|--------------------------|----------------------|
| Primary Blue           | blue004E9A               | `#004E9A`            |
| Button Blue (Active)   | blueButton2A7CDC         | `#2A7CDC`            |
| Button Blue (Disabled) | disableButtonBlue2A7BBB  | `rgba(42, 123, 187, 0.2)` |
| Button Blue (Enabled)  | enableButtonBlue2A7BBB   | `#2A7BBB`            |
| Button Blue (Light)    | blue2A7BBB1A             | `#2A7BBB1A`          |
| Blue Light             | bgLigthBlue              | `#E6EDF3`            |
| Sky Blue               | skyblue                  | `rgba(70, 164, 186, 0.1)` |
| Selected Tab Blue      | selectedTab              | `#46A4BA`            |

### Grey Shades

| Color Name         | Key              | Hex/RGBA Code      |
|--------------------|------------------|--------------------|
| Grey (Dark)        | Gray4D5876       | `#4D5876`          |
| Grey (Medium)      | gray4F5F72       | `#4F5F72`          |
| Grey (Light)       | grey60707D       | `#60707D`          |
| Grey (Lightest)    | grey85929C       | `#85929C`          |
| Grey (Pale)        | grey9C9E9F       | `#9C9E9F`          |
| Grey (Darker)      | grey677489       | `#677489`          |
| Grey (Muted)       | greyE5E8EA       | `#E5E8EA`          |
| Grey (Lightest)    | greyF6F7F7       | `#F6F7F7`          |
| Grey (Very Light)  | greyEDEFF1       | `#EDEFF1`          |
| Grey (Warm)        | grey3A4F5F       | `#3A4F5F`          |
| Grey (Background)  | greyE6ECF3       | `#E6ECF3`          |

### Error & Warning Colors

| Color Name      | Key               | Hex/RGBA Code      |
|-----------------|-------------------|--------------------|
| Error Red       | ErrorRed          | `#F04438`          |
| Toast Red       | ToastRed          | `#F04438`          |
| Warning Red     | warningF79009     | `#F79009`          |
| Inactive Red    | redInactive       | `rgba(240, 68, 56, 0.1)` |

### Success Colors

| Color Name          | Key                | Hex/RGBA Code       |
|---------------------|--------------------|---------------------|
| Green Success       | greenSuccess       | `#17B26A`           |
| Green Success (Light) | greenSuccess3CBE82 | `#3CBE82`           |
| Active Green       | activeGreen        | `rgba(60, 190, 130, 1)` |
| Active Green (Light) | activeGreenlight   | `rgba(60, 190, 130, 0.1)` |

### Neutral Colors

| Color Name             | Key                    | Hex/RGBA Code       |
|------------------------|------------------------|---------------------|
| Grey Border            | GrayBorder             | `#8A91A5`           |
| Border Grey            | borderGrey             | `#E9EAEA`           |
| Border Grey (Light)    | borderGrey1            | `#F1F3F4`           |
| Disable Button Blue    | disableButtonBlue2A7BBB | `rgba(42, 123, 187, 0.2)` |
| Grey (Placeholder)     | greyPlaceHolder        | `#ABB3BA`           |
| Grey (Modal Background)| greyModalBack          | `rgba(8, 16, 23, 1)` |
| Grey (Darker)          | grey3A4F5F             | `#3A4F5F`           |

### Other Colors

| Color Name         | Key                 | Hex/RGBA Code       |
|--------------------|---------------------|---------------------|
| Magenta            | magenta             | `#AB3D97`           |
| Light Green        | lightGreen          | `#3DAB7D`           |
| Light Brown        | lightBrown          | `#AB3D3D`           |
| Light Purple       | lightPurple         | `#6067B2`           |
| Blue Voilet        | blueVoilet          | `#6067B2`           |
| Green              | green               | `#139659`           |
| Clear Blue (Background) | clearE6ECF3      | `#E6ECF3`           |
| Template Background| templateBgColor     | `#218AFF`           |
| Black (Darker)     | black122636         | `#122636`           |
| Black (Mid)        | black081017         | `#081017`           |
| Black (Light)      | black0D152B         | `#0D152B`           |
| White (Opacity)    | whiteFFFFFF1A       | `#FFFFFF1A`         |
| Black (Opacity)    | black0000000F       | `#0000000F`         |
| Toast Green        | ToastGreen          | `#17B26A`           |
| Pause Orange       | pauseOrange         | `#F790091A`         |
| Selected Tab       | selectedTab         | `#46A4BA`           |
| Success Green      | successGreen        | `#139659`           |
| Grey (Background)  | greyBgColor         | `#E6ECF3`           |

### Transparent

| Color Name   | Key         | Hex/RGBA Code      |
|--------------|-------------|--------------------|
| Transparent  | transparent | `transparent`      |

## Usage

These colors should be used consistently across the UI for backgrounds, borders, buttons, text, and other elements to maintain a unified theme throughout the project.

Example usage in React Native:

```javascript
import colors from './colors';

// Example usage in a component
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blueButton2A7CDC,
    color: colors.whiteFFFFFF,
  },
  errorText: {
    color: colors.ErrorRed,
  },
});
```