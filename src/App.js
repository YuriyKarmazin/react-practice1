import './App.css';
import React from 'react'


function App() {
  return (
  <section>
    <div className="sec sec1">
      <span id="home">
        <a href='http://myportfolioforme.zzz.com.ua/Practice_2_Karmazin_2_redid/index.html'>HOME</a>
      </span>
      <h2 id="hours">00</h2>
      <h2 id="dot">:</h2>
      <h2 id="minutes">00</h2>
    </div>
    <div className="sec sec2">
      <h2 id="seconds">00</h2>
      <span id="ampm">AM</span>
    </div>
  </section>
  );
}

function Clock_time(){
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hr = new Date().getHours();
    let ms = new Date().getMinutes();
    let sd = new Date().getSeconds();
    let am = "AM";
    
    hours.innerHTML = hr;
    minutes.innerHTML = ms;
    seconds.innerHTML = sd;
    ampm.innerHTML = am;
}

setInterval(Clock_time, 1000);

export default App;
