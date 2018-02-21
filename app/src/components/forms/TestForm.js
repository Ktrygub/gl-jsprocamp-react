import React from 'react'

import './TestForm.css'
import img from '../../img/posters/a.jpg'

const TestForm = () => (
  <div>
    <div className="card">
      <div className="card_left">
        <img src={img} alt="alt" />
      </div>
      <div className="card_right">
        <div
          className="editable"
          contentEditable="true"
          suppressContentEditableWarning
        >
          <h1>Terminator 2</h1>
        </div>
        <div className="card_right__details">
          <div className="card_right__rating">
            <div className="card_right__rating__stars">
              <fieldset className="rating">
              {/* eslint-disable jsx-a11y/label-has-for */}
                <input id="star5" name="rating" type="radio" value="5" />
                <label htmlFor="star5" title="5 stars" />
                <input id="star4" name="rating" type="radio" value="4" />
                <label htmlFor="star4" title="4 stars" />
                <input id="star3" name="rating" type="radio" value="3" />
                <label htmlFor="star3" title="3 stars" />
                <input id="star2" name="rating" type="radio" value="2" />
                <label htmlFor="star2" title="2 stars" />
                <input id="star1" name="rating" type="radio" value="1" />
                <label htmlFor="star1" title="1 star" />
                {/* eslint-enable jsx-a11y/label-has-for */}
              </fieldset>
            </div>
          </div>
          <div className="card_right__review">
            <div
              className="editable"
              contentEditable="true"
              suppressContentEditableWarning
            >
              <p>
                A cyborg, identical to the one who failed to kill Sarah Connor,
                must now protect her ten year old son, John Connor, from a more
                advanced cyborg.
              </p>
            </div>
          </div>
          
        </div>
        <div className="controls">
            <button className="card_right__button">CANCEL</button>
            <button className="card_right__button">ADD</button>
          </div>
      </div>
      
    </div>
  </div>
)

export default TestForm
