var forms = new Vue({
    el: "#for-forms",
    data: function () {
        return {
            message: "",
            checked: false,
            picked: "",
            checkedNames: [],
            selected: "A",
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    },
    methods: {
    }
});