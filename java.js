const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('oct 18, 2022 16:38:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
        document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

    }, second)



    const secondd = 1000,
      minutee = secondd * 60,
      hourr = minutee * 60,
      dayy = hourr * 24;

let countDown1 = new Date('oct 18, 2022 16:38:00').getTime(),
    x1 = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('diass').innerText = Math.floor(distance / (day)),
        document.getElementById('horass').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutoss').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundoss').innerText = Math.floor((distance % (minute)) / second);

    }, second)