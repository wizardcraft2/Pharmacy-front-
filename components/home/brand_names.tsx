import { BRAND_NAMES } from "@/utils/app/consts";
import { Box, Flex, SimpleGrid, Text } from "@mantine/core";
import Link from "next/link";

const BrandNames = () => {
    return (
        <Box mt={90} p={10}>
            <Flex justify='space-between' align='center'>
                <Box>
                    <Text size={26} className="font-semibold">
                        Pharmaceutical Drug & Brand Names
                    </Text>
                    <Text className="opacity-50 sf-pro-text" size={14} weight={400}>
                        World famous pharmaceutical drug and brand names
                    </Text>
                </Box>
                <Link href='/trade_names'>
                    <Text color="#6B9FFF" className="cursor-pointer sf-pro-text font-semibold" size={14}>
                        See All
                    </Text>
                </Link>
            </Flex>
            <Box mt={50}>
                <SimpleGrid cols={5}
                    breakpoints={[
                        { maxWidth: '62rem', cols: 5, spacing: 'md' },
                        { maxWidth: '48rem', cols: 1, spacing: 'sm' },
                    ]}
                >
                    {
                        BRAND_NAMES.map((item, index) =>
                            <Flex
                                gap={32}
                                align='center'
                                className="sf-pro-text cursor-pointer"
                            >
                                <Text size={40} weight={100} className="font-thin sf-pro-text"
                                >
                                    {index + 1}
                                </Text>
                                <div>
                                    <Text size={14} className="sf-pro-text font-semibold">{item.title}</Text>
                                    <Text className="opacity-50 sf-pro-text" weight={400} size={12}>{item.content}</Text>
                                </div>
                            </Flex>
                        )
                    }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default BrandNames;