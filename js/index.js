var app = new Vue({

            el: '#app',

            data: {
                num: [],
                op: ['<i class="fas fa-plus"></i>', '<i class="fas fa-minus"></i>', '<i class="fas fa-times"></i>', '<i class="fas fa-divide"></i>']
                },

                computed: {
                    sortingArr: function () {
                        for (let i = 9; i >= 1; i--) {

                            this.num.push(i);

                        }
                    },
                }

            });

        app.sortingArr;