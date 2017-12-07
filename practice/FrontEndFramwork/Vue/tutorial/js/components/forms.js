var forms = new Vue({
    el: "#for-forms",
    data: function () {
        return {
            message: {
                normal:""
            },
            checked: false,
            picked: "",
            checkedNames: [],
            selected: "A",
            selectedArray: [],
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            ctg: {
                value: "",
                vt: "真",
                vf: "假"
            }
        }
    },
    methods: {
    },
    watch: {
        "ctg.value": function () {
            alert(this.ctg.value + "\n值的改变是在页面渲染完成之前");
        }
    }

});