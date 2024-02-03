document.addEventListener("DOMContentLoaded", function () {
  const resultado = document.getElementById("resultado");
  const botones = document.querySelectorAll(".gato button");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      alert("it is a minus sign");
    });
  });
});
