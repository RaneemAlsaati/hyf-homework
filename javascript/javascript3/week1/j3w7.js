// json
[  
    {  
       "Name ":"Raneem",
       "age":24,
       "hoppy":"football",
       "favorite song ":[  
          "love shot",
          "ma wad3tak"
       ]
    }
 ]

 // Find a cool api
 fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((Cats) => {
        console.log(Cats);
    });
    // there are two arrays of object

    // Weather app
     const  cityName = document.getElementById ("city")
     const buttton = document.getElementById("button")

      fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'88ad4ffe3a98cf4210914db7ec444d01')
    .then(response => response.json())
    .then((weather) => {
        console.log(weather);
    });
    // display 
    function Weather (){
        var img = document.createElement( "image" )
        img.setAttribute('src', 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiZgrXWquzhAhW56KYKHaOaDqQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.919seafm.com.au%2Flocal-news%2Flocal-weather%2Flocal-weather%2F&psig=AOvVaw3-LVE-LgO3om1FddmM04kK&ust=1556319123718212');
        document.body.appendChild(img);
    }


