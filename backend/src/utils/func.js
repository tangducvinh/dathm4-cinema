const formatVietnameseToString = (keyword) => {
  return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
};

const converDate = (dateStr) => {
  try {
    const [day, month, year] = dateStr.split("/");
    // Định dạng lại theo mong muốn
    const formattedDate = `${year}/${month}/${day}`;
    // Chuyển đổi từ chuỗi sang đối tượng Date
    const dtObject = new Date(formattedDate);
    // Chuyển đổi sang định dạng UTC
    const utcDate = dtObject.toISOString();
    return utcDate;
  } catch (error) {
    return "Không thể chuyển đổi ngày tháng. Vui lòng kiểm tra định dạng đầu vào.";
  }
};

// Sử dụng hàm

module.exports = {
  formatVietnameseToString,
  converDate,
};
