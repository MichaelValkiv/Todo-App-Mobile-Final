let app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        const push = PushNotification.init({
            android: {
            },
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            },
            windows: {}
        });

        push.on('registration', (data) => {
            // data.registrationId
            console.log(data.registrationId);
        });

        push.on('notification', (data) => {
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
            alert("Title:" + data.title + " Message:" + data.message);
        });

        push.on('error', (e) => {
            // e.message
            console.log(e.message);
        });
    },
};

app.initialize();