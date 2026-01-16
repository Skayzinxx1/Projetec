function enviarEmail() {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos.");
        return;
    }

    const para = "vendas@projetecbrasil.com";
    const assunto = encodeURIComponent("Solicitação de Serviço - Projetec");

    const corpo = encodeURIComponent(
        `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
    );

    const gmailURL =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${para}&su=${assunto}&body=${corpo}`;

    window.open(gmailURL, "_blank");
}

function enviarWhats() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = "5534999844058";

    if (!nome || !mensagem) {
        alert("Por favor, preencha o nome e a descrição.");
        return;
    }

    const texto = encodeURIComponent(`Olá, meu nome é ${nome}. Solícito: ${mensagem}`);
    window.open(`https://wa.me/${telefone}?text=${texto}`, '_blank');
}