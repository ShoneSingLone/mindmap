// 注册
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
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
            parentMsg:""
        }
    },
    components: {
        "s-component": Child
    }
})

