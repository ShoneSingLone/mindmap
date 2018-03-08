// 注册

Vue.component('currency-input', {
    template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
      >\
    </span>\
  ',
    props: ['value'],
    methods: {
        // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
        updateValue: function (value) {
            var formattedValue = value
                // 删除两侧的空格符
                .trim()
                // 保留 2 位小数
                .slice(
                    0,
                    value.indexOf('.') === -1 ?
                    value.length :
                    value.indexOf('.') + 3
                )
            // 如果值尚不合规，则手动覆盖为合规的值
            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }
            // 通过 input 事件带出数值
            this.$emit('input', Number(formattedValue))
        }
    }
})


Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})
Vue.component('child-total', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        };
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            this.$emit('something')
        }
    }
})
// 注册
Vue.component('child', {
    // 声明 props
    props: ['myMessage'],
    // 就像 data 一样，prop 也可以在模板中使用
    // 同样也可以在 vm 实例中通过 this.message 来使用
    template: '<span>{{ myMessage }}</span>'
})

var Child = {
    template: '<div>注意确保在初始化根实例之前注册组件</div>'
}

var fc = new Vue({
    el: '#for-component',
    data: function () {
        return {
            message: {
                normal: "normal message"
            },
            parentMsg: "",
            total: 0,
            price: 0
        }
    },
    methods: {
        increamentTotal: function () {
            this.total += 1;
        }
    },
    components: {
        "s-component": Child
    }
})