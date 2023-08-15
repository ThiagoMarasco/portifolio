// script.js

$(document).ready(function(){
  $('.carousel').slick({
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1 
        }
      }
    ]
  });
});

function copyEmailToClipboard() {
  const emailSpan = document.querySelector(".email-address");
  const email = emailSpan.textContent;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email)
      .then(() => {
        const messageElement = document.getElementById("message");
        messageElement.textContent = "E-mail copiado para a área de transferência!";
        messageElement.style.display = "block";

        setTimeout(() => {
          messageElement.style.display = "none";
        }, 2000);
      })
      .catch((error) => {
        console.error("Falha ao copiar o e-mail para a área de transferência:", error);
      });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    const messageElement = document.getElementById("message");
    messageElement.textContent = "E-mail copiado para a área de transferência!";
    messageElement.style.display = "block";

    setTimeout(() => {
      messageElement.style.display = "none";
    }, 2000);
  }
}