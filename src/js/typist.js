export const typist = {
  initialize: () => {
    $(window).load(function() {
      var typist = document.querySelector("#typist-element");

      new Typist(typist, {
        letterInterval: 60,
        textInterval: 3000
      });
    });
  }
};
