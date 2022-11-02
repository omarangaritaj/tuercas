let data = {
  tM3   : [555.8900, -0.1797],
  tM4   : [702.8015, -0.1941],
  tM5   : [850.2201, -0.2168],
  tM6   : [651.4340, -0.1704],
  tM8   : [810.8217, -0.1420],
  tM10  : [1453.5100, -0.1572],
  tM12  : [1200, 0],
  t316  : [0, -0.211],
  t14   : [817, -0.2124],
  t516  : [1094.6329, -0.1407],
  t38   : [1004.1147, -0.0801],
  sstM3 : [700.8227, -0.0356],
  sstM4 : [617.6618, -0.0356],
  sstM5 : [668.1830, -0.0356],
  sstM6 : [754.5579, -0.0356],
  sstM8 : [1002.2745, -0.0356],
  maximo: 10000
}

const app = Vue.createApp({
  data() {
    return {
      m3    : '',
      m4    : '',
      m5    : '',
      m6    : '',
      m8    : '',
      m10   : '',
      m12   : '',
      unc316: '',
      unc14 : '',
      unc516: '',
      unc38 : '',
      mas100: false,
      ssm3  : '',
      ssm4  : '',
      ssm5  : '',
      ssm6  : '',
      ssm8  : '',
    }
  },
  methods : {
    rango(canTuerca, coef) {
      if(canTuerca <= 0) return 0
      if(canTuerca >= data.maximo) return 'Consultar'

      return Math.floor(coef[ 0 ] * ( canTuerca ** coef[ 1 ] )) * canTuerca
    }
  },
  computed: {
    total  : function(e) {
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
        this.rango(Math.ceil(this.unc38), data.t38) +
        this.rango(Math.ceil(this.ssm3), data.sstM3) +
        this.rango(Math.ceil(this.ssm4), data.sstM4) +
        this.rango(Math.ceil(this.ssm5), data.sstM5) +
        this.rango(Math.ceil(this.ssm6), data.sstM6) +
        this.rango(Math.ceil(this.ssm8), data.sstM8)
    },
    subM3  : function(e) {
      return this.rango(Math.ceil(this.m3), data.tM3)
    },
    subM4  : function(e) {
      return this.rango(Math.ceil(this.m4), data.tM4)
    },
    subM5  : function(e) {
      return this.rango(Math.ceil(this.m5), data.tM5)
    },
    subM6  : function(e) {
      return this.rango(Math.ceil(this.m6), data.tM6)
    },
    subM8  : function(e) {
      return this.rango(Math.ceil(this.m8), data.tM8)
    },
    subM10 : function(e) {
      return this.rango(Math.ceil(this.m10), data.tM10)
    },
    subM12 : function(e) {
      return this.rango(Math.ceil(this.m12), data.tM12)
    },
    sub316 : function(e) {
      return this.rango(Math.ceil(this.unc316), data.t316)
    },
    sub14  : function(e) {
      return this.rango(Math.ceil(this.unc14), data.t14)
    },
    sub516 : function(e) {
      return this.rango(Math.ceil(this.unc516), data.t516)
    },
    sub38  : function(e) {
      return this.rango(Math.ceil(this.unc38), data.t38)
    },
    ssSubM3: function(e) {
      return this.rango(Math.ceil(this.ssm3), data.sstM3)
    },
    ssSubM4: function(e) {
      return this.rango(Math.ceil(this.ssm4), data.sstM4)
    },
    ssSubM5: function(e) {
      return this.rango(Math.ceil(this.ssm5), data.sstM5)
    },
    ssSubM6: function(e) {
      return this.rango(Math.ceil(this.ssm6), data.sstM6)
    },
    ssSubM8: function(e) {
      return this.rango(Math.ceil(this.ssm8), data.sstM8)
    },
  }
})

app.mount('#app')
