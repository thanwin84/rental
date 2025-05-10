'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination';

type Props = {
  className?: string;
  currentPage: number;
  totalPages: number;
};

export default function PropertyListingPagination({
  currentPage = 1,
  totalPages = 10,
}: Props) {
  function handlePrevious(
    event: MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    throw new Error('Function not implemented.');
  }

  function handleNext(event: MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      {totalPages > 1 && (
        <Pagination className='mt-4'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevious} href={''} />
            </PaginationItem>

            {/* Current page indicator (optional) */}
            <PaginationItem className='px-4 text-sm text-muted-foreground'>
              Page {currentPage} of {totalPages}
            </PaginationItem>

            <PaginationItem>
              <PaginationNext onClick={handleNext} href={''} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
