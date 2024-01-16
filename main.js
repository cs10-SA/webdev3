//WEBDEV by SALWa

// BTN EVENTLISTENER
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let comm = document.getElementById("command").value.toLowerCase();
  let storyEl = document.getElementById("story-out");
  let imgEl = document.getElementById("img-out");
  if (comm === "go right") {
    storyEl.innerHTML = `<p> You both have entered a very dense forest. You walk along the trail until it has disappeared into the underbrush. Your friend realises that you both are lost! What do you do?</p> <img  src="denseforest.jpg"  alt="forest" />`;
  } else if (comm == "go left") {
    storyEl.innerHTML =
      " You and your friend are walking along the pathway admiring the nature around you. Suddenly you come across a dark rocky cave. You and your friend were getting pretty bored... What do you do? ";
  }
}
