import { useColorModeValue, Box, Flex, Heading, Image } from '@chakra-ui/react';
export default function Nav(props) {
  const avatar = `/images/avatar.png`;
  return (
    <Box
      as="header"
      w="full"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zindex={1}
      m={2}
      {...props}
    >
      <Flex>
        <Box>
          <Image src={avatar} rounded="md" w={10} />
        </Box>
        <Box ml={4}>
          <Heading as="h2">Hello, llias</Heading>
        </Box>
      </Flex>
    </Box>
  );
}
