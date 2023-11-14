function previewImage(event) {
    const upload = EventTarget;
    const previewImage = document.getElementById('preview');

    if (fileInput.files && fileInput.files[0]){
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;

        };
        reader.readAsDataURL(fileinput.files[0]);

    }
}

const grid = document.querySelector('.grid');

const imgs = [
    { src: 'W', alt:: 'Image 1'},
    { src: 'img2.jpg', alt:: 'Image 2'},
    { src: 'img3.jpg', alt:: 'Image 3'}

];

imgs.forEach(img => {
    const imgEL = document.createElement('img');
    imgEL.src = img.src;
    imgEL.alt = img.alt;

    grid.appendChild(imgEL);
})

var elements = document.getElementsByClassName("column");

var i;

function one() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].computedStyleMap.flex="50%";
  }    
}



