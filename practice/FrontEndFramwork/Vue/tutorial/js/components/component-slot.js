new Vue({
    el: "#for-slot",
    data: {

    },
    components: {
        child: {
            template: '\
                    <div class= "child">\
                        <slot text="child"></slot>\
                        <slot></slot>\
                    </div>\
        ',
            data: function () {
                return {
                    someChildProperty: true
                }
            }
        },
        alert: {
            template: '\
            <div :class= "alertClasses" v-show="show">\
            <slot><strong> Default!</strong> Hello World~</slot>\
            <button class="Alert__close" @click="show = false"> x</button>\
            </div>',
            props: ['type'],
            computed: {
                alertClasses: function () {
                    return {
                        'Alert--Success': this.type === 'success',
                        'Alert--Warning': this.type === 'warning',
                        'Alert--Error': this.type === 'error'
                    }
                }
            },
            data: function () {
                return {
                    show: true
                };
            }

        }
    }
})