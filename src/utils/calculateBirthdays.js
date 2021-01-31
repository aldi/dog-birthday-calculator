import dayjs from 'dayjs';

export default function calculateBirthdays(dateOfBirth) {
  const dates = [];
  dateOfBirth = new Date(dateOfBirth);
  const dayInSeconds = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor(dateOfBirth / dayInSeconds);
  const today = new Date();
  const todayInNum = Math.floor(today / dayInSeconds);

  const daysDiff = todayInNum - totalDays;
  let numBeforeBday = Math.floor(daysDiff / 52) + 1;

  let isLeapYear = false;
  if (today.getFullYear() % 4 === 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  let dogRealBday = new Date();

  let i = 0;

  // Generate array with birthdays
  while (i < 7) {
    if (isLeapYear) {
      dogRealBday = new Date(
        dogRealBday.setTime(dateOfBirth.getTime() + numBeforeBday * (366 / 7) * 86400000)
      );
    } else {
      dogRealBday = new Date(
        dogRealBday.setTime(dateOfBirth.getTime() + numBeforeBday * (365 / 7) * 86400000)
      );
    }
    let dateformated = dayjs(dogRealBday).format('dddd, D MMMM YYYY');
    dates.push(dateformated);
    numBeforeBday++;
    i++;
  }
  return dates;
}
