const convertIsoDateToString = (dateTime) => {
  let date = new Date(dateTime);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }


  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return `${year}.${month}.${dt} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`
}

export default convertIsoDateToString;