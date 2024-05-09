
const searchEmoji = (emo) => {
  emo.preventDefault();
  const value = document.getElementById("search").value;
  displaySearchResults(value);
  return false;
};

const autoSearch = (emo) => {
  const value = emo.target.value;
  displaySearchResults(value);
};

const displaySearchResults = (searchQuery = "") => {
  const filtered = emojiList.filter((emo) => {
   
    return (
      emo.description.indexOf(searchQuery) !== -1 ||
      emo.aliases.some((ele) => ele.startsWith(searchQuery)) ||
      emo.tags.some((ele) => ele.startsWith(searchQuery))
    );
  });

  const parent = document.getElementById("search_result");
  parent.innerHTML = "";
  filtered.forEach((emo) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji");
    emojiElement.innerText = emo.emoji;

    const aliasesElement = document.createElement("div");
    aliasesElement.classList.add("aliases");
    aliasesElement.innerText = emo.aliases.join(", ").replaceAll("_", " ");

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("desc");
    descriptionElement.innerText = emo.description;

    newCard.appendChild(emojiElement);
    newCard.appendChild(aliasesElement);
    newCard.appendChild(descriptionElement);

    parent.appendChild(newCard);
  });
};

document.getElementById("search_form").addEventListener("submit", searchEmoji);
document.getElementById("search").addEventListener("keyup", autoSearch);

window.onload = (_) => displaySearchResults();
