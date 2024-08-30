//? how to handle textarea and radio button and check boxes

import React, { Fragment } from 'react'
import { useState } from 'react'
import COUNTRY from './country.json'

const App = () => {
  let [state, setState] = useState({
    title: '',
    comment: "",
    gender: "",
    js_lib: "",
    country: "",
    price_range: 0,
    date: "",
    time: "",
    theme_color:"",
    loading: false

  })
  let countries = COUNTRY

  let [skills, setSkills] = useState("")

  let { title, comment, loading, gender, js_lib, country, price_range, date, time,theme_color } = state

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value, loading: true })
  }

  let handleCheckbox = (e) => {
    let { value } = e.target
    if (e.target.checked) {
      setSkills(oldChecked => {
        return [...oldChecked, value]
      })
    } else {
      setSkills(oldChecked => {
        return oldChecked
      })
    }
  }


  let handleSubmit = e => {
    e.preventDefault()
    try {
      console.log({ ...state, skills, country });
      setState({ loading: false, title: "", comment: "" })

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">

          {/* handle input box */}
          <label htmlFor="title">Title</label>
          <input type="text" name='title' id='title' placeholder='title' onChange={handleChange} />
        </div>

        {/* handle radio button */}

        <div className="form-group" name="gender" value={gender} onChange={handleChange}>
          <label htmlFor="gender">Select Gender</label>
          <input type="radio" name="gender" value="male" />Male
          <input type="radio" name="gender" value="female" />Female
          <input type="radio" name="gender" value="others" />Others
        </div>

        {/* handle check box */}

        <div className="form-group" name="skills" value={skills} onChange={handleCheckbox}>
          <label htmlFor="skills">Select Skills</label>
          <input type="checkbox" name='skills' id='skills' value="javascript" />JavaScript
          <input type="checkbox" name='skills' id='skills' value="java" />Java
          <input type="checkbox" name='skills' id='skills' value="nodejs" />Nodejs
          <input type="checkbox" name='skills' id='skills' value="react" />React

        </div>

        {/* handle selection box */}

        <div className="from-group">
          <label htmlFor="Choose javascript libraries">Choose javascript libraries</label>
          <select name="js_lib" value={js_lib} onChange={handleChange}>
            <option value=""></option>
            <option value="reactjs">React JS</option>
            <option value="momentjs">Moment JS</option>
            <option value="jquery">JQuery </option>
          </select>
        </div>

        {/* handle selection box country block */}

        <div className="form-group" onChange={handleChange}>
          <label htmlFor="countries">Select Country</label>
          <select name="country" id="country" value={country}>
            {countries.map(country => {
              return <Fragment key={country.code}>
                <option value={country.code}>
                  <Fragment>
                    <span>
                      <picture>
                        <img src={country.flag} alt={country.code} />
                      </picture>
                    </span>
                    <span>{country.country}</span>
                  </Fragment>
                </option>
              </Fragment>
            })
            }
          </select>
        </div>

        {/* price range */}

        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <span>{price_range.length > 0 && price_range}</span>
          <input type="range" name='price_range' id='price_range' min={0} max={100} value={price_range} onChange={handleChange} />
        </div>

        {/* data object */}

        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input type="date" name='date' id='date' value={date} onChange={handleChange} />
        </div>

        {/* time object */}

        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <input type="time" name='time' id='time' value={time} onChange={handleChange} />
        </div>

        {/* color object */}

        <div className="form-group">
          <label htmlFor="theme_color">Select Theme Color</label>
          <input type="color" name='theme_color' id='theme_color' value={theme_color} onChange={handleChange} />
        </div>

        {/* handle text area */}

        <div className="form-group">
          <label htmlFor="comment">Writ your Comment</label>
          <textarea type="comment" name='comment' id='comment' rows="10" cols="30" onChange={handleChange} />
        </div>


        {/* handle submit button */}


        <div className="form-group">
          <button disabled={!state.title && !state.comment ? true : false} >{loading ? "loading" : "submit"}</button>
        </div>
      </form>
    </div>
  )
}

export default App