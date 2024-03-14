import { Camera, CameraResultType } from "@capacitor/camera";

const IMAGE_ID = "image-element";
const imageElement = document.getElementById(IMAGE_ID) as HTMLImageElement;

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.webPath;

  if (imageUrl) {
    // Can be set to the src of an image now
    imageElement.src = imageUrl;
  }
};

const BUTTON_ID = "take-picture-button";
const button = document.getElementById(BUTTON_ID) as HTMLButtonElement;
button.addEventListener("click", takePicture);
