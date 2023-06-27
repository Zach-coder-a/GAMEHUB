import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Izo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="20px" margin="3px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
