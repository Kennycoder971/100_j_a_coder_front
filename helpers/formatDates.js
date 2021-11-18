export function getTimeRemaining(date) {
  const now = new Date().getTime();
  const countdownDate = new Date(date).getTime();
  const distance = countdownDate - now;
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

  const days = Math.floor(distance / oneDay);
  const hours = Math.floor((distance % oneDay) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export function daysAgo(date) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const now = new Date().getTime();
  const fDate = new Date(date).getTime();

  const diffDays = Math.round(Math.abs((fDate - now) / oneDay));

  let resultString;

  if (diffDays > 365) {
    const year = Math.round(diffDays / 365);
    return `il y a ${year} an${year > 1 ? "s" : ""}`;
  }

  if (diffDays > 31) {
    const month = Math.round(diffDays / 31);
    return `il y a ${month} mois`;
  }

  if (diffDays > 7) {
    const week = Math.round(diffDays / 7);
    return `il y a ${week} semaine${week > 1 ? "s" : ""}`;
  }

  if (diffDays > 1) {
    return `il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
  }

  if (diffDays === 1) {
    return `il y a ${diffDays} jour`;
  }

  if (diffDays === 0) {
    return (resultString = "ajourd'hui");
  }
}
