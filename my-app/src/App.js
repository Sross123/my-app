import React from "react";

export default function App(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        isFriendly: true,
        favColor: ""
    })
    console.log(formData.favColor)
    const handleChange = (event) =>{
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox"? checked :value
            }
        })
    }


    return(
        <div>
            <form>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName}/>
                <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                <input type="checkbox" name="isFriendly" id="isFriendly" onChange={handleChange} checked={formData.isFriendly} />
                <label htmlFor="isFriendly">Are you Friendly?</label>
                <br />
                <fieldset>
                    <legend>Current employment Status</legend>
                    <input type="radio" name="unemployed" />
                    <label htmlFor="unemployed">Unemployed</label>
                    <input type="radio" name="part-time" />
                    <label htmlFor="part-time">Part-Time</label>
                    <input type="radio" name="full-time" />
                    <label htmlFor="full-time">Full-Time</label>
                </fieldset>
                <br />
                <select id="favColor" name="favColor" value={formData.favColor} onChange={handleChange}>
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            </form>
        </div>
    )
}