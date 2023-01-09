const text = document.getElementById("text");
const editorBTN = document.getElementById("editorBTN");

document.getElementById("btn-bold").addEventListener("click", () => {
  text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("btn-italic").addEventListener("click", () => {
  text.style.fontStyle =
    text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("btn-underline").addEventListener("click", () => {
  text.style.textDecoration =
    text.style.textDecoration === "underline" ? "normal" : "underline";
});

document.getElementById("btn-strike").addEventListener("click", () => {
  text.style.textDecoration =
    text.style.textDecoration === "line-through" ? "normal" : "line-through";
});

// ["btn-align-left", "btn-align-center", "btn-align-right"].forEach((id) => {
//   const element = document.getElementById(id);
//   element.addEventListener("click", () => {
//     text.style.textAlign = element.dataset.align;
//   });
// });

document.querySelectorAll("button[data-align]").forEach((element) => {
  element.addEventListener("click", () => {
    text.style.textAlign = element.dataset.align;
  });
});

document.querySelectorAll("li[data-font]").forEach((element) => {
  element.addEventListener("click", () => {
    text.style.fontFamily = element.dataset.font;
  });
});

document.querySelectorAll("li[data-font-size]").forEach((element) => {
  element.addEventListener("click", () => {
    text.style.fontSize = element.dataset.fontSize;
  });
});

document.querySelectorAll(".text-color").forEach((element) => {
  element.addEventListener("click", () => {
    text.style.color = element.style.backgroundColor;
  });
});

const result = document.querySelector(".result");

document.querySelectorAll(".background-color").forEach((element) => {
  element.addEventListener("click", () => {
    text.style.backgroundImage = "none";
    text.style.backgroundColor = element.style.backgroundColor;
  });
});

document.querySelectorAll(".background-image").forEach((element) => {
  element.addEventListener("click", () => {
    text.style.backgroundImage = element.style.backgroundImage;
    text.style.backgroundSize = "cover";
  });
});

document.getElementById("sign-in").addEventListener("submit", (e) => {
  e.preventDefault();
  const alert = document.querySelector(".alert");
  const password = document.getElementById("password").value;
  const logIn = document.getElementById("log-in").value;

  if (password !== "admin" || logIn !== "admin") {
    return alert.classList.remove("d-none");
  }

  alert.classList.add("d-none");
  const modal = document.getElementById("signInModal");

  bootstrap.Modal.getInstance(modal).hide();

  editorBTN.disabled = false;

  document.getElementById("signInBTN").classList.add("d-none");
  document.getElementById("signOutBTN").classList.remove("d-none");
});

document.getElementById("editorBTN").addEventListener("click", () => {
  document.querySelector(".styleEditor").classList.add("d-none");
  document.querySelector(".textEditor").classList.remove("d-none");
  document.getElementById("textArea").value = text.innerHTML;
  document.querySelector(".textArea").classList.remove("d-none");
  text.classList.add("d-none");
});

document.getElementById("btn-save").addEventListener("click", () => {
  document.querySelector(".styleEditor").classList.remove("d-none");
  document.querySelector(".textEditor").classList.add("d-none");

  text.classList.remove("d-none");
  document.querySelector(".textArea").classList.add("d-none");

  text.innerHTML = document.getElementById("textArea").value;
});

const createElements = (element, count) => {
  return Array.from({ length: count }).map(() => {
    return document.createElement(element);
  });
};

document.getElementById("tableForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const countTR = document.getElementById("countTR").value;
  const countTD = document.getElementById("countTD").value;

  const heightTD = document.getElementById("heightTD").value;
  const widthTD = document.getElementById("widthTD").value;
  const borderWidth = document.getElementById("borderWidth").value;
  const borderStyle = document.getElementById("borderStyle").value;
  const borderColor = document.getElementById("borderColor").value;

  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  createElements("tr", countTR).forEach((tr) => {
    createElements("td", countTD).forEach((td) => {
      td.innerText = "TD";
      td.style.height = `${heightTD}px`;
      td.style.width = `${widthTD}px`;
      td.style.borderWidth = `${borderWidth}px`;
      td.style.borderStyle = borderStyle;
      td.style.borderColor = borderColor;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
  table.appendChild(tableBody);
  const textArea = document.getElementById("textArea");
  textArea.value = textArea.value + table.outerHTML;
});

document.getElementById("btnResetTable").addEventListener("click", () => {
  document
    .querySelectorAll("#tableForm input, #tableForm select")
    .forEach((element) => {
      element.value = "";
    });
});

document.getElementById("listFormOrdered").addEventListener("submit", (e) => {
  e.preventDefault();

  const count = document.getElementById("countOrLiItems").value;
  const listType = document.getElementById("olTypeMark").value;

  const generateList = () => {
    const orList = document.createElement("ol");
    orList.type = listType;

    createElements("li", count).forEach((element, index) => {
      element.innerText = `item ${index + 1}`;
      orList.appendChild(element);
    });
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value + orList.outerHTML;
  };
  generateList();
});

document.getElementById("btnResetOL").addEventListener("click", () => {
  document
    .querySelectorAll("#listFormOrdered input, #listFormOrdered select")
    .forEach((element) => {
      element.value = "";
    });
});

document.getElementById("listFormUnordered").addEventListener("submit", (e) => {
  e.preventDefault();

  const count = document.getElementById("countUlLiItems").value;
  const listType = document.getElementById("ulTypeMark").value;

  const generateList = () => {
    const ulList = document.createElement("ul");
    ulList.classList.add(`${listType}-list`);

    createElements("li", count).forEach((element, index) => {
      element.innerText = `item ${index + 1}`;
      ulList.appendChild(element);
    });
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value + ulList.outerHTML;
  };
  generateList();
});

document.getElementById("btnResetUL").addEventListener("click", () => {
  document
    .querySelectorAll("#listFormUnordered input, #listFormUnordered select")
    .forEach((element) => {
      element.value = "";
    });
});

document.getElementById("btnSignOut").addEventListener("click", () => {
  editorBTN.disabled = true;
  document.getElementById("signInBTN").classList.remove("d-none");
  document.getElementById("signOutBTN").classList.add("d-none");
});
