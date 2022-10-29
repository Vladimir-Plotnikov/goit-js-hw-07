import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const gMarkUp = createMarkUp(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', gMarkUp)

galleryContainer.addEventListener('click', onPictureClick);

function createMarkUp(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
        .join('');
}

function onPictureClick(evt) {
    evt.preventDefault();
    const picSpace = evt.target.classList.contains('gallery__image')
    if (!picSpace) {
     return;   
    } 
    const instance = basicLightbox.create(`<img src='${evt.target.dataset.source}'>`)

    instance.show()
}   

console.log(galleryItems);
