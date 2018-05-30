import { Pokemon } from './model/pokemon';

enum Type {
  Bug = 'Bicho',
  Dark = 'Siniestro',
  Dragon = 'Dragón',
  Electric = 'Eléctrico',
  Fairy = 'Hada',
  Fighting = 'Lucha',
  Fire = 'Fuego',
  Flying = 'Volador',
  Ghost = 'Fantasma',
  Grass = 'Planta',
  Ground = 'Tierra',
  Ice = 'Hielo',
  Normal = 'Normal',
  Poison = 'Veneno',
  Psychic = 'Psíquico',
  Rock = 'Roca',
  Steel = 'Acero',
  Water = 'Agua'
}

export const BossList: Pokemon[] = [
  {
    number: 1,
    name: 'Bulbasaur',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '1.png'
  },
  {
    number: 2,
    name: 'Ivysaur',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '2.png'
  },
  {
    number: 3,
    name: 'Venusaur',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '3.png'
  },
  {
    number: 4,
    name: 'Charmander',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '4.png'
  },
  {
    number: 5,
    name: 'Charmeleon',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '5.png'
  },
  {
    number: 6,
    name: 'Charizard',
    type1: Type.Fire,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '6.png'
  },
  {
    number: 7,
    name: 'Squirtle',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '7.png'
  },
  {
    number: 8,
    name: 'Wartortle',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '8.png'
  },
  {
    number: 9,
    name: 'Blastoise',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '9.png'
  },
  {
    number: 10,
    name: 'Caterpie',
    type1: Type.Bug,
    type2: null,
    generation: 1,
    legendary: false,
    image: '10.png'
  },
  {
    number: 11,
    name: 'Metapod',
    type1: Type.Bug,
    type2: null,
    generation: 1,
    legendary: false,
    image: '11.png'
  },
  {
    number: 12,
    name: 'Butterfree',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '12.png'
  },
  {
    number: 13,
    name: 'Weedle',
    type1: Type.Bug,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '13.png'
  },
  {
    number: 14,
    name: 'Kakuna',
    type1: Type.Bug,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '14.png'
  },
  {
    number: 15,
    name: 'Beedrill',
    type1: Type.Bug,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '15.png'
  },
  {
    number: 16,
    name: 'Pidgey',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '16.png'
  },
  {
    number: 17,
    name: 'Pidgeotto',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '17.png'
  },
  {
    number: 18,
    name: 'Pidgeot',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '18.png'
  },
  {
    number: 19,
    name: 'Rattata',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '19.png'
  },
  {
    number: 20,
    name: 'Raticate',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '20.png'
  },
  {
    number: 21,
    name: 'Spearow',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '21.png'
  },
  {
    number: 22,
    name: 'Fearow',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '22.png'
  },
  {
    number: 23,
    name: 'Ekans',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '23.png'
  },
  {
    number: 24,
    name: 'Arbok',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '24.png'
  },
  {
    number: 25,
    name: 'Pikachu',
    type1: Type.Electric,
    type2: null,
    generation: 1,
    legendary: false,
    image: '25.png'
  },
  {
    number: 26,
    name: 'Raichu',
    type1: Type.Electric,
    type2: null,
    generation: 1,
    legendary: false,
    image: '26.png'
  },
  {
    number: 27,
    name: 'Sandshrew',
    type1: Type.Ground,
    type2: null,
    generation: 1,
    legendary: false,
    image: '27.png'
  },
  {
    number: 28,
    name: 'Sandslash',
    type1: Type.Ground,
    type2: null,
    generation: 1,
    legendary: false,
    image: '28.png'
  },
  {
    number: 29,
    name: 'Nidoran♀',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '29.png'
  },
  {
    number: 30,
    name: 'Nidorina',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '30.png'
  },
  {
    number: 31,
    name: 'Nidoqueen',
    type1: Type.Poison,
    type2: Type.Ground,
    generation: 1,
    legendary: false,
    image: '31.png'
  },
  {
    number: 32,
    name: 'Nidoran♂',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '32.png'
  },
  {
    number: 33,
    name: 'Nidorino',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '33.png'
  },
  {
    number: 34,
    name: 'Nidoking',
    type1: Type.Poison,
    type2: Type.Ground,
    generation: 1,
    legendary: false,
    image: '34.png'
  },
  {
    number: 35,
    name: 'Clefairy',
    type1: Type.Fairy,
    type2: null,
    generation: 1,
    legendary: false,
    image: '35.png'
  },
  {
    number: 36,
    name: 'Clefable',
    type1: Type.Fairy,
    type2: null,
    generation: 1,
    legendary: false,
    image: '36.png'
  },
  {
    number: 37,
    name: 'Vulpix',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '37.png'
  },
  {
    number: 38,
    name: 'Ninetales',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '38.png'
  },
  {
    number: 39,
    name: 'Jigglypuff',
    type1: Type.Normal,
    type2: Type.Fairy,
    generation: 1,
    legendary: false,
    image: '39.png'
  },
  {
    number: 40,
    name: 'Wigglytuff',
    type1: Type.Normal,
    type2: Type.Fairy,
    generation: 1,
    legendary: false,
    image: '40.png'
  },
  {
    number: 41,
    name: 'Zubat',
    type1: Type.Poison,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '41.png'
  },
  {
    number: 42,
    name: 'Golbat',
    type1: Type.Poison,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '42.png'
  },
  {
    number: 43,
    name: 'Oddish',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '43.png'
  },
  {
    number: 44,
    name: 'Gloom',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '44.png'
  },
  {
    number: 45,
    name: 'Vileplume',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '45.png'
  },
  {
    number: 46,
    name: 'Paras',
    type1: Type.Bug,
    type2: Type.Grass,
    generation: 1,
    legendary: false,
    image: '46.png'
  },
  {
    number: 47,
    name: 'Parasect',
    type1: Type.Bug,
    type2: Type.Grass,
    generation: 1,
    legendary: false,
    image: '47.png'
  },
  {
    number: 48,
    name: 'Venonat',
    type1: Type.Bug,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '48.png'
  },
  {
    number: 49,
    name: 'Venomoth',
    type1: Type.Bug,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '49.png'
  },
  {
    number: 50,
    name: 'Diglett',
    type1: Type.Ground,
    type2: null,
    generation: 1,
    legendary: false,
    image: '50.png'
  },
  {
    number: 51,
    name: 'Dugtrio',
    type1: Type.Ground,
    type2: null,
    generation: 1,
    legendary: false,
    image: '51.png'
  },
  {
    number: 52,
    name: 'Meowth',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '52.png'
  },
  {
    number: 53,
    name: 'Persian',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '53.png'
  },
  {
    number: 54,
    name: 'Psyduck',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '54.png'
  },
  {
    number: 55,
    name: 'Golduck',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '55.png'
  },
  {
    number: 56,
    name: 'Mankey',
    type1: Type.Fighting,
    type2: null,
    generation: 1,
    legendary: false,
    image: '56.png'
  },
  {
    number: 57,
    name: 'Primeape',
    type1: Type.Fighting,
    type2: null,
    generation: 1,
    legendary: false,
    image: '57.png'
  },
  {
    number: 58,
    name: 'Growlithe',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '58.png'
  },
  {
    number: 59,
    name: 'Arcanine',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '59.png'
  },
  {
    number: 60,
    name: 'Poliwag',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '60.png'
  },
  {
    number: 61,
    name: 'Poliwhirl',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '61.png'
  },
  {
    number: 62,
    name: 'Poliwrath',
    type1: Type.Water,
    type2: Type.Fighting,
    generation: 1,
    legendary: false,
    image: '62.png'
  },
  {
    number: 63,
    name: 'Abra',
    type1: Type.Psychic,
    type2: null,
    generation: 1,
    legendary: false,
    image: '63.png'
  },
  {
    number: 64,
    name: 'Kadabra',
    type1: Type.Psychic,
    type2: null,
    generation: 1,
    legendary: false,
    image: '64.png'
  },
  {
    number: 65,
    name: 'Alakazam',
    type1: Type.Psychic,
    type2: null,
    generation: 1,
    legendary: false,
    image: '65.png'
  },
  {
    number: 66,
    name: 'Machop',
    type1: Type.Fighting,
    type2: null,
    generation: 1,
    legendary: false,
    image: '66.png'
  },
  {
    number: 67,
    name: 'Machoke',
    type1: Type.Fighting,
    type2: null,
    generation: 1,
    legendary: false,
    image: '67.png'
  },
  {
    number: 68,
    name: 'Machamp',
    type1: Type.Fighting,
    type2: null,
    generation: 1,
    legendary: false,
    image: '68.png'
  },
  {
    number: 69,
    name: 'Bellsprout',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '69.png'
  },
  {
    number: 70,
    name: 'Weepinbell',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '70.png'
  },
  {
    number: 71,
    name: 'Victreebel',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '71.png'
  },
  {
    number: 72,
    name: 'Tentacool',
    type1: Type.Water,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '72.png'
  },
  {
    number: 73,
    name: 'Tentacruel',
    type1: Type.Water,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '73.png'
  },
  {
    number: 74,
    name: 'Geodude',
    type1: Type.Rock,
    type2: Type.Ground,
    generation: 1,
    legendary: false,
    image: '74.png'
  },
  {
    number: 75,
    name: 'Graveler',
    type1: Type.Rock,
    type2: Type.Ground,
    generation: 1,
    legendary: false,
    image: '75.png'
  },
  {
    number: 76,
    name: 'Golem',
    type1: Type.Rock,
    type2: Type.Ground,
    generation: 1,
    legendary: false,
    image: '76.png'
  },
  {
    number: 77,
    name: 'Ponyta',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '77.png'
  },
  {
    number: 78,
    name: 'Rapidash',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '78.png'
  },
  {
    number: 79,
    name: 'Slowpoke',
    type1: Type.Water,
    type2: Type.Psychic,
    generation: 1,
    legendary: false,
    image: '79.png'
  },
  {
    number: 80,
    name: 'Slowbro',
    type1: Type.Water,
    type2: Type.Psychic,
    generation: 1,
    legendary: false,
    image: '80.png'
  },
  {
    number: 81,
    name: 'Magnemite',
    type1: Type.Electric,
    type2: Type.Steel,
    generation: 1,
    legendary: false,
    image: '81.png'
  },
  {
    number: 82,
    name: 'Magneton',
    type1: Type.Electric,
    type2: Type.Steel,
    generation: 1,
    legendary: false,
    image: '82.png'
  },
  {
    number: 83,
    name: 'Farfetch\'d',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '83.png'
  },
  {
    number: 84,
    name: 'Doduo',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '84.png'
  },
  {
    number: 85,
    name: 'Dodrio',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '85.png'
  },
  {
    number: 86,
    name: 'Seel',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '86.png'
  },
  {
    number: 87,
    name: 'Dewgong',
    type1: Type.Water,
    type2: Type.Ice,
    generation: 1,
    legendary: false,
    image: '87.png'
  },
  {
    number: 88,
    name: 'Grimer',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '88.png'
  },
  {
    number: 89,
    name: 'Muk',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '89.png'
  },
  {
    number: 90,
    name: 'Shellder',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '90.png'
  },
  {
    number: 91,
    name: 'Cloyster',
    type1: Type.Water,
    type2: Type.Ice,
    generation: 1,
    legendary: false,
    image: '91.png'
  },
  {
    number: 92,
    name: 'Gastly',
    type1: Type.Ghost,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '92.png'
  },
  {
    number: 93,
    name: 'Haunter',
    type1: Type.Ghost,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '93.png'
  },
  {
    number: 94,
    name: 'Gengar',
    type1: Type.Ghost,
    type2: Type.Poison,
    generation: 1,
    legendary: false,
    image: '94.png'
  },
  {
    number: 95,
    name: 'Onix',
    type1: Type.Rock,
    type2: Type.Ground,
    generation: 1,
    legendary: false,
    image: '95.png'
  },
  {
    number: 96,
    name: 'Drowzee',
    type1: Type.Psychic,
    type2: null,
    generation: 1,
    legendary: false,
    image: '96.png'
  },
  {
    number: 97,
    name: 'Hypno',
    type1: Type.Psychic,
    type2: null,
    generation: 1,
    legendary: false,
    image: '97.png'
  },
  {
    number: 98,
    name: 'Krabby',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '98.png'
  },
  {
    number: 99,
    name: 'Kingler',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '99.png'
  },
  {
    number: 100,
    name: 'Voltorb',
    type1: Type.Electric,
    type2: null,
    generation: 1,
    legendary: false,
    image: '100.png'
  },
  {
    number: 101,
    name: 'Electrode',
    type1: Type.Electric,
    type2: null,
    generation: 1,
    legendary: false,
    image: '101.png'
  },
  {
    number: 102,
    name: 'Exeggcute',
    type1: Type.Grass,
    type2: Type.Psychic,
    generation: 1,
    legendary: false,
    image: '102.png'
  },
  {
    number: 103,
    name: 'Exeggutor',
    type1: Type.Grass,
    type2: Type.Psychic,
    generation: 1,
    legendary: false,
    image: '103.png'
  },
  {
    number: 104,
    name: 'Cubone',
    type1: Type.Ground,
    type2: null,
    generation: 1,
    legendary: false,
    image: '104.png'
  },
  {
    number: 105,
    name: 'Marowak',
    type1: Type.Ground,
    type2: null,
    generation: 1,
    legendary: false,
    image: '105.png'
  },
  {
    number: 106,
    name: 'Hitmonlee',
    type1: Type.Fighting,
    type2: null,
    generation: 1,
    legendary: false,
    image: '106.png'
  },
  {
    number: 107,
    name: 'Hitmonchan',
    type1: Type.Fighting,
    type2: null,
    generation: 1,
    legendary: false,
    image: '107.png'
  },
  {
    number: 108,
    name: 'Lickitung',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '108.png'
  },
  {
    number: 109,
    name: 'Koffing',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '109.png'
  },
  {
    number: 110,
    name: 'Weezing',
    type1: Type.Poison,
    type2: null,
    generation: 1,
    legendary: false,
    image: '110.png'
  },
  {
    number: 111,
    name: 'Rhyhorn',
    type1: Type.Ground,
    type2: Type.Rock,
    generation: 1,
    legendary: false,
    image: '111.png'
  },
  {
    number: 112,
    name: 'Rhydon',
    type1: Type.Ground,
    type2: Type.Rock,
    generation: 1,
    legendary: false,
    image: '112.png'
  },
  {
    number: 113,
    name: 'Chansey',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '113.png'
  },
  {
    number: 114,
    name: 'Tangela',
    type1: Type.Grass,
    type2: null,
    generation: 1,
    legendary: false,
    image: '114.png'
  },
  {
    number: 115,
    name: 'Kangaskhan',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '115.png'
  },
  {
    number: 116,
    name: 'Horsea',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '116.png'
  },
  {
    number: 117,
    name: 'Seadra',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '117.png'
  },
  {
    number: 118,
    name: 'Goldeen',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '118.png'
  },
  {
    number: 119,
    name: 'Seaking',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '119.png'
  },
  {
    number: 120,
    name: 'Staryu',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '120.png'
  },
  {
    number: 121,
    name: 'Starmie',
    type1: Type.Water,
    type2: Type.Psychic,
    generation: 1,
    legendary: false,
    image: '121.png'
  },
  {
    number: 122,
    name: 'Mr. Mime',
    type1: Type.Psychic,
    type2: Type.Fairy,
    generation: 1,
    legendary: false,
    image: '122.png'
  },
  {
    number: 123,
    name: 'Scyther',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '123.png'
  },
  {
    number: 124,
    name: 'Jynx',
    type1: Type.Ice,
    type2: Type.Psychic,
    generation: 1,
    legendary: false,
    image: '124.png'
  },
  {
    number: 125,
    name: 'Electabuzz',
    type1: Type.Electric,
    type2: null,
    generation: 1,
    legendary: false,
    image: '125.png'
  },
  {
    number: 126,
    name: 'Magmar',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '126.png'
  },
  {
    number: 127,
    name: 'Pinsir',
    type1: Type.Bug,
    type2: null,
    generation: 1,
    legendary: false,
    image: '127.png'
  },
  {
    number: 128,
    name: 'Tauros',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '128.png'
  },
  {
    number: 129,
    name: 'Magikarp',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '129.png'
  },
  {
    number: 130,
    name: 'Gyarados',
    type1: Type.Water,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '130.png'
  },
  {
    number: 131,
    name: 'Lapras',
    type1: Type.Water,
    type2: Type.Ice,
    generation: 1,
    legendary: false,
    image: '131.png'
  },
  {
    number: 132,
    name: 'Ditto',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '132.png'
  },
  {
    number: 133,
    name: 'Eevee',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '133.png'
  },
  {
    number: 134,
    name: 'Vaporeon',
    type1: Type.Water,
    type2: null,
    generation: 1,
    legendary: false,
    image: '134.png'
  },
  {
    number: 135,
    name: 'Jolteon',
    type1: Type.Electric,
    type2: null,
    generation: 1,
    legendary: false,
    image: '135.png'
  },
  {
    number: 136,
    name: 'Flareon',
    type1: Type.Fire,
    type2: null,
    generation: 1,
    legendary: false,
    image: '136.png'
  },
  {
    number: 137,
    name: 'Porygon',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '137.png'
  },
  {
    number: 138,
    name: 'Omanyte',
    type1: Type.Rock,
    type2: Type.Water,
    generation: 1,
    legendary: false,
    image: '138.png'
  },
  {
    number: 139,
    name: 'Omastar',
    type1: Type.Rock,
    type2: Type.Water,
    generation: 1,
    legendary: false,
    image: '139.png'
  },
  {
    number: 140,
    name: 'Kabuto',
    type1: Type.Rock,
    type2: Type.Water,
    generation: 1,
    legendary: false,
    image: '140.png'
  },
  {
    number: 141,
    name: 'Kabutops',
    type1: Type.Rock,
    type2: Type.Water,
    generation: 1,
    legendary: false,
    image: '141.png'
  },
  {
    number: 142,
    name: 'Aerodactyl',
    type1: Type.Rock,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '142.png'
  },
  {
    number: 143,
    name: 'Snorlax',
    type1: Type.Normal,
    type2: null,
    generation: 1,
    legendary: false,
    image: '143.png'
  },
  {
    number: 144,
    name: 'Articuno',
    type1: Type.Ice,
    type2: Type.Flying,
    generation: 1,
    legendary: true,
    image: '144.png'
  },
  {
    number: 145,
    name: 'Zapdos',
    type1: Type.Electric,
    type2: Type.Flying,
    generation: 1,
    legendary: true,
    image: '145.png'
  },
  {
    number: 146,
    name: 'Moltres',
    type1: Type.Fire,
    type2: Type.Flying,
    generation: 1,
    legendary: true,
    image: '146.png'
  },
  {
    number: 147,
    name: 'Dratini',
    type1: Type.Dragon,
    type2: null,
    generation: 1,
    legendary: false,
    image: '147.png'
  },
  {
    number: 148,
    name: 'Dragonair',
    type1: Type.Dragon,
    type2: null,
    generation: 1,
    legendary: false,
    image: '148.png'
  },
  {
    number: 149,
    name: 'Dragonite',
    type1: Type.Dragon,
    type2: Type.Flying,
    generation: 1,
    legendary: false,
    image: '149.png'
  },
  {
    number: 150,
    name: 'Mewtwo',
    type1: Type.Psychic,
    type2: null,
    generation: 1,
    legendary: true,
    image: '150.png'
  },
  {
    number: 151,
    name: 'Mew',
    type1: Type.Psychic,
    type2: null,
    generation: 1,
    legendary: false,
    image: '151.png'
  },
  {
    number: 152,
    name: 'Chikorita',
    type1: Type.Grass,
    type2: null,
    generation: 2,
    legendary: false,
    image: '152.png'
  },
  {
    number: 153,
    name: 'Bayleef',
    type1: Type.Grass,
    type2: null,
    generation: 2,
    legendary: false,
    image: '153.png'
  },
  {
    number: 154,
    name: 'Meganium',
    type1: Type.Grass,
    type2: null,
    generation: 2,
    legendary: false,
    image: '154.png'
  },
  {
    number: 155,
    name: 'Cyndaquil',
    type1: Type.Fire,
    type2: null,
    generation: 2,
    legendary: false,
    image: '155.png'
  },
  {
    number: 156,
    name: 'Quilava',
    type1: Type.Fire,
    type2: null,
    generation: 2,
    legendary: false,
    image: '156.png'
  },
  {
    number: 157,
    name: 'Typhlosion',
    type1: Type.Fire,
    type2: null,
    generation: 2,
    legendary: false,
    image: '157.png'
  },
  {
    number: 158,
    name: 'Totodile',
    type1: Type.Water,
    type2: null,
    generation: 2,
    legendary: false,
    image: '158.png'
  },
  {
    number: 159,
    name: 'Croconaw',
    type1: Type.Water,
    type2: null,
    generation: 2,
    legendary: false,
    image: '159.png'
  },
  {
    number: 160,
    name: 'Feraligatr',
    type1: Type.Water,
    type2: null,
    generation: 2,
    legendary: false,
    image: '160.png'
  },
  {
    number: 161,
    name: 'Sentret',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '161.png'
  },
  {
    number: 162,
    name: 'Furret',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '162.png'
  },
  {
    number: 163,
    name: 'Hoothoot',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '163.png'
  },
  {
    number: 164,
    name: 'Noctowl',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '164.png'
  },
  {
    number: 165,
    name: 'Ledyba',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '165.png'
  },
  {
    number: 166,
    name: 'Ledian',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '166.png'
  },
  {
    number: 167,
    name: 'Spinarak',
    type1: Type.Bug,
    type2: Type.Poison,
    generation: 2,
    legendary: false,
    image: '167.png'
  },
  {
    number: 168,
    name: 'Ariados',
    type1: Type.Bug,
    type2: Type.Poison,
    generation: 2,
    legendary: false,
    image: '168.png'
  },
  {
    number: 169,
    name: 'Crobat',
    type1: Type.Poison,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '169.png'
  },
  {
    number: 170,
    name: 'Chinchou',
    type1: Type.Water,
    type2: Type.Electric,
    generation: 2,
    legendary: false,
    image: '170.png'
  },
  {
    number: 171,
    name: 'Lanturn',
    type1: Type.Water,
    type2: Type.Electric,
    generation: 2,
    legendary: false,
    image: '171.png'
  },
  {
    number: 172,
    name: 'Pichu',
    type1: Type.Electric,
    type2: null,
    generation: 2,
    legendary: false,
    image: '172.png'
  },
  {
    number: 173,
    name: 'Cleffa',
    type1: Type.Fairy,
    type2: null,
    generation: 2,
    legendary: false,
    image: '173.png'
  },
  {
    number: 174,
    name: 'Igglybuff',
    type1: Type.Normal,
    type2: Type.Fairy,
    generation: 2,
    legendary: false,
    image: '174.png'
  },
  {
    number: 175,
    name: 'Togepi',
    type1: Type.Fairy,
    type2: null,
    generation: 2,
    legendary: false,
    image: '175.png'
  },
  {
    number: 176,
    name: 'Togetic',
    type1: Type.Fairy,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '176.png'
  },
  {
    number: 177,
    name: 'Natu',
    type1: Type.Psychic,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '177.png'
  },
  {
    number: 178,
    name: 'Xatu',
    type1: Type.Psychic,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '178.png'
  },
  {
    number: 179,
    name: 'Mareep',
    type1: Type.Electric,
    type2: null,
    generation: 2,
    legendary: false,
    image: '179.png'
  },
  {
    number: 180,
    name: 'Flaaffy',
    type1: Type.Electric,
    type2: null,
    generation: 2,
    legendary: false,
    image: '180.png'
  },
  {
    number: 181,
    name: 'Ampharos',
    type1: Type.Electric,
    type2: null,
    generation: 2,
    legendary: false,
    image: '181.png'
  },
  {
    number: 182,
    name: 'Bellossom',
    type1: Type.Grass,
    type2: null,
    generation: 2,
    legendary: false,
    image: '182.png'
  },
  {
    number: 183,
    name: 'Marill',
    type1: Type.Water,
    type2: Type.Fairy,
    generation: 2,
    legendary: false,
    image: '183.png'
  },
  {
    number: 184,
    name: 'Azumarill',
    type1: Type.Water,
    type2: Type.Fairy,
    generation: 2,
    legendary: false,
    image: '184.png'
  },
  {
    number: 185,
    name: 'Sudowoodo',
    type1: Type.Rock,
    type2: null,
    generation: 2,
    legendary: false,
    image: '185.png'
  },
  {
    number: 186,
    name: 'Politoed',
    type1: Type.Water,
    type2: null,
    generation: 2,
    legendary: false,
    image: '186.png'
  },
  {
    number: 187,
    name: 'Hoppip',
    type1: Type.Grass,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '187.png'
  },
  {
    number: 188,
    name: 'Skiploom',
    type1: Type.Grass,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '188.png'
  },
  {
    number: 189,
    name: 'Jumpluff',
    type1: Type.Grass,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '189.png'
  },
  {
    number: 190,
    name: 'Aipom',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '190.png'
  },
  {
    number: 191,
    name: 'Sunkern',
    type1: Type.Grass,
    type2: null,
    generation: 2,
    legendary: false,
    image: '191.png'
  },
  {
    number: 192,
    name: 'Sunflora',
    type1: Type.Grass,
    type2: null,
    generation: 2,
    legendary: false,
    image: '192.png'
  },
  {
    number: 193,
    name: 'Yanma',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '193.png'
  },
  {
    number: 194,
    name: 'Wooper',
    type1: Type.Water,
    type2: Type.Ground,
    generation: 2,
    legendary: false,
    image: '194.png'
  },
  {
    number: 195,
    name: 'Quagsire',
    type1: Type.Water,
    type2: Type.Ground,
    generation: 2,
    legendary: false,
    image: '195.png'
  },
  {
    number: 196,
    name: 'Espeon',
    type1: Type.Psychic,
    type2: null,
    generation: 2,
    legendary: false,
    image: '196.png'
  },
  {
    number: 197,
    name: 'Umbreon',
    type1: Type.Dark,
    type2: null,
    generation: 2,
    legendary: false,
    image: '197.png'
  },
  {
    number: 198,
    name: 'Murkrow',
    type1: Type.Dark,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '198.png'
  },
  {
    number: 199,
    name: 'Slowking',
    type1: Type.Water,
    type2: Type.Psychic,
    generation: 2,
    legendary: false,
    image: '199.png'
  },
  {
    number: 200,
    name: 'Misdreavus',
    type1: Type.Ghost,
    type2: null,
    generation: 2,
    legendary: false,
    image: '200.png'
  },
  {
    number: 201,
    name: 'Unown',
    type1: Type.Psychic,
    type2: null,
    generation: 2,
    legendary: false,
    image: '201.png'
  },
  {
    number: 202,
    name: 'Wobbuffet',
    type1: Type.Psychic,
    type2: null,
    generation: 2,
    legendary: false,
    image: '202.png'
  },
  {
    number: 203,
    name: 'Girafarig',
    type1: Type.Normal,
    type2: Type.Psychic,
    generation: 2,
    legendary: false,
    image: '203.png'
  },
  {
    number: 204,
    name: 'Pineco',
    type1: Type.Bug,
    type2: null,
    generation: 2,
    legendary: false,
    image: '204.png'
  },
  {
    number: 205,
    name: 'Forretress',
    type1: Type.Bug,
    type2: Type.Steel,
    generation: 2,
    legendary: false,
    image: '205.png'
  },
  {
    number: 206,
    name: 'Dunsparce',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '206.png'
  },
  {
    number: 207,
    name: 'Gligar',
    type1: Type.Ground,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '207.png'
  },
  {
    number: 208,
    name: 'Steelix',
    type1: Type.Steel,
    type2: Type.Ground,
    generation: 2,
    legendary: false,
    image: '208.png'
  },
  {
    number: 209,
    name: 'Snubbull',
    type1: Type.Fairy,
    type2: null,
    generation: 2,
    legendary: false,
    image: '209.png'
  },
  {
    number: 210,
    name: 'Granbull',
    type1: Type.Fairy,
    type2: null,
    generation: 2,
    legendary: false,
    image: '210.png'
  },
  {
    number: 211,
    name: 'Qwilfish',
    type1: Type.Water,
    type2: Type.Poison,
    generation: 2,
    legendary: false,
    image: '211.png'
  },
  {
    number: 212,
    name: 'Scizor',
    type1: Type.Bug,
    type2: Type.Steel,
    generation: 2,
    legendary: false,
    image: '212.png'
  },
  {
    number: 213,
    name: 'Shuckle',
    type1: Type.Bug,
    type2: Type.Rock,
    generation: 2,
    legendary: false,
    image: '213.png'
  },
  {
    number: 214,
    name: 'Heracross',
    type1: Type.Bug,
    type2: Type.Fighting,
    generation: 2,
    legendary: false,
    image: '214.png'
  },
  {
    number: 215,
    name: 'Sneasel',
    type1: Type.Dark,
    type2: Type.Ice,
    generation: 2,
    legendary: false,
    image: '215.png'
  },
  {
    number: 216,
    name: 'Teddiursa',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '216.png'
  },
  {
    number: 217,
    name: 'Ursaring',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '217.png'
  },
  {
    number: 218,
    name: 'Slugma',
    type1: Type.Fire,
    type2: null,
    generation: 2,
    legendary: false,
    image: '218.png'
  },
  {
    number: 219,
    name: 'Magcargo',
    type1: Type.Fire,
    type2: Type.Rock,
    generation: 2,
    legendary: false,
    image: '219.png'
  },
  {
    number: 220,
    name: 'Swinub',
    type1: Type.Ice,
    type2: Type.Ground,
    generation: 2,
    legendary: false,
    image: '220.png'
  },
  {
    number: 221,
    name: 'Piloswine',
    type1: Type.Ice,
    type2: Type.Ground,
    generation: 2,
    legendary: false,
    image: '221.png'
  },
  {
    number: 222,
    name: 'Corsola',
    type1: Type.Water,
    type2: Type.Rock,
    generation: 2,
    legendary: false,
    image: '222.png'
  },
  {
    number: 223,
    name: 'Remoraid',
    type1: Type.Water,
    type2: null,
    generation: 2,
    legendary: false,
    image: '223.png'
  },
  {
    number: 224,
    name: 'Octillery',
    type1: Type.Water,
    type2: null,
    generation: 2,
    legendary: false,
    image: '224.png'
  },
  {
    number: 225,
    name: 'Delibird',
    type1: Type.Ice,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '225.png'
  },
  {
    number: 226,
    name: 'Mantine',
    type1: Type.Water,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '226.png'
  },
  {
    number: 227,
    name: 'Skarmory',
    type1: Type.Steel,
    type2: Type.Flying,
    generation: 2,
    legendary: false,
    image: '227.png'
  },
  {
    number: 228,
    name: 'Houndour',
    type1: Type.Dark,
    type2: Type.Fire,
    generation: 2,
    legendary: false,
    image: '228.png'
  },
  {
    number: 229,
    name: 'Houndoom',
    type1: Type.Dark,
    type2: Type.Fire,
    generation: 2,
    legendary: false,
    image: '229.png'
  },
  {
    number: 230,
    name: 'Kingdra',
    type1: Type.Water,
    type2: Type.Dragon,
    generation: 2,
    legendary: false,
    image: '230.png'
  },
  {
    number: 231,
    name: 'Phanpy',
    type1: Type.Ground,
    type2: null,
    generation: 2,
    legendary: false,
    image: '231.png'
  },
  {
    number: 232,
    name: 'Donphan',
    type1: Type.Ground,
    type2: null,
    generation: 2,
    legendary: false,
    image: '232.png'
  },
  {
    number: 233,
    name: 'Porygon2',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '233.png'
  },
  {
    number: 234,
    name: 'Stantler',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '234.png'
  },
  {
    number: 235,
    name: 'Smeargle',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '235.png'
  },
  {
    number: 236,
    name: 'Tyrogue',
    type1: Type.Fighting,
    type2: null,
    generation: 2,
    legendary: false,
    image: '236.png'
  },
  {
    number: 237,
    name: 'Hitmontop',
    type1: Type.Fighting,
    type2: null,
    generation: 2,
    legendary: false,
    image: '237.png'
  },
  {
    number: 238,
    name: 'Smoochum',
    type1: Type.Ice,
    type2: Type.Psychic,
    generation: 2,
    legendary: false,
    image: '238.png'
  },
  {
    number: 239,
    name: 'Elekid',
    type1: Type.Electric,
    type2: null,
    generation: 2,
    legendary: false,
    image: '239.png'
  },
  {
    number: 240,
    name: 'Magby',
    type1: Type.Fire,
    type2: null,
    generation: 2,
    legendary: false,
    image: '240.png'
  },
  {
    number: 241,
    name: 'Miltank',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '241.png'
  },
  {
    number: 242,
    name: 'Blissey',
    type1: Type.Normal,
    type2: null,
    generation: 2,
    legendary: false,
    image: '242.png'
  },
  {
    number: 243,
    name: 'Raikou',
    type1: Type.Electric,
    type2: null,
    generation: 2,
    legendary: true,
    image: '243.png'
  },
  {
    number: 244,
    name: 'Entei',
    type1: Type.Fire,
    type2: null,
    generation: 2,
    legendary: true,
    image: '244.png'
  },
  {
    number: 245,
    name: 'Suicune',
    type1: Type.Water,
    type2: null,
    generation: 2,
    legendary: true,
    image: '245.png'
  },
  {
    number: 246,
    name: 'Larvitar',
    type1: Type.Rock,
    type2: Type.Ground,
    generation: 2,
    legendary: false,
    image: '246.png'
  },
  {
    number: 247,
    name: 'Pupitar',
    type1: Type.Rock,
    type2: Type.Ground,
    generation: 2,
    legendary: false,
    image: '247.png'
  },
  {
    number: 248,
    name: 'Tyranitar',
    type1: Type.Rock,
    type2: Type.Dark,
    generation: 2,
    legendary: false,
    image: '248.png'
  },
  {
    number: 249,
    name: 'Lugia',
    type1: Type.Psychic,
    type2: Type.Flying,
    generation: 2,
    legendary: true,
    image: '249.png'
  },
  {
    number: 250,
    name: 'Ho-oh',
    type1: Type.Fire,
    type2: Type.Flying,
    generation: 2,
    legendary: true,
    image: '250.png'
  },
  {
    number: 251,
    name: 'Celebi',
    type1: Type.Psychic,
    type2: Type.Grass,
    generation: 2,
    legendary: false,
    image: '251.png'
  },
  {
    number: 252,
    name: 'Treecko',
    type1: Type.Grass,
    type2: null,
    generation: 3,
    legendary: false,
    image: '252.png'
  },
  {
    number: 253,
    name: 'Grovyle',
    type1: Type.Grass,
    type2: null,
    generation: 3,
    legendary: false,
    image: '253.png'
  },
  {
    number: 254,
    name: 'Sceptile',
    type1: Type.Grass,
    type2: null,
    generation: 3,
    legendary: false,
    image: '254.png'
  },
  {
    number: 255,
    name: 'Torchic',
    type1: Type.Fire,
    type2: null,
    generation: 3,
    legendary: false,
    image: '255.png'
  },
  {
    number: 256,
    name: 'Combusken',
    type1: Type.Fire,
    type2: Type.Fighting,
    generation: 3,
    legendary: false,
    image: '256.png'
  },
  {
    number: 257,
    name: 'Blaziken',
    type1: Type.Fire,
    type2: Type.Fighting,
    generation: 3,
    legendary: false,
    image: '257.png'
  },
  {
    number: 258,
    name: 'Mudkip',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '258.png'
  },
  {
    number: 259,
    name: 'Marshtomp',
    type1: Type.Water,
    type2: Type.Ground,
    generation: 3,
    legendary: false,
    image: '259.png'
  },
  {
    number: 260,
    name: 'Swampert',
    type1: Type.Water,
    type2: Type.Ground,
    generation: 3,
    legendary: false,
    image: '260.png'
  },
  {
    number: 261,
    name: 'Poochyena',
    type1: Type.Dark,
    type2: null,
    generation: 3,
    legendary: false,
    image: '261.png'
  },
  {
    number: 262,
    name: 'Mightyena',
    type1: Type.Dark,
    type2: null,
    generation: 3,
    legendary: false,
    image: '262.png'
  },
  {
    number: 263,
    name: 'Zigzagoon',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '263.png'
  },
  {
    number: 264,
    name: 'Linoone',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '264.png'
  },
  {
    number: 265,
    name: 'Wurmple',
    type1: Type.Bug,
    type2: null,
    generation: 3,
    legendary: false,
    image: '265.png'
  },
  {
    number: 266,
    name: 'Silcoon',
    type1: Type.Bug,
    type2: null,
    generation: 3,
    legendary: false,
    image: '266.png'
  },
  {
    number: 267,
    name: 'Beautifly',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '267.png'
  },
  {
    number: 268,
    name: 'Cascoon',
    type1: Type.Bug,
    type2: null,
    generation: 3,
    legendary: false,
    image: '268.png'
  },
  {
    number: 269,
    name: 'Dustox',
    type1: Type.Bug,
    type2: Type.Poison,
    generation: 3,
    legendary: false,
    image: '269.png'
  },
  {
    number: 270,
    name: 'Lotad',
    type1: Type.Water,
    type2: Type.Grass,
    generation: 3,
    legendary: false,
    image: '270.png'
  },
  {
    number: 271,
    name: 'Lombre',
    type1: Type.Water,
    type2: Type.Grass,
    generation: 3,
    legendary: false,
    image: '271.png'
  },
  {
    number: 272,
    name: 'Ludicolo',
    type1: Type.Water,
    type2: Type.Grass,
    generation: 3,
    legendary: false,
    image: '272.png'
  },
  {
    number: 273,
    name: 'Seedot',
    type1: Type.Grass,
    type2: null,
    generation: 3,
    legendary: false,
    image: '273.png'
  },
  {
    number: 274,
    name: 'Nuzleaf',
    type1: Type.Grass,
    type2: Type.Dark,
    generation: 3,
    legendary: false,
    image: '274.png'
  },
  {
    number: 275,
    name: 'Shiftry',
    type1: Type.Grass,
    type2: Type.Dark,
    generation: 3,
    legendary: false,
    image: '275.png'
  },
  {
    number: 276,
    name: 'Taillow',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '276.png'
  },
  {
    number: 277,
    name: 'Swellow',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '277.png'
  },
  {
    number: 278,
    name: 'Wingull',
    type1: Type.Water,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '278.png'
  },
  {
    number: 279,
    name: 'Pelipper',
    type1: Type.Water,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '279.png'
  },
  {
    number: 280,
    name: 'Ralts',
    type1: Type.Psychic,
    type2: Type.Fairy,
    generation: 3,
    legendary: false,
    image: '280.png'
  },
  {
    number: 281,
    name: 'Kirlia',
    type1: Type.Psychic,
    type2: Type.Fairy,
    generation: 3,
    legendary: false,
    image: '281.png'
  },
  {
    number: 282,
    name: 'Gardevoir',
    type1: Type.Psychic,
    type2: Type.Fairy,
    generation: 3,
    legendary: false,
    image: '282.png'
  },
  {
    number: 283,
    name: 'Surskit',
    type1: Type.Bug,
    type2: Type.Water,
    generation: 3,
    legendary: false,
    image: '283.png'
  },
  {
    number: 284,
    name: 'Masquerain',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '284.png'
  },
  {
    number: 285,
    name: 'Shroomish',
    type1: Type.Grass,
    type2: null,
    generation: 3,
    legendary: false,
    image: '285.png'
  },
  {
    number: 286,
    name: 'Breloom',
    type1: Type.Grass,
    type2: Type.Fighting,
    generation: 3,
    legendary: false,
    image: '286.png'
  },
  {
    number: 287,
    name: 'Slakoth',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '287.png'
  },
  {
    number: 288,
    name: 'Vigoroth',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '288.png'
  },
  {
    number: 289,
    name: 'Slaking',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '289.png'
  },
  {
    number: 290,
    name: 'Nincada',
    type1: Type.Bug,
    type2: Type.Ground,
    generation: 3,
    legendary: false,
    image: '290.png'
  },
  {
    number: 291,
    name: 'Ninjask',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '291.png'
  },
  {
    number: 292,
    name: 'Shedinja',
    type1: Type.Bug,
    type2: Type.Ghost,
    generation: 3,
    legendary: false,
    image: '292.png'
  },
  {
    number: 293,
    name: 'Whismur',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '293.png'
  },
  {
    number: 294,
    name: 'Loudred',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '294.png'
  },
  {
    number: 295,
    name: 'Exploud',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '295.png'
  },
  {
    number: 296,
    name: 'Makuhita',
    type1: Type.Fighting,
    type2: null,
    generation: 3,
    legendary: false,
    image: '296.png'
  },
  {
    number: 297,
    name: 'Hariyama',
    type1: Type.Fighting,
    type2: null,
    generation: 3,
    legendary: false,
    image: '297.png'
  },
  {
    number: 298,
    name: 'Azurill',
    type1: Type.Normal,
    type2: Type.Fairy,
    generation: 3,
    legendary: false,
    image: '298.png'
  },
  {
    number: 299,
    name: 'Nosepass',
    type1: Type.Rock,
    type2: null,
    generation: 3,
    legendary: false,
    image: '299.png'
  },
  {
    number: 300,
    name: 'Skitty',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '300.png'
  },
  {
    number: 301,
    name: 'Delcatty',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '301.png'
  },
  {
    number: 302,
    name: 'Sableye',
    type1: Type.Dark,
    type2: Type.Ghost,
    generation: 3,
    legendary: false,
    image: '302.png'
  },
  {
    number: 303,
    name: 'Mawile',
    type1: Type.Steel,
    type2: Type.Fairy,
    generation: 3,
    legendary: false,
    image: '303.png'
  },
  {
    number: 304,
    name: 'Aron',
    type1: Type.Steel,
    type2: Type.Rock,
    generation: 3,
    legendary: false,
    image: '304.png'
  },
  {
    number: 305,
    name: 'Lairon',
    type1: Type.Steel,
    type2: Type.Rock,
    generation: 3,
    legendary: false,
    image: '305.png'
  },
  {
    number: 306,
    name: 'Aggron',
    type1: Type.Steel,
    type2: Type.Rock,
    generation: 3,
    legendary: false,
    image: '306.png'
  },
  {
    number: 307,
    name: 'Meditite',
    type1: Type.Fighting,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '307.png'
  },
  {
    number: 308,
    name: 'Medicham',
    type1: Type.Fighting,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '308.png'
  },
  {
    number: 309,
    name: 'Electrike',
    type1: Type.Electric,
    type2: null,
    generation: 3,
    legendary: false,
    image: '309.png'
  },
  {
    number: 310,
    name: 'Manectric',
    type1: Type.Electric,
    type2: null,
    generation: 3,
    legendary: false,
    image: '310.png'
  },
  {
    number: 311,
    name: 'Plusle',
    type1: Type.Electric,
    type2: null,
    generation: 3,
    legendary: false,
    image: '311.png'
  },
  {
    number: 312,
    name: 'Minun',
    type1: Type.Electric,
    type2: null,
    generation: 3,
    legendary: false,
    image: '312.png'
  },
  {
    number: 313,
    name: 'Volbeat',
    type1: Type.Bug,
    type2: null,
    generation: 3,
    legendary: false,
    image: '313.png'
  },
  {
    number: 314,
    name: 'Illumise',
    type1: Type.Bug,
    type2: null,
    generation: 3,
    legendary: false,
    image: '314.png'
  },
  {
    number: 315,
    name: 'Roselia',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 3,
    legendary: false,
    image: '315.png'
  },
  {
    number: 316,
    name: 'Gulpin',
    type1: Type.Poison,
    type2: null,
    generation: 3,
    legendary: false,
    image: '316.png'
  },
  {
    number: 317,
    name: 'Swalot',
    type1: Type.Poison,
    type2: null,
    generation: 3,
    legendary: false,
    image: '317.png'
  },
  {
    number: 318,
    name: 'Carvanha',
    type1: Type.Water,
    type2: Type.Dark,
    generation: 3,
    legendary: false,
    image: '318.png'
  },
  {
    number: 319,
    name: 'Sharpedo',
    type1: Type.Water,
    type2: Type.Dark,
    generation: 3,
    legendary: false,
    image: '319.png'
  },
  {
    number: 320,
    name: 'Wailmer',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '320.png'
  },
  {
    number: 321,
    name: 'Wailord',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '321.png'
  },
  {
    number: 322,
    name: 'Numel',
    type1: Type.Fire,
    type2: Type.Ground,
    generation: 3,
    legendary: false,
    image: '322.png'
  },
  {
    number: 323,
    name: 'Camerupt',
    type1: Type.Fire,
    type2: Type.Ground,
    generation: 3,
    legendary: false,
    image: '323.png'
  },
  {
    number: 324,
    name: 'Torkoal',
    type1: Type.Fire,
    type2: null,
    generation: 3,
    legendary: false,
    image: '324.png'
  },
  {
    number: 325,
    name: 'Spoink',
    type1: Type.Psychic,
    type2: null,
    generation: 3,
    legendary: false,
    image: '325.png'
  },
  {
    number: 326,
    name: 'Grumpig',
    type1: Type.Psychic,
    type2: null,
    generation: 3,
    legendary: false,
    image: '326.png'
  },
  {
    number: 327,
    name: 'Spinda',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '327.png'
  },
  {
    number: 328,
    name: 'Trapinch',
    type1: Type.Ground,
    type2: null,
    generation: 3,
    legendary: false,
    image: '328.png'
  },
  {
    number: 329,
    name: 'Vibrava',
    type1: Type.Ground,
    type2: Type.Dragon,
    generation: 3,
    legendary: false,
    image: '329.png'
  },
  {
    number: 330,
    name: 'Flygon',
    type1: Type.Ground,
    type2: Type.Dragon,
    generation: 3,
    legendary: false,
    image: '330.png'
  },
  {
    number: 331,
    name: 'Cacnea',
    type1: Type.Grass,
    type2: null,
    generation: 3,
    legendary: false,
    image: '331.png'
  },
  {
    number: 332,
    name: 'Cacturne',
    type1: Type.Grass,
    type2: Type.Dark,
    generation: 3,
    legendary: false,
    image: '332.png'
  },
  {
    number: 333,
    name: 'Swablu',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '333.png'
  },
  {
    number: 334,
    name: 'Altaria',
    type1: Type.Dragon,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '334.png'
  },
  {
    number: 335,
    name: 'Zangoose',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '335.png'
  },
  {
    number: 336,
    name: 'Seviper',
    type1: Type.Poison,
    type2: null,
    generation: 3,
    legendary: false,
    image: '336.png'
  },
  {
    number: 337,
    name: 'Lunatone',
    type1: Type.Rock,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '337.png'
  },
  {
    number: 338,
    name: 'Solrock',
    type1: Type.Rock,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '338.png'
  },
  {
    number: 339,
    name: 'Barboach',
    type1: Type.Water,
    type2: Type.Ground,
    generation: 3,
    legendary: false,
    image: '339.png'
  },
  {
    number: 340,
    name: 'Whiscash',
    type1: Type.Water,
    type2: Type.Ground,
    generation: 3,
    legendary: false,
    image: '340.png'
  },
  {
    number: 341,
    name: 'Corphish',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '341.png'
  },
  {
    number: 342,
    name: 'Crawdaunt',
    type1: Type.Water,
    type2: Type.Dark,
    generation: 3,
    legendary: false,
    image: '342.png'
  },
  {
    number: 343,
    name: 'Baltoy',
    type1: Type.Ground,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '343.png'
  },
  {
    number: 344,
    name: 'Claydol',
    type1: Type.Ground,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '344.png'
  },
  {
    number: 345,
    name: 'Lileep',
    type1: Type.Rock,
    type2: Type.Grass,
    generation: 3,
    legendary: false,
    image: '345.png'
  },
  {
    number: 346,
    name: 'Cradily',
    type1: Type.Rock,
    type2: Type.Grass,
    generation: 3,
    legendary: false,
    image: '346.png'
  },
  {
    number: 347,
    name: 'Anorith',
    type1: Type.Rock,
    type2: Type.Bug,
    generation: 3,
    legendary: false,
    image: '347.png'
  },
  {
    number: 348,
    name: 'Armaldo',
    type1: Type.Rock,
    type2: Type.Bug,
    generation: 3,
    legendary: false,
    image: '348.png'
  },
  {
    number: 349,
    name: 'Feebas',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '349.png'
  },
  {
    number: 350,
    name: 'Milotic',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '350.png'
  },
  {
    number: 351,
    name: 'Castform',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '351.png'
  },
  {
    number: 352,
    name: 'Kecleon',
    type1: Type.Normal,
    type2: null,
    generation: 3,
    legendary: false,
    image: '352.png'
  },
  {
    number: 353,
    name: 'Shuppet',
    type1: Type.Ghost,
    type2: null,
    generation: 3,
    legendary: false,
    image: '353.png'
  },
  {
    number: 354,
    name: 'Banette',
    type1: Type.Ghost,
    type2: null,
    generation: 3,
    legendary: false,
    image: '354.png'
  },
  {
    number: 355,
    name: 'Duskull',
    type1: Type.Ghost,
    type2: null,
    generation: 3,
    legendary: false,
    image: '355.png'
  },
  {
    number: 356,
    name: 'Dusclops',
    type1: Type.Ghost,
    type2: null,
    generation: 3,
    legendary: false,
    image: '356.png'
  },
  {
    number: 357,
    name: 'Tropius',
    type1: Type.Grass,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '357.png'
  },
  {
    number: 358,
    name: 'Chimecho',
    type1: Type.Psychic,
    type2: null,
    generation: 3,
    legendary: false,
    image: '358.png'
  },
  {
    number: 359,
    name: 'Absol',
    type1: Type.Dark,
    type2: null,
    generation: 3,
    legendary: false,
    image: '359.png'
  },
  {
    number: 360,
    name: 'Wynaut',
    type1: Type.Psychic,
    type2: null,
    generation: 3,
    legendary: false,
    image: '360.png'
  },
  {
    number: 361,
    name: 'Snorunt',
    type1: Type.Ice,
    type2: null,
    generation: 3,
    legendary: false,
    image: '361.png'
  },
  {
    number: 362,
    name: 'Glalie',
    type1: Type.Ice,
    type2: null,
    generation: 3,
    legendary: false,
    image: '362.png'
  },
  {
    number: 363,
    name: 'Spheal',
    type1: Type.Ice,
    type2: Type.Water,
    generation: 3,
    legendary: false,
    image: '363.png'
  },
  {
    number: 364,
    name: 'Sealeo',
    type1: Type.Ice,
    type2: Type.Water,
    generation: 3,
    legendary: false,
    image: '364.png'
  },
  {
    number: 365,
    name: 'Walrein',
    type1: Type.Ice,
    type2: Type.Water,
    generation: 3,
    legendary: false,
    image: '365.png'
  },
  {
    number: 366,
    name: 'Clamperl',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '366.png'
  },
  {
    number: 367,
    name: 'Huntail',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '367.png'
  },
  {
    number: 368,
    name: 'Gorebyss',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '368.png'
  },
  {
    number: 369,
    name: 'Relicanth',
    type1: Type.Water,
    type2: Type.Rock,
    generation: 3,
    legendary: false,
    image: '369.png'
  },
  {
    number: 370,
    name: 'Luvdisc',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: false,
    image: '370.png'
  },
  {
    number: 371,
    name: 'Bagon',
    type1: Type.Dragon,
    type2: null,
    generation: 3,
    legendary: false,
    image: '371.png'
  },
  {
    number: 372,
    name: 'Shelgon',
    type1: Type.Dragon,
    type2: null,
    generation: 3,
    legendary: false,
    image: '372.png'
  },
  {
    number: 373,
    name: 'Salamence',
    type1: Type.Dragon,
    type2: Type.Flying,
    generation: 3,
    legendary: false,
    image: '373.png'
  },
  {
    number: 374,
    name: 'Beldum',
    type1: Type.Steel,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '374.png'
  },
  {
    number: 375,
    name: 'Metang',
    type1: Type.Steel,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '375.png'
  },
  {
    number: 376,
    name: 'Metagross',
    type1: Type.Steel,
    type2: Type.Psychic,
    generation: 3,
    legendary: false,
    image: '376.png'
  },
  {
    number: 377,
    name: 'Regirock',
    type1: Type.Rock,
    type2: null,
    generation: 3,
    legendary: true,
    image: '377.png'
  },
  {
    number: 378,
    name: 'Regice',
    type1: Type.Ice,
    type2: null,
    generation: 3,
    legendary: true,
    image: '378.png'
  },
  {
    number: 379,
    name: 'Registeel',
    type1: Type.Steel,
    type2: null,
    generation: 3,
    legendary: true,
    image: '379.png'
  },
  {
    number: 380,
    name: 'Latias',
    type1: Type.Dragon,
    type2: Type.Psychic,
    generation: 3,
    legendary: true,
    image: '380.png'
  },
  {
    number: 381,
    name: 'Latios',
    type1: Type.Dragon,
    type2: Type.Psychic,
    generation: 3,
    legendary: true,
    image: '381.png'
  },
  {
    number: 382,
    name: 'Kyogre',
    type1: Type.Water,
    type2: null,
    generation: 3,
    legendary: true,
    image: '382.png'
  },
  {
    number: 383,
    name: 'Groudon',
    type1: Type.Ground,
    type2: null,
    generation: 3,
    legendary: true,
    image: '383.png'
  },
  {
    number: 384,
    name: 'Rayquaza',
    type1: Type.Dragon,
    type2: Type.Flying,
    generation: 3,
    legendary: true,
    image: '384.png'
  },
  {
    number: 385,
    name: 'Jirachi',
    type1: Type.Steel,
    type2: Type.Psychic,
    generation: 3,
    legendary: true,
    image: '385.png'
  },
  {
    number: 386,
    name: 'Deoxys',
    type1: Type.Psychic,
    type2: null,
    generation: 3,
    legendary: true,
    image: '386.png'
  },
  {
    number: 387,
    name: 'Turtwig',
    type1: Type.Grass,
    type2: null,
    generation: 4,
    legendary: false,
    image: '387.png'
  },
  {
    number: 388,
    name: 'Grotle',
    type1: Type.Grass,
    type2: null,
    generation: 4,
    legendary: false,
    image: '388.png'
  },
  {
    number: 389,
    name: 'Torterra',
    type1: Type.Grass,
    type2: Type.Ground,
    generation: 4,
    legendary: false,
    image: '389.png'
  },
  {
    number: 390,
    name: 'Chimchar',
    type1: Type.Fire,
    type2: null,
    generation: 4,
    legendary: false,
    image: '390.png'
  },
  {
    number: 391,
    name: 'Monferno',
    type1: Type.Fire,
    type2: Type.Fighting,
    generation: 4,
    legendary: false,
    image: '391.png'
  },
  {
    number: 392,
    name: 'Infernape',
    type1: Type.Fire,
    type2: Type.Fighting,
    generation: 4,
    legendary: false,
    image: '392.png'
  },
  {
    number: 393,
    name: 'Piplup',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '393.png'
  },
  {
    number: 394,
    name: 'Prinplup',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '394.png'
  },
  {
    number: 395,
    name: 'Empoleon',
    type1: Type.Water,
    type2: Type.Steel,
    generation: 4,
    legendary: false,
    image: '395.png'
  },
  {
    number: 396,
    name: 'Starly',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '396.png'
  },
  {
    number: 397,
    name: 'Staravia',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '397.png'
  },
  {
    number: 398,
    name: 'Staraptor',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '398.png'
  },
  {
    number: 399,
    name: 'Bidoof',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '399.png'
  },
  {
    number: 400,
    name: 'Bibarel',
    type1: Type.Normal,
    type2: Type.Water,
    generation: 4,
    legendary: false,
    image: '400.png'
  },
  {
    number: 401,
    name: 'Kricketot',
    type1: Type.Bug,
    type2: null,
    generation: 4,
    legendary: false,
    image: '401.png'
  },
  {
    number: 402,
    name: 'Kricketune',
    type1: Type.Bug,
    type2: null,
    generation: 4,
    legendary: false,
    image: '402.png'
  },
  {
    number: 403,
    name: 'Shinx',
    type1: Type.Electric,
    type2: null,
    generation: 4,
    legendary: false,
    image: '403.png'
  },
  {
    number: 404,
    name: 'Luxio',
    type1: Type.Electric,
    type2: null,
    generation: 4,
    legendary: false,
    image: '404.png'
  },
  {
    number: 405,
    name: 'Luxray',
    type1: Type.Electric,
    type2: null,
    generation: 4,
    legendary: false,
    image: '405.png'
  },
  {
    number: 406,
    name: 'Budew',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 4,
    legendary: false,
    image: '406.png'
  },
  {
    number: 407,
    name: 'Roserade',
    type1: Type.Grass,
    type2: Type.Poison,
    generation: 4,
    legendary: false,
    image: '407.png'
  },
  {
    number: 408,
    name: 'Cranidos',
    type1: Type.Rock,
    type2: null,
    generation: 4,
    legendary: false,
    image: '408.png'
  },
  {
    number: 409,
    name: 'Rampardos',
    type1: Type.Rock,
    type2: null,
    generation: 4,
    legendary: false,
    image: '409.png'
  },
  {
    number: 410,
    name: 'Shieldon',
    type1: Type.Rock,
    type2: Type.Steel,
    generation: 4,
    legendary: false,
    image: '410.png'
  },
  {
    number: 411,
    name: 'Bastiodon',
    type1: Type.Rock,
    type2: Type.Steel,
    generation: 4,
    legendary: false,
    image: '411.png'
  },
  {
    number: 412,
    name: 'Burmy',
    type1: Type.Bug,
    type2: null,
    generation: 4,
    legendary: false,
    image: '412.png'
  },
  {
    number: 413,
    name: 'Wormadam (tronco planta)',
    type1: Type.Bug,
    type2: Type.Grass,
    generation: 4,
    legendary: false,
    image: '413-plant.png'
  },
  {
    number: 413,
    name: 'Wormadam (tronco arena)',
    type1: Type.Bug,
    type2: Type.Ground,
    generation: 4,
    legendary: false,
    image: '413-sandy.png'
  },
  {
    number: 413,
    name: 'Wormadam (tronco basura)',
    type1: Type.Bug,
    type2: Type.Steel,
    generation: 4,
    legendary: false,
    image: '413-trash.png'
  },
  {
    number: 414,
    name: 'Mothim',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '414.png'
  },
  {
    number: 415,
    name: 'Combee',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '415.png'
  },
  {
    number: 416,
    name: 'Vespiquen',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '416.png'
  },
  {
    number: 417,
    name: 'Pachirisu',
    type1: Type.Electric,
    type2: null,
    generation: 4,
    legendary: false,
    image: '417.png'
  },
  {
    number: 418,
    name: 'Buizel',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '418.png'
  },
  {
    number: 419,
    name: 'Floatzel',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '419.png'
  },
  {
    number: 420,
    name: 'Cherubi',
    type1: Type.Grass,
    type2: null,
    generation: 4,
    legendary: false,
    image: '420.png'
  },
  {
    number: 421,
    name: 'Cherrim',
    type1: Type.Grass,
    type2: null,
    generation: 4,
    legendary: false,
    image: '421.png'
  },
  {
    number: 422,
    name: 'Shellos',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '422.png'
  },
  {
    number: 423,
    name: 'Gastrodon',
    type1: Type.Water,
    type2: Type.Ground,
    generation: 4,
    legendary: false,
    image: '423.png'
  },
  {
    number: 424,
    name: 'Ambipom',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '424.png'
  },
  {
    number: 425,
    name: 'Drifloon',
    type1: Type.Ghost,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '425.png'
  },
  {
    number: 426,
    name: 'Drifblim',
    type1: Type.Ghost,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '426.png'
  },
  {
    number: 427,
    name: 'Buneary',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '427.png'
  },
  {
    number: 428,
    name: 'Lopunny',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '428.png'
  },
  {
    number: 429,
    name: 'Mismagius',
    type1: Type.Ghost,
    type2: null,
    generation: 4,
    legendary: false,
    image: '429.png'
  },
  {
    number: 430,
    name: 'Honchkrow',
    type1: Type.Dark,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '430.png'
  },
  {
    number: 431,
    name: 'Glameow',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '431.png'
  },
  {
    number: 432,
    name: 'Purugly',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '432.png'
  },
  {
    number: 433,
    name: 'Chingling',
    type1: Type.Psychic,
    type2: null,
    generation: 4,
    legendary: false,
    image: '433.png'
  },
  {
    number: 434,
    name: 'Stunky',
    type1: Type.Poison,
    type2: Type.Dark,
    generation: 4,
    legendary: false,
    image: '434.png'
  },
  {
    number: 435,
    name: 'Skuntank',
    type1: Type.Poison,
    type2: Type.Dark,
    generation: 4,
    legendary: false,
    image: '435.png'
  },
  {
    number: 436,
    name: 'Bronzor',
    type1: Type.Steel,
    type2: Type.Psychic,
    generation: 4,
    legendary: false,
    image: '436.png'
  },
  {
    number: 437,
    name: 'Bronzong',
    type1: Type.Steel,
    type2: Type.Psychic,
    generation: 4,
    legendary: false,
    image: '437.png'
  },
  {
    number: 438,
    name: 'Bonsly',
    type1: Type.Rock,
    type2: null,
    generation: 4,
    legendary: false,
    image: '438.png'
  },
  {
    number: 439,
    name: 'Mime Jr.',
    type1: Type.Psychic,
    type2: Type.Fairy,
    generation: 4,
    legendary: false,
    image: '439.png'
  },
  {
    number: 440,
    name: 'Happiny',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '440.png'
  },
  {
    number: 441,
    name: 'Chatot',
    type1: Type.Normal,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '441.png'
  },
  {
    number: 442,
    name: 'Spiritomb',
    type1: Type.Ghost,
    type2: Type.Dark,
    generation: 4,
    legendary: false,
    image: '442.png'
  },
  {
    number: 443,
    name: 'Gible',
    type1: Type.Dragon,
    type2: Type.Ground,
    generation: 4,
    legendary: false,
    image: '443.png'
  },
  {
    number: 444,
    name: 'Gabite',
    type1: Type.Dragon,
    type2: Type.Ground,
    generation: 4,
    legendary: false,
    image: '444.png'
  },
  {
    number: 445,
    name: 'Garchomp',
    type1: Type.Dragon,
    type2: Type.Ground,
    generation: 4,
    legendary: false,
    image: '445.png'
  },
  {
    number: 446,
    name: 'Munchlax',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '446.png'
  },
  {
    number: 447,
    name: 'Riolu',
    type1: Type.Fighting,
    type2: null,
    generation: 4,
    legendary: false,
    image: '447.png'
  },
  {
    number: 448,
    name: 'Lucario',
    type1: Type.Fighting,
    type2: Type.Steel,
    generation: 4,
    legendary: false,
    image: '448.png'
  },
  {
    number: 449,
    name: 'Hippopotas',
    type1: Type.Ground,
    type2: null,
    generation: 4,
    legendary: false,
    image: '449.png'
  },
  {
    number: 450,
    name: 'Hippowdon',
    type1: Type.Ground,
    type2: null,
    generation: 4,
    legendary: false,
    image: '450.png'
  },
  {
    number: 451,
    name: 'Skorupi',
    type1: Type.Poison,
    type2: Type.Bug,
    generation: 4,
    legendary: false,
    image: '451.png'
  },
  {
    number: 452,
    name: 'Drapion',
    type1: Type.Poison,
    type2: Type.Dark,
    generation: 4,
    legendary: false,
    image: '452.png'
  },
  {
    number: 453,
    name: 'Croagunk',
    type1: Type.Poison,
    type2: Type.Fighting,
    generation: 4,
    legendary: false,
    image: '453.png'
  },
  {
    number: 454,
    name: 'Toxicroak',
    type1: Type.Poison,
    type2: Type.Fighting,
    generation: 4,
    legendary: false,
    image: '454.png'
  },
  {
    number: 455,
    name: 'Carnivine',
    type1: Type.Grass,
    type2: null,
    generation: 4,
    legendary: false,
    image: '455.png'
  },
  {
    number: 456,
    name: 'Finneon',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '456.png'
  },
  {
    number: 457,
    name: 'Lumineon',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '457.png'
  },
  {
    number: 458,
    name: 'Mantyke',
    type1: Type.Water,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '458.png'
  },
  {
    number: 459,
    name: 'Snover',
    type1: Type.Grass,
    type2: Type.Ice,
    generation: 4,
    legendary: false,
    image: '459.png'
  },
  {
    number: 460,
    name: 'Abomasnow',
    type1: Type.Grass,
    type2: Type.Ice,
    generation: 4,
    legendary: false,
    image: '460.png'
  },
  {
    number: 461,
    name: 'Weavile',
    type1: Type.Dark,
    type2: Type.Ice,
    generation: 4,
    legendary: false,
    image: '461.png'
  },
  {
    number: 462,
    name: 'Magnezone',
    type1: Type.Electric,
    type2: Type.Steel,
    generation: 4,
    legendary: false,
    image: '462.png'
  },
  {
    number: 463,
    name: 'Lickilicky',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '463.png'
  },
  {
    number: 464,
    name: 'Rhyperior',
    type1: Type.Ground,
    type2: Type.Rock,
    generation: 4,
    legendary: false,
    image: '464.png'
  },
  {
    number: 465,
    name: 'Tangrowth',
    type1: Type.Grass,
    type2: null,
    generation: 4,
    legendary: false,
    image: '465.png'
  },
  {
    number: 466,
    name: 'Electivire',
    type1: Type.Electric,
    type2: null,
    generation: 4,
    legendary: false,
    image: '466.png'
  },
  {
    number: 467,
    name: 'Magmortar',
    type1: Type.Fire,
    type2: null,
    generation: 4,
    legendary: false,
    image: '467.png'
  },
  {
    number: 468,
    name: 'Togekiss',
    type1: Type.Fairy,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '468.png'
  },
  {
    number: 469,
    name: 'Yanmega',
    type1: Type.Bug,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '469.png'
  },
  {
    number: 470,
    name: 'Leafeon',
    type1: Type.Grass,
    type2: null,
    generation: 4,
    legendary: false,
    image: '470.png'
  },
  {
    number: 471,
    name: 'Glaceon',
    type1: Type.Ice,
    type2: null,
    generation: 4,
    legendary: false,
    image: '471.png'
  },
  {
    number: 472,
    name: 'Gliscor',
    type1: Type.Ground,
    type2: Type.Flying,
    generation: 4,
    legendary: false,
    image: '472.png'
  },
  {
    number: 473,
    name: 'Mamoswine',
    type1: Type.Ice,
    type2: Type.Ground,
    generation: 4,
    legendary: false,
    image: '473.png'
  },
  {
    number: 474,
    name: 'Porygon-Z',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: false,
    image: '474.png'
  },
  {
    number: 475,
    name: 'Gallade',
    type1: Type.Psychic,
    type2: Type.Fighting,
    generation: 4,
    legendary: false,
    image: '475.png'
  },
  {
    number: 476,
    name: 'Probopass',
    type1: Type.Rock,
    type2: Type.Steel,
    generation: 4,
    legendary: false,
    image: '476.png'
  },
  {
    number: 477,
    name: 'Dusknoir',
    type1: Type.Ghost,
    type2: null,
    generation: 4,
    legendary: false,
    image: '477.png'
  },
  {
    number: 478,
    name: 'Froslass',
    type1: Type.Ice,
    type2: Type.Ghost,
    generation: 4,
    legendary: false,
    image: '478.png'
  },
  {
    number: 479,
    name: 'Rotom',
    type1: Type.Electric,
    type2: Type.Ghost,
    generation: 4,
    legendary: false,
    image: '479.png'
  },
  {
    number: 480,
    name: 'Uxie',
    type1: Type.Psychic,
    type2: null,
    generation: 4,
    legendary: true,
    image: '480.png'
  },
  {
    number: 481,
    name: 'Mesprit',
    type1: Type.Psychic,
    type2: null,
    generation: 4,
    legendary: true,
    image: '481.png'
  },
  {
    number: 482,
    name: 'Azelf',
    type1: Type.Psychic,
    type2: null,
    generation: 4,
    legendary: true,
    image: '482.png'
  },
  {
    number: 483,
    name: 'Dialga',
    type1: Type.Steel,
    type2: Type.Dragon,
    generation: 4,
    legendary: true,
    image: '483.png'
  },
  {
    number: 484,
    name: 'Palkia',
    type1: Type.Water,
    type2: Type.Dragon,
    generation: 4,
    legendary: true,
    image: '484.png'
  },
  {
    number: 485,
    name: 'Heatran',
    type1: Type.Fire,
    type2: Type.Steel,
    generation: 4,
    legendary: true,
    image: '485.png'
  },
  {
    number: 486,
    name: 'Regigigas',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: true,
    image: '486.png'
  },
  {
    number: 487,
    name: 'Giratina',
    type1: Type.Ghost,
    type2: Type.Dragon,
    generation: 4,
    legendary: true,
    image: '487.png'
  },
  {
    number: 488,
    name: 'Cresselia',
    type1: Type.Psychic,
    type2: null,
    generation: 4,
    legendary: false,
    image: '488.png'
  },
  {
    number: 489,
    name: 'Phione',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '489.png'
  },
  {
    number: 490,
    name: 'Manaphy',
    type1: Type.Water,
    type2: null,
    generation: 4,
    legendary: false,
    image: '490.png'
  },
  {
    number: 491,
    name: 'Darkrai',
    type1: Type.Dark,
    type2: null,
    generation: 4,
    legendary: true,
    image: '491.png'
  },
  {
    number: 492,
    name: 'Shaymin (forma tierra)',
    type1: Type.Grass,
    type2: null,
    generation: 4,
    legendary: true,
    image: '492-land.png'
  },
  {
    number: 492,
    name: 'Shaymin (forma cielo)',
    type1: Type.Grass,
    type2: Type.Flying,
    generation: 4,
    legendary: true,
    image: '492-sky.png'
  },
  {
    number: 493,
    name: 'Arceus',
    type1: Type.Normal,
    type2: null,
    generation: 4,
    legendary: true,
    image: '493.png'
  }
];
