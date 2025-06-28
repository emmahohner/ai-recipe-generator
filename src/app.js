function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Mix 2 eggs with ham and cheese",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
