document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      document
        .querySelector(".bar")
        .classList.toggle("bar--bg", entries[0].intersectionRatio < 0.9);
    },
    {
      threshold: 0.9,
    }
  );

  observer.observe(document.querySelector(".header"));
});

$(document).ready(function () {
  $(".sumbit").click(function (event) {
    console.log("button clicked");

    var email = $(".email").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div> Valid Email</div>");
    } else {
      statusElm.append("<div> Invalid Email</div>");
      event.preventDefault();
    }

    if (message.length >= 15) {
      statusElm.append("<div>Valid Message</div>");
    } else {
      statusElm.append("<div>Invalid Message</div>");
      event.preventDefault();
    }
  });
});
