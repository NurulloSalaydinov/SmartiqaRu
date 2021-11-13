const App = {
    data() {
        return {
            openM: true,
            closeM: false,
            modal: false
        }
    },
    methods: {
        openModal: function f() {
            this.openM = false;
            this.closeM = true;
            this.modal = true;
        },
        closeModal: function f() {
            this.openM = true;
            this.closeM = false;
            this.modal = false;
        },
    }
}
const app = Vue.createApp(App).mount('#app')