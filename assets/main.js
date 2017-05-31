$(document).ready(function() {
	$("#content").html('<img src="http://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg" />');
 	$("#logo").append('<img src="http://iphophilly.com/img/logo.png" />');
 	$("#menu").click(function(){
 		$("#content").html('<img src="http://image.zmenu.com/menupic/1883752/20150318005609476211.jpg" />');
 	});
 	$("#logo").click(function(){
		$("#content").html('<img src="http://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg" />');
 	});
 	$("#about").click(function(){
 		$("#content").html('<div class="info"><br><h1>iPho Philly Philadelphia</h1><address>1921 Fairmount Avenue, Philadelphia, PA 19130</address><p>Tel: 215-763-7777</p><br><ul>Store Hours<li>Monday 11am-10pm</li><li>Tuesday 11am-10pm</li><li>Wednesday 11am-10pm</li><li>Thursday 11am-10pm</li><li>Friday 11am-11pm</li><li>Saturday 9am-12am</li><li>Sunday 12pm-5pm</li></ul><br><br></div>');
 	});
 	$("#delivery").click(function(){
 		$("#content").html('<div class="info"><p>We offer delivery service as a convenience to our customers. All items on our dine in menu are available for delivery. Keep in mind that certain foods are temperature dependent and so the overall quality is different than what you would get when you dine in.</p><br><br> <ul><li>Minimum food order of $30.</li><li>Additional delivery charge of $2</li><li>We deliver within a 3 mile radius of our restaurant. Please check distances before placing your order.</li></ul><br><br></div>');
 	});

});