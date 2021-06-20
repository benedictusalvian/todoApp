import { TransitionSpecs } from "@react-navigation/stack";

export const ScreenAnimation = ({ x: startX, y: startY }) => {

  const transitionConfig = {
    animation: "timing",
    config: {
      duration: 400,
    },
  };

  return {
    transitionSpec: {
      open: transitionConfig,
      close: TransitionSpecs.FadeOutToBottomAndroidSpec,
    },
    headerStyleInterpolator: ({ current: { progress }, layouts }) => {
      return {
        backgroundStyle: {
          transform: [
            {
              scaleX: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              }),
            },
            {
              translateX: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width * 0.5 * -1 + startX, 0],
              }),
            },
            {
              translateY: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [startY, 0],
              }),
            },
          ],
        },
        titleStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 1],
          }),
        },
      };
    },
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress,
        },
      }),
  };
};