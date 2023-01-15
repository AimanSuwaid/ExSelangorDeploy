/* pop up alert fname*/ 
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
    else{
        return validateForm1()
    }
  }

  /* pop up alert fname end*/ 

/* pop up alert fname*/ 
function validateForm1() {
    let x = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("Last name must be filled out");
      return false;
    }
    else{
        return validateForm2()
    }
  }

  /* pop up alert fname end*/ 

  /* pop up alert fname*/ 
function validateForm2() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("email must be filled out");
      return false;
    }
    else{
        return validateForm3()
    }
  }

  /* pop up alert fname end*/ 

   /* pop up alert fname*/ 
function validateForm3() {
    let x = document.forms["myForm"]["telno"].value;
    if (x == "") {
      alert("telno must be filled out");
      return false;
    }
    else{
        alert("Form send");
    }
  }

  /* pop up alert fname end*/ 