import { s as spotService, a as spotStore } from "../../../../chunks/spot-service.js";
import { r as redirect } from "../../../../chunks/index.js";
import { c as cloudinary_name, a as cloudinary_key, b as cloudinary_secret, d as cloudinary_preset } from "../../../../chunks/private.js";
import { v2 } from "cloudinary";
const ssr = false;
let id;
let spot;
let index;
const credentials = {
  cloud_name: cloudinary_name,
  api_key: cloudinary_key,
  api_secret: cloudinary_secret
};
v2.config(credentials);
let weatherTrends;
const load = async ({ cookies, params }) => {
  const cookieStr = cookies.get("spot-user");
  if (cookieStr) {
    id = encodeURI(params.id);
    spot = await spotService.getSpotById(id);
    let data;
    if (spot) {
      const lat = spot.latitude;
      const long = spot.longitude;
      const apiKey = "0c109ad6bb8a0b5d8a284ce6061f12c6";
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=` + lat + `&lon=` + long + `&appid=` + apiKey;
      const search = await fetch(url);
      data = await search.json();
      let trends = {
        tempTrend: [],
        trendLabels: []
      };
      for (let i = 0; i < data.list.length; i += 1) {
        let tempTrend = (data.list[i].main.temp - 273.15).toFixed(1);
        if (tempTrend)
          trends.tempTrend.push(tempTrend);
        const date = data.list[i].dt_txt;
        trends.trendLabels.push(`${date}`);
      }
      weatherTrends = trends;
    }
    return {
      spot,
      weatherTrends,
      cloudinary_name,
      cloudinary_preset,
      cloudinary_key,
      cloudinary_secret
    };
  }
};
const actions = {
  uploadImage: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user");
    if (cookieStr) {
      const form = await request.formData();
      const originalSpot = await spotStore.getSpotById(id);
      let newSpot;
      if (originalSpot) {
        newSpot = originalSpot;
        let imageURL = form.get("returnedURL");
        if (imageURL && newSpot.img)
          newSpot.img.unshift(imageURL);
        else
          console.log("No image URL found");
        if (originalSpot && imageURL)
          spotService.editSpot(originalSpot, newSpot);
        else
          console.log("Spot not updated with the new image's URL");
      }
      redirect(301, "/report");
    }
  },
  deleteImage: async ({ request, cookies }) => {
    const cookieStr = cookies.get("spot-user");
    if (cookieStr) {
      const form = await request.formData();
      const deleteImageURL = form.get("deleteImageId");
      const deleteImageId = deleteImageURL.substring(62, 82);
      await v2.uploader.destroy(deleteImageId).then((result) => console.log("Result of deletion of image " + deleteImageId + " from Cloudinary: " + JSON.stringify(result)));
      let newSpot;
      if (spot) {
        newSpot = spot;
        if (newSpot.img) {
          index = newSpot.img.indexOf(deleteImageURL);
          newSpot.img.splice(index, 1);
          console.log("Deleted image " + deleteImageId + " from spot: " + newSpot.name);
        } else
          console.log("Image " + deleteImageId + " not deleted from spot: " + newSpot.name);
        spotService.editSpot(spot, newSpot);
      }
      redirect(301, "/report");
    }
  }
};
export {
  actions,
  load,
  ssr
};
