# 🏅 Projeto DevStart Cálculo de Média de Atletas

Este projeto em JavaScript calcula e exibe as médias válidas das notas de um grupo de atletas


## 📚 Índice
- [Descrição](#-Descrição)
- [Estrutura](#-Estrutura-do-código)
- [Conceitos](#-Conceitos-Utilizados)
- [Executar](#-Como-Executar)

## 📋 Descrição

O script percorre uma lista de atletas e suas respectivas notas, exibindo no console:

O nome do atleta

As notas obtidas

A média válida (calculada após remover a maior e a menor nota)

Além disso, o código contém funções auxiliares para converter arrays em texto e para calcular a média corretamente.

## 🧩 Estrutura do Código

1. Lista de Atletas (atletas)

```
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];
````

2. Função mostrarResultados()
```
function mostrarResultados() {
  atletas.forEach((atleta) => {
    console.log(`
      Atleta: ${atleta.nome}
      Notas Obtidas: ${transformarCSV(atleta)}
      Média válida: ${calcularMedia(atleta)}
    `);
  });
}
```

 3.Função transformarCSV()

```
function transformarCSV(atleta) {
  return atleta.notas.join(", ");
}
```

4. Função calcularMedia()
```
function calcularMedia(atleta){
  let ordenados = [...atleta.notas].sort((a,b)=> a -b);

  ordenados.shift();
  ordenados.pop();

  if(ordenados.length > 3){
    const meio = Math.floor(ordenados.length/ 2);
    ordenados = ordenados.slice(meio -1, meio + 2);
  }

  let soma = ordenados.reduce((total, nota)=> total + nota, 0);
  let media = soma/ordenados.length
  return media
}
```

## 📚 Conceitos Utilizados

Arrays e objetos em JavaScript

Funções e escopo

Métodos de array:

.forEach()

.join()

.sort()

.reduce()

Template strings e formatação de texto no console

## ⚙️ Como Executar

Clone o repositorio:
```
git clone https://github.com/J4niks/projeto-devstart-pontuacao-dos-atletas.git
```

Execute com Node.js:
```
node projeto-devstart.js
