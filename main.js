let answers = document.querySelectorAll(".faq");
        answers.forEach((event) => {
        event.addEventListener("click", () => {
            if (event.classList.contains("active")) {
         event.classList.toggle("active");
            } else {
            event.classList.toggle("active");
            }
    });    
});

let x = 0;
$(".more-faqs").click(function() { 
    $(".div-more-faqs").toggle();
    
    if(x === 1){
        $(".more-faqs").html("More FAQs");
        x = 0;
    }
    else{
        $(".more-faqs").html("Show Less");
        x = 1;
    }
});