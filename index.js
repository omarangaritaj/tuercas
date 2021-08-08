let data = {
    tM3: [939.56, -0.276],
    tM4: [767.7, -0.211],
    tM5: [896.74, -0.236],
    tM6: [600.76, -0.168],
    tM8: [1787.3, -0.23],
    tM10: [1508.9, -0.155],
    tM12: [0, 0],
    t316: [690.03, -0.211],
    t14: [985.16, -0.188],
    t516: [977.42, -0.116],
    t38: [1267.5, -0.133],
    maximo: 5000
}


new Vue({
    el: '#app',
    data: {
        m3: '',
        m4: '',
        m5: '',
        m6: '',
        m8: '',
        m10: '',
        m12: '',
        unc316: '',
        unc14: '',
        unc516: '',
        unc38: '',
        mas100: false
    },
    methods: {
        rango(canTuerca, coef) {
            if (canTuerca <= 0) {
                return 0;
            };
            if (canTuerca >= data.maximo) {
                return "Consultar";
            };

            if (canTuerca > 0 && canTuerca < data.maximo) {
                // return Math.floor(1018.9 * Math.pow(canTuerca, -0.288)) * canTuerca
                return Math.floor(coef[0] * (canTuerca ** coef[1])) * canTuerca
            };
        }
    },
    computed: {
        total: function(e) {
            var total = 0;
            return this.rango(Math.ceil(this.m3), data.tM3) +
                this.rango(Math.ceil(this.m4), data.tM4) +
                this.rango(Math.ceil(this.m5), data.tM5) +
                this.rango(Math.ceil(this.m6), data.tM6) +
                this.rango(Math.ceil(this.m8), data.tM8) +
                this.rango(Math.ceil(this.m10), data.tM10) +
                this.rango(Math.ceil(this.m12), data.tM12) +
                this.rango(Math.ceil(this.unc316), data.t316) +
                this.rango(Math.ceil(this.unc14), data.t14) +
                this.rango(Math.ceil(this.unc516), data.t516) +
                this.rango(Math.ceil(this.unc38), data.t38)
        },
        subM3: function(e) {
            return this.rango(Math.ceil(this.m3), data.tM3)
        },
        subM4: function(e) {
            return this.rango(Math.ceil(this.m4), data.tM4)
        },
        subM5: function(e) {
            return this.rango(Math.ceil(this.m5), data.tM5)
        },
        subM6: function(e) {
            return this.rango(Math.ceil(this.m6), data.tM6)
        },
        subM8: function(e) {
            return this.rango(Math.ceil(this.m8), data.tM8)
        },
        subM10: function(e) {
            return this.rango(Math.ceil(this.m10), data.tM10)
        },
        subM12: function(e) {
            return this.rango(Math.ceil(this.m10), data.tM12)
        },
        sub316: function(e) {
            return this.rango(Math.ceil(this.unc316), data.t316)
        },
        sub14: function(e) {
            return this.rango(Math.ceil(this.unc14), data.t14)
        },
        sub516: function(e) {
            return this.rango(Math.ceil(this.unc516), data.t516)
        },
        sub38: function(e) {
            return this.rango(Math.ceil(this.unc38), data.t38)
        }
    }
});
Vue.config.devtools = true
Vue.config.debug = true;