import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Diseases/disease-details.css';

export default function Patient() {

  function displayPopUp(e) {
    e.preventDefault();
    const popup = document.getElementById('mypopup');
    popup.style.display = "block";
  }

  function closePopUp(e) {
    e.preventDefault();
    const popup = document.getElementById('mypopup');
    <Link to="/">
    </Link>
    popup.style.display = "none";
  }
  window.onclick = function (event) {
    const popup = document.getElementById('mypopup');
    if (event.target === popup) {
      <Link to="/">
      </Link>
      popup.style.display = "none";
    }
  }

  return (
    <>
      <br />
      <br />
      <br />
      <div class="form">
        <form onSubmit={displayPopUp}>

          <label>
            First Name:
            <input type="text" name="Pregnancies" required />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="Pregnancies" required />
          </label>
          <br />
          <label>
            Gender:
            <input type="text" name="Pregnancies" required />
          </label>
          <br />
          <label>
            Age:
            <input type="number" name="Pregnancies" required min="1" max="100" />
          </label>
          <br />
          <label>
            Height:
            <input type="number" name="Pregnancies" required min="50" max="350" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="Glucose" required />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="number" name="Glucose" required />
          </label>
          <br />
          <label>
            Blood Pressure:
            <input type="number" name="Glucose" required min="40" max="250" />
          </label>
          <br />
          <label>
            Blood Sugar:
            <input type="number" name="Glucose" required min="20" max="230" />
          </label>
          <br />
          <label>
            Any Alergies:
            <input type="text" name="Glucose" />
          </label>
          <br />

          <input id="disease-submit" type="submit" value="Submit" />

          <div id="mypopup" class="popup-container">


            <div class="popup-content">
              <span onClick={closePopUp} class="close-btn">&times;</span>
              <p>Patient Details have been Submitted.</p>
            </div>

          </div>

        </form>


      </div >

    </>


  );
}
