import { Outlet } from "react-router-dom";
import { Box, Button, HStack } from "@chakra-ui/react";
import {FaAirbnb} from "react-icons/fa";

export default function Root(){
    return (
        // <h1>
        //     im root
        //     {/* Outlet이 하는 일은 루트의 중앙에 우리가 렌더링 하고싶은 컴포넌트를 위치시키는 것이다. */}
        //     {/* Outlet이 현재의 URL과 일치하는 자식을 렌더링한다. */}
        //     <Outlet />
        // </h1>
        <Box>
            <HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={1}>
                <Box color="red.500">
                    <FaAirbnb size={"48"} />
                </Box>
                <HStack spacing={2}>
                    <Button color="yellow.500">Log in</Button>
                    <Button colorScheme={"red"}>Sign up</Button>
                </HStack>
            </HStack>
            <Outlet />
        </Box>
    );
}