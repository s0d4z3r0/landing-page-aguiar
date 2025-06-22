document
  .querySelector("#contactMeForm")
  .addEventListener("submit", function (e) {
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    e.preventDefault();

    if (email === "" || phone === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      alert("Contato enviado! Entraremos em contato com você em breve.");
      e.target.reset();
    }
  });
