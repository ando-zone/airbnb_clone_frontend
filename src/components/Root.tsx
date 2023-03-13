import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root(){
    return (
        // <h1>
        //     im root
        //     {/* Outlet이 하는 일은 루트의 중앙에 우리가 렌더링 하고싶은 컴포넌트를 위치시키는 것이다. */}
        //     {/* Outlet이 현재의 URL과 일치하는 자식을 렌더링한다. */}
        //     <Outlet />
        // </h1>
        <Box>
            <Header />
            <Outlet />
        </Box>
    );
}