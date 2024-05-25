const image_hosting = process.env.NEXT_PUBLIC_IMG_UPLOAD_TOKEN;

const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

export const imageUpload = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);
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
