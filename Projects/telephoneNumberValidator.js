function telephoneCheck(str) {
  let regex=/^(1\ ?)?(\d{3}|\(\d{3}\))([\-| ]?[\d]{3})([\-| ]?)\d{4}$/gm;

    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");