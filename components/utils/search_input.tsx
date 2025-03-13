import { Box, Flex, Input, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface Props {

}

const SearchInput: FC<Props> = ({
}) => {
    const [searchValue, setSearchValue] = useState<string>("");
    useEffect(() => {
        const time = setTimeout(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('query');
            if (query) {
                setSearchValue(query);
            }
        }, 200)
        return () => {
            clearTimeout(time);
        };
    }, [])
    return (
        <Box w={"70%"} sx={{ display: "flex", alignItems: "center", borderRadius: 100}} bg="white" pl={15} mt={30} h={40}>
            <Flex
                pl={10}
                pr={10}
                bg={"#1D1D1F"}
                gap={5}
                pt={2}
                pb={2}
                align={"center"}
                sx={{height: "fit-content", borderRadius: 100}}
                >
                    <IconSearch color="white" size={14}/>
                    <Flex>
                        <Text color="white" weight='bold' size={12} className="sf-pro-text">Pharmacy</Text>
                        <Text color="transparent" weight='bold' size={12} className="sf-pro-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">wiki</Text>
                    </Flex>
                </Flex>
            <Input
                w='100%'
                size="sm"
                h={40}
                sx={{height: "fit-content"}}
                placeholder="Search medicine by brand name, generic name, ingredient, or manufacturer"
                className="trade-search"
                rightSection={
                    <IconSearch size={14} className="opacity-50" />
                }
                value={searchValue}
                onChange={(e: any) => {
                    setSearchValue(e.currentTarget.value);
                }}
                onKeyDown={(e: KeyboardEvent) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        window.location.href = ("/search?query=" + searchValue)
                    }
                }}
            />
        </Box>
    )
}

export default SearchInput;