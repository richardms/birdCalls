import _ from 'lodash'

export interface BirdInfo {
  name: string
  fullname?: string
  xc: number
  sample?: string
  icon?: string
  rspb_icon?: string
  latin?: string
}

export const birdList: BirdInfo[] = _.sortBy(
  [
    {
      name: 'Bittern',
      xc: 25558,
      fullname: 'Eurasian Bittern',
      latin: 'Botaurus stellaris',
      sample: 'https://www.xeno-canto.org/25558/download',
    },
    {
      name: 'Blue Tit',
      xc: 28208,
      latin: 'Cyanistes caeruleus',
      sample: 'https://www.xeno-canto.org/28208/download',
      rspb_icon: 'blue-tit_adult',
    },
    {
      name: 'Bullfinch',
      xc: 25564,
      icon:
        'https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/bird-species-illustrations/bullfinch_male_1200x675.jpg?preset=relatedcontent_desktop',
    },
    {
      name: 'Bearded tit',
      xc: 25560,
      fullname: 'Bearded Reedling',
      latin: 'Panurus biarmicus',
      rspb_icon: 'bearded-tit_male',
    },
    {
      name: 'Jay',
      xc: 25647,
      fullname: 'Eurasian Jay',
      latin: 'Garrulus glandarius',
    },
    {
      name: 'Kittiwake',
      fullname: 'Black-legged Kittiwake',
      latin: 'Rissa tridactyla',
      xc: 26685,
      rspb_icon: 'kittiwake_adult',
    },
    {
      name: 'Willow Warbler',
      fullname: 'Willow Warbler',
      latin: 'Phylloscopus trochilus',
      xc: 26756,
    },
    {
      name: 'Water Rail',
      fullname: 'Water Rail',
      latin: 'Rallus aquaticus',
      xc: 26925,
    },
    {
      name: 'Mistle Thrush',
      fullname: 'Mistle Thrush',
      latin: 'Turdus viscivorus',
      xc: 26978,
    },
    {
      name: 'Skylark',
      fullname: 'Eurasian Skylark',
      latin: 'Alauda arvensis',
      xc: 27004,
    },
    {
      name: 'Lapwing',
      fullname: 'Northern Lapwing',
      latin: 'Vanellus vanellus',
      xc: 27060,
    },
    {
      name: 'Wren',
      fullname: 'Eurasian Wren',
      latin: 'Troglodytes troglodytes',
      xc: 27114,
    },
    {
      name: 'Sedge Warbler',
      fullname: 'Sedge Warbler',
      latin: 'Acrocephalus schoenobaenus',
      xc: 27120,
    },
    {
      name: 'Reed Warbler',
      fullname: 'Eurasian Reed Warbler',
      latin: 'Acrocephalus scirpaceus',
      xc: 27122,
    },
    {
      name: 'Swift',
      fullname: 'Common Swift',
      latin: 'Apus apus',
      xc: 27236,
    },
    {
      name: 'Yellowhammer',
      fullname: 'Yellowhammer',
      latin: 'Emberiza citrinella',
      xc: 27577,
      rspb_icon: 'yellowhammer_male',
    },
    {
      name: 'Chaffinch',
      fullname: 'Common Chaffinch',
      latin: 'Fringilla coelebs',
      xc: 27602,
      rspb_icon: 'chaffinch_male',
    },
    {
      name: 'Long-tailed Tit',
      fullname: 'Long-tailed Tit',
      latin: 'Aegithalos caudatus caudatus',
      xc: 28192,
    },

    {
      name: 'Nightingale',
      fullname: 'Common Nightingale',
      latin: 'Luscinia megarhynchos',
      xc: 29724,
    },
    {
      name: 'Buzzard',
      fullname: 'Common Buzzard',
      latin: 'Buteo buteo',
      xc: 30950,
    },
    {
      name: 'Stock Dove',
      fullname: 'Stock Dove',
      latin: 'Columba oenas oenas',
      xc: 32006,
    },
    {
      name: 'Stonechat',
      fullname: 'European Stonechat',
      latin: 'Saxicola rubicola',
      xc: 34070,
      rspb_icon: 'stonechat_male',
    },
    {
      name: 'Nuthatch',
      fullname: 'Eurasian Nuthatch',
      latin: 'Sitta europaea',
      xc: 35043,
    },
    {
      name: 'Linnet',
      fullname: 'Common Linnet',
      latin: 'Linaria cannabina',
      xc: 35189,
      rspb_icon: 'linnet_male',
    },
    {
      name: 'Collared Dove',
      fullname: 'Eurasian Collared Dove',
      latin: 'Streptopelia decaocto',
      xc: 37443,
    },
    {
      name: 'Cuckoo',
      fullname: 'Common Cuckoo',
      latin: 'Cuculus canorus',
      xc: 37447,
      rspb_icon: 'cuckoo_male',
    },
    {
      name: 'Curlew',
      fullname: 'Eurasian Curlew',
      latin: 'Numenius arquata',
      xc: 37497,
    },
    {
      name: 'Jackdaw',
      fullname: 'Western Jackdaw',
      latin: 'Coloeus monedula',
      xc: 42332,
    },
    {
      name: 'Magpie',
      fullname: 'Eurasian Magpie',
      latin: 'Pica pica',
      xc: 42388,
    },
    {
      name: 'House Sparrow',
      fullname: 'House Sparrow',
      latin: 'Passer domesticus',
      xc: 44727,
      rspb_icon: 'house-sparrow_adult_male',
    },
    {
      name: 'Great Tit',
      fullname: 'Great Tit',
      latin: 'Parus major',
      xc: 45953,
      rspb_icon: 'great-tit_adult',
    },
    {
      name: 'Mediterranean Gull',
      fullname: 'Mediterranean Gull',
      latin: 'Ichthyaetus melanocephalus',
      xc: 46094,
      rspb_icon: 'meditteranean-gull_adult_breedingplumage',
    },
    {
      name: 'Pheasant',
      fullname: 'Common Pheasant',
      latin: 'Phasianus colchicus',
      xc: 46412,
      rspb_icon: 'pheasant_male',
    },
    {
      name: 'Dartford Warbler',
      fullname: 'Dartford Warbler',
      latin: 'Sylvia undata undata',
      xc: 54914,
    },
    {
      name: 'Green Woodpecker',
      fullname: 'European Green Woodpecker',
      latin: 'Picus viridis viridis',
      xc: 55183,
      rspb_icon: 'green-woodpecker_male',
    },
    {
      name: 'Chough',
      fullname: 'Red-billed Chough',
      latin: 'Pyrrhocorax pyrrhocorax',
      xc: 55319,
    },
    {
      name: 'Raven',
      fullname: 'Northern Raven',
      latin: 'Corvus corax',
      xc: 57509,
    },
    {
      name: 'Puffin',
      fullname: 'Atlantic Puffin',
      latin: 'Fratercula arctica',
      xc: 57541,
      rspb_icon: 'puffin_adult_breedingplumage',
    },
    {
      name: 'Turtle Dove',
      fullname: 'European Turtle Dove',
      latin: 'Streptopelia turtur',
      xc: 58791,
    },
    {
      name: 'Tawny Owl',
      fullname: 'Tawny Owl',
      latin: 'Strix aluco',
      xc: 72589,
      rspb_icon: 'tawny-owl_adult',
    },
    {
      name: 'Little Owl',
      fullname: 'Little Owl',
      latin: 'Athene noctua',
      xc: 604163,
      rspb_icon: 'little-owl_adult',
    },
    {
      name: 'Wood Pigeon',
      fullname: 'Common Wood Pigeon',
      latin: 'Columba palumbus',
      xc: 76918,
      rspb_icon: 'woodpigeon_adult',
    },
  ],
  'name'
)
