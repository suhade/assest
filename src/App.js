import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
 
      <div className="container">  
        <form id="contact" action method="post">
          <h3>Covid-19 Estimator</h3>
          
          <fieldset>
          <input placeholder="Population" type="number" data="data-population" tabIndex={1} required autofocus />
        
          <label for="population">data-population</label>
          </fieldset>
          <fieldset>
            <input placeholder="timeToElapse" type="number" data="data-time-to-elapse " tabIndex={2} required />
            <label for="timeToElapse">Time Elapse</label>
          </fieldset>
          <fieldset>
            <input placeholder="reportedCase" type="number" data="data-reported-cases" tabIndex={3} required />
            <label for="reportedCase">Reported Cases</label>
          </fieldset>
          <fieldset>
            <input placeholder="totalHospitalBeds" type="number" data=" data-total-hospital-beds" tabIndex={4} required />
            <label for="beds">Hospital Beds</label>
          </fieldset>
          <fieldset>
            <input placeholder="periodType" type="number" data="data-period-type"/>
            <label for="time">Type of period</label>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data="data-goestimate" data-submit="...Sending">Estimate.
</button>
          </fieldset>
         
        </form>
      </div>
    </div>
  );
}

export default App;
