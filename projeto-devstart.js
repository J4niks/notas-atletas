let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
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

function mostrarResultados(){
    atletas.forEach((atleta)=> {
      console.log(`
        Atleta: ${atleta.nome}
        Notas Obtidas: ${transformarCSV(atleta)}
        Média válida: ${calcularMedia(atleta)}
        `);
    })
}

function transformarCSV(atleta){
  return atleta.notas.join(", ")
}

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

mostrarResultados()