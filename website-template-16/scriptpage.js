<html>
<head>
<title>
Clock in Java Script
</title>
<META name="keywords" content="Clock, Java Clock, JavaScript Clock, Free, World, Time, Date">
<META name="description" content="Here you can find an easy to install Clock written in Javascript to put into your page.">
<script language="javascript">
<!-- Date in Java Script .. Cameron Gregory  http://www.bloke.com/
// http://www.bloke.com/javascript/Date/
// change and modify this if you like, but leave these
// 4 comment lines in tact and unchanged.

function longMonthArray() {
	this[0] = "January";	this[1] = "February";	this[2] = "March";
	this[3] = "April";	this[4] = "May";	this[5] = "June";
	this[6] = "July";	this[7] = "August";	this[8] = "September";
	this[9] = "October";	this[10] = "November";	this[11] = "December";
        return (this);
}

function shortMonthArray() {
	this[0] = "Jan";	this[1] = "Feb";	this[2] = "Mar";
	this[3] = "Apr";	this[4] = "May";	this[5] = "Jun";
	this[6] = "Jul";	this[7] = "Aug";	this[8] = "Sep";
	this[9] = "Oct";	this[10] = "Nov";	this[11] = "Dec";
        return (this);
}

function longDayArray() {
	this[0] = "Sunday";	this[1] = "Monday";	this[2] = "Tuesday";
	this[3] = "Wednesday";	this[4] = "Thursday";	this[5] = "Friday";
	this[6] = "Saturday";
        return (this);
}

function shortDayArray() {
	this[0] = "Sun"; this[1] = "Mon"; this[2] = "Tue"; this[3] = "Wed";
	this[4] = "Thu"; this[5] = "Fri"; this[6] = "Sat";
        return (this);
}

function getShortYear(year)
{
shortyear =  year%100;
     if (shortyear < 10) shortyear = "0"+shortyear;
	return shortyear
}

function getLongYear(year)
{
  if (year > 1900) return year
  return year+1900;
}

function writeDateLong(format)
{
   shortDays = new shortDayArray();
   longDays = new longDayArray();
   shortMonths = new shortMonthArray();
   longMonths = new longMonthArray();
   d = new Date();
   day = d.getDate();
   month = d.getMonth();
	year = d.getYear();
   if (format == 0)
     str = shortDays[d.getDay()] + " " + shortMonths[month] +". " + day + ", "+getLongYear(year);
  else if (format == 1)
     str = shortDays[d.getDay()] + " " + longMonths[month] + " " + day + ", "+getLongYear(year);
  else if (format == 2)
     str = longDays[d.getDay()] + " " + longMonths[month] + " " + day + ", "+getLongYear(year);
  else if (format == 3)
     str = longMonths[month] + " " + day + ", "+getLongYear(year);
   else if (format == 4)
     str = shortDays[d.getDay()] + " " + day + " " + shortMonths[month] +". " +getLongYear(year);
  else if (format == 5)
     str = shortDays[d.getDay()] + " " + day + " " + longMonths[month] + " " +getLongYear(year);
  else if (format == 6)
     str = longDays[d.getDay()] + " " + day + " " + longMonths[month] + " " + getLongYear(year);
  else if (format == 7)
     str = day + " " + longMonths[month] + ", "+getLongYear(year);
  else {
     month++;
     shortyear = getShortYear(year);
     if (format == 8)
       str = month + "/" + day + "/" + shortyear;
     else if (format == 9)
       str = month + "/" + day + "/" + getLongYear(year);
     else if (format == 10)
       str = day + "/" + month + "/" + shortyear;
     else if (format == 11)
       str = day + "/" + month + "/" + getLongYear(year);
     else if (format == 12)
       str = shortyear + "/" + month + "/" + day;
     else if (format == 13)
       str = shortyear + "/" + month + "/" + day;
     else {
        if (day < 10) day = "0"+day
        if (month < 10) month = "0"+month
        if (format == 14)
          str = month + "/" + day + "/" + shortyear;
        else if (format == 15)
          str = month + "/" + day + "/" + getLongYear(year);
        else if (format == 16)
          str = day + "/" + month + "/" + shortyear;
        else if (format == 17)
          str = day + "/" + month + "/" + getLongYear(year);
        else if (format == 18)
          str = shortyear + "/" + month + "/" + day;
        else if (format == 19)
          str = shortyear + "/" + month + "/" + day;
        }
     }
  document.writeln(str);
}

function writeDate()
{
   writeDateLong(0);
}

function writeTimeLong(format)
{
   d = new Date();
   hour=d.getHours();
   min=d.getMinutes();
   sec=d.getSeconds();
   if (hour < 10) hour = "0"+hour;
   if (min < 10) min = "0"+min;
   if (sec < 10) sec = "0"+sec;
   
   if (format == 0)
      str = hour+":"+min+":"+sec;
   else if (format == 1)
      str = hour+":"+min;
   
   document.writeln(str);
}

function writeTime()
{
   writeTimeLong(0);
}


// end-->
</script>



</head>
<body>

<body bgcolor="#000000" text="#38CC70" link="#F3C961" vlink="F3C961" alink="#F3C961">
<table width=100% cellspacing=0 cellpadding=0>
<tr><td width=1000 valign=top>
<b>[
   <a href=http://www.bloke.com/>Bloke.com</a>
|| <a href=http://www.bloke.com/linux/>Linux</a>
|| <a href=http://www.bloke.com/javascript/>JavaScript</a>
|| <a href=http://java.bloke.com/>Java</a>
<!--
|| <a href=http://gday.bloke.com:81/>Channels</a>
-->
|| <a href=http://www.njvb.com/>Volleyball</a>
]</b>
<br>
Free: [ <a href=http://www.guestbot.com/>Guestbook</a> || 
<a href=http://MessageBot.com/>MessageBot</a> ||
<a href=http://www.plugins.com/>Plugins</a> ||
<a href=http://counter.bloke.com/>Counter</a> ||
|| <a href=http://www.bloke.com/linkme/>Link Me</a>
|| <a href=http://counter.bloke.com/advertise.html/>Advertise</a>
<table cellpadding=0 cellspacing=0>
<FORM ACTION="http://www.findbot.com/search.cgi"> 
<tr><td>
<SELECT NAME=e>
<OPTION VALUE="hb">HotBot
<OPTION VALUE="av">AltaVista
<OPTION VALUE="ls">LookSmart
<OPTION VALUE="ex">Excite
<OPTION VALUE="is">Infoseek
<OPTION VALUE="lc">Lycos
<OPTION VALUE="dn">DejaNews
</SELECT></td><td><INPUT SIZE=30 NAME=s></td><td><INPUT TYPE=submit VALUE=Search></td></tr>
</FORM>   
</table>
</td>
<td valign=top width=140><a href=http://www.bloke.com/><img src=http://www.bloke.com/images/Bloke_com_140x70.gif width=140 height=70 border=0 alt="www.bloke.com"></a></td>
<td width=1></td></tr></table>


<CENTER>

<table bgcolor=#999999 cellpadding=10>
<tr><th><font color=#000000><h2><a href=/cgi-bin/click.cgi?http://www.flowerbot.com/>FlowerBot</a></h2></font></th>
<th><h3><font color=#000000>Send your Mum some Flowers!</font></h3></th></tr></table>

</CENTER>


<h2><a href=/>Bloke</a> &gt; <a href=/javascript/>JavaScript</a> &gt; Date</h2>
This javascript will allow you to place the current date and/or time
on your page:
For example:
<ul>
<font color="#F3C961">Today's Date is:
<SCRIPT>
<!--
writeDate();
// -->
</SCRIPT>
</font>
</ul>
or maybe you are interested in the current time.
<ul>
<font color="#F3C961">This page loaded at:
<SCRIPT>
<!--
writeTime();
// -->
</SCRIPT>
</font>
</ul>

<h3>How To</h3>
<ul>
<li> Include <a href=date.txt><b>date.txt</b></a> in the <b>HEAD</b> section of your document. (For IE, click on date.txt and then to view source)
<li> Add the following inside your document:

<pre>
&lt;script language="javascript"&gt;
writeDate();
&lt;/script&gt;
</pre>

or if you like there is a huge selection to choose from!
Add the following into your document.

<pre>
&lt;script language="javascript"&gt;
XXXX
&lt;/script&gt;
</pre>

replace <code>XXXX</code> with something from the left hand side of the table
to get the desired results in your page.

<table border=2>
<tr><th>JavaScript Code</th><th>Example Output</th></tr>

<tr><td>
  <code>
  writeDate();
  </code>
</td><td>
  <SCRIPT>
  writeDate();
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(1);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(1);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(2);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(2);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(3);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(3);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(4);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(4);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(5);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(5);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(6);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(6);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(7);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(7);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(8);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(8);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(9);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(9);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(10);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(10);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(11);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(11);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(12);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(12);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(13);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(13);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(14);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(14);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(15);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(15);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(16);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(16);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeDateLong(17);
  </code>
</td><td>
  <SCRIPT>
  writeDateLong(17);
  </SCRIPT>
</td></tr>

</table>
<P>
<table border=2>
<tr><th>JavaScript Code</th><th>Example Output</th></tr>

<tr><td>
  <code>
  writeTime();
  </code>
</td><td>
  <SCRIPT>
  writeTime();
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeTimeLong(1);
  </code>
</td><td>
  <SCRIPT>
  writeTimeLong(1);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeTimeLong(2);
  </code>
</td><td>
  <SCRIPT>
  writeTimeLong(2);
  </SCRIPT>
</td></tr>

<!--
<tr><td>
  <code>
  writeTimeLong(3);
  </code>
</td><td>
  <SCRIPT>
  writeTimeLong(3);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeTimeLong(4);
  </code>
</td><td>
  <SCRIPT>
  writeTimeLong(4);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeTimeLong(5);
  </code>
</td><td>
  <SCRIPT>
  writeTimeLong(5);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeTimeLong(6);
  </code>
</td><td>
  <SCRIPT>
  writeTimeLong(6);
  </SCRIPT>
</td></tr>

<tr><td>
  <code>
  writeTimeLong(7);
  </code>
</td><td>
  <SCRIPT>
  writeTimeLong(7);
  </SCRIPT>
</td></tr>
-->

</table>

</ul>


<p><b>Got JavaScript questions?</b>
Maybe my <a href=http://www.boardbot.com/boardbot/javascript/>JavaScript Board</a> has the answers?
<!-- Start http://messagebot.com -->
<FORM ACTION="http://messagebot.com/cgi-bin/list/add.cgi">
<table border=2><tr><td>
Enter your Email to join my JavaScript List:
<br>
(highly recommended if you use these scripts!)
<br>
<input name="email">
<input type="hidden" name="list" value="javascript">
<input type="submit" value="Join">
<br>
<font size="-1">Powered by: <a TARGET="_top" href="http://messagebot.com/">MessageBot.com</a></font>
</td></tr></table>
</FORM>
<!-- End http://MessgheBot.com -->



<li> Java is a registered trademark of Sun Microsystems, Inc.


<p>
<hr size=4>
<b><a href=/cgi-bin/click.cgi?http://www.bloke.com/>Cameron Gregory</a> - <a href=mailto:cameron@bloke.com>cameron@bloke.com</a></b>
<table border=4><tr>
<td><applet ARCHIVE=http://counter.bloke.com/Counter.zip codebase=http://counter.bloke.com/ code=Counter width=90 height=20>
<param name=img value=default-black-green2.gif>
</applet></td></tr></table>
</BODY>
</HTML>