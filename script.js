// creates pic links and array
const img = document.getElementById('pic');
const pic1 = '/Users/alex/repos/bellsandwhistlespractice/sadie_imgs/IMG_0389.JPG';
const pic2 = '/Users/alex/repos/bellsandwhistlespractice/sadie_imgs/IMG_0394.JPG';
const pic3 = '/Users/alex/repos/bellsandwhistlespractice/sadie_imgs/IMG_0397.JPG';
const pic4 = '/Users/alex/repos/bellsandwhistlespractice/sadie_imgs/IMG_0403.JPG';
const pic5 = '/Users/alex/repos/bellsandwhistlespractice/sadie_imgs/IMG_0796.JPG';
const pic6 = '/Users/alex/repos/bellsandwhistlespractice/sadie_imgs/IMG_1268.JPG';
let picArray = [pic1, pic2, pic3, pic4, pic5, pic6];
let currentIndex = 0;

function oneBack() {
  if (currentIndex > 0) {
    let newIndex = currentIndex - 1;
    let newPic = picArray[newIndex];
    img.src = newPic;
    currentIndex = newIndex;
  } else if (currentIndex === 0) {
    img.src = pic6;
    currentIndex = 5;
  }
}

function oneForward() {
  console.log('button pressed');
  console.log(currentIndex);
  if (currentIndex < 5) {
    console.log('enters if');
    let newIndex = currentIndex + 1;
    let newPic = picArray[newIndex];
    img.src = newPic;
    currentIndex = newIndex;
  } else if (currentIndex === 5) {
    console.log('enters else');
    console.log(pic6);
    img.src = pic1;
    currentIndex = 0;
    console.log(img.src);
  }
}

//add little tiny buttons that select arrayindex and then darken when clicked
