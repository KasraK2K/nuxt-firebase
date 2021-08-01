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
            "key=AAAAwqqOtM8:AAAAwqqOtM8:APA91bHyy1hvs4jKmbbMz5SPzWVf-OnAuRmljfr2ZELI9UWUsVAMyKBhvVwKFZS8FM68lI8pBlYaQYvdKZ9QDTQjM8YGG5oq9PqUM021NpChPWP64yLC_cM36KtiYpE9TUhGPM8iiyMD"
        },
        data
      };

      const response = await this.$axios(config);

      this.$fire.messaging.onMessage(payload => {
        console.info("Message received: ", payload);
      });

      this.$fire.messaging.onTokenRefresh(async () => {
        const refreshToken = await this.$fire.messaging.getToken();
        console.log("Token Refreshed", refreshToken);
      });
    }
  }
};
</script>
