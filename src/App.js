import "./assets/App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>
      <FormularioCadastro onSubmit={onSubmit} validarCpf={validarCpf} validarInputTexto={validarInputTexto} validarSubmit={validarSubmit}/>
    </Container>
  );
}

function onSubmit(dados){
  console.log(dados);
}

function validarCpf(input){
  if(input.length !== 11){
    return {valido:true, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:false, texto:""}
  }
}

function validarInputTexto(input){
  if(input === ""){
    return {valido:true, texto:"Entrada inválida!"}
  }else{
    return {valido:false, texto:""}
  }
}

function validarSubmit(dados){
  if(dados.nome !== "" && dados.sobrenome !== "" && dados.cpf !== ""){
    alert("Cadastro realizado com sucesso!\nSeja bem vindo(a) " + dados.nome);
    return true;
  }else{
    alert("Cadastro não realizado!\nVerifique os campos e tente novamente.");
    return false;
  }
}

export default App;
