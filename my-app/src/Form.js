import React from "react";

export default function Form() {
  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */
  let none = "";
  const [text, setText] = React.useState({
    email: "",
    password: "",
    cPassword: "",
    okayToEmail: false,
  })

  // console.log(text)

  const handleChange = (event) =>{
    let {name, type, value, checked} = event.target;

    setText(prevData => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value

    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(text.password !== text.cPassword){
      console.log("passwords do not match")
    }else if(text.password === text.cPassword){
      console.log("Successfully signed up");

      if(text.okayToEmail){
        console.log("Thanks for signing up for our newsletter!")
      }

    }else if(text.password === undefined && text.cPassword=== undefined){
      console.log("Enter Password and re-comfirm it")
    }

    
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={text.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={text.password}
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="cPassword"
          onChange={handleChange}
          value={text.cPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            name="okayToEmail"
            type="checkbox"
            onChange={handleChange}
            checked={text.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
