import imag1 from '../Assets/imag1.jfif';
// import images1 from '../Assets/images1.jfif';
import images2 from '../Assets/images2.jfif';
import images3 from '../Assets/images3.jfif';
import images4 from '../Assets/images4.jfif';
import images5 from '../Assets/images5.jfif';
import images6 from '../Assets/images6.jfif';
import images7 from '../Assets/images7.jfif';
import images8 from '../Assets/images8.jfif';
import images9 from '../Assets/images9.jfif';
import images10 from '../Assets/images10.jfif';
import images11 from '../Assets/images11.jfif';
import images12 from '../Assets/images12.jfif';
import images13 from '../Assets/images13.jfif';
import images14 from '../Assets/images14.jfif';
import images15 from '../Assets/images15.jfif';
import images16 from '../Assets/images16.jfif';
import images17 from '../Assets/images17.jfif';
import images18 from '../Assets/images18.jfif';
import images19 from '../Assets/images19.jfif';
import images20 from '../Assets/images20.jfif';
import images21 from '../Assets/images21.jfif';
import images22 from '../Assets/images22.jfif';
import images23 from '../Assets/images23.jfif';
import images24 from '../Assets/images24.jfif';
import images25 from '../Assets/images25.jfif';
import images26 from '../Assets/images26.jfif';
import images27 from '../Assets/images27.jfif';
import images28 from '../Assets/images28.jfif';
import images29 from '../Assets/images29.jfif';
import images30 from '../Assets/images30.jfif';


const All_products = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    category: "MEN",
    image: imag1,
    new_price: "999",
    old_price: "1499",
    description: "Smart and stylish casual shirt made from premium cotton. Perfect for any day out or casual office wear.",
    reviews: 80
  },
  {
    id: 2,
    name: "Men's Formal Shirt",
    category: "MEN",
    image:images2 ,
    new_price: "1199",
    old_price: "1699",
    description: "Elegant formal shirt crafted for business and formal occasions. Soft fabric with a sharp look.",
    reviews: 98
  },
  {
    id: 3,
    name: "Men's Jeans",
    category: "MEN",
    image:images3,
    new_price: "1399",
    old_price: "1999",
    description: "Durable and stylish jeans with a slim fit and a modern wash. A wardrobe essential for men.",
    reviews: 87
  },
  {
    id: 4,
    name: "Men's Running Shoes",
    category: "MEN",
    image: images4,
    new_price: "2499",
    old_price: "3199",
    description: "Comfortable and lightweight running shoes with breathable mesh. Ideal for workouts and casual wear.",
    reviews: 110
  },
  {
    id: 5,
    name: "Men's Leather Sandals",
    category: "MEN",
    image: images5,
    new_price: "899",
    old_price: "1299",
    description: "Classic leather sandals with a comfortable sole. Great for summer outings or relaxed weekends.",
    reviews: 76
  },
  {
    id: 6,
    name: "Women's Summer Dress",
    category: "WOMEN",
    image: images6,
    new_price: "1499",
    old_price: "2099",
    description: "Breezy and beautiful dress perfect for summer. Lightweight fabric with floral prints.",
    reviews: 132
  },
  {
    id: 7,
    name: "Women's Kurti",
    category: "WOMEN",
    image: images7,
    new_price: "899",
    old_price: "1299",
    description: "Elegant kurti with traditional design and comfortable fabric. Ideal for festive and daily wear.",
    reviews: 143
  },
  {
    id: 8,
    name: "Women's Jeans",
    category: "WOMEN",
    image: images8,
    new_price: "1299",
    old_price: "1799",
    description: "Stylish skinny-fit jeans for women. Stretchable and durable denim for all-day comfort.",
    reviews: 92
  },
  {
    id: 9,
    name: "Women's Sneakers",
    category: "WOMEN",
    image:images9,
    new_price: "2199",
    old_price: "2799",
    description: "Trendy and comfy sneakers with cushioned soles. Perfect for street style or casual wear.",
    reviews: 104
  },
  {
    id: 10,
    name: "Women's Sandals",
    category: "WOMEN",
    image: images10,
    new_price: "799",
    old_price: "1199",
    description: "Minimal and elegant flat sandals for everyday comfort and style.",
    reviews: 83
  },
  {
    id: 11,
    name: "Women's Heels",
    category: "WOMEN",
    image: images11,
    new_price: "1299",
    old_price: "1899",
    description: "Chic high heels with cushioned soles. Designed for style and comfort.",
    reviews: 117
  },
  {
    id: 12,
    name: "Girl's Party Dress",
    category: "WOMEN",
    image: images12,
    new_price: "999",
    old_price: "1399",
    description: "Adorable party dress for girls with glittery finish and soft inner lining.",
    reviews: 91
  },
  {
    id: 13,
    name: "Boy's T-Shirt",
    category: "KIDS",
    image:images13,
    new_price: "599",
    old_price: "899",
    description: "Cool and comfy cotton t-shirt for boys. Great for everyday wear.",
    reviews: 78
  },
  {
    id: 14,
    name: "Boy's Jeans",
    category: "KIDS",
    image:images14,
    new_price: "799",
    old_price: "1199",
    description: "Durable jeans with a snug fit for active boys.",
    reviews: 85
  },
  {
    id: 15,
    name: "Kid's Sports Shoes",
    category: "KIDS",
    image:images15,
    new_price: "1199",
    old_price: "1599",
    description: "Sporty shoes with strong grip and padded support for growing kids.",
    reviews: 95
  },
  {
    id: 16,
    name: "Kid's Casual Sandals",
    category: "KIDS",
    image: images16,
    new_price: "699",
    old_price: "999",
    description: "Breathable and comfy sandals for kids. Designed for daily play and fun.",
    reviews: 66
  },
  {
    id: 17,
    name: "Men's Hoodie",
    category: "MEN",
    image: images17,
    new_price: "1099",
    old_price: "1599",
    description: "Warm and cozy hoodie made with fleece fabric. Great for winter casual wear.",
    reviews: 102
  },
  {
    id: 18,
    name: "Women's Sweater",
    category: "WOMEN",
    image:images18,
    new_price: "1199",
    old_price: "1699",
    description: "Soft knitted sweater with classic design. Ideal for cool weather layering.",
    reviews: 109
  },
  {
    id: 19,
    name: "Boy's Hoodie",
    category: "KIDS",
    image: images19,
    new_price: "899",
    old_price: "1299",
    description: "Trendy and warm hoodie for boys with a playful print.",
    reviews: 89
  },
  {
    id: 20,
    name: "Girl's Frock",
    category: "KIDS",
    image:images20,
    new_price: "999",
    old_price: "1399",
    description: "Stylish frock with lace and embroidery. Suitable for special occasions.",
    reviews: 100
  },
  {
    id: 21,
    name: "Men's Formal Shoes",
    category: "MEN",
    image: images21,
    new_price: "2799",
    old_price: "3499",
    description: "Classic leather formal shoes with sleek design. Perfect for office or events.",
    reviews: 115
  },
  {
    id: 22,
    name: "Women's Ballet Flats",
    category: "WOMEN",
    image: images22,
    new_price: "999",
    old_price: "1499",
    description: "Graceful ballet flats with cushioned insoles. Suitable for both casual and formal outfits.",
    reviews: 87
  },
  {
    id: 23,
    name: "Kid's Light Up Shoes",
    category: "KIDS",
    image: images23,
    new_price: "1399",
    old_price: "1799",
    description: "Fun and flashy light-up shoes for kids. Comfortable and durable.",
    reviews: 124
  },
  {
    id: 24,
    name: "Women's Leggings",
    category: "WOMEN",
    image:  images24,
    new_price: "599",
    old_price: "899",
    description: "Stretchy and soft leggings for comfort and flexibility. Great for workouts or lounging.",
    reviews: 95
  },
  {
    id: 25,
    name: "Girl's Sandals",
    category: "KIDS",
    image:  images25,
    new_price: "699",
    old_price: "999",
    description: "Cute and colorful sandals for girls with adjustable straps.",
    reviews: 73
  },
  {
    id: 26,
    name: "Boy's School Shoes",
    category: "kIDS-shoes",
    image: images26,
    new_price: "999",
    old_price: "1399",
    description: "Strong school shoes for boys with slip-resistant sole.",
    reviews: 81
  },
  {
    id: 27,
    name: "Women's Ankle Boots",
    category: "WOMEN",
    image:  images27,
    new_price: "2399",
    old_price: "2999",
    description: "Fashion-forward ankle boots with solid heels. Must-have for winter styling.",
    reviews: 106
  },
  {
    id: 28,
    name: "Women's Crop Top",
    category: "WOMEN",
    image: images28,
    new_price: "799",
    old_price: "1199",
    description: "Trendy crop top with a snug fit and stretchable fabric. Ideal for casual wear.",
    reviews: 97
  },
  {
    id: 29,
    name: "Men's Blazer",
    category: "MEN",
    image:  images29,
    new_price: "30199",
    old_price: "41199",
    description: "Sharp-looking blazer for formal and semi-formal occasions. Tailored fit with style.",
    reviews: 112
  },
  {
    id: 30,
    name: "Girl's Ethnic Dress",
    category: "KIDS",
    image:  images30,
    new_price: "1299",
    old_price: "1799",
    description: "Beautiful ethnic dress for girls with vibrant prints and cultural elegance.",
    reviews: 108
  }
];

export default All_products;