export const loader = {
  initialize: () => {
    loader.show();

    $(window).load(function () {
      loader.hide();
    });
  },

  show: () => {
    NProgress.start();
  },

  hide: () => {
    NProgress.done();
  }
};
