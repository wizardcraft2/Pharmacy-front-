import { Box } from "@mantine/core";
import { IconAlignRight, IconArrowLeft, IconChevronCompactLeft, IconChevronCompactRight,  } from "@tabler/icons-react";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa6"
import { FC } from "react";
import ReactPaginate from 'react-paginate';

interface Props {
    totalPageCount: number,
    perPage: number,
    setPageIndex: (page_index: number) => void,
    pageIndex: number
}

const Pagination: FC<Props> = ({
    totalPageCount,
    perPage,
    setPageIndex,
    pageIndex
}) => {
    const handlePageClick = (event: any) => {
        setPageIndex(event.selected);
    };

    return (
        <Box>
            <nav
                className="mt-[10px] mb-[10px]"
                aria-label="Navigation to other pages"
                id="paginationWrapper"
            >
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={
                        <FaAngleRight />
                    }
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={totalPageCount}
                    marginPagesDisplayed={3}
                    previousLabel={
                        <FaAngleLeft />
                    }
                    forcePage={pageIndex}
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    containerClassName="pagination"
                    initialPage={0}
                />
            </nav>
        </Box>
    )
}

export default Pagination;