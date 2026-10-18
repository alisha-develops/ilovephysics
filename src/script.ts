const thebox = document.querySelector<HTMLDivElement>(".box");
const movememnt = document.querySelector<HTMLButtonElement>(".move");

if (thebox && movememnt) {
    movememnt.innerText = "click to transform me!";
    movememnt.addEventListener("click", () => {
        thebox.style.transform = "translate(80px, 170px) scale(3.2)";
        thebox.style.backgroundColor = "pink";
        thebox.style.borderColor = "crimson";

        movememnt.style.backgroundColor = "pink";
        movememnt.style.borderColor = "crimson";
        movememnt.style.color = "crimson";
    })
}