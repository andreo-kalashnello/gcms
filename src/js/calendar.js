const currentMonthYear = document.getElementById("currentMonthYear");
const dates = document.getElementById("dates");
let currentDate = new Date();
const selectedDateInput = document.getElementById("selectedDate");
const calendarModal = document.getElementById("calendarModal");
const closeModalButton = document.getElementsByClassName("close")[0];

selectedDateInput.onclick = function () {
  calendarModal.style.display = "block";
};

closeModalButton.onclick = function () {
  calendarModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == calendarModal) {
    calendarModal.style.display = "none";
  }
};

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  currentMonthYear.textContent = `${currentDate.toLocaleString("en-US", {
    month: "long",
  })} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  dates.innerHTML = "";

  let dateHTML = "<tr>";

  for (let i = 0; i < firstDay; i++) {
    dateHTML += `<td class="empty"></td>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    if ((i + firstDay - 1) % 7 === 0 && i > 1) {
      dateHTML += "</tr><tr>";
    }
    dateHTML += `<td>${i}</td>`;
  }

  dateHTML += "</tr>";
  dates.innerHTML = dateHTML;

  dates.querySelectorAll("td").forEach((date) => {
    if (date.textContent !== "") {
      date.addEventListener("click", (e) => {
        dates
          .querySelectorAll("td")
          .forEach((d) => d.classList.remove("selected"));
        e.target.classList.add("selected");
        selectedDateInput.value = `${e.target.textContent.padStart(2, "0")}.${(
          month + 1
        )
          .toString()
          .padStart(2, "0")}.${year}`;
        calendarModal.style.display = "none";
      });
    }
  });
}

document.getElementById("prevYear").addEventListener("click", () => {
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  renderCalendar();
});

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

document.getElementById("nextYear").addEventListener("click", () => {
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  renderCalendar();
});

renderCalendar();
