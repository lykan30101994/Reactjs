import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
