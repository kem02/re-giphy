import { NavLink, Outlet } from "react-router-dom"
import { Box, HStack } from "@chakra-ui/react"

export default function Layout() {
    return (
    <Box padding="2">
      <HStack>
        <NavLink to="/trending">
          {({ isActive }) => (
            <Box
              padding="2"
              borderWidth="thick"
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottomColor={isActive ? "blue.700" : "blue.50"}
            >
              Trending
            </Box>
          )}
        </NavLink>

        <NavLink to="/random">
          {({ isActive }) => (
            <Box
              padding="2"
              borderWidth="thick"
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottomColor={isActive ? "blue.700" : "blue.50"}
            >
              Random
            </Box>
          )}
        </NavLink>

        <NavLink to="/search">
          {({ isActive }) => (
            <Box
              padding="2"
              borderWidth="thick"
              borderTop={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              borderBottomColor={isActive ? "blue.700" : "blue.50"}
            >
              Search
            </Box>
          )}
        </NavLink>

      </HStack>
      <Outlet />
    </Box>
    )
}