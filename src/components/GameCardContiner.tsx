import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  children: ReactNode;
}

const GameCardContiner = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContiner;
