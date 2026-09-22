import dogFoodImg from '../assets/dogfood.webp';
import catFoodImg from '../assets/catfood.jpg';
import squeakyBoneImg from '../assets/squeakybone.jpg';
import featherWandImg from '../assets/featherwand.webp';
import dogBedImg from '../assets/dogbed.jpg';
import catTreeImg from '../assets/cattree.jpg';
import dogLeashImg from '../assets/reatractabledogleash.webp';
import litterBoxImg from '../assets/selfcleaninglitterbox.webp';
import dogShampooImg from '../assets/dogshampoo.jpg';
import catBrushImg from '../assets/catbrush.jpg';
import dogTreatsImg from '../assets/dogtreatsbiscuits.jpg';
import catnipMiceImg from '../assets/catnipmice.jpg';

export const products = [
  {
    id: 1,
    name: "Premium Dog Food (Chicken)",
    price: 850,
    category: "Dog Food",
    pet: "dog",
    shortDescription: "High-protein chicken formula for adult dogs.",
    fullDescription:
      "Premium chicken-based dog food made with real deboned chicken as the first ingredient. Packed with essential vitamins, minerals, and omega fatty acids to support your dog's overall health, shiny coat, and strong bones. Suitable for all adult dog breeds. 1kg pack.",
    image: dogFoodImg,
    stock: 25,
  },
  {
    id: 2,
    name: "Premium Cat Food (Salmon)",
    price: 720,
    category: "Cat Food",
    pet: "cat",
    shortDescription: "Salmon-flavored nutrition for indoor cats.",
    fullDescription:
      "Specially formulated salmon-based cat food for indoor cats. Contains taurine for heart health, fiber for digestion, and a blend of antioxidants to support your cat's immune system. Irresistible flavor cats love. 1kg pack.",
    image: catFoodImg,
    stock: 30,
  },
  {
    id: 3,
    name: "Squeaky Bone Toy",
    price: 250,
    category: "Dog Toys",
    pet: "dog",
    shortDescription: "Durable rubber bone with built-in squeaker.",
    fullDescription:
      "Keep your pup entertained for hours with this durable rubber squeaky bone. Made from non-toxic, BPA-free rubber that's gentle on teeth and gums. The built-in squeaker adds extra fun to fetch and chew time. Suitable for medium to large dogs.",
    image: squeakyBoneImg,
    stock: 40,
  },
  {
    id: 4,
    name: "Feather Wand Toy",
    price: 180,
    category: "Cat Toys",
    pet: "cat",
    shortDescription: "Interactive feather wand for playful cats.",
    fullDescription:
      "Engage your cat's natural hunting instincts with this interactive feather wand toy. Features colorful feathers and a bell on a flexible wire attached to a comfortable grip handle. Perfect for bonding time and keeping your cat active and healthy.",
    image: featherWandImg,
    stock: 35,
  },
  {
    id: 5,
    name: "Cozy Dog Bed (Large)",
    price: 1500,
    category: "Dog Accessories",
    pet: "dog",
    shortDescription: "Ultra-soft plush bed for large dog breeds.",
    fullDescription:
      "Give your furry friend the ultimate comfort with this ultra-soft plush dog bed. Features a raised rim for head and neck support, anti-slip bottom, and machine-washable cover. Measures 80cm x 60cm — perfect for Labradors, Golden Retrievers, and other large breeds.",
    image: dogBedImg,
    stock: 15,
  },
  {
    id: 6,
    name: "Cat Tree Tower",
    price: 2800,
    category: "Cat Accessories",
    pet: "cat",
    shortDescription: "Multi-level cat tree with scratching posts.",
    fullDescription:
      "A multi-level cat tree tower standing 120cm tall with 3 platforms, 2 cozy hideaways, sisal-wrapped scratching posts, and a dangling toy. Covered in soft plush fabric. Provides exercise, scratching, and lounging spots to keep your cat happy and your furniture safe.",
    image: catTreeImg,
    stock: 10,
  },
  {
    id: 7,
    name: "Retractable Dog Leash",
    price: 450,
    category: "Dog Accessories",
    pet: "dog",
    shortDescription: "5-meter retractable leash with ergonomic grip.",
    fullDescription:
      "Take walks to the next level with this 5-meter retractable dog leash. Features a one-button brake and lock system, ergonomic non-slip handle, and a durable nylon tape that supports dogs up to 30kg. Compact design with a reflective strip for nighttime visibility.",
    image: dogLeashImg,
    stock: 20,
  },
  {
    id: 8,
    name: "Self-Cleaning Litter Box",
    price: 3200,
    category: "Cat Accessories",
    pet: "cat",
    shortDescription: "Semi-automatic litter box with easy clean tray.",
    fullDescription:
      "Simplify litter duty with this semi-automatic self-cleaning litter box. Simply rotate the top chamber to sift clumps into the hidden waste drawer. No scooping required! Includes a carbon filter to minimize odors. Spacious interior suitable for cats up to 8kg.",
    image: litterBoxImg,
    stock: 8,
  },
  {
    id: 9,
    name: "Dog Shampoo (Oatmeal)",
    price: 320,
    category: "Dog Grooming",
    pet: "dog",
    shortDescription: "Gentle oatmeal shampoo for sensitive skin.",
    fullDescription:
      "A gentle, soap-free oatmeal shampoo formulated for dogs with sensitive or itchy skin. Infused with aloe vera and vitamin E to soothe, moisturize, and condition your dog's coat. Pleasant vanilla-oatmeal scent. pH-balanced for dogs. 500ml bottle.",
    image: dogShampooImg,
    stock: 28,
  },
  {
    id: 10,
    name: "Cat Brush (Deshedding)",
    price: 280,
    category: "Cat Grooming",
    pet: "cat",
    shortDescription: "Stainless steel deshedding tool for cats.",
    fullDescription:
      "Reduce shedding by up to 90% with this professional deshedding brush. Features a stainless steel edge that reaches through the topcoat to safely remove loose undercoat hair. Ergonomic handle with a fur-release button for easy cleaning. Suitable for all cat breeds.",
    image: catBrushImg,
    stock: 22,
  },
  {
    id: 11,
    name: "Dog Treat Biscuits",
    price: 180,
    category: "Dog Food",
    pet: "dog",
    shortDescription: "Crunchy peanut butter biscuits dogs love.",
    fullDescription:
      "Reward your good boy or girl with these delicious crunchy peanut butter biscuits. Made with natural ingredients — real peanut butter, whole wheat flour, and a touch of honey. No artificial preservatives or flavors. Perfect for training or just because! 250g pack.",
    image: dogTreatsImg,
    stock: 50,
  },
  {
    id: 12,
    name: "Catnip Mice (3-Pack)",
    price: 150,
    category: "Cat Toys",
    pet: "cat",
    shortDescription: "Set of 3 catnip-filled plush mice.",
    fullDescription:
      "Three adorable plush mice filled with premium, organically grown catnip. Each mouse features a crinkle body and a long tail for extra play appeal. Watch your cat bat, pounce, and carry these little mice around for hours of entertainment. Machine washable.",
    image: catnipMiceImg,
    stock: 45,
  },
];

export const getCategories = () => {
  const categories = [...new Set(products.map((p) => p.category))];
  return ["All", ...categories];
};


export const getPetTypes = () => {
  return ["All", "Dog", "Cat"];
};
