<template>
  <!-- <Tutorial /> -->
  <button @click="metrixEvent">Send Message</button>
</template>

<script>
export default {
  methods: {
    metrixEvent() {
      var attributes = {};
      attributes["first_name"] = "Kasra";
      attributes["last_name"] = "Karami";
      attributes["manufacturer"] = "JeansWest";

      this.$_metrix.sendEvent("xempb", attributes);
      this.$_metrix.sendRevenue("xempb", 12000, "IRR", "order id");
    },
    async sendMessage() {
      const currentToken = await this.$fire.messaging.getToken({
        vapidKey:
          "BB7sHR0uXrXXdb7hvNUk8yroT-YJCm9KoVhLVKxRcArMtL8AQDtZjsDyT-__WVc6AaqnObTbLtVJJoS78d_Czf4"
      });
      console.log(currentToken);

      /* -------------------------------------------------------------------------- */
      /*                                  Firestore                                 */
      /* -------------------------------------------------------------------------- */
      const db = this.$fire.firestore;
      const usersRef = db.collection("users");

      /** firestore single snapshot */
      // const userSnapshot = await usersRef.doc("lDSJKdKn4oUXw0Hc7kaj").get();
      // console.log("snapshot:", userSnapshot.data());

      /** firestore array snapshot */
      // const usersArraySnapshot = await usersRef
      //   .where("mobile", "==", "9183619290")
      //   .get();
      // usersArraySnapshot.forEach(doc => {
      //   console.log("arraySnapshot", doc.data());
      // });

      /** update */
      // await usersRef.doc("lDSJKdKn4oUXw0Hc7kaj").update({ role: "-2" });

      /** insert */
      // usersRef.add({
      //   firstName: "hasan",
      //   lastName: "hasani",
      //   mobile: "9123456789",
      //   token: "",
      //   created_at: new Date(),
      //   updated_at: new Date()
      // });

      /** upsert doc */
      // usersRef.doc("kasra").set({
      //   name: "hasan2",
      //   role: "2"
      // });

      /** delete one */
      // usersRef.doc("Z4ydJIU6FHGecX9cK5Wv").delete();

      /** delete all */
      // await usersRef
      //   .where("mobile", "==", "9123456789")
      //   .get()
      //   .then(users => {
      //     users.forEach(user => user.ref.delete());
      //   });

      /* -------------------------------------------------------------------------- */
      /*                                Cloud Message                               */
      /* -------------------------------------------------------------------------- */
      /** cloud message notification data */
      // const data = JSON.stringify({
      //   // topic: "matchday",
      //   notification: {
      //     name: "sample notif name",
      //     title: "firebase title",
      //     body: "firebase is awesome body",
      //     click_action: "http://localhost:3000/?action=kasra",
      //     icon: "http://localhost:3000/assets/images/brand-logo.png",
      //     actions: [
      //       {
      //         action: "kasraAction",
      //         title: "Go to Kasra URL"
      //       }
      //     ]
      //   },
      //   to: currentToken
      // });

      /** axios config to send cloud message */
      // const config = {
      //   method: "post",
      //   url: "https://fcm.googleapis.com/fcm/send",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization:
      //       "key=AAAAslA_pd0:APA91bHwEFx2N-eKzNs9aaI_sSADjMwN17iN-FFfiLDAmGdoxKflvtJMZv-JlB5L8El__miEQKIutJpNb24hUJ7id2FRG8XWVrwJg4NJOz793GzCz6unQqsDfwRS5azUxeJuNq0li4ZV"
      //   },
      //   data
      // };

      /** cloud messaging send message with user token */
      // const response = await this.$axios(config);

      /* -------------------------------------------------------------------------- */
      /*                                   Events                                   */
      /* -------------------------------------------------------------------------- */
      /** cloud messaging on message event */
      // this.$fire.messaging.onMessage(payload => {
      //   console.info("Message received: ", payload);
      // });

      /** firebase on token refresh event */
      // this.$fire.messaging.onTokenRefresh(async () => {
      //   const refreshToken = await this.$fire.messaging.getToken();
      //   console.log("Token Refreshed", refreshToken);
      // });
    }
  }
};
</script>
