import { getData } from "@/api/ingredients";
import Detail from "@/components/ingredients/detail";
import Title from "@/components/layouts/title";
import Pagination from "@/components/utils/pagination";
import SearchInput from "@/components/utils/search_input";
import { Box, Flex, Grid, LoadingOverlay, Skeleton, Table, Text } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const Ingredients = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [perPage, setPerpage] = useState<number>(70);
    const [pageCount, setPageCount] = useState<number>(0);
    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [detail, setDetail] = useState<any>(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await getData({ 
                page_index: pageIndex, 
                per_page: perPage,
            });
            
            console.log('API Response:', res);
            
            // If the data is nested in categories, we need to extract all ingredients
            const flattenedData = res.data.ingredients || res.data;
            
            // If it's still categorized, flatten it
            const finalData = Array.isArray(flattenedData) ? flattenedData : 
                Object.values(flattenedData).flat();
            
            setData(finalData);
            setTotalPageCount(Math.ceil(res.total_count / perPage));
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [perPage, pageIndex])

    useEffect(() => {

    }, [showDetail])

    const Loader = () => {
        return (
            <Box>
                {Array.from({ length: perPage }).map((_, index) => (
                    <Flex mt={15} gap={20}>
                        <Skeleton key={index} variant="rectangular" width='50%' height='20px' style={{ marginBottom: '10px' }} />
                        <Skeleton key={index} variant="rectangular" width='50%' height='20px' style={{ marginBottom: '10px' }} />
                    </Flex>
                ))}
            </Box>
        )
    }

    return (
        <Box>
            <SearchInput />

            {
                showDetail ?
                    <Detail data={detail} /> :
                    isLoading ? Loader() :
                    <Box mt={40}>
                        <Box display="flex" sx={{ justifyContent: "space-between", alignItems: "center"}} className="border-b border-grey-dark" pb={13}>
                            <Title
                                title="All Pharmaceutical"
                                gradient_title="Ingredients"
                                summary="Active pharmaceutical ingredients online database"
                            />
                            <Pagination
                                pageIndex={pageIndex}
                                setPageIndex={setPageIndex}
                                totalPageCount={totalPageCount}
                                perPage={perPage}
                            />
                        </Box>
                        <Box mt={30}>
                            <Grid>
                                {data.map((item: any, index: number) => {
                                    if (index == 0 || index == 1) console.log(item);
                                    return (
                                        <Grid.Col sm={6} md={6} key={index}>
                                            <Flex gap={10} align='center' className="cursor-pointer"
                                                onClick={() => {
                                                    setDetail(item);
                                                setShowDetail(true);
                                            }}
                                        >
                                            <IconCircleFilled size={10} />
                                            <Text className="opacity-50 sf-pro-text" size={14} weight={400}>
                                                {item.name}
                                            </Text>
                                        </Flex>
                                    </Grid.Col>
                                )
                            })}
                            </Grid>
                        </Box>
                        <Pagination
                            pageIndex={pageIndex}
                            setPageIndex={setPageIndex}
                            totalPageCount={totalPageCount}
                            perPage={perPage}
                        />
                    </Box>
            }

        </Box>
    )
}

export default Ingredients;