import {
  Stack,
  Image,
  Text,
  Box,
  Heading,
  Flex,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';

import { IoMdAlarm, IoMdLocate, IoMdLogIn, IoMdBookmark } from 'react-icons/io';

export default function ParkingLists(props) {
  const defaultParkingImg = `/images/default-parking.png`;
  return (
    <>
      <Heading px={2} as="h3" variant="section-title">
        Near You
      </Heading>
      <Box px={2} bgColor="white" rounded="md" mx={2} p={2} mb={2}>
        <Box display={{ base: 'flex' }}>
          <Box flexGrow={1}>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <Image src={defaultParkingImg} alt={'Author'} w={12} />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>恩施机场停车场</Text>
                <Text color={'gray.500'}>车位充足，5分钟前更新</Text>
              </Stack>
            </Stack>
          </Box>
          <Box flexShrink={0} px={2}>
            <IconButton fontSize="2xl" icon={<IoMdBookmark />} />
          </Box>
        </Box>

        <Flex
          alignItems="center"
          mt={2}
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdLocate />
          <Text px={2}>恩施州许家坪路38号</Text>
        </Flex>
        <Flex
          mt={2}
          alignItems="center"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdAlarm w={64} mr={2} />
          <Text px={2} fontSize="sm">
            周一至周日，全天
          </Text>
        </Flex>
        <Flex
          mt={2}
          alignItems="center"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdLogIn w={64} mr={2} />
          <Text px={2} fontSize="sm">
            距离当前3km
          </Text>
        </Flex>
      </Box>
      <Box px={2} bgColor="white" rounded="md" mx={2} p={2} mb={2}>
        <Box display={{ base: 'flex' }}>
          <Box flexGrow={1}>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <Image src={defaultParkingImg} alt={'Author'} w={12} />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>恩施机场停车场</Text>
                <Text color={'gray.500'}>车位充足，5分钟前更新</Text>
              </Stack>
            </Stack>
          </Box>
          <Box flexShrink={0} px={2}>
            <IconButton fontSize="2xl" icon={<IoMdBookmark />} />
          </Box>
        </Box>

        <Flex
          alignItems="center"
          mt={2}
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdLocate />
          <Text px={2}>恩施州许家坪路38号</Text>
        </Flex>
        <Flex
          mt={2}
          alignItems="center"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdAlarm w={64} mr={2} />
          <Text px={2} fontSize="sm">
            周一至周日，全天
          </Text>
        </Flex>
        <Flex
          mt={2}
          alignItems="center"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdLogIn w={64} mr={2} />
          <Text px={2} fontSize="sm">
            距离当前3km
          </Text>
        </Flex>
      </Box>
      <Box px={2} bgColor="white" rounded="md" mx={2} p={2} mb={2}>
        <Box display={{ base: 'flex' }}>
          <Box flexGrow={1}>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <Image src={defaultParkingImg} alt={'Author'} w={12} />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>恩施机场停车场</Text>
                <Text color={'gray.500'}>车位充足，5分钟前更新</Text>
              </Stack>
            </Stack>
          </Box>
          <Box flexShrink={0} px={2}>
            <IconButton fontSize="2xl" icon={<IoMdBookmark />} />
          </Box>
        </Box>

        <Flex
          alignItems="center"
          mt={2}
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdLocate />
          <Text px={2}>恩施州许家坪路38号</Text>
        </Flex>
        <Flex
          mt={2}
          alignItems="center"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdAlarm w={64} mr={2} />
          <Text px={2} fontSize="sm">
            周一至周日，全天
          </Text>
        </Flex>
        <Flex
          mt={2}
          alignItems="center"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          <IoMdLogIn w={64} mr={2} />
          <Text px={2} fontSize="sm">
            距离当前3km
          </Text>
        </Flex>
      </Box>
    </>
  );
}
