
// احصل على زر الإظهار/الإخفاء
const toggleTableBtn = document.getElementById('toggleTableBtn');
// احصل على عنصر الجدول
const tableContainer = document.querySelector('.table-container');

// أضف حدث النقر للزر
toggleTableBtn.addEventListener('click', function() {
    // قم بتغيير عرض عنصر الجدول ليكون مرئيًا أو مخفيًا عند النقر على الزر
    tableContainer.style.display = tableContainer.style.display === 'none' ? 'block' : 'none';
});


// أسماء الصور
const images = ["r4.jpg", "r5.webp", "r.jpeg","r3.jpeg"];

// احصل على عنصر الصورة
const imageElement = document.querySelector('.image img');

let index = 0;

// تغيير الصور كل 2 ثانية
setInterval(function() {
    imageElement.src = `img/${images[index]}`;
    index = (index + 1) % images.length;
}, 2000); // يتم تغيير الصورة كل 2 ثانية (2000 مللي ثانية)


