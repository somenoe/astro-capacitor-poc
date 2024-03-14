import { Camera, CameraResultType, type Photo } from "@capacitor/camera";
import { Share } from "@capacitor/share";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
defineCustomElements(window);

const IMAGE_ID = "image-element";
const imageElement = document.getElementById(IMAGE_ID) as HTMLImageElement;
var photo: Photo;

const takePicture = async () => {
  photo = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri,
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = photo.webPath;

  if (imageUrl) {
    // Can be set to the src of an image now
    imageElement.src = imageUrl;
  }

  shareButton.classList.remove("hidden");
};

const TAKE_BUTTON_ID = "take-picture-button";
const takeButton = document.getElementById(TAKE_BUTTON_ID) as HTMLButtonElement;
takeButton.addEventListener("click", takePicture);

const sharePicture = async () => {
  try {
    await Share.share({
      files: [photo.path!],
    });
  } catch (error) {
    alert(error);
  }
};
const SHARE_BUTTON_ID = "share-picture-button";
const shareButton = document.getElementById(
  SHARE_BUTTON_ID
) as HTMLButtonElement;

shareButton.addEventListener("click", sharePicture);

const shareDemo = async () => {
  await Share.share({
    title: "See cool stuff",
    text: "Really awesome thing you need to see right meow",
    url: "http://ionicframework.com/",
    dialogTitle: "Share with buddies",
  });
};
const SHARE_DEMO_ID = "share-demo";
const shareDemoButton = document.getElementById(
  SHARE_DEMO_ID
) as HTMLButtonElement;
shareDemoButton.addEventListener("click", shareDemo);
