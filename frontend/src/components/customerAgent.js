import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CustomerAgent = () => {

    const [values, setValues] = useState({});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const collectData = async () => {
        return console.log(values);
    
        //console.warn(email, password, role, status);
        let result = await fetch("http://localhost:3000/customeragent/Customer_Agent_Registration", {
          method: "post",
          body: JSON.stringify(values),
          headers: {
            'content-type': 'application/json'
          }
        });
    
        result = await result.json();
        //console.warn(result);
        console.log(result);
        console.log("Registered Successfully!!");
        localStorage.setItem("user", JSON.stringify(result))
        // navigate('/Login')
    
    
      }

    return (
        <div class="body">
            {console.log(values)}
            <div id="homebtn">
                <a href="main.php"><i class="fa-solid fa-house"></i></a>
            </div>
            <div class="form-container sign-up-form">

                <div class="form-box sign-up-box">
                    <h2>Sign Up</h2>
                    <div class="sliding-link">
                        <p>Already a member?</p>
                        <span class="sign-in-btn"><a href=""> Sign in</a></span>
                    </div>
                    <form method="POST" onSubmit={collectData} class="box2">
                        <div class="box1">
                            <div>
                                <div class="field">
                                    <i class="fa-regular fa-building"></i>
                                    <input type="text" name="company_name" onChange={onChangeHandler} value={values.company_name} placeholder="Company Name" />
                                </div>
                                <div class="field">
                                    <i class="fa-regular fa-copyright"></i>
                                    <input type="text" name="brand_name" onChange={onChangeHandler} value={values.brand_name} placeholder="Brand Name" />
                                </div>
                                <div class="field">
                                    <i class="fa-regular fa-user"></i>
                                    <input type="text" name="owner_name" onChange={onChangeHandler} value={values.owner_name} placeholder="Owner Name" />
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-phone"></i>
                                    <input type="number" onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                        maxlength="10" name="mobile_number" onChange={onChangeHandler} value={values.mobile_number} placeholder="Mobile Number" />
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-at"></i>
                                    <input type="email" name="email" onChange={onChangeHandler} value={values.email} placeholder="Email ID" />
                                </div>
                                <div class="field">
                                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                                    <input type="text" name="city" onChange={onChangeHandler} value={values.city} placeholder="City" />
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-location-arrow"></i>
                                    <input type="text" name="State" onChange={onChangeHandler} value={values.state} placeholder="State" />
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <input type="text" name="country" onChange={onChangeHandler} value={values.country} placeholder="Country" />
                                </div>

                            </div>
                            <div>
                                <div class="field">
                                    <i class="fa-solid fa-address-book"></i>
                                    <input type="number" name="gst_number" onChange={onChangeHandler} value={values.gst_number} placeholder="GST Number" />
                                </div>

                                <div class="field">
                                    <i class="fa-regular fa-address-card"></i>
                                    <input type="number" name="gumastadhara_number" onChange={onChangeHandler} value={values.gumastadhara_number} placeholder="Gumastadhara Number" />
                                </div>
                                <div class="field">
                                    <i class="fa-regular fa-id-badge"></i>
                                    <input type="number" name="company_pancard" onChange={onChangeHandler} value={values.company_pancard} placeholder="Company Pancard" />
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-book"></i>
                                    <input type="number" name="owner_adharcard" onChange={onChangeHandler} value={values.owner_adharcard} placeholder="Owner Adharcard" />
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-id-card-clip"></i>
                                    <input type="number" name="owner_pancard" onChange={onChangeHandler} value={values.owner_pancard} placeholder="Owner Pancard" />
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-map-pin"></i>
                                    <input type="text" name="company_address" onChange={onChangeHandler} value={values.company_address} placeholder="Company Address" />
                                </div>
                                <div class="field">
                                    <i class="fa-regular fa-user"></i>
                                    <input type="password" name="password" onChange={onChangeHandler} value={values.password} placeholder="Password" />
                                </div>
                            </div>

                        </div>
                        <button type="submit">Sign Up</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CustomerAgent;