function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let slide = document.querySelector('.slider-slide');

let currentImageIndex = 0;

let images = [
    'assets/heros/forsiden.jpg',
    'assets/heros/silder-one.jpg',
    'assets/heros/slider-two.jpg'
];

console.log(images);

const setActiveSlide = (index) => {
    slide.src = images[index];
    slide.alt = 'Product index ' + index;
}

setActiveSlide(currentImageIndex);

const next = () => {
    if (currentImageIndex >= images.length -1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    setActiveSlide(currentImageIndex);
}
setInterval(next, 3554);

// Opret et array med produktdata
const products = [
  {
    imgSrc: "assets/products/product1.jpg",
    productName: "Tiny Republic Play",
    productCategory: "Tandlægesæt i træ",
    productPrice: "849 kr"
  },
  {
    imgSrc: "assets/products/product2.jpg",
    productName: "Kids Concept",
    productCategory: "Edvin gåvogn",
    productPrice: "499 kr"
  },
  {
    imgSrc: "assets/products/product3.jpg",
    productName: "Vilac",
    productCategory: "Fire på stribe spil",
    productPrice: "69 kr"
  },
  {
    imgSrc: "assets/products/product4.jpg",
    productName: "Tiny Republic Play",
    productCategory: "Isbod i træ",
    productPrice: "259 kr"
  }
];

// Hent produkt-containeren
const productContainer = document.getElementById("product-container");

// Gennemgå hvert produkt og opret HTML-elementer
products.forEach(product => {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";

  const img = document.createElement("img");
  img.src = product.imgSrc;
  img.alt = "";

  const textOverlay = document.createElement("div");
  textOverlay.className = "text-overlay";

  const productName = document.createElement("span");
  productName.className = "product-name";
  productName.textContent = product.productName;

  const productCategory = document.createElement("p");
  productCategory.className = "product-category";
  productCategory.textContent = product.productCategory;

  const productPrice = document.createElement("span");
  productPrice.className = "product-price";
  productPrice.textContent = product.productPrice;

  // Saml elementerne
  textOverlay.appendChild(productName);
  textOverlay.appendChild(productCategory);
  textOverlay.appendChild(productPrice);

  gridItem.appendChild(img);
  gridItem.appendChild(textOverlay);

  productContainer.appendChild(gridItem);
});

// Opret et array med testimonial-data
const testimonials = [
  {
    text: "Pakken kom dagen efter jeg bestilte. Der blev jeg positivt overrasket, der står på deres hjemmeside at leveringstiden er 2-4 hverdage. Og min lille Hugo elsker sin nye træhest.",
    author: "Heidi, mor til Hugo på 3 år"
  },
  {
    text: "Efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg ikke længere problemer med at købe de perfekte julegaver. Tak til Legekrogen. Og Lars",
    author: "Karsten Hansen, Morfar"
  },
  {
    text: "Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede Legekrogens kundeservice, var de meget hurtige til at sende mig den rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget lækkert",
    author: "Omar, onkel til Anton på 11 år"
  }
];

// Hent testimonial-containeren
const testimonialContainer = document.getElementById("testimonial-container");

// Gennemgå hvert testimonial og opret HTML-elementer
testimonials.forEach(testimonial => {
  const testimonialCard = document.createElement("div");
  testimonialCard.className = "testimonial-card";

  const testimonialText = document.createElement("p");
  testimonialText.textContent = `"${testimonial.text}"`;

  const authorText = document.createElement("span");
  authorText.className = "funny-text";
  authorText.textContent = ` - ${testimonial.author}`;

  // Saml elementerne
  testimonialCard.appendChild(testimonialText);
  testimonialCard.appendChild(authorText);

  testimonialContainer.appendChild(testimonialCard);
});
