import { storiesOf } from "@storybook/react-native";
import { AkIcons } from "../../index";
import { Center, Link, NativeBaseProvider, Text } from "native-base";
import { styles } from "./styles";

const ProviderContainer = ({ Component }) => (
  <NativeBaseProvider>
    <Center h="full" w="full">
      <Component />
    </Center>
  </NativeBaseProvider>
);

storiesOf("Navigation Icons", module)
  .addDecorator((getStory) => (
    <ProviderContainer
      Component={() => (
        <Center w="full" h="full" bg={styles.bg} borderWidth="2px" py="30%">
          <Text {...styles.textProps}>
            {`interface iconProps {
              size?: string;
              color?: string;
              }`}
          </Text>
          {getStory()}
          <Link
            _text={{ ...styles.textProps }}
            href="https://www.figma.com/files/project/57125856/Akalli?fuid=1089570626196579450"
          >
            Acess our FIGMA
          </Link>
        </Center>
      )}
 
  ))
  .add("Close", () => (
    <AkIcons.NavIcons.CloseIcon {...styles.iconProps} />
  ))
  .add("Home", () => (
    <AkIcons.NavIcons.HomeIcon {...styles.iconProps} />
 
  ))
  .add("Library", () => (
    <AkIcons.NavIcons.LibIcon {...styles.iconProps} />
 
  ))
  .add("Logout", () => (
    <AkIcons.NavIcons.LogoutIcon {...styles.iconProps} />
 
  ))
  .add("Menu", () => (
    <AkIcons.NavIcons.MenuIcon {...styles.iconProps} />
 
  ))
  .add("Policy", () => (
    <AkIcons.NavIcons.PolicyIcon {...styles.iconProps} />
 
  ))
  .add("Profile", () => (
    <AkIcons.NavIcons.ProfileIcon {...styles.iconProps} />
 
  ))
  .add("PDF", () => (
    <AkIcons.NavIcons.ProofIcon {...styles.iconProps} />
 
  ))
  .add("Therms", () => (
    <AkIcons.NavIcons.ThermsIcon {...styles.iconProps} />
 
  ));

//   .addDecorator((getStory) => <Center>{getStory()}</Center>)

// Therms e check grossura, logout resolution
