let index = 0;
const iframe = document.querySelector("iframe");
const projectTitle = document.getElementById("project-title");
const description = document.getElementById("description");
const using_tech = document.getElementById("using-tech");
const countVid = document.querySelector(".count-vid");


let projects = [];

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    projects = data;
    updateProject();
  })
  .catch(error => console.error("Error loading JSON:", error));


  function updateProject() {
    if (projects.length > 0) {
      iframe.src = projects[index].video;
      projectTitle.innerHTML = projects[index].title;
      description.innerHTML = projects[index].description;
      using_tech.innerHTML = projects[index].using_tech;
      countVid.innerHTML = `${index + 1} / ${projects.length}`;
    }
  }


document.getElementById("prev").addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateProject();
  }
});


document.getElementById("next").addEventListener("click", () => {
  if (index < projects.length - 1) {
    index++;
    updateProject();
  }
});

document.querySelector('.icon').addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('.nav ul').classList.toggle('open');
    document.querySelector('.nav').classList.toggle('active');
});

document.addEventListener('click', () => {
    document.querySelector('.nav ul').classList.remove('open');
    document.querySelector('.nav').classList.remove('active');
});


