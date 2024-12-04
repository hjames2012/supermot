const dropdown = document.getElementById("bareSwitcher");

const savedBare = localStorage.getItem("bareServer");
if (savedBare) {
  dropdown.value = savedBare;
  updateBareServer(savedBare);
}

dropdown.addEventListener("change", (event) => {
  const selectedBare = event.target.value;
  updateBareServer(selectedBare);
  localStorage.setItem("bareServer", selectedBare);
});

function updateBareServer(bareUrl) {
  if (self.__uv$config) {
    self.__uv$config.bare = bareUrl;
    console.log(`Bare server updated to: ${bareUrl}`);
  }
}
