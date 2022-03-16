import * as React from "react";
import { useState } from "react";
import "./style.css";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function FormularioCadastro({ onSubmit, validarCpf, validarInputTexto, validarSubmit }) {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(false);

  const [erros, setErros] = useState({
    cpf: {
      valido: false,
      texto: "",
    },
  });
  const [errorName, setErrorName] = useState({
    nome: {
      valido: false,
      texto: "",
    },
  });

  const [errorSobrenome, setErrorSobrenome] = useState({
    sobrenome: {
      valido: false,
      texto: "",
    },
  });

  return (
    <form
      className="formulario"
      onSubmit={(event) => {
        event.preventDefault();
        const dados = {nome, sobrenome, cpf, novidades, promocoes};
        if(validarSubmit(dados) === true){
          onSubmit(dados);
        };
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let nome = event.target.value;
          if (!parseInt(nome)) {
            setNome(nome);
          }
        }}
        error={errorName.nome.valido}
        helperText={errorName.nome.texto}
        onBlur={(event) => {
          const ehValido = validarInputTexto(event.target.value);
          setErrorName({ nome: ehValido });
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        type="text"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          let sobrenome = event.target.value;
          if (!parseInt(sobrenome)) {
            setSobreNome(sobrenome);
          }
        }}
        error={errorSobrenome.sobrenome.valido}
        helperText={errorSobrenome.sobrenome.texto}
        onBlur={(event) => {
          const ehValido = validarInputTexto(event.target.value);
          setErrorSobrenome({ sobrenome: ehValido });
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        type="text"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          let tempCpf = event.target.value;
          if ((parseInt(tempCpf) && tempCpf.length <= 11) || tempCpf === "") {
            setCpf(tempCpf);
          }
        }}
        error={erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={(event) => {
          const ehValido = validarCpf(event.target.value);
          setErros({ cpf: ehValido });
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        type="text"
        fullWidth
      />

      <FormGroup row>
        <FormControlLabel
          checked={novidades}
          control={
            <Checkbox
              onChange={(event) => {
                setNovidades(event.target.checked);
              }}
            />
          }
          label="Novidades"
        />
        <FormControlLabel
          checked={promocoes}
          control={
            <Checkbox
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
            />
          }
          label="Promoções"
        />
      </FormGroup>

      <Button type="submit" variant="contained" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}
