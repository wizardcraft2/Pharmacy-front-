import Title from "@/components/layouts/title";
import Detail from "@/components/trade_names/details";
import List from "@/components/trade_names/list";
import SearchInput from "@/components/utils/search_input";
import { Box } from "@mantine/core";
import { useState } from "react";

const TradeNames = () => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [detail, setDetail] = useState<any>(null);

    return (
        <Box>
            <SearchInput />
            {
                showDetail ? <Detail data={detail} /> :
                    <Box pt={20}>
                        <List
                            setDetail={(detail: any) => {
                                setShowDetail(true);
                                setDetail(detail)
                            }}
                        />
                    </Box>
            }

        </Box>
    )
}

export default TradeNames;