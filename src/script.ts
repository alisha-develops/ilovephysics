// const thebox = document.querySelector<HTMLDivElement>(".box");
const movememnt1 = document.querySelector<HTMLButtonElement>(".moveright");
const movememnt2 = document.querySelector<HTMLButtonElement>(".moveleft");
const update = document.querySelector<HTMLParagraphElement>("#status");


if (movememnt1 && movememnt2 && update) {
    movememnt1.innerText = "←";
    movememnt2.innerText = "→";

    movememnt1.addEventListener("click", () => {
        // thebox.style.transform = "translate(80px, 170px) scale(3.2)";
        // thebox.style.backgroundColor = "pink";
        // thebox.style.borderColor = "crimson";

        movememnt1.style.backgroundColor = "pink";
        movememnt1.style.borderColor = "crimson";
        movememnt1.style.color = "crimson";

        movememnt2.style.backgroundColor = "";
        movememnt2.style.borderColor = "";
        movememnt2.style.color = "";

        update.innerHTML = "left has been transformed!";
    });

    movememnt2.addEventListener("click", () => {
        movememnt2.style.backgroundColor = "pink";
        movememnt2.style.borderColor = "crimson";
        movememnt2.style.color = "crimson";

        movememnt1.style.backgroundColor = "";
        movememnt1.style.borderColor = "";
        movememnt1.style.color = "";

        update.innerHTML = "right has been clicked!";
    });
}
