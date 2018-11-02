 mui.init();
console.log(axios)
      var app = new Vue({
        el: "#app",
        data: {
          list: []
        },
        methods: {
          getList: function() {
            axios.get('http://route.showapi.com/126-2', {
              params: {
                showapi_appid: 79187,
                showapi_sign: '5447 acab1e6a4239bb0be484f8e6fe23'
              }
            }).then(function(result) {
              console.log(result);
            })
          }
        },
        create: function() {
          this.getList();
        }

      })