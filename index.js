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

let link;

selectContainers.forEach(container => {
  container.querySelectorAll("input").forEach(input => {
    input.onchange = e => {
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
            link = `https://timepedia.io/when-is-${weekday}-the-${day}th`;
            break;
          default:
            console.log("Unknown check type");
            break;
        }
      }
    };
  });
});

btnGo.onclick = e => {
  if (link?.length) {
    window.open(link, "_blank");
  }
};
