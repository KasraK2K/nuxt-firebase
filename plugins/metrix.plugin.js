import Vue from "vue";
import metrix from "./metrix.js";

export default (ctx, inject) => {
  const _metrix = metrix.initialize({
    appId: "fhyzzjpzreambrs",
    storeName: "JeansWest"
  });

  // _metrix.addUserAttributes({ manufacturer: "JeansWest" });

  inject("_metrix", _metrix);
};
