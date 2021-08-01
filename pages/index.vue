<template>
  <!-- <Tutorial /> -->
  <button @click="sendMessage">Send Message</button>
</template>

<script>
export default {
  methods: {
    async sendMessage() {
      const currentToken = await this.$fire.messaging.getToken();

      console.log(currentToken);

      const data = JSON.stringify({
        notification: {
          title: "firebase title",
          body: "firebase is awesome body",
          click_action: "http://localhost:3000",
          icon: "http://localhost:3000/assets/images/brand-logo.png"
        },
        to: currentToken
      });
      const config = {
        method: "post",
        url: "https://fcm.googleapis.com/fcm/send",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "key=AAAAzjlybrU:APA91bEo7U7qMd6US6kUUwnU2sod80Ko1WdULycBe4QkUaDNzCTIqT0lm8_iDzEoIFVies2nJNTGuC13GCTzaPFOtUuAgjPZyku_iR1hd9d_FQeIwDzDmtcIuQ196AodJkH2oE92dAIN"
        },
        data
      };

      const response = await this.$axios(config);

      this.$fire.messaging.onMessage(payload => {
        alert("onMessage");
        console.info("Message received: ", payload);
      });

      this.$fire.messaging.onTokenRefresh(async () => {
        alert("onTokenRefresh");
        const refreshToken = await this.$fire.messaging.getToken();
        console.log("Token Refreshed", refreshToken);
      });
    }
  }
};
</script>
