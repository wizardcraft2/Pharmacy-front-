import Title from "../layouts/title";
import { getData } from "@/api/trade_names";
import { Box, Flex, LoadingOverlay, Skeleton, Table, Text } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import Pagination from "../utils/pagination";

interface Props {
    setDetail: (detail: any) => void
}
const List: FC<Props> = ({
    setDetail
}) => {

    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [perPage, setPerpage] = useState<number>(50);
    const [pageCount, setPageCount] = useState<number>(0);
    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [pageIndex, setPageIndex] = useState<number>(0)

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await getData({ page_index: pageIndex, per_page: perPage });
            setData(res.data.filter((item:any) => item.information.name !== null));
            setTotalPageCount(Math.floor(res.total_count / perPage));
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }

    const Loader = () => {
        return (
            <Box>
                {Array.from({ length: perPage }).map((_, index) => (
                    <Flex mt={15} gap={20}>
                        <Skeleton key={index} variant="rectangular" width='30%' height='20px' style={{ marginBottom: '10px' }} />
                        <Skeleton key={index} variant="rectangular" width='70%' height='20px' style={{ marginBottom: '10px' }} />
                    </Flex>
                ))}
            </Box>
        )
    }
    useEffect(() => {
        fetchData();
    }, [perPage, pageIndex])


    return (
        isLoading ? Loader() :
        <Box className="min-h-full" mt={40}>
            <Box>
                <Flex
                    justify='space-between'
                    align='center'
                    pb={13}
                    className="border-b border-grey-dark"
                >
                    <Title
                        title="All Pharmaceutical"
                        summary="All the pharmaceutical drug and brand names"
                        gradient_title="Drug & Brand Names"
                    />
                    <Pagination
                        pageIndex={pageIndex}
                        setPageIndex={setPageIndex}
                        totalPageCount={totalPageCount}
                        perPage={perPage}
                    />
                </Flex>
                <Flex mt={20} gap={20} direction='column'>
                    <Table>
                        <tbody>
                            {
                                data.map((item: any, index: number) =>
                                    <tr style={{ background: index % 2 == 1 ? 'transparent' : 'rgb(121, 145, 190, 0.1)' }} className="cursor-pointer tbl-row"
                                        onClick={() => {
                                            setDetail(item);
                                        }}
                                    >
                                        <td width={300}>
                                            <Text size={14} weight={500} className="sf-pro-text">{item.information.name}</Text>
                                        </td>
                                        <td>
                                            <Text size={14} weight={500} className="opacity-50 sf-pro-text">{item.information.pharmaceutical_companies.join(";")}</Text>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Flex>
                <Pagination
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                    totalPageCount={totalPageCount}
                    perPage={perPage}
                />
            </Box>
            <LoadingOverlay visible={isLoading} />
        </Box>
    )
}

export default List;