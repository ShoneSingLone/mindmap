(() => {
    Vue.prototype.appState = Vue.observable({
        activities: [],
        activitiesError: [],
    })
    const socket = io(`ws://${window.location.host}`);
    const handleMsg = (prop, color) => msg => {
        Vue.prototype.appState[prop].push({
            timestamp: dayjs().format("HH:MM:ss"),
            content: msg,
            color,
        });
    }

    socket.on('msg', handleMsg('activities', '#0bbd87'));
    socket.on('msg-error', handleMsg('activitiesError', '#F44336'));

    window.app = new Vue({
        el: "#app",
        methods: {
            handleClick() {}
        },
    })
})();