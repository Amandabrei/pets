document.getElementById("petForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para que possamos manipular os dados.

    // Coletando os valores inseridos nos campos
    const donorName = document.getElementById("donorName").value;
    const petName = document.getElementById("petName").value;
    const phone = document.getElementById("phone").value;

    // Validando se todos os campos foram preenchidos
    if (!donorName || !petName || !phone) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exibindo os dados no div de output
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h3>Cadastro realizado com sucesso!</h3>
        <p><strong>Nome do Dono:</strong> ${donorName}</p>
        <p><strong>Nome do Pet:</strong> ${petName}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
    `;
    
    // Limpando os campos do formulário após o cadastro
    document.getElementById("petForm").reset();
});
