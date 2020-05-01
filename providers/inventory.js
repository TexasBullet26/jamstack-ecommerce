import uuid from 'uuid/v4'

let inventory = [
  {
    categories: ['new arrivals'],
    name: 'Timber Gray Sofa',
    price: '1000',
    image: '../images/products/couch1.png',
    description:
      'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.',
    brand: 'Jason Bourne',
    currentInventory: 4,
  },
  {
    categories: ['sofas', 'living room'],
    name: 'Carmel Brown Sofa',
    price: '1000',
    image: '../images/products/couch5.png',
    description:
      'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.',
    brand: 'Jason Bourne',
    currentInventory: 2,
  },
  {
    categories: ['new arrivals', 'sofas'],
    name: 'Mod Leather Sofa',
    price: '800',
    image: '../images/products/couch6.png',
    description:
      'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.',
    brand: 'Jason Bourne',
    currentInventory: 8,
  },
  {
    categories: ['new arrivals', 'sofas'],
    name: 'Thetis Gray Love Seat',
    price: '900',
    image: '../images/products/couch7.png',
    description:
      'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.',
    brand: 'Jason Bourne',
    currentInventory: 10,
  },
  {
    categories: ['on sale', 'sofas'],
    name: 'Sven Tan Matte',
    price: '1200',
    image: '../images/products/couch8.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 7,
  },
  {
    categories: ['on sale', 'sofas'],
    name: 'Otis Malt Sofa',
    price: '500',
    image: '../images/products/couch9.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 13,
  },
  {
    categories: ['on sale', 'sofas'],
    name: 'Ceni Brown 3 Seater',
    price: '650',
    image: '../images/products/couch10.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 9,
  },
  {
    categories: ['sofas', 'living room'],
    name: 'Jameson Jack Lounger',
    price: '1230',
    image: '../images/products/couch11.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 24,
  },

  {
    categories: ['sofas'],
    name: 'Galaxy Blue Sofa',
    price: '800',
    image: '../images/products/couch2.png',
    description:
      'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.',
    brand: 'Jason Bourne',
    currentInventory: 43,
  },
  {
    categories: ['new arrivals', 'sofas'],
    name: 'Markus Green Love Seat',
    price: '900',
    image: '../images/products/couch3.png',
    description:
      'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.',
    brand: 'Jason Bourne',
    currentInventory: 2,
  },
  {
    categories: ['on sale', 'sofas'],
    name: 'Dabit Matte Black',
    price: '1200',
    image: '../images/products/couch4.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    currentInventory: 14,
  },

  {
    categories: ['on sale', 'chairs'],
    name: 'Embrace Blue',
    price: '300',
    image: '../images/products/chair1.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 12,
  },
  {
    categories: ['on sale', 'chairs'],
    name: 'Nord Lounger',
    price: '825',
    image: '../images/products/chair2.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 13,
  },
  {
    categories: ['on sale', 'chairs'],
    name: 'Ceni Matte Oranve',
    price: '720',
    image: '../images/products/chair3.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 33,
  },
  {
    categories: ['on sale', 'chairs'],
    name: 'Abisko Green Recliner',
    price: '2000',
    image: '../images/products/chair4.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 23,
  },
  {
    categories: ['on sale', 'chairs'],
    name: 'Denim on Denim Single',
    price: '1100',
    image: '../images/products/chair5.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 13,
  },
  {
    categories: ['on sale', 'chairs'],
    name: 'Levo Tan Lounge Chair',
    price: '600',
    image: '../images/products/chair6.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 15,
  },

  {
    categories: ['on sale', 'chairs'],
    name: 'Anime Tint Recliner',
    price: '775',
    image: '../images/products/chair7.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 44,
  },
  {
    categories: ['on sale', 'chairs'],
    name: 'Josh Jones Red Chair',
    price: '1200',
    image: '../images/products/chair8.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 17,
  },
  {
    categories: ['on sale', 'chairs'],
    name: 'Black Sand Lounge',
    price: '1600',
    image: '../images/products/chair9.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 28,
  },
  {
    categories: ['on sale', 'chairs'],
    name: 'Mint Beige Workchair',
    price: '550',
    image: '../images/products/chair10.png',
    description:
      'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.',
    brand: 'Jason Bourne',
    currentInventory: 31,
  }, // {
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
