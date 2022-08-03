import { Mask } from "react-native-svg";
import { defaultValues } from ".";
import { IIconProps } from "./types";
import Svg, { Path } from "react-native-svg";
import { defaultProps } from "./utils";

export const ProfileIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 30 30"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM15 18.2c-5.657 0-10.558 1.175-13 2.82a3.865 3.865 0 0 0-2 3.08 3.865 3.865 0 0 0 2 3.08C4.442 28.825 9.343 30 15 30s10.558-1.175 13-2.82a3.865 3.865 0 0 0 2-3.08 3.866 3.866 0 0 0-2-3.08c-2.442-1.645-7.343-2.82-13-2.82Zm0 2c3.715-.12 7.415.53 10.867 1.909a5.8 5.8 0 0 1 1.694 1.132 1.06 1.06 0 0 1 0 1.718 5.8 5.8 0 0 1-1.694 1.132A26.972 26.972 0 0 1 15 28c-3.715.12-7.415-.53-10.867-1.909a5.8 5.8 0 0 1-1.694-1.132 1.059 1.059 0 0 1 0-1.718 5.8 5.8 0 0 1 1.694-1.132A26.974 26.974 0 0 1 15 20.2Z"
        fill={props.color || defaultValues.color}
      />
    </Svg>
  );
};

export const ProofIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 25 32"
    >
      <Path
        d="m24.694 6.724-.428-.426-5.608-5.57-.429-.425A1.054 1.054 0 0 0 17.492 0H1.368C.71 0 0 .505 0 1.614v29.283c0 .461.468.912 1.021 1.053.028.008.055.018.083.024.087.017.175.026.264.026h22.264c.089 0 .177-.01.264-.026.028-.006.055-.017.083-.024.553-.141 1.021-.592 1.021-1.053V7.712c0-.423-.051-.735-.306-.988ZM23.02 6.62h-4.686V1.967L23.02 6.62ZM1.37 30.897c-.04 0-.076-.015-.11-.027a.253.253 0 0 1-.148-.229v-8.02H23.89v8.02c0 .102-.06.187-.147.229-.035.012-.07.027-.11.027H1.368Zm-.258-9.38V1.614c0-.12.018-.51.257-.51h15.886a.846.846 0 0 0-.032.215v6.405h6.45a.856.856 0 0 0 .216-.032v13.825H1.112Z"
        fill={props.color || defaultValues.color}
      />
      <Path
        d="M15.467 27.446h-.916v-.528h.916a.78.78 0 0 0 .364-.073.477.477 0 0 0 .207-.205.663.663 0 0 0 .066-.3.715.715 0 0 0-.066-.306.531.531 0 0 0-.207-.23.672.672 0 0 0-.364-.087h-.696v3.025H14.1v-3.555h1.367c.277 0 .513.05.708.15.197.097.347.233.45.407.103.172.155.37.155.59 0 .23-.052.428-.156.594a.995.995 0 0 1-.449.383c-.195.09-.431.135-.708.135Zm2.903 1.296h-.767l.005-.527h.762c.206 0 .38-.046.52-.137a.855.855 0 0 0 .317-.398 1.64 1.64 0 0 0 .108-.625v-.183c0-.187-.02-.353-.061-.496a.991.991 0 0 0-.181-.361.751.751 0 0 0-.29-.222.987.987 0 0 0-.399-.076h-.796v-.53h.796c.238 0 .454.04.65.12a1.49 1.49 0 0 1 .842.876c.078.207.117.438.117.694v.178c0 .254-.039.485-.117.693a1.46 1.46 0 0 1-.845.874c-.198.08-.419.12-.661.12Zm-.39-3.555v3.555h-.672v-3.555h.671Zm3.256 0v3.555h-.671v-3.555h.671Zm1.433 1.536v.53H21.06v-.53h1.61Zm.188-1.536v.53H21.06v-.53h1.797Z"
        fill={props.color || defaultValues.color}
      />
    </Svg>
  );
};

export const PolicyIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 26 37"
    >
      <Path
        d="M21.247 17.073c.002-.018.003-.035.003-.054V7.253c0-3.915-2.912-6.648-7.083-6.648h-2.834c-4.17 0-7.083 2.733-7.083 6.648v9.766c0 .019.001.036.003.054-2.4.362-4.253 2.542-4.253 5.17v8.953c0 2.879 2.224 5.223 4.958 5.223h15.584c2.733 0 4.958-2.344 4.958-5.223v-8.954c0-2.627-1.852-4.807-4.253-5.169Zm-15.58-9.82c0-3.542 2.937-5.156 5.666-5.156h2.834c2.73 0 5.666 1.614 5.666 5.156v9.766H5.667V7.253Zm18.416 23.943c0 2.057-1.588 3.73-3.541 3.73H4.958c-1.953 0-3.541-1.673-3.541-3.73v-8.954c0-2.057 1.588-3.73 3.541-3.73h15.584c1.952 0 3.541 1.673 3.541 3.73v8.954Z"
        fill={props.color || defaultValues.color}
      />
      <Path
        d="M12.75 20.75c-1.953 0-3.542 1.674-3.542 3.73 0 1.167.534 2.27 1.417 2.97v3c0 1.234.953 2.238 2.125 2.238 1.172 0 2.125-1.004 2.125-2.238v-3a3.805 3.805 0 0 0 1.417-2.97c0-2.056-1.59-3.73-3.542-3.73Zm1.06 5.656a.754.754 0 0 0-.352.645v3.399c0 .412-.318.746-.708.746-.39 0-.708-.335-.708-.746V27.05a.755.755 0 0 0-.352-.645 2.238 2.238 0 0 1-1.065-1.925c0-1.235.953-2.239 2.125-2.239 1.172 0 2.125 1.005 2.125 2.239 0 .796-.398 1.516-1.065 1.925Z"
        fill={props.color || defaultValues.color}
      />
    </Svg>
  );
};

export const AccountIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 30 30"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM15 18.2c-5.657 0-10.558 1.175-13 2.82a3.865 3.865 0 0 0-2 3.08 3.865 3.865 0 0 0 2 3.08C4.442 28.825 9.343 30 15 30s10.558-1.175 13-2.82a3.865 3.865 0 0 0 2-3.08 3.866 3.866 0 0 0-2-3.08c-2.442-1.645-7.343-2.82-13-2.82Zm0 2c3.715-.12 7.415.53 10.867 1.909a5.8 5.8 0 0 1 1.694 1.132 1.06 1.06 0 0 1 0 1.718 5.8 5.8 0 0 1-1.694 1.132A26.972 26.972 0 0 1 15 28c-3.715.12-7.415-.53-10.867-1.909a5.8 5.8 0 0 1-1.694-1.132 1.059 1.059 0 0 1 0-1.718 5.8 5.8 0 0 1 1.694-1.132A26.974 26.974 0 0 1 15 20.2Z"
        fill={props.color || defaultProps.color}
      />
    </Svg>
  );
};

export const ThermsIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 29 25"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.455 11.222h22.09c1.356 0 2.455 1.144 2.455 2.556v2.555c0 1.412-1.099 2.556-2.454 2.556H3.454C2.099 18.889 1 17.745 1 16.333v-2.555c0-1.412 1.099-2.556 2.455-2.556Zm.245 2.556v2.555h21.6v-2.555H3.7ZM3.455 1h22.09C26.902 1 28 2.144 28 3.556V6.11c0 1.412-1.099 2.556-2.454 2.556H3.454C2.099 8.667 1 7.523 1 6.11V3.556C1 2.144 2.099 1 3.455 1ZM3.7 3.556V6.11h21.6V3.556H3.7ZM1 21.444h16.2V24H1v-2.556Z"
        fill={props.color || defaultProps.color}
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  );
};

export const LogoutIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 19 18"
    >
      <Mask id="a" fill={props.color || defaultProps.color}>
        <Path d="M6 18H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4" />
      </Mask>
      <Path
        d="M6 19.2a1.2 1.2 0 0 0 0-2.4v2.4ZM0 16h-1.2H0ZM2 0v-1.2V0Zm4 1.2a1.2 1.2 0 0 0 0-2.4v2.4Zm0 15.6H2v2.4h4v-2.4Zm-4 0a.8.8 0 0 1-.566-.234l-1.697 1.697A3.2 3.2 0 0 0 2 19.2v-2.4Zm-.566-.234A.8.8 0 0 1 1.2 16h-2.4a3.2 3.2 0 0 0 .937 2.263l1.697-1.697ZM1.2 16V2h-2.4v14h2.4Zm0-14a.8.8 0 0 1 .234-.566L-.263-.263A3.2 3.2 0 0 0-1.2 2h2.4Zm.234-.566A.8.8 0 0 1 2 1.2v-2.4a3.2 3.2 0 0 0-2.263.937l1.697 1.697ZM2 1.2h4v-2.4H2v2.4Z"
        fill={props.color || defaultProps.color}
        mask="url(#a)"
      />
      <Path
        d="m13 14 5-5-5-5M18 9H6"
        stroke={props.color || defaultProps.color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CloseIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 15 16"
    >
      <Path
        d="M1.711.313a.959.959 0 0 0-1.417 0 1.12 1.12 0 0 0 0 1.512L6.082 8 .294 14.175a1.12 1.12 0 0 0 0 1.512.959.959 0 0 0 1.417 0L7.5 9.512l5.789 6.175a.959.959 0 0 0 1.417 0 1.12 1.12 0 0 0 0-1.512L8.918 8l5.788-6.175a1.12 1.12 0 0 0 0-1.512.959.959 0 0 0-1.417 0L7.5 6.488 1.711.313Z"
        fill={props.color || defaultProps.color}
      />
    </Svg>
  );
};

export const HomeIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 23 25"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.645 3.201c-1.199-1.093-3.091-1.093-4.29 0L2.983 9.01a.966.966 0 0 0-.3.53 34.02 34.02 0 0 0-.166 11.973l.155.943H6.77v-8.127c0-.542.462-.982 1.032-.982h7.394c.57 0 1.032.44 1.032.982v8.127h4.1l.154-.943c.653-3.972.597-8.02-.166-11.973a.965.965 0 0 0-.3-.53L13.645 3.2Zm-5.72-1.416c1.998-1.822 5.152-1.822 7.15 0l6.372 5.809a2.9 2.9 0 0 1 .902 1.592c.805 4.17.864 8.44.175 12.63l-.249 1.515c-.103.626-.67 1.088-1.338 1.088h-5.74c-.57 0-1.033-.44-1.033-.982V15.31H8.836v8.127c0 .542-.462.982-1.033.982h-5.74c-.668 0-1.235-.462-1.338-1.088l-.25-1.515c-.688-4.19-.629-8.46.176-12.63a2.901 2.901 0 0 1 .902-1.592l6.371-5.81Z"
        fill={props.color || defaultProps.color}
      />
    </Svg>
  );
};

export const MenuIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 30 22"
    >
      <Path
        d="M.937 1.919h28.125c.518 0 .938-.43.938-.96S29.58 0 29.062 0H.937A.949.949 0 0 0 0 .96c0 .529.42.959.937.959ZM29.062 9.593H.937a.949.949 0 0 0-.937.96c0 .529.42.959.937.959h28.125c.518 0 .938-.43.938-.96s-.42-.959-.938-.959ZM29.062 19.186H.937a.949.949 0 0 0-.937.96c0 .529.42.959.937.959h28.125c.518 0 .938-.43.938-.96s-.42-.959-.938-.959Z"
        fill={props.color || defaultProps.color}
      />
    </Svg>
  );
};

export const LibIcon = (props: IIconProps) => {
  return (
    <Svg
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}
      fill="transparent"
      viewBox="0 0 22 31"
    >
      <Path
        d="M20.947 4.581H3.992M20.947 1.512H3.992C2.297 1.512 1 2.842 1 4.582c0 1.739 1.297 3.07 2.992 3.07h16.955v20.464"
        stroke={props.color || defaultProps.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.987 7.651v12.28l2.992-1.024 2.992 1.023V7.651"
        stroke={props.color || defaultProps.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.947 29.14H3.992C2.297 29.14 1 27.81 1 26.07V5.605"
        stroke={props.color || defaultProps.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
