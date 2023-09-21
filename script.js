function getFormvalue() {
  // Get a reference to the form element
  const form = document.getElementById("form1");

  // Get the values of the First and Last name fields
  const firstName = form.elements.fname.value;
  const lastName = form.elements.lname.value;

  // Display the values using an alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
  
  // Prevent the default form submission
  return false;
}
