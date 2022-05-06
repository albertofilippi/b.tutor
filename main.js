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

const wrapper = document.querySelector('.wrapper');
selectBtn = document.querySelector('.select-btn');
options = document.querySelector('.options');
title = document.getElementsByClassName('.language-title');

let languages = ["English (EN)", "French (FR)"];

function addLanguage(){
    languages.forEach(language => {

        if(language.indexOf('French (FR)'))
        {
        let li = `<label><li class="li-language" onclick="updateName(this)"><input type="radio" name = "language" class="radio-button">${language}</input></li></label><hr style="border-top: 0.001em solid #eaeaea; width: 100%;">`;
        options.insertAdjacentHTML("beforeend", li);
        }
        else{
            let li = `<label><li class="li-language" onclick="updateName(this)"><input type="radio" name = "language" class="radio-button">${language}</input></li></label>`;
            options.insertAdjacentHTML("beforeend", li);
        }
    })
}

addLanguage();

function updateName(selectedLi){
    selectBtn.children[1].innerText = selectedLi.innerText;
    wrapper.classList.remove('active');
}

selectBtn.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
})