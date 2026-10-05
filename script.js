const timestamp = document.querySelector("#live-timestamp");
const secondsLabel = document.querySelector("#live-seconds");
const minuteProgress = document.querySelector("#minute-progress");

const timeZone = "Indian/Mauritius";
const locale = document.documentElement.lang === "en" ? "en-GB" : "fr-FR";
const secondWord = document.documentElement.lang === "en" ? "SECONDS" : "SECONDES";

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
  if (!timestamp || !secondsLabel || !minuteProgress) return;

  const now = new Date();
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
