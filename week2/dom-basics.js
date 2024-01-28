const newParagraph = document.creatElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImage = document.creatElement("img");
newImage.setAttribute("src", "https://picsum.photo/200");
newImage.setAttribute("alt", "Image Description")
document.body.appendChild(nnewImage);
const newSection = document.createElement("section");
const newh2 = document.createElement("h2");
newh2.innerText = "CSE 121b";
newSection.appendChild(newh2);
const newp = document.createElement("p");
newp.innerText = "Welcome to Javascript language";
newSection.appendChild(newp);

document.body.appentChild(sewSection);