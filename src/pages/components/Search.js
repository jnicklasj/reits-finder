import {
  Box,
  InputGroup,
  Input,
  InputLeftElement,
  IconButton,
} from '@chakra-ui/react';
import { Search2Icon, HamburgerIcon } from '@chakra-ui/icons';
export default function Search(props) {
  return (
    <Box display={{ base: 'flex' }} pl={2}>
      <Box flexGrow={1}>
        <InputGroup>
          <InputLeftElement
            pt={2}
            fontSize="xl"
            pointerEvents="none"
            children={<Search2Icon color="gray.400" />}
          />
          <Input
            type="text"
            size="lg"
            placeholder="Search Bank/ATM"
            bgColor="white"
          />
        </InputGroup>
      </Box>
      <Box flexShrink={0} px={2}>
        <IconButton
          size="lg"
          bgColor="white"
          color="gray.400"
          aria-label="cards or lists"
          icon={<HamburgerIcon fontSize="2xl" />}
          variant="outline"
        />
      </Box>
    </Box>
  );
}
