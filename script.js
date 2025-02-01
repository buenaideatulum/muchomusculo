// Datos de músculos y ejercicios
const musclesData = {
  biceps: {
    name: "Bíceps",
    description: "El bíceps es un músculo de dos cabezas ubicado en la parte frontal del brazo.",
    exercises: ["Curl de bíceps con mancuernas", "Curl de bíceps con barra", "Curl martillo"]
  },
  cuadriceps: {
    name: "Cuádriceps",
    description: "El cuádriceps es un grupo de cuatro músculos en la parte frontal del muslo.",
    exercises: ["Sentadillas", "Prensa de piernas", "Zancadas"]
  },
  abdominales: {
    name: "Abdominales",
    description: "Los abdominales son músculos ubicados en la parte frontal del torso.",
    exercises: ["Crunches", "Plancha", "Elevaciones de piernas"]
  }
};

// Obtener elementos del DOM
const muscleName = document.getElementById("muscle-name");
const muscleDescription = document.getElementById("muscle-description");
const exercisesList = document.getElementById("exercises-list");

// Función para mostrar la información del músculo
function showMuscleInfo(muscle) {
  const muscleInfo = musclesData[muscle];
  if (muscleInfo) {
    muscleName.textContent = muscleInfo.name;
    muscleDescription.textContent = muscleInfo.description;
    exercisesList.innerHTML = muscleInfo.exercises.map(ex => `<li>${ex}</li>`).join("");
  }
}

// Asignar eventos a las áreas interactivas
document.querySelectorAll('area').forEach(area => {
  area.addEventListener('click', (e) => {
    e.preventDefault();
    const muscle = area.getAttribute('data-muscle');
    showMuscleInfo(muscle);
  });
});
