import { POPULAR_SEARCHES } from "@/utils/app/consts";
import { Box, Flex, Grid, SimpleGrid, Text } from "@mantine/core";

const PopularSearches = () => {
    return (
        <Flex mt={30} justify='center' gap={10} w='100%' pl={50} pr={50}>
            <Text size={14} className="text-[#1D1D1F] opacity-40 text-right leading-[1]" pr={10} sx={{ whiteSpace: "nowrap"}}>Popular searches: </Text>
            <Flex justify='start' gap={10} align="center" wrap="wrap">
                {
                    POPULAR_SEARCHES.map((item: string) => 
                        <Text size={12} weight={400} className="opacity-90 cursor-pointer text-[#1D1D1F] sf-pro-text leading-[1] hover:text-[#6B9FFF]"
                            onClick={() => {
                                window.location.href="/search?query="+item
                            }}
                            
                        >{ item }</Text>
                    )
                }
            </Flex>
        </Flex>
    )
}

export default PopularSearches;