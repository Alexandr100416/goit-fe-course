function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('[data-value="days"]');
    const hoursSpan = clock.querySelector('[data-value="hours"]');
    const minutesSpan = clock.querySelector('[data-value="mins"]');
    const secondsSpan = clock.querySelector('[data-value="secs"]');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.textContent = t.days;
      hoursSpan.textContent = ('0' + t.hours).slice(-2);
      minutesSpan.textContent = ('0' + t.minutes).slice(-2);
      secondsSpan.textContent = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadLine = '2019/12/10';
  const deadLineFormat = new Date(Date.parse(deadLine));
  initializeClock('timer-1', deadLineFormat);