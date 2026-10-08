// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/image01.jpg',
 alt: 'Childhood',
 caption: 'I have loved a great many times.'
},
{ src: 'images/kait01.jpg', 
 alt: 'Kaitlin', 
 caption: 'but you were my first.'
},
{ src: 'images/maddy01.jpg', 
 alt: 'Maddy' ,
 caption: 'We were young and convenient.'
},
{ src: 'images/sarah01.jpg',
alt: 'Sarah',
 caption: 'You didn\'t love me, but you made sure to keep me around.'
},
{ src: 'images/serenity01.jpg',
alt: 'Serenity',
caption: 'It wasn\'t until you that I learned how much love could hurt'
},
{ src: 'images/isis01.jpg',
 alt: 'Isis',
 caption: 'and you proved that love didn\'t have to be pleasant.'
},
{src: 'images/gabby01.jpg',
alt: 'Gabby',
caption: 'We weren\'t right for each other, but I\'ll always be in your life',
},
{ src: 'images/hailey01.jpg',
 alt: 'Hailey 1',
 caption: 'and you should have known better. I was too young.',
},
{ src: 'images/hailey02.jpg',
alt: 'Hailey 2',
 caption: 'I was still a child, but god, I loved you anyway. Whose fault is that?'
},
{ src: 'images/ingrid01.jpg',
alt: 'Ingrid',
 caption: 'You shattered my ability to love, and I\'ve never been the same.',
},
{ src: 'images/shallow.jpg',
alt: 'Kinzie',
caption: 'I learned to love in new ways. Shallower ways.'
},
{src: 'images/sydney01.jpg',
alt: 'Sydney',
caption: 'I also learned to fall apart in new ways. Some were my fault--',
},
{src: 'images/mckenna01.jpg',
alt: 'McKenna',
caption: '--some were not. Somehow, the most hostage I\'ve ever been held was the most loved I\'ve ever felt.',
},
{ src: 'images/dash01.jpg',
alt: 'Dash',
caption: 'You\'re long gone, but I think about you every day. My heart had never and will never ache as deeply as it did when I lost you.',
},
{ src: 'images/dash02.jpg',
alt: 'Dash 2',
caption: 'I loved before you and I\'ve loved after you, but even though you weren\'t my first love, I\'m starting to think you\'re my last.'
},
{src: 'images/avaALT.jpeg',
alt: 'Ava',
caption: 'I\'m capable of loving again, but I\'m sick of having to heal.'
},
{src: 'images/shadow01.jpg',
alt: 'Shadow',
caption: 'Some days I wonder if I\'m meant to walk alone.'
},
{src: 'images/shadow02.jpg',
alt: 'Shadows',
caption: 'but I know I\'ll keep loving, because in my life?'
}
];// JavaScript Document
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);