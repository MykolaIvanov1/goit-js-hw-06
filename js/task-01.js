const itemEl = document.querySelectorAll(".item");
const itemElLength = itemEl.length;
console.log(`Number of categories: ${itemElLength}`);

let allCategory = ``;

itemEl.forEach((item) => {
  allCategory += `
Category: ${item.querySelector("h2").textContent};
Elements: ${item.querySelectorAll("li").length};
    `;
});

console.log(allCategory);
