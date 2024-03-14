import { Camera, CameraResultType, type Photo } from "@capacitor/camera";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
defineCustomElements(window);

const IMAGE_ID = "image-element";
const imageElement = document.getElementById(IMAGE_ID) as HTMLImageElement;

const takePicture = async () => {
  const photo = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
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

  console.log({ photo });
};

const TAKE_BUTTON_ID = "take-picture-button";
const takeButton = document.getElementById(TAKE_BUTTON_ID) as HTMLButtonElement;
takeButton.addEventListener("click", takePicture);

const sharePicture = async () => {
  await Filesystem.requestPermissions();

  // Share local file using url parameter
  const photo = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64,
  });
  if (!photo || !photo.base64String) {
    alert("No photo found");
    return;
  }
  const RECEIPT_NAME = "Receipt N:123.png";

  await Filesystem.writeFile({
    path: RECEIPT_NAME,
    data: photo.base64String,
    directory: Directory.Cache,
  });

  let fileResult = await Filesystem.getUri({
    directory: Directory.Cache,
    path: RECEIPT_NAME,
  });

  await Share.share({
    title: RECEIPT_NAME,
    text: RECEIPT_NAME,
    files: [fileResult.uri],
  });
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
