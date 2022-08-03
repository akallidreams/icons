import { Icon } from "native-base";
import { IIconProps } from "./types";
import { defaultValues } from ".";
import Svg, { Path } from "react-native-svg";
import { defaultProps } from "./utils";

export const CheckIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 30 30"
    >
      <Path
        d="M25.106 0 9.82 18.312l-4.958-5.939L0 18.198l4.958 5.94L9.852 30l4.862-5.825L30 5.863 25.106 0Z"
        fill={props.color || defaultValues.color}
      />
    </Svg>
  );
};
