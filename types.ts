
export interface WordDetail {
  syllables: string;
  breakdown: string;
  etymology: string;
  funFact: string;
  realityScanner: string;
  imageUrl: string;
}

export interface WordItem {
  id: number;
  english: string;
  chinese: string;
  pronunciation: string;
  emoji: string;
  sentence: string;
  category: 'Activities' | 'Feelings' | 'Time';
  details: WordDetail;
}

export enum GameType {
  WORD_LIST = 'WORD_LIST',
  EMOJI_DETECTIVE = 'EMOJI_DETECTIVE',
  MATCHING = 'MATCHING',
  SPELLING_BEE = 'SPELLING_BEE',
  FILL_BLANKS = 'FILL_BLANKS',
  BUBBLE_POP = 'BUBBLE_POP',
  MEMORY_GAME = 'MEMORY_GAME'
}

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}
