

//tin nhan

const informations = document.querySelectorAll('#information');
const modal = document.getElementById('myModal');
const closeModals = document.querySelectorAll('#closeModal');

for(const information of informations){
  information.addEventListener('click', () => {
    modal.style.display = 'block';
  });
}
// Sự kiện click vào thông tin

// information.addEventListener('click', () => {
//     modal.style.display = 'block';
//   });
// Sự kiện click vào nút đóng modal
for(const closeModal of closeModals){
  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });
}

// Đóng modal khi nhấn bất kỳ nơi nào trên modal (ngoại trừ phần nội dung modal)
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    event.preventDefault();
});

modal.querySelector('.modal-content').addEventListener('click', (event) => {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan truyền
});

