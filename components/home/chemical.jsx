import { Box, Flex, Text, Image } from "@mantine/core";
import Link from "next/link";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

const Chemical = () => {

    const data = [
        { title: "Metformin", content: "The chemical that makes Glucophage", size: "100%", offset: Math.floor(Math.random() * 30)},
        { title: "Diazepam", content: "The chemical that makes Valium", size: "100%", offset: Math.floor(Math.random() * 30)},
        { title: "Diazepam", content: "The chemical that makes Valium", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Omeprazole", content: "The chemical that makes Prilosec", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Ibuprofen", content: "The chemical that makes Advil", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Atorvastatin", content: "The chemical that makes Lipitor", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Ibuprofen", content: "The chemical that makes Advil", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Ibuprofen", content: "The chemical that makes Advil", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Atorvastatin", content: "The chemical that makes Lipitor", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Ibuprofen", content: "The chemical that makes Advil", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Diazepam", content: "The chemical that makes Valium", size: "100%", offset: Math.floor(Math.random() * 30)},
        { title: "Diazepam", content: "The chemical that makes Valium", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Omeprazole", content: "The chemical that makes Prilosec", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Lisinopril", content: "The chemical that makes Zestril", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Ibuprofen", content: "The chemical that makes Advil", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Diazepam", content: "The chemical that makes Valium", size: "100%", offset: Math.floor(Math.random() * 30)},
        { title: "Ibuprofen", content: "The chemical that makes Advil", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Ibuprofen", content: "The chemical that makes Advil", size: "100%", offset: Math.floor(Math.random() * 30) },
        { title: "Diazepam", content: "The chemical that makes Valium", size: "100%", offset: Math.floor(Math.random() * 30)},
        { title: "Diazepam", content: "The chemical that makes Valium", size: "100%", offset: Math.floor(Math.random() * 30) },

    ];

    const options = {
        minSize: 20,
        size: 145,
        gutter: 5,
        provideProps: false,
        numCols: 6,
        fringeWidth: 125,
        yRadius: 150,
        xRadius: 200,
        cornerRadius: 186,
        showGuides: false,
        compact: true,
        gravitation: 5
    }
    const colors = ["#5D656F", "#53C1C1", "#FF8587", "#5BD37B", "#85BEFF", "#FF85AC", "#DDAB4E", "#E5D286", "#A95EF9", "#338CFF"];

    const children = data?.map((data, i) => {
        return (
            <ChildComponent data={data} className="child" key={i} color={colors[i % colors.length]}/>
        );
    });

    return (
        <Box mt={90}
        >
            <Flex justify='space-between' align='center'>
                <Box>
                    <Text size={26} className="font-semibold">
                        Chemical Composition
                    </Text>
                    <Text className="opacity-50 sf-pro-text" size={14} weight={14}>
                        Here are the most searched ingredients
                    </Text>
                </Box>
                <Link href='/ingredients'>
                    <Text color="#6B9FFF" className="cursor-pointer sf-pro-text font-semibold" size={14}>
                        See All
                    </Text>
                </Link>
            </Flex>
            <div className="relative">
                <Image src="/images/chemical-gradient.svg" width="100%" height="100%" sx={{ position: "absolute", left: 0, top: -50}}/>
                <BubbleUI key={1} options={options} style={{ width: "100%", height: "550px", marginTop: '30px' }}>
                    {children}
                </BubbleUI>

            </div>
        </Box>
    )
}

function ChildComponent({ data, color }) {
        return (
            <Flex
                w="100%"
                h="100%"
                bg={color}
                justify='center'
                align="center"
                direction='column'
                p={20}
                style={{ borderRadius: '50%' }}
            >
                <div className="text-[21px] text-white font-bold sf-pro-text">
                    {data.title}
                </div>
                <div className="text-[12px] text-white mt-[10px] sf-pro-text text-center">
                    {data.content}
                </div>
            </Flex>
        )
}


export default Chemical;