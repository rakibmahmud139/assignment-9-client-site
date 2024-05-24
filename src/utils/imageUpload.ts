const image_hosting = process.env.VITE_img_upload_token;

const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

export const imageUpload = async (image: FileList) => {
  const formData = new FormData();
  formData.append("image", image[0]);
  let imgUrl;
  await fetch(img_hosting_url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgRes) => {
      if (imgRes.success) {
        imgUrl = imgRes.data.display_url;
      } else {
        console.log("image not uploaded");
      }
    });

  return imgUrl;
};
