import { IIconProps } from "./types";
import Svg, { Path } from "react-native-svg";
import { defaultProps } from "./utils";

export const CheckIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 18 15"
    >
      <Path
        d="M15.064 0 5.892 9.156l-2.975-2.97L0 9.1l2.975 2.97L5.91 15l2.917-2.912L18 2.93 15.064 0Z"
        fill={props.color || defaultProps.color}
      />
    </Svg>
  );
};
