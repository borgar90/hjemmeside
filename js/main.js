$(document).ready(() => {
  $("#about").on("inview", function (event, isInView) {
    if (isInView) {
      addSkillBar();
    }
  });

  $(".project-card").on("inview", function (event, isInView) {
    if (isInView) {
      addProjects();
    }
  });

  $(".aBlog").on("inview", function (event, isInView) {
    if (isInView) {
      addBlog();
    }
  });

  $("#contact").on("inview", function (event, isInView) {
    if (isInView) {
      addContact();
    }
  });
  $(".process-container").on("inview", function (event, isInView) {
    if (isInView) {
      addProcesses();
    }
  });
  $("#arrow-icon").on("click", function () {
    $("html, body")
      .animate(
        {
          scrollTop: $("#about").offset().top - 50,
        },
        2000
      )
      .promise()
      .then(function () {
        addSkillBar();
      });
  });
});

function addContact() {
  $("#contact").fadeTo("slow", 1, function () {
    $(".contact-form").addClass("animated fadeInUp");
  });
}

function addBlog() {
  $(".aBlog").addClass("animated fadeInUp");
}

function addProjects() {
  $(".project-card").addClass("animated fadeInUp");
}
function addProcesses() {
  $(".process-container").addClass("animated fadeInUp");
}
function addSkillBar() {
  $(".skills-container").addClass("loaded");

  $(".skill-level").each(function () {
    var level = $(this).data("level");
    $(this).css("--level", level + "%");
  });

  $(".skill-level").css("animation-play-state", "running");
}
