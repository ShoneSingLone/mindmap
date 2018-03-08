new Vue({
    el: '#for-transition',
    data: {
        show: true,
        msgs: ["v-enter 和 v-leave 都在只动画开始的时候出现一帧，然后被移除",
            " v-enter-to 和 v-leave-to 是目标样式 ，在v-enter 和 v-leave 被移除之后 紧接着添加，除了在active中 property的样式会过渡，其余样式会直接被展示 ",
            " v-enter-active 和 v-leave-active 单独拎出来 定义过渡的 property duration timing-function delay "
        ]
    }
})