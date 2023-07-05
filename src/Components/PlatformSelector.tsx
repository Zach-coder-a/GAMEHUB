import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlaforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlaform: Platform | null;
}

export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlaform,
}: Props) => {
  const { data, error } = usePlaforms();

  if (error) return null;

  return (
    <div style={{ marginLeft: "35px" }}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlaform?.name || "platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
