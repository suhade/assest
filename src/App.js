import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
 
      <div className="container">  
        <form id="contact" action method="post">
          <h3>Covid-19 Estimator</h3>
          
          <fieldset>
          <input placeholder="Population" type="number" id="data-population"  required autofocus tabindex="0"/>
        
          <label for="data-population">Population</label>
          </fieldset>
          <fieldset>
            <input placeholder="timeToElapse" type="number" id ="data-time-to-elapse" required tabindex="0"/>
            <label for="data-time-to-elapse">Time Elapse</label>
          </fieldset>
          <fieldset>
            <input placeholder="reportedCase" type="number" id ="data-reported-cases"  required tabindex="0"/>
            <label for="data-reported-cases">Reported Cases</label>
          </fieldset>
          <fieldset>
            <input placeholder="totalHospitalBeds" type="number" id ="data-total-hospital-beds" required tabindex="0" />
            <label for="data-total-hospital-beds">Hospital Beds</label>
          </fieldset>
          <fieldset>
            <input placeholder="periodType" type="number" id="data-period-type" />
            <label for="data-period-type">Type of period</label>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data="data-goestimate" data-submit="...Sending">ESTIMATE
</button>
          </fieldset>
         
        </form>
      </div>
    </div>
  );
}

export default App;
