'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { Pagination as PaginationType } from '@/lib/types';
import { useSearchParams, useRouter } from 'next/navigation';

type Props = {
  className?: string;
  pagination: PaginationType;
};

export default function PropertyListingPagination({
  className,
  pagination,
}: Props) {
  const { totalPages, currentPage } = pagination;
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <Pagination className={`mt-6 py-4 justify-center ${className || ''}`}>
      <PaginationContent className='flex gap-4'>
        <PaginationItem>
          <button
            disabled={isFirstPage}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white transition-colors 
              ${
                isFirstPage
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }
            `}
          >
            Previous
          </button>
        </PaginationItem>
        <PaginationItem>
          <button
            disabled={isLastPage}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white transition-colors 
              ${
                isLastPage
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }
            `}
          >
            Next
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
