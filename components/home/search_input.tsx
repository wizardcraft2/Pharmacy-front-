import { Box, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    return (
        <Input 
            w='100%'
            h='57px'
            radius={100}
            size="14px"
            className="home-search bsf-pro-text"
            placeholder="Search medicine by brand name, generic name, ingredient or manufacturer"
            rightSection={
                <Box pr={50}>
                    <IconSearch size="16px" className="text-[#1D1D1F80]" />
                </Box>
            }
            value={value}
            onChange={(e: any) => {
                setValue(e.currentTarget.value);
            }}
            onKeyDown={(e: KeyboardEvent) => {
                if(e.key === "Enter") {
                    e.preventDefault();
                    router.push("/search?query="+value)
                }
            }}
        />
    )
}

export default SearchInput;