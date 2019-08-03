// The magic number: 31557600000 is 24 * 3600 * 365.25 * 1000
// Which is the length of a year, the length of a year is 365 days and 6 hours
// which is 0.25 day.
const maginNumber = 31557600000;

export const utilities = {
  loadImagesAsync: () => {
    "use strict";
    const objects = document.getElementsByClassName("asyncImage");

    Array.from(objects).map(item => {
      const img = new Image();

      img.src = item.dataset.src;

      img.onload = () => {
        item.classList.remove("asyncImage");
        return item.nodeName === "IMG"
          ? (item.src = item.dataset.src)
          : (item.style.backgroundImage = `url(${item.dataset.src})`);
      };
    });
  },

  initializeHoursWorked: () => {
    $(window).load(function() {
      var startWork = new Date(2011, 1, 1, 0, 0);
      var now = new Date();
      var daysDifference = now.getTime() - startWork.getTime();
      var yearsDifference = now.getYear() - startWork.getYear();
      //2 days * 24 hours per day * month * 12 month per year i not work and 15 days vacation
      var hoursNotWorked = (2 * 24 * 4 * 12 + 15) * yearsDifference;
      var hoursWorked =
        ((daysDifference / (1000 * 60 * 60 * 24)) * 24) / 2.1 - hoursNotWorked;
      var hoursWorkedMask = Math.trunc(hoursWorked)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      $("#hoursWorked").text(hoursWorkedMask + " Working Hours");
    });
  },

  initializeAge: () => {
    $(window).load(function() {
      var birthday = Date.parse("1991/11/06");
      var age = ~~((Date.now() - birthday) / maginNumber);

      $("#age").text(age + " years old");
    });
  },

  initializeFillBars: () => {
    var initialized = false;

    window.addEventListener("pageChanged", function(e) {
      if (!initialized && e && e.detail == "resume") {
        $(".bar").each(function() {
          var bar = $(this);
          var percent = bar.attr("data-percent");
          bar
            .find(".progress")
            .css("width", percent + "%")
            .html("<span>" + percent + "</span>");
        });
        initialized = true;
      }
    });
  }
};
