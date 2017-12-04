var vFwvI = new Vue({
    el: '#vFwvI',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

var vFo = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            numbers: [1, 2, 3, 4, 5],
            styleObj: {
                color: 'red'
            }
        },
        numbers: [1, 2, 3, 4, 5],
        styleObj: {
            color: 'red'
        }
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            })
        },
        otherNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 1;
            })
        }
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0;
            })
        }
    }

})

Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'myremove\')">X</button>\
    </li>\
  ',
    props: ['title']
})

var tLe = new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})