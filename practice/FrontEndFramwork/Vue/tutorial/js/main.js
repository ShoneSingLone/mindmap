
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    props: [
        'item'
    ],
    template: '<li>{{ item.text }}</li>'
})

var app = new Vue({
    el: "#app",
    // template: '<li>{{ message }}</li>',
    data: function () {
        return {
            message: '声明式渲染',
            messageTitle: "创建时间：" + new Date().toLocaleString(),
            seen: true,
            toggleText: "hidden",
            todoItem: "",
            todos: [{
                text: '学习 JavaScript'
            }, {
                text: '学习 Vue'
            }, {
                text: '整个牛项目'
            }],
            preFix: "Shone",
            suffix: "Lone",
            question: '',
            answer: "I cannot give you an answer until you ask a question!",
            imgSrc: '',
            imgStyleWidth: '20%',
            loginType: 'username',
            counter: 0
        };
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        },
        fullName: {
            // getter
            get: function () {
                return this.preFix + ' Sing ' + this.suffix;
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.preFix = names[0]
                this.suffix = names[names.length - 1]
            }
        }
    },
    methods: {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...';
                this.imgSrc = '';
                var vm = this //
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer);
                        vm.imgSrc = _.capitalize(response.data.image);
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            },
            // 这是我们为判定用户停止输入等待的毫秒数
            1000
        ),
        toggleSeen: function () {
            this.$data.seen = !this.$data.seen;
            this.$data.toggleText = this.$data.seen ? "hidden" : "show";
            this.message = this.message.split('').reverse().join('');
        },
        toggleLoginType: function () {
            this.$data.loginType = this.$data.loginType ? "" : "username";
        },
        addToList: function () {
            if (this.todoItem) {
                this.todos.push({
                    text: this.todoItem
                });
                this.todoItem = "";
            }
        },
        removeFromList: function () {
            var item = this.todos.pop();
            this.todoItem = (item && item.text);
        }
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    }
})


app.$watch("message", (newVal, oldVal) => {
    console.log(newVal + "\n" + oldVal);
})
