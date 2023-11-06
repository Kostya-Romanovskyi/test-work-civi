const yearEL = document.getElementById("year");
const ageEl = document.getElementById("age");

const yearNow = new Date().getFullYear();

const yearMaxLength = 4;
const yearOldestMan = 1908;

const ageMinLength = 2;
const ageMaxLength = 3;
const ageOldestMan = 115;

yearEL.addEventListener("input", (e) => {
  const yearValue = e.target.value;
  ageEl.value = "";

  if (yearValue.length > yearMaxLength || yearValue > yearNow || yearValue < yearOldestMan) {
    yearEL.style.backgroundColor = "#FEE";
  } else if (yearValue <= yearNow) {
    yearEL.style.backgroundColor = "#ffffff";
  }

  if (yearValue === "") {
    yearEL.style.backgroundColor = "#ffffff";
  }

  const countedAge = yearNow - yearValue;

  if (yearValue.length === yearMaxLength && yearValue >= yearOldestMan && yearValue <= yearNow) {
    ageEl.value = countedAge;
  }
});

yearEL.addEventListener("keydown", (e) => {
  if (e.key === "e" || e.key === "." || e.key === "+" || e.key === "-") {
    e.preventDefault();
  }
});

ageEl.addEventListener("input", (e) => {
  const ageValue = e.target.value;
  yearEL.value = "";

  if (ageValue > ageOldestMan) {
    ageEl.style.backgroundColor = "#FEE";
  }

  if (ageValue <= ageOldestMan) {
    ageEl.style.backgroundColor = "#ffffff";
  }

  const countedYear = yearNow - ageValue;

  if (ageValue.length <= ageMaxLength && ageValue <= ageOldestMan) {
    yearEL.value = countedYear;
  }

  if (ageValue === "") {
    yearEL.value = "";
  }
});

ageEl.addEventListener("keydown", (e) => {
  if (e.key === "e" || e.key === "." || e.key === "+" || e.key === "-") {
    e.preventDefault();
  }
});

