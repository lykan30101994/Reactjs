// Hàm tính toán các chỉ số phân trang và lấy dữ liệu cho trang hiện tại
export const paginate = (data, currentPage, recordsPerPage) => {
    const totalPages = Math.ceil(data.length / recordsPerPage);
  
    // Tính toán chỉ số của các bản ghi hiển thị trên trang hiện tại
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  
    return { currentRecords, totalPages };
};
  