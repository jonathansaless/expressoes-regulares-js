import { Validator } from './validator.js';

const validator = new Validator();

const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

nameInput.addEventListener("input", () => {
  const isValid = validator.checkName(nameInput.value);

  if (!isValid) {
    nameError.textContent = "Rejeitado!";
    nameError.style.color = "red";
  } else {
    nameError.textContent = "Aceito!";
    nameError.style.color = "green";
  }
});

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", () => {
  const isValid = validator.checkEmail(emailInput.value);

  if (!isValid) {
    emailError.textContent = "Rejeitado!";
    emailError.style.color = "red";
  } else {
    emailError.textContent = "Aceito!";
    emailError.style.color = "green";
  }
});

const senhaInput = document.getElementById("senha");
const senhaError = document.getElementById("senhaError");

senhaInput.addEventListener("input", () => {
  const isValid = validator.checkPassword(senhaInput.value);

  if (!isValid) {
    senhaError.textContent = "Rejeitado!";
    senhaError.style.color = "red";
  } else {
    senhaError.textContent = "Aceito!";
    senhaError.style.color = "green";
  }
});

const cpfInput = document.getElementById("cpf");
const cpfError = document.getElementById("cpfError");

cpfInput.addEventListener("input", () => {
  const isValid = validator.checkCPF(cpfInput.value);

  if (!isValid) {
    cpfError.textContent = "Rejeitado!";
    cpfError.style.color = "red";
  } else {
    cpfError.textContent = "Aceito!";
    cpfError.style.color = "green";
  }
});

const telefoneInput = document.getElementById("telefone");
const telefoneError = document.getElementById("telefoneError");

telefoneInput.addEventListener("input", () => {
  const isValid = validator.checkPhoneNumber(telefoneInput.value);

  if (!isValid) {
    telefoneError.textContent = "Rejeitado!";
    telefoneError.style.color = "red";
  } else {
    telefoneError.textContent = "Aceito!";
    telefoneError.style.color = "green";
  }
});

const datahoraInput = document.getElementById("datahora");
const datahoraError = document.getElementById("datahoraError");

datahoraInput.addEventListener("input", () => {
  const isValid = validator.checkDateAndTime(datahoraInput.value);

  if (!isValid) {
    datahoraError.textContent = "Rejeitado!";
    datahoraError.style.color = "red";
  } else {
    datahoraError.textContent = "Aceito!";
    datahoraError.style.color = "green";
  }
});

const numeroInput = document.getElementById("numero");
const numeroError = document.getElementById("numeroError");

numeroInput.addEventListener("input", () => {
  const isValid = validator.checkRealNumber(numeroInput.value);

  if (!isValid) {
    numeroError.textContent = "Rejeitado!";
    numeroError.style.color = "red";
  } else {
    numeroError.textContent = "Aceito!";
    numeroError.style.color = "green";
  }
});
