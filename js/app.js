var App = new Vue({
    el: "#app",
    data: {
        contador: 0,
    },
    methods: {
        sumarContador() {
            this.contador += 1;
        },
        restarContador() {
            this.contador -= 1;
        }
    },
});
