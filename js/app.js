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
const app = Vue.createApp(App).mount('#app');

const App1 = {
	data(){
		return {
			comment:true,
			times:false,
			icons:false
		}
	},
	methods: {
		show: function () {
			this.comment = false;
			this.times = true;
			this.icons = true;
		},
		hide: function() {
			this.comment = true;
			this.times = false;
			this.icons = false;
		}
	}
}
const app1 = Vue.createApp(App1).mount("#app1");