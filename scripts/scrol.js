const scrollTopButton = document.getElementById('scroll-to-top');

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
};

scrollTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
