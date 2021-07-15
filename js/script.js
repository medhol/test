var question = document.querySelector("#question");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var question6 = document.querySelector("#question6");
var question7 = document.querySelector("#question7");
var question8 = document.querySelector("#question8");

//1
question.addEventListener("click", function() {
  $(this).find('.question-arrow').toggleClass('rotate');
  this.children[1].classList.toggle("displaynone");
  setTimeout(function() {
      question.children[1].classList.toggle("active");
    }, 10);
});

//2

question1.addEventListener("click", function() {
    $(this).find('.question-arrow').toggleClass('rotate');
    this.children[1].classList.toggle("displaynone");
    setTimeout(function() {
        question1.children[1].classList.toggle("active");
      }, 10);
  });

    //3

question2.addEventListener("click", function() {
    $(this).find('.question-arrow').toggleClass('rotate');
    this.children[1].classList.toggle("displaynone");
    setTimeout(function() {
        question2.children[1].classList.toggle("active");
      }, 10);
  });

    //4
question3.addEventListener("click", function() {
    $(this).find('.question-arrow').toggleClass('rotate');
    this.children[1].classList.toggle("displaynone");
    setTimeout(function() {
        question3.children[1].classList.toggle("active");
      }, 10);
  });
  
  //5
  
  question4.addEventListener("click", function() {
    $(this).find('.question-arrow').toggleClass('rotate');
      this.children[1].classList.toggle("displaynone");
      setTimeout(function() {
          question4.children[1].classList.toggle("active");
        }, 10);
    });
  
      //6
  
  question5.addEventListener("click", function() {
    $(this).find('.question-arrow').toggleClass('rotate');
      this.children[1].classList.toggle("displaynone");
      setTimeout(function() {
          question5.children[1].classList.toggle("active");
        }, 10);
    });

//7
question6.addEventListener("click", function() {
    $(this).find('.question-arrow').toggleClass('rotate');
    this.children[1].classList.toggle("displaynone");
    setTimeout(function() {
        question6.children[1].classList.toggle("active");
      }, 10);
  });
  
//8
question7.addEventListener("click", function() {
    $(this).find('.question-arrow').toggleClass('rotate');
    this.children[1].classList.toggle("displaynone");
    setTimeout(function() {
        question7.children[1].classList.toggle("active");
      }, 10);
  });

//9
question8.addEventListener("click", function() {
    $(this).find('.question-arrow').toggleClass('rotate');
    this.children[1].classList.toggle("displaynone");
    setTimeout(function() {
        question8.children[1].classList.toggle("active");
      }, 10);
  });

var article = document.querySelectorAll('.article');

article.forEach(function(i) {
  i.addEventListener('click', function() {
    window.location.href = "articles/article1.php";
  });
});