import {
  TAKE_BUTTON_ID,
  SHARE_BUTTON_ID,
  SHARE_DEMO_ID,
  IMAGE_ID,
} from "../ids";
import { Camera, CameraResultType, type Photo } from "@capacitor/camera";
import { Share } from "@capacitor/share";

const imageElement = document.getElementById(IMAGE_ID) as HTMLImageElement;
var photo: Photo;

const takePicture = async () => {
  photo = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri,
  });
  var imageUrl = photo.webPath;

  if (imageUrl) {
    imageElement.src = imageUrl;
  }
};
const takeButton = document.getElementById(TAKE_BUTTON_ID) as HTMLButtonElement;
takeButton.addEventListener("click", takePicture);

const sharePicture = async () => {
  try {
    if (!photo.path) {
      throw "Must take a photo first";
    }
    if (!(await Share.canShare())) {
      throw "Can't share on this device";
    }
    await Share.share({
      files: [photo.path!],
    });
  } catch (error) {
    alert(error);
  }
};
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
const shareDemoButton = document.getElementById(
  SHARE_DEMO_ID
) as HTMLButtonElement;
shareDemoButton.addEventListener("click", shareDemo);
