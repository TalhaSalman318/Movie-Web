export interface Movie {
  id: string;
  title: string;
  year: string;
  rating: string;
  duration: string;
  genres: string[];
  description: string;
  poster: string;
  backdrop: string;
  cast: { name: string; role: string; image: string }[];
  director: string;
  writers: string[];
  country: string;
  language: string;
  type: 'movie' | 'tv';
}

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Interstellar',
    year: '2014',
    rating: 'PG-13',
    duration: '2h 49min',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    description: 'When Earth becomes uninhabitable, a team of ex-pilots and scientists travel through a wormhole in search of a new home for humanity.',
    poster: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000',
    director: 'Christopher Nolan',
    writers: ['Jonathan Nolan', 'Christopher Nolan'],
    country: 'USA',
    language: 'English',
    type: 'movie',
    cast: [
      { name: 'Matthew McConaughey', role: 'Cooper', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
      { name: 'Anne Hathaway', role: 'Brand', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    ]
  },
  {
    id: '2',
    title: 'The Dark Knight',
    year: '2008',
    rating: 'PG-13',
    duration: '2h 32min',
    genres: ['Action', 'Crime', 'Drama'],
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    poster: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2000',
    director: 'Christopher Nolan',
    writers: ['Jonathan Nolan', 'Christopher Nolan'],
    country: 'USA',
    language: 'English',
    type: 'movie',
    cast: [
      { name: 'Christian Bale', role: 'Bruce Wayne', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
      { name: 'Heath Ledger', role: 'Joker', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop' },
    ]
  },
  {
    id: '3',
    title: 'Inception',
    year: '2010',
    rating: 'PG-13',
    duration: '2h 28min',
    genres: ['Action', 'Sci-Fi', 'Adventure'],
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000',
    director: 'Christopher Nolan',
    writers: ['Christopher Nolan'],
    country: 'USA',
    language: 'English',
    type: 'movie',
    cast: []
  },
  {
    id: '4',
    title: 'Stranger Things',
    year: '2016',
    rating: 'TV-14',
    duration: '4 Seasons',
    genres: ['Drama', 'Fantasy', 'Horror'],
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000',
    director: 'The Duffer Brothers',
    writers: ['The Duffer Brothers'],
    country: 'USA',
    language: 'English',
    type: 'tv',
    cast: []
  },
  {
    id: '5',
    title: 'The Witcher',
    year: '2019',
    rating: 'TV-MA',
    duration: '3 Seasons',
    genres: ['Action', 'Adventure', 'Fantasy'],
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    poster: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&q=80&w=2000',
    director: 'Lauren Schmidt Hissrich',
    writers: ['Andrzej Sapkowski'],
    country: 'USA',
    language: 'English',
    type: 'tv',
    cast: []
  },
  {
    id: '6',
    title: 'Blade Runner 2049',
    year: '2017',
    rating: 'R',
    duration: '2h 44min',
    genres: ['Action', 'Sci-Fi', 'Drama'],
    description: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years.',
    poster: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000',
    director: 'Denis Villeneuve',
    writers: ['Hampton Fancher', 'Michael Green'],
    country: 'USA',
    language: 'English',
    type: 'movie',
    cast: []
  },
  {
    id: '7',
    title: 'The Last of Us',
    year: '2023',
    rating: 'TV-MA',
    duration: '1 Season',
    genres: ['Action', 'Adventure', 'Drama'],
    description: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.',
    poster: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000',
    director: 'Craig Mazin',
    writers: ['Neil Druckmann'],
    country: 'USA',
    language: 'English',
    type: 'tv',
    cast: []
  },
  {
    id: '8',
    title: 'Dune: Part Two',
    year: '2024',
    rating: 'PG-13',
    duration: '2h 46min',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    poster: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=2000',
    director: 'Denis Villeneuve',
    writers: ['Jon Spaihts', 'Denis Villeneuve'],
    country: 'USA',
    language: 'English',
    type: 'movie',
    cast: []
  },
  {
    id: '9',
    title: 'Oppenheimer',
    year: '2023',
    rating: 'R',
    duration: '3h',
    genres: ['Biography', 'Drama', 'History'],
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=2000',
    director: 'Christopher Nolan',
    writers: ['Christopher Nolan'],
    country: 'USA',
    language: 'English',
    type: 'movie',
    cast: []
  },
  {
    id: '10',
    title: 'The Boys',
    year: '2019',
    rating: 'TV-MA',
    duration: '4 Seasons',
    genres: ['Action', 'Comedy', 'Crime'],
    description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
    poster: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=2000',
    director: 'Eric Kripke',
    writers: ['Garth Ennis'],
    country: 'USA',
    language: 'English',
    type: 'tv',
    cast: []
  },
  {
    id: '11',
    title: 'Succession',
    year: '2018',
    rating: 'TV-MA',
    duration: '4 Seasons',
    genres: ['Drama'],
    description: 'The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    director: 'Jesse Armstrong',
    writers: ['Jesse Armstrong'],
    country: 'USA',
    language: 'English',
    type: 'tv',
    cast: []
  },
  {
    id: '12',
    title: 'The Bear',
    year: '2022',
    rating: 'TV-MA',
    duration: '3 Seasons',
    genres: ['Comedy', 'Drama'],
    description: 'A young chef from the fine dining world comes home to Chicago to run his family\'s sandwich shop.',
    poster: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000',
    director: 'Christopher Storer',
    writers: ['Christopher Storer'],
    country: 'USA',
    language: 'English',
    type: 'tv',
    cast: []
  },
  {
    id: '13',
    title: 'Poor Things',
    year: '2023',
    rating: 'R',
    duration: '2h 21min',
    genres: ['Comedy', 'Drama', 'Romance'],
    description: 'The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000',
    director: 'Yorgos Lanthimos',
    writers: ['Tony McNamara'],
    country: 'UK',
    language: 'English',
    type: 'movie',
    cast: []
  },
  {
    id: '14',
    title: 'Spider-Man: Across the Spider-Verse',
    year: '2023',
    rating: 'PG',
    duration: '2h 20min',
    genres: ['Action', 'Adventure', 'Animation'],
    description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
    poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=2000',
    director: 'Joaquim Dos Santos',
    writers: ['Phil Lord', 'Christopher Miller'],
    country: 'USA',
    language: 'English',
    type: 'movie',
    cast: []
  },
  {
    id: '15',
    title: 'The Godfather',
    year: '1972',
    rating: 'R',
    duration: '2h 55min',
    genres: ['Crime', 'Drama'],
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800',
    backdrop: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=2000',
    director: 'Francis Ford Coppola',
    writers: ['Mario Puzo', 'Francis Ford Coppola'],
    country: 'USA',
    language: 'English',
    type: 'movie',
    cast: []
  }
];






