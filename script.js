let phrases = [
    "I am a Front End Designer && Developer and && Media Student, ",
    "currently located in the beautiful city Innsbruck, Austria.",
    "I am interested in the interactivity of the end user experience",
    "exploring all the possibilities of the digital media.",
  ];
  
  $("input").on("input", function () {
    let value = $(this).val();
  
    let phrase = phrases[value];
  
    $("p.phrase").html(phrase);
  });
  
  // Project Tabs
  
  const about = document.querySelector(".about");
  const btns = document.querySelectorAll(".tab-btn");
  const articles = document.querySelectorAll(".content");
  
  about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove active from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("active");
        e.target.classList.add("active");
      });
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });