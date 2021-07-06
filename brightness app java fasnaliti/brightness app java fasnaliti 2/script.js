function bright() 
{
   var x = document.getElementById("brightness").value;
   var y = document.getElementById("pic");
   y.style.filter = "brightness("+x+")";
	
}


function contrast()
{
	var x = document.getElementById("contrast").value;
	var y = document.getElementById("pic");
	y.style.filter = "contrast("+x+")";
}


function saturate()
{
	var x = document.getElementById("saturate").value;
	var y = document.getElementById("pic");
	y.style.filter = "saturate("+x+")";
}


function bright_effect()
{
	var box = document.getElementById("effect-box");
	var bright_data = document.getElementById("brightness").value;
	var contrast_data = document.getElementById("contrast").value;
	var saturate_data = document.getElementById("saturate").value;
	var picture       = document.getElementById("pic").style.filter;
	var icon     = document.getElementById("icon");
    var loder   = document.getElementById("loader");
    loader.style.opacity = "1";
    box.style.display = "block";
    var bright = document.getElementById("brightness");
    var contrast = document.getElementById("contrast");
    var saturate = document.getElementById("saturate");
    var check_color = /[0-9]/g;
     console.log(bright);
     picture.match(bright_data)?bright.style.display ="none" :bright.style.display = "block";
     picture.match(contrast_data)?contrast.style.display ="none":contrast.style.display = "block";
     picture.match(saturate_data)?saturate.style.display = "none":saturate.style.display = "block";
     picture.match(bright)&&picture.match(contrast)&&picture.match(saturate)?box.style.display = "none"
     :box.style.display = "block";


}





