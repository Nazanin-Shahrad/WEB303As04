/*
    Assignment 4
    {Your name here}
*/

$(document).ready(function(){
    // your code here
   
    if('geolocation' in navigator){
        console.log('geolocation  is available');
        navigator.geolocation.getCurrentPosition( position => { 
          //  let lat2 = position.coords.latitude;
          //  let lon2 = position.coords.longitude;
            
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            //document.getElementById('latitude').textContent= position.coords.latitude;; 
             document.getElementById('longitude').textContent=position.coords.longitude;; 

           // $('.youarehere').eq(0).html(`The latitude is: " + ${position.coords.latitude}`);
            //$('.youarehere').eq(0).html(`The longitude is: ${position.coords.longitude}`);
    
        });
    } else {
        console.log('geolocation not available');
       // $('.youarehere').eq(0).html('geolocation not available');
       document.getElementById('youarehere').textContent="geolocation is not available"; 
    }


   
 
    const lat1= localStorage.getItem("latitude");
    const lon1= localStorage.getItem("longitude");
    
    if(lat1 == null){
       console.log('welcome');
       document.getElementById('youarehere').textContent="welcome"; 
    
    } else if (lat1){
        const diff = calcDistance(lat1 , lon1 , lat2, lon2);
        console.log(diff);
        
    
    }
       // console.log(localStorage.getItem("latitude"));
    
    window.localStorage.removeItem('latitude');
    window.localStorage.removeItem('longitude');
    window.localStorage.setItem('latitude', JSON.stringify(position.coords.latitude));
    window.localStorage.setItem('longitude', JSON.stringify(position.coords.longitude));






    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


