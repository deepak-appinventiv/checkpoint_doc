# CustomVideo

The `CustomVideo` component is a wrapper around `react-native-video` that provides a customizable video player for applications. It offers flexible control options, custom styling, and loader functionality while maintaining a simple API.

## Usage

### Basic Example

```typescript
import React from "react";
import CustomVideo from "./CustomVideo";

const MyComponent = () => {
  return (
    <CustomVideo
      video="https://example.com/video.mp4"
      repeat={true}
      controls={true}
    />
  );
};

export default MyComponent;
```

## Props

| Prop Name        | Type                    | Default     | Description                                                   |
| ---------------- | ----------------------- | ----------- | ------------------------------------------------------------- |
| `video`          | `string`                | `undefined` | URL or local file path for the video source.                  |
| `customStyle`    | `ViewStyle`             | `undefined` | Custom styles for the video container.                        |
| `repeat`         | `boolean`               | `undefined` | Enable video looping when true.                               |
| `controls`       | `boolean`               | `undefined` | Show video playback controls when true.                       |
| `controlsStyles` | `object`                | `undefined` | Customization options for video controls (see details below). |
| `renderLoader`   | `() => React.ReactNode` | `undefined` | Custom loader component to show during video buffering.       |

### ControlsStyles Options

| Option                                | Type      | Description                         |
| ------------------------------------- | --------- | ----------------------------------- |
| `hidePosition`                        | `boolean` | Hide video position indicator       |
| `hidePlayPause`                       | `boolean` | Hide play/pause button              |
| `hideForward`                         | `boolean` | Hide forward button                 |
| `hideRewind`                          | `boolean` | Hide rewind button                  |
| `hideNext`                            | `boolean` | Hide next button                    |
| `hidePrevious`                        | `boolean` | Hide previous button                |
| `hideFullscreen`                      | `boolean` | Hide fullscreen toggle button       |
| `hideSeekBar`                         | `boolean` | Hide seek bar                       |
| `hideDuration`                        | `boolean` | Hide video duration display         |
| `hideNavigationBarOnFullScreenMode`   | `boolean` | Hide navigation bar in fullscreen   |
| `hideNotificationBarOnFullScreenMode` | `boolean` | Hide notification bar in fullscreen |
| `hideSettingButton`                   | `boolean` | Hide settings button                |
| `seekIncrementMS`                     | `number`  | Set seek increment in milliseconds  |
| `liveLabel`                           | `string`  | Custom label for live content       |

## Features

- **Customizable Controls:** Extensive control over video player UI elements
- **Flexible Styling:** Support for custom container styles
- **Custom Loading:** Ability to provide custom loading component
- **Video Features:** Support for looping, resize modes, and fullscreen options

## Example: Custom Controls and Loader

```typescript
import React from "react";
import CustomVideo from "./CustomVideo";
import CustomLoader from "./CustomLoader";

const MyComponent = () => {
  return (
    <CustomVideo
      video="https://example.com/video.mp4"
      repeat={true}
      controls={true}
      controlsStyles={{
        hideNext: true,
        hidePrevious: true,
        seekIncrementMS: 10000,
      }}
      renderLoader={() => <CustomLoader />}
    />
  );
};
```

## Implementation Details

```typescript
interface CustomVideoProps {
  video: string;
  customStyle?: ViewStyle;
  repeat?: boolean;
  controls?: boolean;
  controlsStyles?: {
    hidePosition?: boolean;
    hidePlayPause?: boolean;
    hideForward?: boolean;
    hideRewind?: boolean;
    hideNext?: boolean;
    hidePrevious?: boolean;
    hideFullscreen?: boolean;
    hideSeekBar?: boolean;
    hideDuration?: boolean;
    hideNavigationBarOnFullScreenMode?: boolean;
    hideNotificationBarOnFullScreenMode?: boolean;
    hideSettingButton?: boolean;
    seekIncrementMS?: number;
    liveLabel?: string;
  };
  renderLoader?: () => React.ReactNode;
}
```

## Notes

- The component requires `react-native-video` package as a dependency
- Video resizeMode is set to 'cover' by default
- Uses a ref to maintain reference to the video component for potential method calls
- Container style takes full available space by default
