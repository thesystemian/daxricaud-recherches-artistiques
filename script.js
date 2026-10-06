const timestamp = document.querySelector("#live-timestamp");
const secondsLabel = document.querySelector("#live-seconds");
const minuteProgress = document.querySelector("#minute-progress");
const fibonacciIndex = document.querySelector("[data-fibonacci-index]");

const timeZone = "Indian/Mauritius";
const locale = document.documentElement.lang === "en" ? "en-GB" : "fr-FR";
const secondWord = document.documentElement.lang === "en" ? "SECONDS" : "SECONDES";
const fibonacciOrigin = new Date("2026-10-06T08:32:00+04:00").getTime();
const integerFormatter = new Intl.NumberFormat(locale);

const formatter = new Intl.DateTimeFormat(locale, {
  timeZone,
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

function getTimeParts(date) {
  return formatter.formatToParts(date).reduce((parts, part) => {
    if (part.type !== "literal") parts[part.type] = part.value;
    return parts;
  }, {});
}

function updateTimestamp() {
  const now = new Date();

  if (fibonacciIndex) {
    const elapsedSeconds = Math.floor((now.getTime() - fibonacciOrigin) / 1000);
    const currentTerm = Math.max(1, elapsedSeconds + 1);
    fibonacciIndex.textContent = `#${integerFormatter.format(currentTerm)}`;
  }

  if (!timestamp || !secondsLabel || !minuteProgress) return;
  const parts = getTimeParts(now);
  const display = `${parts.year}-${parts.month}-${parts.day} | ${parts.hour}:${parts.minute}`;
  const machineDate = `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+04:00`;
  const seconds = Number(parts.second);

  timestamp.textContent = display;
  timestamp.dateTime = machineDate;
  timestamp.setAttribute(
    "aria-label",
    `${parts.year}-${parts.month}-${parts.day}, ${parts.hour}:${parts.minute}, UTC +4`,
  );
  secondsLabel.textContent = `${parts.second} ${secondWord}`;
  minuteProgress.style.setProperty("--minute-progress", `${(seconds / 60) * 100}%`);
}

updateTimestamp();
setInterval(updateTimestamp, 1000);
