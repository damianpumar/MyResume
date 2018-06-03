export const loader = {

    show: () => {
        NProgress.start();
    },

    hide: () => {
        NProgress.done();
    }
}