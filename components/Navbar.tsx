import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { DISABLED_PROFILE_TEXT } from "../utils/constants";
import LogoutButton from "./LogoutButton";
import NavLink from "./NavLink";

const Navbar = () => {
  const [loggedIn, setLeggedIn] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    {/** useColorModeValue(["color_for _light_mode", "color_for_dark_mode"]) */}
      <Box bg={useColorModeValue("gray.100", "blue.900")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={8} alignItems="center">
            <NavLink mr={4} to="/">
              Home
            </NavLink>

            <Tooltip
              isDisabled={loggedIn}
              hasArrow
              label={DISABLED_PROFILE_TEXT}
              bg={"red.600"}
            >
              <HStack
                as="nav"
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <NavLink
                  mr={4}
                  to="/profile"
                  className={loggedIn ? "" : "link-disabled"}
                >
                  Profile
                </NavLink>
              </HStack>
            </Tooltip>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {!loggedIn ? (
                <Stack direction={"row"} alignItems="center">
                  <Box>
                    <Badge variant={"outline"} colorScheme="red">
                      Not Logged In
                    </Badge>
                  </Box>
                </Stack>
              ) : (
                <Stack direction={"row"} alignItems="center">
                  <LogoutButton />
                </Stack>
              )}
            </Stack>
            <IconButton
              variant="ghost"
              size="md"
              aria-label="Toggle theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
            <HStack direction="row">
              <Tooltip
                isDisabled={!loggedIn}
                hasArrow
                label="user email"
                bg="green.600"
              >
                <Avatar
                  size="sm"
                  src={
                    loggedIn
                      ? "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      : ""
                  }
                >
                  <AvatarBadge boxSize={'1.25em'} bg={loggedIn ? 'green.500' : 'tomato'}></AvatarBadge>
                </Avatar>
              </Tooltip>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
