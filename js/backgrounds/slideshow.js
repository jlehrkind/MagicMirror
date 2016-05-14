<html>
<head>
<script type='text/javasctip'>

var slideimages = new Array()
slideimages[0] = new Image()
slideimages[0].src= 'images/Mask1.jpg'
slideimages[1] = new Image()
slideimages[1].src= 'images/Mask2.jsp'

</script>
</head>

<body>
<img src= 'Mask1.jpg' id='slide' width=100 height=56/>

<script type= 'text/javascript'>
var step=0

function slideit(){
if(!document.images)
return
document.getElementById('slide').src= slideimages[step].src

if(step<2)
step++
else
step=0

setTimeout('slideit()',2500)

}

slideit()

</script>
</body>
</html>
