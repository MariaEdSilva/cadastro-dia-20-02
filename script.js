// Aguarda até que o documento HTML seja totalmente carregado antes de executar o script

document.addEventListener("DOMContentLoaded", function () {


    // Obtém referências aos elementos do formulário e lista

    const form = document.getElementById("registrationForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementById("message");
    const userList = document.getElementById("userList");


    // Adiciona um evento de envio ao formulário

    form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    

    // Obtém os valores dos campos
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
 

 // Verifica se os campos estão preenchidos

 if (name === "" || email === "") {
 messageDiv.textContent = "Por favor, preencha todos os campos.";
 messageDiv.style.color = "red";
 } else {

    
 // Cria um novo item de lista com botões de editar e excluir

 const listItem = document.createElement("li");
 listItem.innerHTML = `${name} - ${email} 
 <button class="edit">Editar</button> 
 <button class="delete">Excluir</button>`;
 userList.appendChild(listItem);
 messageDiv.textContent = "Usuário cadastrado com sucesso!";
 messageDiv.style.color = "green";
 

 // Limpa os campos do formulário

 form.reset();
 }
 });


 // Adiciona eventos de clique para editar e excluir

 userList.addEventListener("click", function (event) {
 if (event.target.classList.contains("delete")) {
 event.target.parentElement.remove(); 
 
 // Remove o item da lista
 
} else if (event.target.classList.contains("edit")) {
    const listItem = event.target.parentElement;
    const userData = listItem.textContent.split(" - ");
    nameInput.value = userData[0].trim();
    emailInput.value = userData[1].split(" ")[0].trim();
    listItem.remove();
    }
    });
   })