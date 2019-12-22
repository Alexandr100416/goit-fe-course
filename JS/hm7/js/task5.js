const textInput = document.getElementById("name-input");

const textSpan = document.getElementById("name-output");

const cumEl = function(elem) {
  const field = elem.currentTarget;
  textSpan.textContent = field.value !== "" ? field.value : "незнакомец";
};
textInput.addEventListener("input", cumEl.bind(textSpan));
