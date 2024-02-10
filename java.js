const btnInicio = document.querySelector('#btnInicial');

btnInicio.addEventListener('click', function() {
  const c = setTimeout(() => {
    document.querySelector('.flowers').classList.remove("not-loaded");
    document.querySelector('#inital-box').classList.add("hide");
    clearTimeout(c);
  }, 1000);
});
