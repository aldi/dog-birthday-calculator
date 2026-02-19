import dayjs from 'dayjs';

export default function calculateBirthdays(dateOfBirth) {
  const birthDate = dayjs(dateOfBirth);
  const today = dayjs();
  const dayInMs = 86400000;

  const totalDaysBirth = Math.floor(birthDate.valueOf() / dayInMs);
  const totalDaysToday = Math.floor(today.valueOf() / dayInMs);
  const daysDiff = totalDaysToday - totalDaysBirth;
  let numBeforeBday = Math.floor(daysDiff / 52) + 1;

  const year = today.year();
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const ratio = isLeapYear ? 366 / 7 : 365 / 7;

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const birthday = dayjs(
      birthDate.valueOf() + numBeforeBday * ratio * dayInMs
    );
    dates.push(birthday.format('dddd, D MMMM YYYY'));
    numBeforeBday++;
  }

  return dates;
}