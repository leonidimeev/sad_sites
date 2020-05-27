
function longMonthArray() {
	this[0] = "January";	this[1] = "February";	this[2] = "March";
	this[3] = "April";	this[4] = "May";	this[5] = "June";
	this[6] = "July";	this[7] = "August";	this[8] = "September";
	this[9] = "October";	this[10] = "November";	this[11] = "December";
        return (this);
}

function longDayArray() {
	this[0] = "Sunday";	this[1] = "Monday";	this[2] = "Tuesday";
	this[3] = "Wednesday";	this[4] = "Thursday";	this[5] = "Friday";
	this[6] = "Saturday";
        return (this);
}

function getLongYear(year)
{
  if (year > 1900) return year
  return year+1900;
}

function writeDate()
{
   longDays = new longDayArray();
   longMonths = new longMonthArray();
   d = new Date();
   day = d.getDate();
   month = d.getMonth();
	 year = d.getYear();
   str = longDays[d.getDay()] + " " + longMonths[month] + " " + day + ", "+getLongYear(year);
   document.writeln(str);
}

function writeTime()
{
   d = new Date();
   hour=d.getHours();
   min=d.getMinutes();
   sec=d.getSeconds();
   if (hour < 10) hour = "0"+hour;
   if (min < 10) min = "0"+min;
   if (sec < 10) sec = "0"+sec;
   str = hour+":"+min+":"+sec;
   document.writeln(str);
}
