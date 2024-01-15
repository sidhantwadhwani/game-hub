import {
  Box,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <Box padding="5px">
      <HStack>
        <SkeletonCircle borderRadius={8} size="10" />
        <SkeletonText noOfLines={1} spacing="2" height={2} width={20} />
      </HStack>
    </Box>
    // <div></div>
  );
};

export default GenreSkeleton;
