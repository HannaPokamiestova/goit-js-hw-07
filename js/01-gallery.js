import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".js-gallery");

function getGalleryItemHtml(sourse, src, alt) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${sourse}">
    <img
      class="gallery__image"
      src="${src}"
      data-source="${sourse}"
      alt="${alt}"
    />
  </a>
</li>`;
}

console.log(
  getGalleryItemHtml(
    galleryItems[0].original,
    galleryItems[0].preview,
    galleryItems[0].description
  )
);

const galleryItemsHTML = galleryItems
  .map((item) => {
    return getGalleryItemHtml(item.original, item.preview, item.description);
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryItemsHTML);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImgSrc = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${largeImgSrc}" width="800" height="600">
`);
  instance.show();
}
