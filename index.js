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
// массив я переименовала в days, так как иначе случаются конфликты имен
// в разметке все id идут с нуля (day-0=1th, day-1=2th и так далее)
const days = [
  "1th",
  "2th",
  "3th",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21th",
  "22th",
  "23th",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31th",
];

const host = "https://timepedia.io";
let link;

const createLink = (theme, day, weekday, month, year, zodiac) => {
  const _day = days[day?.id.replace("day-", "")];
  const _weekday = weekdays[weekday?.id.replace("weekday-", "")];
  const _month = months[month?.id.replace("month-", "")];
  // по годам пока оставила так, потому что неизвестно какой должен быть массив для годов
  // но если будет массив, то вот пример (название массива - "years", так как есть уже переменная year)
  // const _year = years[year?.id.replace("year-", "")];
  const _year = year?.id.replace("year-", "");
  const _zodiac = zodiacs[zodiac?.id.replace("zodiac-", "")];
  let result;
  switch (theme) {
    case "when-is-date":
      result = `${host}/when-is-${_weekday}-the-${_day}`;
      break;
    case "number-of-days-in-month":
      result = `${host}/number-of-days-in-${_month}`;
      break;
    case "which-month-in-turn":
      result = `${host}/which-month-in-turn-${_month}`;
      break;
    case "zodiac-signs":
      result = `${host}/zodiac-signs-${_zodiac}`;
      break;
    default:
      console.log("Unknown type");
      break;
  }
  return result;
};

// slug - аттрибут name у блока с классом "tools"
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
    window.open(link, "_self");
  }
};
