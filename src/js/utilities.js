export const utilities = {
  loadImagesAsync: () => {
    "use strict";
    const objects = document.getElementsByClassName("asyncImage");

    Array.from(objects).map(item => {
      const img = new Image();

      function applySrc(src) {
        return item.nodeName === "IMG"
          ? (item.src = src)
          : (item.style.backgroundImage = `url(${src})`);
      }

      if (item.dataset.lowSrc) {
        applySrc(item.dataset.lowSrc);
      }

      img.src = item.dataset.src;

      img.onload = () => {
        item.classList.remove("asyncImage");
        return applySrc(item.dataset.src);
      };
    });
  },

  initializeHoursWorked: () => {
    $(window).load(function () {
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
      $("#hoursWorked").text(hoursWorkedMask + " WORKING HOURS");
    });
  },

  initializeAge: () => {
    $(window).load(function () {
      const today = new Date();
      const birthday = new Date("1991/11/06");
      const month = today.getMonth() - birthday.getMonth();
      let age = today.getFullYear() - birthday.getFullYear();

      if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age = age -1;
      }

      const text = $("#age").text();

      $("#age").text(`${age} ${text}`);
    });
  },

  initializeFillBars: () => {

    $(".bar").each(function () {
      const bar = $(this);
      const percent = bar.attr("data-percent");
      const customMessage = bar.attr("data-message");
      const hastMessage = (customMessage !== undefined)
      bar
        .find(".progress")
        .css("width", `${percent}%`);

      if (hastMessage) {
        bar
          .find(".progress")
          .html(`<span style="width: auto; border-radius: 20%;"> ${customMessage} </span>`);
      }
      else {
        bar.find(".progress")
      }
    });
  },

  initializeStamp: () => {
    $(window).load(function () {
      console.clear();
      utilities.printStamp();
    });
  },

  printStamp: () => {
    if (window.location.href.includes("portfolio/")) {
      return;
    }

    const whereILive = $("#where-i-live ").text();
    const myName = "【﻿Ｄａｍｉáｎ Ｐｕｍａｒ】";
    const myCurrentJob = $(".event.current p")[0].innerHTML.trim();
    const otherServer = utilities.getOtherServer();

    console.log("Sorry, I cleared console because I wanted show you this message below")
    console.log(myName);
    console.log(`I live in ${whereILive}`);
    console.log(myCurrentJob);
    console.log("Code: https://github.com/damianpumar/myresume");
    console.log(`Other server: ${otherServer}`);
    utilities.printSocialLinks();
  },

  printSocialLinks: () => {

    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    };


    const upperFirstLetter = word => {
      return `${word[0].toUpperCase()}${word.substring(1, word.length)}`;
    }

    const socialLinks = [];

    $(".social a").each(function () {
      const url = $(this).attr("href")
      if (url.includes("http")) {
        socialLinks.push({ name: this.className.split(" ")[0], url: url });
      }
    });

    socialLinks.filter(unique).forEach(function (link) {
      console.log(`• ${upperFirstLetter(link.name)}: ${link.url}`);
    })
  },

  getOtherServer: () => {
    const gitHubServer = "https://damianpumar.github.io";
    const ownServer = "https://damianpumar.com";
    return window.location.href.includes("github") ? ownServer : gitHubServer;
  },
  loadTooltips: () => {
    $('.tooltip').each(function (index, element) {
      $(this).tooltipster({
        fixedWidth: 300,
        offsetX: 0,
        animation: "grow",
        delay: 50
      });

    });
  }
};
