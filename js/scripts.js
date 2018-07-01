function dogsBdays() {


  if( document.getElementById('dogBirthday').value == "") {
    alert("Please select a valid birth date for your dog!");
    document.getElementById('dogBirthday').value == "Invalid Date";

    var para = document.createElement("p");
    var node = document.createTextNode("Please insert/select your dogs birthday");
    para.className = "dates";
    para.id = "nodata";
    para.appendChild(node);
    var element = document.getElementById("bDayList");
    element.appendChild(para);

  }

  else {
    var Bday = new Date(document.getElementById("dogBirthday").value);
    Bday.setFullYear(new Date().getFullYear());
    Bday.setHours(Bday.getHours() - 2);
    console.log(Bday + " Date Entered");
    var oneDay = 1000 * 60 * 60 * 24;
    var start1 = new Date(Bday.getFullYear(), 0, 0);
    var diff1 = Bday - start1;
    var BdayInNum = Math.floor(diff1 / oneDay);
    var today = new Date();
    var start = new Date(today.getFullYear(), 0, 0);
    var diff = today - start;
    var TodayInNum = Math.floor(diff / oneDay);

    var daysDiff = (TodayInNum - BdayInNum);
    var numBeforeBday = (Math.floor(daysDiff / 52)) + 1;

    var elements = document.getElementsByClassName("dates");
    var parent = document.getElementById("bDayList");
    
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    
    while (document.getElementById("nodata") != null) {
      var parent = document.getElementById("bDayList");
      var child = document.getElementById("nodata");
      parent.removeChild(child);
    }

    var daysInYear = 365;
    var daysInLeapYear = 366;

    var dates = new Date(Bday).getDate() + "/" + new Date(Bday).getMonth() + "/" + new Date(Bday).getFullYear();

    if (document.getElementById("name").value != "")
    {
      document.getElementById("modaltitle").innerHTML = "Upcoming birthdays for " + document.getElementById("name").value + ':';
    }
    else {
      document.getElementById("modaltitle").innerHTML = '<br>';
    }

    var isLeapYear = false;
    var i = 0;

    while ( i < 7) {

      var dogRealBday = new Date();
      if (isLeapYear) {
        dogRealBday = dogRealBday.setTime(Bday.getTime() + (numBeforeBday * (daysInLeapYear / 7) * 86400000));
      }
      else {
       dogRealBday = dogRealBday.setTime(Bday.getTime() + (numBeforeBday * (daysInYear / 7) * 86400000));
     }

     var dateStore = new Date(dogRealBday);
     if (dateStore.getFullYear() % 4 == 0) {
       isLeapYear = true;
     }
     else {
      isLeapYear = false;
    }

    var para = document.createElement("p");
    console.log(dateStore);
    dateformated = moment(dateStore).format("MMMM Do YYYY");
    var node = document.createTextNode(dateformated);
    para.className = "subtitle is-4 dates";
    para.appendChild(node);
    var element = document.getElementById("bDayList");
    element.appendChild(para);
    numBeforeBday++;
    i++;
  }

}

}