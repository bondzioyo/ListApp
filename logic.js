var inputField = document.querySelector("#inputField");
var submitButton = document.querySelector(".submitButton");
var divTestowy = document.querySelector(".test");

function submit() {
  // Przypisywanie do zmiennej x treści z inputa
  var x = inputField.value;

  // Sprawdzenie, czy zawartość inputa nie jest pusta (jezeli jest to nowy element się nie utworzy)
  if (x !== "") {
    // Kasowanie tekstu wprowadzonego do inputa
    inputField.value = "";

    // Tworzenie nowego elementu listy z paragrafem o treści wprowadzonej przez input
    var div = document.createElement("div");
    div.classList.add("test");
    div.innerHTML = "<p>" + x + "</p>";
    document.body.appendChild(div);

    // Dodawanie fragmentu listy, który jest przyciskiem do usuwania
    var div2inner = document.createElement("div");
    div2inner.classList.add("test2");
    div.appendChild(div2inner);

    // Usuwanie wprowadzonego elementu listy
    div2inner.addEventListener("click", () => {
      div.parentNode.removeChild(div);
    });
  }
}

submitButton.addEventListener("click", submit);
