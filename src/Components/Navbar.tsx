import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Izo.jpg";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" borderRadius="20px" margin="3px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
