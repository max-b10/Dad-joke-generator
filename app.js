const jokeButton = document.querySelector(".joke-button");
const jokeDiv = document.querySelector(".joke-container");

//  Background color change function:
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${r},${g},${b})`;
  //   console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
};

// Access joke from icanhazdadjoke API:
const getJoke = async () => {
  const config = {
    headers: { Accept: "application/json" },
  };
  let res = await axios.get("https://icanhazdadjoke.com/", config);
  let joke = res.data.joke;
  //   console.log(joke);
  jokeDiv.innerHTML = joke;
};
jokeButton.addEventListener("click", (e) => {
  getJoke();
  randomColor();
});
