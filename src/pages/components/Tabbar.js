import { useNavigate } from 'react-router-dom';
import {
  Box,
  SimpleGrid,
  GridItem,
  Stack,
  Flex,
  Icon,
  IconButton,
} from '@chakra-ui/react';

import { IoMdHome, IoMdSettings, IoMdPerson } from 'react-icons/io';

const Feature = ({ icon, linkto }) => {
  const navigate = useNavigate();
  return (
    <Stack align="center">
      <Flex w={12} h={12}>
        <IconButton
          px={1}
          variant="ghost"
          icon={icon}
          onClick={async () => {
            navigate(linkto)
          }}
        />
      </Flex>
    </Stack>
  );
};

export default function Tabbar() {
  return (
    <>
      <Box
        position="fixed"
        bottom={0}
        bgColor="#fafafa"
        zIndex={9999}
        w={'full'}
        maxW={'container.sm'}
      >
        <SimpleGrid columns={3}>
          <GridItem colSpan={1}>
            <Feature icon={<Icon as={IoMdHome} w={8} h={8} />} linkto="/" />
          </GridItem>
          <GridItem colSpan={1}>
            <Feature
              icon={<Icon as={IoMdPerson} w={8} h={8} />}
              linkto="/ucenter"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Feature
              icon={<Icon as={IoMdSettings} w={8} h={8} />}
              linkto="/carts"
            />
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
}
