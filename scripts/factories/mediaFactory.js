// imports
import { Image } from "../class/Image.js";
import { Video } from "../class/Video.js";

export function mediaFactory(mediaInfo, mediaList, photographerId) {

  // if image is strictly unequal to undefined
  if (mediaInfo.image) {
    // create new image
    return new Image(
      mediaInfo.title,
      mediaInfo.likes,
      mediaInfo.image,
      mediaInfo.video,
      mediaInfo.date,
      photographerId,
      mediaList
    );
  } 
    // create new video
  return new Video(
    mediaInfo.title,
    mediaInfo.likes,
    mediaInfo.image,
    mediaInfo.video,
    mediaInfo.date,
    photographerId,
    mediaList
  );
  
}
