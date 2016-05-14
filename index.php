<html>
<head>
	<title>Magic Mirror</title>
	<style type="text/css">
		<?php include('css/main.css') ?>
	</style>
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css">

	<script type="text/javascript">
        var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';
	</script>
	<meta name="google" value="notranslate" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">

        <script type =	"text/javascript" >

        var image1 = new Image()
        image1.src = 'js/images/image1.gif'
        var image2 = new Image()
        image2.src = 'js/images/image2.gif'
        var image3 = new Image()
        image3.src = 'js/images/image3.gif'

        </script>

</head>
<body>

	<div class="top right"><div class="windsun small dimmed"></div><div class="temp"></div><div class="forecast small dimmed"></div></div>
	<div class="top left"><div class="date small dimmed"></div><div class="time" id="time"></div><div class="calendar xxsmall"></div></div>
	<div class="center-ver center-hor"><!-- <div class="dishwasher light">Vaatwasser is klaar!</div> --></div>
	<div class="lower-third center-hor"><div class="compliment light"></div></div>
	<!-- <div class="lower-third right-hor"><div class=" light"></div></div> -->
	<div class="bottom center-hor"><div class="news medium"></div></div>

</div>
<script src="js/jquery.js"></script>
<script src="js/jquery.feedToJSON.js"></script>
<script src="js/ical_parser.js"></script>
<script src="js/moment-with-locales.min.js"></script>
<script src="js/config.js"></script>
<script src="js/rrule.js"></script>
<script src="js/version/version.js"></script>
<script src="js/calendar/calendar.js"></script>
<script src="js/compliments/compliments.js"></script>
<script src="js/weather/weather.js"></script>
<script src="js/time/time.js"></script>
<script src="js/news/news.js"></script>
<script src="js/webScraper/webScraper.js"></script>
<!--<script src="js/email/email.js"></script> -->
<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>

<!-- <img src="js/images/image1.gif" id="slide" width="3840px" height="2160px" /> -->

<!-- <script type="text/javascript">
var step=1
function slideit(){
if(!document.images)
 return
 document.getElementById('slide').src = eval("image" + step + ".src")
if(step<3)
 step++
else
 step=1
setTimeout("slideit()" , 2500)
}

slideit()
</script> -->




<!-- <script src="js/socket.io.min.js"></script> -->
<?php  include(dirname(__FILE__).'/controllers/modules.php');?>
</body>
</html>


	
