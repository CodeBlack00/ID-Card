function idCard(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var fullName = firstName + " " + lastName;
      console.log("First Name: " + firstName);
      console.log("Last Name: " + lastName);
      console.log("Address: " + address);
  
      document.getElementById("postFullName").innerHTML = fullName
      document.getElementById("postAddress").innerHTML = "Address: " + address;
    
  
  
            var age = document.getElementById("age").value;
            var phoneNumber = document.getElementById("phoneNumber").value;

  
            var numberArray=[];
            console.log(numberArray.length);
  
              numberArray.push(age, phoneNumber);
            
                 for (var i = 0; i < numberArray.length; i++){
                  if (numberArray[i] <= 100){ {document.getElementById("postAge").innerHTML= "Age: " + age;}
                  }
                  else {document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber}
                }

            }