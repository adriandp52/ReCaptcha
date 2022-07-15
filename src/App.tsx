import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
const App = () => {
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="https://www.google.com/recaptcha/api."
        onChange={onChange}
      />
    </div>
  );
};
export default App;
