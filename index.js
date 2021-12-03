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
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const zodiacs = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "carpicorn",
  "aquarius",
  "pisces",
];

const host = "https://timepedia.io";
let link;

const createLink = (theme, day, weekday, month, year, zodiac) => {
  const _day = day?.id.replace("day-", "");
  const _weekday = weekdays[weekday?.id.replace("weekday-", "")];
  const _month = months[month?.id.replace("month-", "")];
  const _year = year?.id.replace("year-", "");
  const _zodiac = zodiacs[zodiac?.id.replace("zodiac-", "")];
  let result;
  switch (theme) {
    case "when-is-date":
      result = `${host}/when-is-${_weekday}-the-${_day}th`;
      break;
    case "number-of-days-in-month":
      result = `${host}/number-of-days-in-${_month}`;
      break;
    case "which-month-in-turn":
      result = `${host}/which-month-in-turn-${_month}`;
      break;
    case "zodiac-signs":
      result = `${host}/zodiac-signs-${_zodiac}`;
    default:
      console.log("Unknown type");
      break;
  }
  return result;
};

const handleCheckInputs = () => {
  const checkedInputs = [...selectContainers]
    .map(c => [...c.querySelectorAll("input")])
    .flat()
    .filter(i => i.checked);
  const day = checkedInputs.find(i => i.name === "day");
  const weekday = checkedInputs.find(i => i.name === "weekday");
  const month = checkedInputs.find(i => i.name === "month");
  const year = checkedInputs.find(i => i.name === "year");
  const zodiac = checkedInputs.find(i => i.name === "zodiac");
  const theme = toolsContainer.getAttribute("name");
  link = createLink(theme, day, weekday, month, year, zodiac);
};

btnGo.onclick = e => {
  handleCheckInputs();
  if (link?.length) {
    window.open(link, "_blank");
  }
};
