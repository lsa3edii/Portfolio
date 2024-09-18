const projectsTitles = [
  "Graduation Project",
  "Simple Search Engine - Information Retrieval Project",
  "Brain Cancer Multi Classification - Deep Learning Project",
  "Text Classification for Multi Cancer - NLP Project",
  "Project Management System - Java Project",
  "Alert Program for Laptop Battery Charger",
];

const descriptions = [
  "This project investigates the use of deep learning technology, especially CNNs in the medical field to classify magnetic resonance images (MRI). So, we created a mobile application with many features and linked it to the deep learning model that we had previously trained via an API to help doctors and patients identify whether patients have brain cancer or not. Users in the System → (Admin, Patients, and Doctor).",
  "Very simple search engine by using positional index, phrase query and vector space model concepts on a small dataset.",
  "This project presents an approach for brain tumor classification MRI using CNNs and demonstrates its superior performance in image classification.",
  "NLP project for multi-cancer text classification by using LSTM on a dataset containing colon, lung, and thyroid cancer.",
  "This desktop application is used to manage projects and tasks and it consists of 4 modules: (admin, project-manager, team-leader and employee).",
  "Monitors laptop battery status and alerts when status changes.",
];

const videos = [
  "https://www.youtube.com/embed/1HwVtHCv7B0",
  "https://www.youtube.com/embed/uSczSTmjNEs",
  "https://www.youtube.com/embed/B4n_O51cDB0",
  "https://www.youtube.com/embed/G8wwJ3u0bY8",
  "https://www.youtube.com/embed/s333rvKEnOs",
  "https://www.youtube.com/embed/HvdsDFNALlg",
];

let index = 0;
const iframe = document.querySelector("iframe");
const projectTitle = document.getElementById("project-title");
const description = document.getElementById("description");

function updateVideo() {
  iframe.src = videos[index];
}

async function updateText() {
  await delay(200);
  projectTitle.innerHTML = projectsTitles[index];
  description.innerHTML = descriptions[index];
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.getElementById("prev").addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateVideo();
    updateText();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (index < videos.length - 1) {
    index++;
    updateVideo();
    updateText();
  }
});
