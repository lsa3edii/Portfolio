let index = 0;
const iframe = document.querySelector("iframe");
const projectTitle = document.getElementById("project-title");
const description = document.getElementById("description");
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



/* 
  const projectsTitles = [
  "Graduation Project",
  "Simple Search Engine - Information Retrieval Project",
  "Brain Cancer Multi Classification - Deep Learning Project",
  "Text Classification for Multi Cancer - NLP Project",
  "Project Management System - Java Project",
  "MNIST Digits Classification - Pattern Recognition Project",
  "Alert Program for Laptop Battery Charger",
  "My Portfolio",
];

const descriptions = [
  "This project investigates the use of deep learning technology, especially CNNs in the medical field to classify magnetic resonance images (MRI). So, we created a mobile application with many features and linked it to the deep learning model that we had previously trained via an API to help doctors and patients identify whether patients have brain cancer or not. Users in the System → (Admin, Patients, and Doctor).",
  "Very simple search engine by using positional index, phrase query and vector space model concepts on a small dataset.",
  "This project presents an approach for brain tumor classification MRI using CNNs and demonstrates its superior performance in image classification.",
  "NLP project for multi-cancer text classification by using LSTM on a dataset containing colon, lung, and thyroid cancer.",
  "This desktop application is used to manage projects and tasks and it consists of 4 modules: (admin, project-manager, team-leader and employee).",
  "Handwritten digits recognition is a classic problem in the field of image classification. The MNIST dataset, consisting of 60,000 training and 10,000 testing grayscale images of handwritten digits.",
  "Short Video: Monitors laptop battery status and alerts when status changes.",
  "Simple Portfolio by using HTML, CSS, and JavaScript.",
];

const videos = [
  "https://www.youtube.com/embed/1HwVtHCv7B0",
  "https://www.youtube.com/embed/uSczSTmjNEs",
  "https://www.youtube.com/embed/B4n_O51cDB0",
  "https://www.youtube.com/embed/G8wwJ3u0bY8",
  "https://www.youtube.com/embed/s333rvKEnOs",
  "https://www.youtube.com/embed/JYuBZA52BmQ",
  "https://www.youtube.com/embed/HvdsDFNALlg",
  "https://www.youtube.com/embed/hQKByHd4Pt4",
];
*/
