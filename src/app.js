function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5b5009d0d53133ocat3b7f4a40ffcef3";
  let prompt = `Generate a recipe based on ${instructionsInput.value}`;
  let context =
    "You are a very experienced chef and love simple yet flavourful recipes. Your mission is to generate a delicious and not too challenging recipe for the user. Follow the user's instructions, have a list of ingredients, number of servings, and then the instructions to make the dish. Put each section header in bold using a <strong> element. Separate each line with a <br />. Format the recipe into a list and use spacing nicely. Do not include any special characters except for numbers. Use clear sections with headers. Include: A recipe title, Number of servings, A bulleted list of ingredients, A numbered list of step-by-step instructions. Keep the tone friendly and professional, and make sure the formatting is clean and easy to read. Make sure that the recipe title, ingredients, and instructions sections are separated by a <br />. ";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeFormElement = document.querySelector("#recipe");
  recipeFormElement.classList.remove("hidden");
  recipeFormElement.innerHTML = `<div class="blink"> ⏳ Generating a recipe for ${instructionsInput.value}...</div>`;

  console.log("Generating recipe");
  console.log(`Prompt: ${[prompt]}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
