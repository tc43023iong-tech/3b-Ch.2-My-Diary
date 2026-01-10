
import { WordItem, Pokemon } from './types';

export const VOCABULARY: WordItem[] = [
  { 
    id: 1, english: 'after-school activities', chinese: '課後活動', pronunciation: '/ˈɑːftə skuːl ækˈtɪvətiz/', emoji: '🎨', 
    sentence: 'I enjoy many _____ like drawing.', category: 'Activities',
    details: { syllables: 'af-ter-school ac-tiv-i-ties', breakdown: 'after + school + activities', etymology: 'From Old English "aefter" (behind) and Latin "activitas".', funFact: 'Some schools offer over 50 types of clubs!', realityScanner: 'Extracurricular activities build hobbies.', imageUrl: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=400' }
  },
  { 
    id: 2, english: 'listen to music', chinese: '聽音樂', pronunciation: '/ˈlɪsən tə ˈmjuːzɪk/', emoji: '🎧', 
    sentence: 'I like to _____ when I study.', category: 'Activities',
    details: { syllables: 'lis-ten to mu-sic', breakdown: 'listen + to + music', etymology: '"Music" comes from the Greek "Mousai".', funFact: 'Plants can grow faster with music!', realityScanner: 'Music can change your mood instantly.', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400' }
  },
  { 
    id: 3, english: 'watch online videos', chinese: '看網上影片', pronunciation: '/wɒtʃ ˈɒnlaɪn ˈvɪdiəʊz/', emoji: '📺', 
    sentence: 'I _____ about Pokemon.', category: 'Activities',
    details: { syllables: 'watch on-line vid-e-os', breakdown: 'watch + online + videos', etymology: '"Video" is Latin for "I see".', funFact: 'The first YT video was in 2005.', realityScanner: 'Videos are stored in giant data centers.', imageUrl: 'https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?auto=format&fit=crop&w=400' }
  },
  { 
    id: 4, english: 'play mobile games', chinese: '玩手機遊戲', pronunciation: '/pleɪ ˈməʊbaɪl ɡeɪmz/', emoji: '📱', 
    sentence: 'Don\'t _____ for too long!', category: 'Activities',
    details: { syllables: 'play mo-bile games', breakdown: 'play + mobile + games', etymology: '"Mobile" means easy to move.', funFact: '"Snake" was on 350M phones!', realityScanner: 'Games use engines for physics.', imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400' }
  },
  { 
    id: 5, english: 'chat with friends', chinese: '與朋友聊天', pronunciation: '/tʃæt wɪð frendz/', emoji: '💬', 
    sentence: 'I _____ on the phone.', category: 'Activities',
    details: { syllables: 'chat with friends', breakdown: 'chat + with + friends', etymology: '"Chat" mimics bird sounds.', funFact: '"Friend" means "to love".', realityScanner: 'Socializing builds empathy.', imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400' }
  },
  { 
    id: 6, english: 'study for exams', chinese: '為考試溫習', pronunciation: '/ˈstʌdi fə ɪɡˈzæmz/', emoji: '📚', 
    sentence: 'I must _____ tonight.', category: 'Activities',
    details: { syllables: 'stud-y for ex-ams', breakdown: 'study + for + exams', etymology: 'From "studere", to be eager.', funFact: 'Napping helps memory!', realityScanner: 'Exams track progress.', imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400' }
  },
  { 
    id: 7, english: 'practise the piano', chinese: '練鋼琴', pronunciation: '/ˈpræk.tɪs ðə piˈænəʊ/', emoji: '🎹', 
    sentence: 'I _____ every day.', category: 'Activities',
    details: { syllables: 'prac-tise the pi-an-o', breakdown: 'practise + piano', etymology: '"Piano" means soft-loud.', funFact: 'Pianos have 230 strings!', realityScanner: 'Music improves focus.', imageUrl: 'https://images.unsplash.com/photo-1520529688554-473c9b77bb14?auto=format&fit=crop&w=400' }
  },
  { 
    id: 8, english: 'play card games', chinese: '玩紙牌遊戲', pronunciation: '/pleɪ kɑːd ɡeɪmz/', emoji: '🃏', 
    sentence: 'We _____ at home.', category: 'Activities',
    details: { syllables: 'play card games', breakdown: 'play + card + games', etymology: 'Greek "chartes" leaf.', funFact: '4 suits = 4 seasons.', realityScanner: 'Cards teach strategy.', imageUrl: 'https://images.unsplash.com/photo-1521010795848-f2f750e80f73?auto=format&fit=crop&w=400' }
  },
  { 
    id: 9, english: 'play board games', chinese: '玩棋類遊戲', pronunciation: '/pleɪ bɔːd ɡeɪmz/', emoji: '🎲', 
    sentence: 'Chess is a great _____.', category: 'Activities',
    details: { syllables: 'play board games', breakdown: 'play + board + games', etymology: '"Board" means wooden plank.', funFact: 'Oldest game is "Senet".', realityScanner: 'Board games teach rules.', imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=400' }
  },
  { 
    id: 10, english: 'sick', chinese: '生病', pronunciation: '/sɪk/', emoji: '🤒', 
    sentence: 'I feel _____ today.', category: 'Feelings',
    details: { syllables: 'sick', breakdown: 's-i-c-k', etymology: 'Old English "seoc".', funFact: 'Laughter heals!', realityScanner: 'Immune system is an army.', imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400' }
  },
  { 
    id: 11, english: 'lonely', chinese: '孤單', pronunciation: '/ˈləʊnli/', emoji: '😟', 
    sentence: 'I feel _____ without you.', category: 'Feelings',
    details: { syllables: 'lone-ly', breakdown: 'lone + ly', etymology: 'All + one.', funFact: 'Chat benches help!', realityScanner: 'Loneliness is a signal.', imageUrl: 'https://images.unsplash.com/photo-1516589174184-c68526514ec0?auto=format&fit=crop&w=400' }
  },
  { 
    id: 12, english: 'busy', chinese: '忙碌', pronunciation: '/ˈbɪzi/', emoji: '🐝', 
    sentence: 'I am _____ with homework.', category: 'Feelings',
    details: { syllables: 'bus-y', breakdown: 'bus-y', etymology: 'Old English "bisig".', funFact: 'Bees visit 2k flowers!', realityScanner: 'Balance is key.', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400' }
  },
  { 
    id: 13, english: 'free', chinese: '清閒', pronunciation: '/friː/', emoji: '🕊️', 
    sentence: 'Are you _____ tomorrow?', category: 'Time',
    details: { syllables: 'free', breakdown: 'f-r-e-e', etymology: 'Connected to "friend".', funFact: 'Leisure means "allowed".', realityScanner: 'Free time is creative.', imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400' }
  },
  { 
    id: 14, english: 'yesterday', chinese: '昨天', pronunciation: '/ˈjestədeɪ/', emoji: '📅', 
    sentence: '_____ was Monday.', category: 'Time',
    details: { syllables: 'yes-ter-day', breakdown: 'yes + ter + day', etymology: 'From "yester" (previous).', funFact: 'Earth is 4.5 billion years old!', realityScanner: 'Memory is vital.', imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=400' }
  },
  { 
    id: 15, english: 'diary', chinese: '日記', pronunciation: '/ˈdaɪəri/', emoji: '📔', 
    sentence: 'I write in my _____.', category: 'Activities',
    details: { syllables: 'di-a-ry', breakdown: 'di + ary', etymology: 'Latin "dies" (day).', funFact: 'Diaries help you think!', realityScanner: 'Writing is expression.', imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400' }
  },
  { 
    id: 16, english: 'collected', chinese: '收集', pronunciation: '/kəˈlektɪd/', emoji: '📦', 
    sentence: 'I _____ many cards.', category: 'Activities',
    details: { syllables: 'col-lect-ed', breakdown: 'collect + ed', etymology: 'Latin "colligere".', funFact: 'Stamp collections can be 8M!', realityScanner: 'Collecting is a hobby.', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400' }
  },
  { 
    id: 17, english: 'hour', chinese: '小時', pronunciation: '/ˈaʊə/', emoji: '⌛', 
    sentence: 'Wait for one _____.', category: 'Time',
    details: { syllables: 'hour', breakdown: 'h + our', etymology: 'Greek "hora".', funFact: '60 minutes = 1 hour.', realityScanner: 'Time is precise.', imageUrl: 'https://images.unsplash.com/photo-1508962914676-13942583913f?auto=format&fit=crop&w=400' }
  },
  { 
    id: 18, english: 'sleepy', chinese: '睏倦', pronunciation: '/ˈsliːpi/', emoji: '😴', 
    sentence: 'I am so _____ now.', category: 'Feelings',
    details: { syllables: 'sleep-y', breakdown: 'sleep + y', etymology: 'From "sleep".', funFact: 'Dolphins sleep with 1 eye open!', realityScanner: 'Rest is healing.', imageUrl: 'https://images.unsplash.com/photo-1511295744334-f4d56f614d60?auto=format&fit=crop&w=400' }
  },
  { 
    id: 19, english: 'nap', chinese: '小睡', pronunciation: '/næp/', emoji: '🛌', 
    sentence: 'Take a short _____.', category: 'Activities',
    details: { syllables: 'nap', breakdown: 'n + ap', etymology: 'Old English "hnappian".', funFact: 'Cats nap 16 hours a day!', realityScanner: 'Quick rest helps.', imageUrl: 'https://images.unsplash.com/photo-1520206159162-99ecd262d395?auto=format&fit=crop&w=400' }
  },
  { 
    id: 20, english: 'hurry', chinese: '趕快', pronunciation: '/ˈhʌri/', emoji: '🏃', 
    sentence: 'Please _____ up!', category: 'Time',
    details: { syllables: 'hur-ry', breakdown: 'hur + ry', etymology: 'Middle English.', funFact: 'The fastest man is Usain Bolt.', realityScanner: 'Speed is relative.', imageUrl: 'https://images.unsplash.com/photo-1461896756913-647ee652a1bb?auto=format&fit=crop&w=400' }
  },
  { 
    id: 21, english: 'quickly', chinese: '快速地', pronunciation: '/ˈkwɪkli/', emoji: '⚡', 
    sentence: 'Run _____ to school.', category: 'Time',
    details: { syllables: 'quick-ly', breakdown: 'quick + ly', etymology: 'From "quick" (alive).', funFact: 'Light is the fastest thing!', realityScanner: 'Efficiency saves time.', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400' }
  },
  { 
    id: 22, english: 'suddenly', chinese: '突然地', pronunciation: '/ˈsʌdənli/', emoji: '💥', 
    sentence: '_____ it rained.', category: 'Time',
    details: { syllables: 'sud-den-ly', breakdown: 'sudden + ly', etymology: 'Latin "subitaneus".', funFact: 'Sudden events are surprises!', realityScanner: 'Change is constant.', imageUrl: 'https://images.unsplash.com/photo-142890636444d-9b727613a2ee?auto=format&fit=crop&w=400' }
  },
  { 
    id: 23, english: 'rushed', chinese: '飛奔', pronunciation: '/rʌʃt/', emoji: '💨', 
    sentence: 'I _____ out the door.', category: 'Time',
    details: { syllables: 'rushed', breakdown: 'rush + ed', etymology: 'From "rush".', funFact: 'Rush hour is busy!', realityScanner: 'Move with purpose.', imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756edd811?auto=format&fit=crop&w=400' }
  },
  { 
    id: 24, english: 'smart', chinese: '聰明的', pronunciation: '/smɑːt/', emoji: '💡', 
    sentence: 'He is a _____ boy.', category: 'Feelings',
    details: { syllables: 'smart', breakdown: 's + m + a + r + t', etymology: 'Means clever.', funFact: 'Pigs are very smart animals!', realityScanner: 'Learning makes you smart.', imageUrl: 'https://images.unsplash.com/photo-1506784919140-50d7502894a1?auto=format&fit=crop&w=400' }
  },
  { 
    id: 25, english: 'important', chinese: '重要的', pronunciation: '/ɪmˈpɔːtənt/', emoji: '⭐', 
    sentence: 'Health is _____.', category: 'Feelings',
    details: { syllables: 'im-por-tant', breakdown: 'im + portant', etymology: 'Latin "importare".', funFact: 'Love is important!', realityScanner: 'Prioritize values.', imageUrl: 'https://images.unsplash.com/photo-1454165833767-02a6e3099033?auto=format&fit=crop&w=400' }
  }
];

export const getPokemonImageUrl = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const POKEMON_LIST: Pokemon[] = [
  { id: 1, name: 'Bulbasaur', imageUrl: getPokemonImageUrl(1) },
  { id: 4, name: 'Charmander', imageUrl: getPokemonImageUrl(4) },
  { id: 7, name: 'Squirtle', imageUrl: getPokemonImageUrl(7) },
  { id: 25, name: 'Pikachu', imageUrl: getPokemonImageUrl(25) },
  { id: 39, name: 'Jigglypuff', imageUrl: getPokemonImageUrl(39) },
  { id: 54, name: 'Psyduck', imageUrl: getPokemonImageUrl(54) },
  { id: 133, name: 'Eevee', imageUrl: getPokemonImageUrl(133) },
  { id: 151, name: 'Mew', imageUrl: getPokemonImageUrl(151) },
  { id: 175, name: 'Togepi', imageUrl: getPokemonImageUrl(175) },
  { id: 186, name: 'Politoed', imageUrl: getPokemonImageUrl(186) },
  { id: 252, name: 'Treecko', imageUrl: getPokemonImageUrl(252) },
  { id: 255, name: 'Torchic', imageUrl: getPokemonImageUrl(255) },
  { id: 258, name: 'Mudkip', imageUrl: getPokemonImageUrl(258) },
  { id: 448, name: 'Lucario', imageUrl: getPokemonImageUrl(448) }
];
