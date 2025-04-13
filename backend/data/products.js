// product.js

const products = [
  {
    name: "Pro Line Football Helmet",
    description:
      "High-performance NFL-style helmet designed for maximum protection and visibility. Features a reinforced polycarbonate shell, moisture-wicking padding, and adjustable chin straps.",
    price: 129.99,
    discountPrice: 109.99,
    countInStock: 15,
    sku: "NFL-HEL-001",
    category: "Helment",
    brand: "Gridiron Pro",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Silver"],
    collections: "Game Day Essentials",
    material: "Polycarbonate",
    gender: "Unisex",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1001",
        altText: "Pro Line Football Helmet Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=1002",
        altText: "Pro Line Football Helmet Side View",
      },
    ],
    rating: 4.9,
    numReviews: 18,
  },
  {
    name: "Elite Grip Football Gloves",
    description:
      "NFL-grade football gloves with sticky palm grip for enhanced catching ability. Breathable mesh and adjustable wrist strap provide comfort and fit.",
    price: 49.99,
    discountPrice: 39.99,
    countInStock: 30,
    sku: "NFL-GLV-002",
    category: "Gloves",
    brand: "Turf Titan",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Black"],
    collections: "Receiver Series",
    material: "Silicone Grip & Mesh",
    gender: "Unisex",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1003",
        altText: "Elite Grip Football Gloves Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=1004",
        altText: "Elite Grip Football Gloves Back View",
      },
    ],
    rating: 4.7,
    numReviews: 25,
  },
  {
    name: "Gridiron Cleats",
    description:
      "Durable cleats engineered for speed and traction on turf or grass. Lightweight synthetic upper with molded studs and ankle support.",
    price: 89.99,
    discountPrice: 74.99,
    countInStock: 20,
    sku: "NFL-CLT-003",
    category: "Boots",
    brand: "EndZone Gear",
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Navy"],
    collections: "Speed Series",
    material: "Synthetic",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1005",
        altText: "Gridiron Cleats Side View",
      },
      {
        url: "https://picsum.photos/500/500?random=1006",
        altText: "Gridiron Cleats Bottom View",
      },
    ],
    rating: 4.6,
    numReviews: 14,
  },
  {
    name: "Impact Pro Padded Boots",
    description:
      "Padded protective boots for NFL training, designed for durability and ankle protection. Reinforced toe cap and shock-absorbing soles included.",
    price: 99.99,
    discountPrice: 84.99,
    countInStock: 12,
    sku: "NFL-BTS-004",
    category: "Boots",
    brand: "ArmorPlay",
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Black", "Camo"],
    collections: "Training Gear",
    material: "Reinforced Leather",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1007",
        altText: "Impact Pro Padded Boots Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=1008",
        altText: "Impact Pro Padded Boots Side View",
      },
    ],
    rating: 4.8,
    numReviews: 11,
  },
  {
    name: "NFL Team Logo Cap",
    description:
      "Adjustable cap featuring embroidered NFL team logo. Made with breathable cotton for comfort during game days.",
    price: 24.99,
    discountPrice: 19.99,
    countInStock: 50,
    sku: "NFL-CAP-005",
    category: "Helmet",
    brand: "FanWear",
    sizes: ["One Size"],
    colors: ["Team Colors"],
    collections: "Fan Essentials",
    material: "Cotton",
    gender: "Unisex",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1009",
        altText: "NFL Team Logo Cap Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=1010",
        altText: "NFL Team Logo Cap Side View",
      },
    ],
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: "Sideline Performance Hoodie",
    description:
      "Official NFL sideline hoodie with moisture-wicking fabric and team logo. Designed for optimal comfort and style.",
    price: 74.99,
    discountPrice: 64.99,
    countInStock: 25,
    sku: "NFL-HDY-006",
    category: "Shoulders",
    brand: "Nike",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Black", "Team Colors"],
    collections: "Sideline Gear",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1011",
        altText: "Sideline Performance Hoodie Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=1012",
        altText: "Sideline Performance Hoodie Back View",
      },
    ],
    rating: 4.8,
    numReviews: 30,
  },
  {
    name: "NFL Team Jersey",
    description:
      "Authentic NFL team jersey with stitched name and number. Made for fans to show their support in style.",
    price: 119.99,
    discountPrice: 99.99,
    countInStock: 40,
    sku: "NFL-JRS-007",
    category: "Shoulders",
    brand: "Nike",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Black", "Team Colors"],
    collections: "Sideline Gear",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1011",
        altText: "Sideline Performance Hoodie Front View",
      },
      {
        url: "https://picsum.photos/500/500?random=1012",
        altText: "Sideline Performance Hoodie Back View",
      },
    ],
    rating: 4.8,
    numReviews: 30,
  }
]
 


module.exports = products;
