const bateria = 65;

const statusBateria = (bateria < 20)
? "Critica" : (bateria <= 80) ? "Moderada" : "Cheia"

console.log(statusBateria)