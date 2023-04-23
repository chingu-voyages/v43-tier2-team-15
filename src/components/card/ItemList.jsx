const products = [
  {
    id: 1,
    name: "The Promised Neverland Manga. Volume 1",
    price: "10 euro",
    imageUrl: "images/product1.png",
  },

  {
    id: 2,
    name: "Ruoruo Tanjiro Kamado Demon Slayer Anime Figure",
    price: "35 euro",
    imageUrl: "images/product2.png",
  },

  {
    id: 3,
    name: "Figure Naruto Konan Akatsuki Ninjutsu",
    price: "65 euro",
    imageUrl: "images/product3.png",
  },

  {
    id: 4,
    name: "Furyu Cardcaptor Sakura Cute Frog Outfit Figure",
    price: "50 euro",
    imageUrl: "images/product4.png",
  },

  {
    id: 5,
    name: "Attack On Titan Levi·Ackerman Nendoroid Figure",
    price: "25 euro",
    imageUrl: "images/product5.png",
  },

  {
    id: 6,
    name: "Taito Re: Zero -Starting Life in Another World-: Rem Precious Figure",
    price: "25 euro",
    imageUrl: "images/product6.png",
  },

  {
    id: 7,
    name: "Kozume Kenma Action Figure Collection",
    price: "20 euro",
    imageUrl: "images/product7.png",
  },

  {
    id: 8,
    name: "Taito Hatsune Miku Figure Japan",
    price: "40 euro",
    imageUrl: "images/product8.png",
  },

  {
    id: 9,
    name: "Attack On Titan Artfx J Levi Ackerman Action Figure",
    price: "60 euro",
    imageUrl: "images/product9.png",
  },

  {
    id: 10,
    name: "Anime Tokyo Ghoul Kaneki Ken Action Figure",
    price: "25  euro",
    imageUrl: "images/product10.png",
  },

  {
    id: 11,
    name: "Darling in The FRANXX National Team Zero Two 02",
    price: "80 euro",
    imageUrl: "images/product11.png",
  },

  {
    id: 12,
    name: "Spirited Away No Face Stuffed Plush",
    price: "16 euro",
    imageUrl: "images/product12.png",
  },

  {
    id: 13,
    name: "Taito Hatsune Miku Figure Costumes China Dress Ver.",
    price: "40 euro",
    imageUrl: "images/product13.png",
  },

  {
    id: 14,
    name: "Kotobukiya My Teen Romantic Comedy Snafu",
    price: "70 euro",
    imageUrl: "images/product14.png",
  },

  {
    id: 15,
    name: "Re:Zero Rem~Room wear ver~, Multiple Colors",
    price: "46 euro",
    imageUrl: "images/product15.png",
  },

  {
    id: 16,
    name: "Skwenp Anime Statue Tokyo Ghouls Series",
    price: "65 euro",
    imageUrl: "images/product16.png",
  },

  {
    id: 17,
    name: "Anime Figure Kakegurui Jabami Yumeko",
    price: "30 euro",
    imageUrl: "images/product17.png",
  },

  {
    id: 18,
    name: "TAMASHII NATIONS Figuartszero King of Snipers Usopp Onepiece",
    price: "50 euro",
    imageUrl: "images/product18.png",
  },

  {
    id: 19,
    name: "Kotobukiya My Teen Romantic Comedy Snafu Yukino",
    price: "90 euro",
    imageUrl: "images/product19.png",
  },

  {
    id: 20,
    name: "No information",
    price: "0 euro",
    imageUrl: "images/no__image.png",
  },
];

export default function GetItem(id) {
  var items = products.filter((item) => item.id == id);

  return items[0];
}
