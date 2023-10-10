$(document).ready(function() {
  
    $(".button").click(function() {
     
        var text = $(this).text();
   
        alert(" WRONG ACCESS!");
    });
});




$(document).ready(function () {
    var images = $(".animated-image");
    var imageCount = images.length;

    function animateImage() {
        var containerWidth = $(".container").width();
        var containerHeight = $(".container").height();

       
        var randomImageIndex = Math.floor(Math.random() * imageCount);

        $(images).hide();

       
        var $randomImage = $(images[randomImageIndex]);
        $randomImage.show();

        var imageWidth = $randomImage.width();
        var imageHeight = $randomImage.height();
        var randomX = Math.random() * (containerWidth - imageWidth);
        var randomY = Math.random() * (containerHeight - imageHeight);

        
        $randomImage.css({
            left: randomX + "px",
            top: randomY + "px",
            display: "block"
        });

        
        $randomImage.css({
            transform: "rotate(" + (Math.random() * 360) + "deg)"
        });

       
        setTimeout(animateImage, 1500); 
    }
    animateImage();
});




$(document).ready(function () {
  
    $(".animated-image").click(function () {
        var imageAlt = $(this).attr("alt"); // 클릭한 

     
        switch (imageAlt) {
            case "Image 1":
                window.location.href = "https://en.wikipedia.org/wiki/Ant"; 
                break;
            case "Image 2":
                window.location.href = "https://en.wikipedia.org/wiki/Beetle"; 
                break;
            case "Image 3":
                window.location.href = "https://en.wikipedia.org/wiki/Butterfly"; 
                break;
            case "Image 4":
                window.location.href = "https://en.wikipedia.org/wiki/Cockroach"; 
                break;
            case "Image 5":
                window.location.href = "https://en.wikipedia.org/wiki/Dragonfly"; 
                break;
            case "Image 6":
                window.location.href = "https://en.wikipedia.org/wiki/Flea"; 
                break;
            case "Image 7":
                window.location.href = "https://en.wikipedia.org/wiki/Fly"; 
                break;
            case "Image 8":
                window.location.href = "https://en.wikipedia.org/wiki/Grasshopper"; 
                break;
            case "Image 9":
                window.location.href = "https://en.wikipedia.org/wiki/Coccinellidae"; 
                break;

            case "Image 10":
                window.location.href = "https://en.wikipedia.org/wiki/Moth"; 
                break;
            case "Image 11":
                window.location.href = "https://en.wikipedia.org/wiki/Snail"; 
                break;
            case "Image 12":
                window.location.href = "https://en.wikipedia.org/wiki/Spider"; 
                break;
            case "Image 13":
                window.location.href = "https://en.wikipedia.org/wiki/"; 
                break;

            default:
               
        }
    });

});



  