import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';
export default function Findby(props) {
  const parkingImg = `/images/parking.png`;
  const favoriteImg = `/images/favorite.png`;
  return (
    <Box px={2}>
      <Heading as="h3" variant="section-title">
        Your perfect finding ways
      </Heading>
      <SimpleGrid columns={2} gap={2} align="center">
        <Box bgColor="white" rounded="md" p={8}>
          <Image rounded="md" w={16} src={parkingImg} />
          <Text textAlign="center" mt={2} fontWeight="bold">
            搜索停车场
          </Text>
        </Box>
        <Box bgColor="white" round="md" p={8}>
          <Image rounded="md" w={16} src={favoriteImg} />
          <Text textAlign="center" mt={2} fontWeight="bold">
            我的收藏
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
