import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    RadioGroup,
    Stack,
    Radio,
    Text,
    Link,
    Box,
    CloseButton,
    useMediaQuery,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { BiHomeAlt, BiTrendingUp } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";

export function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLessThan760] = useMediaQuery('(max-width: 760px)')

    const iconsAndData = [
        { icon: BiHomeAlt, title: 'Home' },
        { icon: BiTrendingUp, title: 'Trending' },
        { icon: MdOutlineExplore, title: 'Explore' },
        { icon: AiOutlineStar, title: 'Favourites' },
        { icon: TbSettings, title: 'Setting' },
    ];

    return (
        <>
            {isLessThan760 ? (
                <>
                    <Box h={"100vh"} style={{ backgroundColor: "#EDF2F7" }}>
                        <Box h={"80px"} p={"10px"} borderBottom={"1px solid #d5d4d4c8"} textAlign={"left"} display={"flex"} alignItems={"center"} bg='white' w='100%' p={4} color='white'>
                            <Button colorScheme='white' border={"1px solid #adadadaf"} color={"black"} onClick={onOpen}><HamburgerIcon /></Button>
                            <Text style={{ fontFamily: 'monospace' }} fontWeight='bold' color={'black'} fontSize={"20px"} ml={"30px"}>Logo</Text>
                        </Box>

                    </Box>

                    <Drawer size={"xl"} placement={"left"} isOpen={isOpen}>
                        <DrawerOverlay style={{ backgroundColor: "#EDF2F7" }} />
                        <DrawerContent style={{ fontFamily: 'monospace' }}>
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <DrawerHeader fontWeight='bold' fontSize={"23px"} m={"10px"}>Logo</DrawerHeader>
                                <Text m={"30px"}><CloseButton onClick={onClose} size='md' /></Text>
                            </Box>
                            <Link _hover={{ textdecoration: 'none' }}>
                                {iconsAndData.map((data, i) => (
                                    <Box key={i} fontFamily={'system-ui'} letterSpacing={"0px"} fontWeight={"400"} borderRadius={"10px"} display={"flex"} textAlign={"left"} alignItems={"center"} padding={"10px"} marginLeft={"20px"} h={"55px"} backgroundColor={"transparent"} _hover={{ backgroundColor: "#0bc5ea", color: "#fff" }} w={"80%"} fontSize={"17px"}>
                                        <data.icon style={{ marginRight: "15px", }} fontSize={"19px"} /> {data.title}
                                    </Box>
                                ))}
                            </Link>
                        </DrawerContent>
                    </Drawer>
                </>
            ) : (
                <Drawer sizes={60} placement={"left"} onClose={onClose} isOpen={onOpen}>
                    <DrawerOverlay style={{ backgroundColor: "#EDF2F7" }} />
                    <DrawerContent style={{ fontFamily: 'monospace' }}>
                        <DrawerHeader fontWeight='bold' fontSize={"23px"} m={"10px"}>Logo</DrawerHeader>
                        <Link _hover={{ textdecoration: 'none' }}>
                            {iconsAndData.map((data, i) => (
                                <Box key={i} fontFamily={'system-ui'} letterSpacing={"0px"} fontWeight={"400"} borderRadius={"10px"} display={"flex"} textAlign={"left"} alignItems={"center"} padding={"10px"} marginLeft={"20px"} h={"55px"} backgroundColor={"transparent"} _hover={{ backgroundColor: "#0bc5ea", color: "#fff" }} w={"80%"} fontSize={"17px"}>
                                    <data.icon style={{ marginRight: "15px", }} fontSize={"19px"} /> {data.title}
                                </Box>
                            ))}
                        </Link>
                    </DrawerContent>
                </Drawer>
            )}
        </>
    )
}