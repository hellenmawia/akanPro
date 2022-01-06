let daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let namesOfMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let namesOfFemale =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]

function validateForm() {
    let year = document.forms["akanName"]["year"].value;
    let month = document.forms["akanName"]["month"].value;
    let day = document.forms["akanName"]["day"].value;
    if (year == "" || month == "" || day == "") {
        console.log()
      alert("Please fill in all the required fields");
      return false;
    }else{
        getUserInput()
    }
  }

var getUserInput = function() {
    let inputYear = document.getElementById("birthYear").value
    let intYear = parseInt(inputYear)


    let inputMonth = document.getElementById("birthMonth").value
    let intMonth = parseInt(inputMonth)

    let inputDay = document.getElementById("birthDay").value
    let intDay = parseInt(inputDay)

    let inputGender = document.getElementById("gender").value
    let akanName;


    if(intDay <= 0 || intDay> 31){
        alert("Enter a valid day")
    }
    if(intMonth <=0 || intMonth>12){
        alert("Enter a valid month")
    }
  

   
    const day = new Date(intYear+"-"+intMonth+"-"+inputDay).getDay()


    if (inputGender ==="Male"){
        akanName = namesOfMale[day]
        alert("Your Akan name is " + akanName + ". Because you are a male born on "+ daysOfTheWeek[day])
    }else if (inputGender === "Female"){
        akanName = namesOfFemale[day]
        alert("Your Akan name is " + akanName + ". Because you are a female born on "+ daysOfTheWeek[day])
    }
}

let reset = function(){
    location.reload();
} 


