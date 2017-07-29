<script type="text/javascript">
 var i=0;
 var images=[];
 var time=3000;
 images[0]="image1.jpg";
 images[1]="image2.jpg";
 images[2]="image3.jpg";
 function changeimg(){
 	document.slide.src=images[i];
 	if(i<images.length){
 		i++;
 	}
 	else{
 		i=0;
 	}
 	setTimeout("changeimg()",time);
 }
 window.onload=changeimg;
	
</script>
