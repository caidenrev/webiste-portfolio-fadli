window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const text = 'Selamat datang di situs kami!';
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById('typed-text').innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); // Kecepatan mengetik (ms)
  }
}

window.onload = type; // Mulai animasi saat halaman dimuat
