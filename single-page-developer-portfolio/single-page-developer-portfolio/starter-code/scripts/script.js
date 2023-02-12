

let skills = document.querySelector(".skills")
let project = document.getElementsByClassName("projects")

let skillsData;
fetch("./data/skills.json")
    .then(response => response.json())
    .then(json => {
        skillsData = json;
        skillsData.forEach(skill => {
            let skillElement = document.createElement("h2");
            skillElement.appendChild(document.createTextNode(skill["name"]));

            skills.appendChild(skillElement);
        })
    })

let projectsData;
fetch("./data/projects.json")
    .then(response => response.json())
    .then(json => projectsData = json)
const loadSkills = () => {


}