import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlaforms from "../hooks/usePlatforms";

export const PlatformSelector = () => {
  const { data, error } = usePlaforms();

  if (error) return null;

  return (
    <div style={{ marginLeft: "35px" }}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
