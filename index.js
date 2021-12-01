const selectContainers = document.querySelectorAll(".__select__content");
const btnGo = document.querySelector(".btnGo");
const toolsContainer = document.querySelector(".tools");

const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

selectContainers.forEach(container => {
  container.querySelectorAll("input").forEach(input => {
    input.onchange = e => {
      const id = e.target.id;
      const name = e.target.name;

      //
      //   switch (name) {
      //     case "when-date-day":
      //       console.log(parseInt(id.replace("singleSelect-day-", "")) + 1);
      //       break;
      //     case "when-date-weekday":
      //       console.log(
      //         weekdays[parseInt(id.replace("singleSelect-weekday-", ""))]
      //       );
      //       break;
      //     default:
      //       break;
      //   }

      //
      const checkedInputs = [...selectContainers]
        .map(c => [...c.querySelectorAll("input")])
        .flat()
        .filter(i => i.checked);
      if (checkedInputs.length === selectContainers.length) {
        switch (toolsContainer.id) {
          case "when-date":
            const day =
              parseInt(
                checkedInputs
                  .map(i => i.id)
                  .find(i => i.includes("singleSelect-day"))
                  .replace("singleSelect-day-", "")
              ) + 1;
            const weekday =
              weekdays[
                parseInt(
                  checkedInputs
                    .map(i => i.id)
                    .find(i => i.includes("singleSelect-weekday"))
                    .replace("singleSelect-weekday-", "")
                )
              ];
            console.log("day: ", day);
            console.log("weekday: ", weekday);
            btnGo.href = `https://timepedia.io/when-is-${weekday}-the-${day}th`;
            btnGo.removeAttribute("disabled");
            break;
          default:
            console.log("Unknown check type");
            break;
        }
      }
    };
  });
});
