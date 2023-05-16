import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DriverAgent = () => {

  const [values, setValues] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  //const navigate = useNavigate();
  // useEffect(() => {
  //   const auth = localStorage.getItem('user');
  //   if (auth) {
  //     navigate('/')
  //   }
  // }, [])


  const collectData = async () => {
    //return console.log(JSON.stringify({username,password,role,status}));

    console.warn(email, password, role, status);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ email, password, role, status }),
      headers: {
        'content-type': 'application/json'
      }
    });

    result = await result.json();
    console.warn(result);
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result))
    // navigate('/Login')


  }


  return (
    <div class="body">
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
          <form method="post" onSubmit={collectData} enctype="multipart/form-data" class="box2">
            <div class="box1">
              <div>
                <div class="field">
                  <i class="fa-solid fa-at"></i>
                  <input type="text" name="firstname" placeholder="First Name" onChange={onChangeHandler} value={values.firstname} />
                </div>
                <div class="field">
                  <i class="fa-regular fa-user"></i>
                  <input type="text" name="lastname" placeholder="Last Name" onChange={onChangeHandler} value={values.lastname} />
                </div>
                <div class="field">
                  <i class="fa-regular fa-user"></i>
                  <input type="text" name="username" placeholder="Username" onChange={onChangeHandler} value={values.username} />
                </div>
                <div class="field">
                  <i class="fa-regular fa-user"></i>
                  <input type="text" name="password" placeholder="Password" onChange={onChangeHandler} value={values.password} />
                </div>
                <div class="field">
                  <i class="fa-solid fa-calendar-days"></i>
                  <input type="text" name="dob" placeholder="Date of Birth" onChange={onChangeHandler} value={values.dob} onfocus="this.type='date'" onblur="this.type='text'" />
                </div>
                <div class="field">
                  <i class="fa-solid fa-at"></i>
                  <input type="email" name="email" placeholder="Email ID" onChange={onChangeHandler} value={values.email} />
                </div>
                <div class="field">
                  <i class="fa-solid fa-phone"></i>
                  <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    maxlength="10" name="contact_number" placeholder="Contact Number" onChange={onChangeHandler} value={values.contact_number} />
                </div>
              </div>
              <div>
                <div class="field">
                  <i class="fa-solid fa-address-book"></i>
                  <input type="text" name="address" placeholder="Address" onChange={onChangeHandler} value={values.address} />
                </div>


                <div class="field">
                  <i class="fa-solid fa-map-location-dot"></i>
                  <input type="text" name="country" placeholder="Country" onChange={onChangeHandler} value={values.country} />
                </div>
                <div class="field">
                  <i class="fa-solid fa-location-arrow"></i>
                  <input type="text" name="state" placeholder="State" onChange={onChangeHandler} value={values.state} />
                </div>
                <div class="field">
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <input type="text" name="city" placeholder="City" onChange={onChangeHandler} value={values.city} />
                </div>
                <div class="field">
                  <i class="fa-solid fa-map-pin"></i>
                  <input type="text" name="postal_code" placeholder="Postal Code" onChange={onChangeHandler} value={values.postal_code}/>
                </div>
                <div class="field">
                  <i class="fa-solid fa-id-card"></i>
                  <input type="text" name="license_number" placeholder="License Number" onChange={onChangeHandler} value={values.license_number}/>
                </div>
                <div class="field">
                  <i class="fa-regular fa-calendar"></i>
                  <input type="text" name="license_expire" placeholder="License Expiry" onfocus="this.type='date'" onblur="this.type='text'" onChange={onChangeHandler} value={values.license_expire}/>
                </div>

                
              </div>

            </div>
            <input class="submit-btn" type="submit" value="Sign Up" />
          </form>

        </div>
      </div>
    </div>
  );

}

export default DriverAgent;