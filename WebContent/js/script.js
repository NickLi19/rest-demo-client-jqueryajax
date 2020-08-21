$(document).ready(function() {
	
	console.log("jQuery loaded!");
	
	$("#btn").click(function() {
		
		var zip = $("#zipcode").val();
		
		$.ajax({
			
//			url: "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=a30ebb5af6b78e566e1797db9855606e"
			url: "http://localhost:8080/rest-demo/rest/products/viewall"
		}).then(function(data) {
			
			console.log(data);
		})
	})
})