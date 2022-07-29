function dateFormat(created_at) {
  const date = new Date(created_at);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const hoursFull = `${hours}:${minutes}`;

  const years = date.getFullYear();

  const monthInYears = [
    'JANEIRO',
    'FEVEREIRO',
    'MARÇO',
    'APRIL',
    'MAIO',
    'JUNHO',
    'JULHO',
    'AGOSTO',
    'SETEMBRO',
    'OUTUBRO',
    'NOVEMBRO',
    'DEZEMBRO',
  ];

  const day = String(date.getDate()).padStart(2, '0');
  const day2 = String(date.getDate() + 1).padStart(2, '0');
  const month = date.getMonth();
  const today = new Date().getDate();
  function isTodayOrTomorrow(dayValue, todayValue) {
    if (dayValue == todayValue) {
      return 'HOJE,';
    } else if (dayValue == todayValue - 1) {
      return 'ONTEM,';
    } else {
      return '';
    }
  }
  const dateFull = `${isTodayOrTomorrow(day, today)} ${day} DE ${
    monthInYears[month]
  }`;
  const birthDate = `${day2}/${month + 1}/${years}`;
  return {dateFull, hoursFull, birthDate};
}

export default dateFormat;
