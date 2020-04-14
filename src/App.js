import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
 
      <div className="container">  
        <form id="estimator" action method="post">
          <h3>COVID-19 ESTIMATOR</h3>
          
          <fieldset>
          <input placeholder="Population" type="number"  required autofocus tabindex="0" alt="data-population"/>
        
          <label for="data-population">Population</label>
          </fieldset>
          <fieldset>
            <input placeholder="Time Elapse" type="number" id ="data-time-to-elapse" required tabindex="0" alt="data-time-to-elapse"/>
            <label for="data-time-to-elapse">Time Elapse</label>
          </fieldset>
          <fieldset>
            <input placeholder="Reported Case" type="number" id ="data-reported-cases"  required tabindex="0" alt="data-reported-cases"/>
            <label for="data-reported-cases">Reported Cases</label>
          </fieldset>
          <fieldset>
            <input placeholder="Hospital Bed" type="number" id ="data-total-hospital-beds" required tabindex="0" alt="data-total-hospital-beds"/>
            <label for="data-total-hospital-beds">Hospital Beds</label>
          </fieldset>
          <fieldset>
          <select placeholder="Period Type" type="number" id="data-period-type" alt="data-period-type">
          <option value="days">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option> </select>
  <label For="data-period-type">Period</label>
         </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" alt="data-goestimate" data-submit="...Sending">ESTIMATE
</button>
          </fieldset>
         
        </form>
      </div>
    </div>
  );
}

export default App;
