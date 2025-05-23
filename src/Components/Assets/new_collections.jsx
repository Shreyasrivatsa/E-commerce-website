import tshirtImg from './white puffer jacket.jfif'; 
import image1 from './Beige Peplum Top.jfif';
import image2 from './Denim Jacket.jpg';
import image3 from './Black Leather Jacket.jfif';
import image4 from './Cotton Crew Neck T-shirt.jfif';
import image5 from './Hooded Bomber Jacket.jfif';
import image6 from './image6.jfif';
import image7 from './image7.jfif';



const products = [
  {
    id:201,
    name: "White Puffer Jacket",
    category: "Jacket",
    gender: "Men",
    new_price:1700,
    old_price: 2000,
    image:tshirtImg,
    description: "Stay cozy and stylish with this white puffer jacket, perfect for cold weather with its insulated      material and sleek design."
  },
  {
    id:202,
    name: "Beige Peplum Top",
    category: "Peplum Top",
    gender: "Women",
    new_price:700,
    old_price: 1100,
    image:image1,
    description: "Elegant and feminine beige peplum top that flatters your silhouette, ideal for casual or semi-formal wear."
  },
  {
    id:203,
    name: "Denim Jacket",
    category: "Jacket",
    gender: "Women",
    new_price:2100,
    old_price: 3100,
    image:image2,
    description: "Classic blue denim jacket with a modern fit, a wardrobe essential for layering and timeless street style."
 
  },
  {
    id:204,
    name: "Black Leather Jacket",
    //category: "Jacket",
    // gender: "Men",
    new_price:2599,
    old_price: 4000,
    image:image3,
    description: "Bold and edgy black leather jacket designed for a sleek, confident look. Ideal for making a fashion statement."
  },
  {
    id:205,
    name: "Cotton Crew Neck T-shirt",
    // category: "T-shirt",
    // gender: "Men",
    new_price:2700,
    old_price: 3000,
    image:image4,
    description: "Comfortable and breathable cotton crew neck t-shirt with a versatile fit, perfect for everyday wear."
  },
  {
    id:206,
    name: "Hooded Bomber Jacket",
    // category: "Jacket",
    // gender: "Men",
    new_price:1700,
    old_price: 2000,
    image:image5,
    description: "Trendy hooded bomber jacket with a sporty vibe, offering warmth and style for any casual occasion."
  
  },
  {
  id:207,
    name: "Boots",
    // category: "SHOES",
    // gender: "Women",
    new_price:2500,
    old_price: 3400,
    image:image6,
    description: "Durable and fashionable boots with a rugged sole and sleek design, suitable for urban and outdoor adventures."
 
  },
  {
    id:208,
      name: "Polo Neck White N Black T-shirt",
      // category: "T-shirt",
      // gender: "Women",
      new_price:899,
      old_price: 1499,
      image:image7,
      description: "Stylish polo neck t-shirt in a black and white combination, offering comfort and a touch of elegance."
  }
    
];
export default products;
