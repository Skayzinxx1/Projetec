function enviarEmail() {
 
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');

  
    if (!nomeInput.value || !mensagemInput.value) {
        alert("Por favor, preencha o seu nome e a descrição do serviço.");
        return;
    }


    const meuEmail = "matheusgeo56@mail.com"; 
    const assunto = encodeURIComponent("Solicitação de Serviço - Projetec");
    const corpo = encodeURIComponent(
        "Nome: " + nomeInput.value + "\n" +
        "E-mail do Cliente: " + emailInput.value + "\n\n" +
        "Descrição: " + mensagemInput.value
    );


    window.location.href = "mailto:" + meuEmail + "?subject=" + assunto + "&body=" + corpo;
}
function enviarWhats() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = "553438316333";

    if (!nome || !mensagem) {
        alert("Por favor, preencha o nome e a descrição.");
        return;
    }

    const texto = encodeURIComponent(`Olá, meu nome é ${nome}. Preciso de: ${mensagem}`);
    window.open(`https://wa.me/${telefone}?text=${texto}`, '_blank');
}