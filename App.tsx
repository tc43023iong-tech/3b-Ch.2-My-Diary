
import React, { useState, useEffect, useMemo } from 'react';
import { VOCABULARY, POKEMON_LIST, getPokemonImageUrl } from './constants';
import { GameType, Pokemon, WordItem } from './types';
import { 
  LucideHome, LucideGamepad2, LucideTrash2, LucideBrain, 
  LucideRefreshCcw, LucideTrophy, LucidePlay, LucideCreditCard, 
  LucideList, LucideInfo, LucideX, LucideSearch, LucideArrowLeft, LucideArrowRight
} from 'lucide-react';

// --- Sub-Components ---

const WordDetailModal = ({ word, onClose }: { word: WordItem, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in zoom-in duration-300">
      <div className="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden relative shadow-2xl border-4 border-yellow-400">
        <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full z-10 hover:bg-red-600">
          <LucideX size={24} />
        </button>
        <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${word.details.imageUrl})` }}>
          <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h2 className="text-4xl font-title text-white">{word.english}</h2>
          </div>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[60vh]">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <p className="text-xs font-title text-blue-600 uppercase">🗣️ SYLLABLES</p>
              <p className="text-xl font-bold">{word.details.syllables}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-2xl">
              <p className="text-xs font-title text-purple-600 uppercase">🧩 BREAKDOWN</p>
              <p className="text-xl font-bold">{word.details.breakdown}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-2xl">
              <p className="text-xs font-title text-yellow-600 uppercase">🏛️ ETYMOLOGY</p>
              <p className="text-sm font-medium">{word.details.etymology}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-pink-50 p-4 rounded-2xl">
              <p className="text-xs font-title text-pink-600 uppercase">🍭 FUN FACT</p>
              <p className="text-sm font-medium">{word.details.funFact}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-2xl">
              <p className="text-xs font-title text-green-600 uppercase">✨ REALITY SCANNER</p>
              <p className="text-sm font-medium">{word.details.realityScanner}</p>
            </div>
            <button className="w-full bg-cyan-500 text-white font-title p-3 rounded-2xl shadow-md text-sm">
              TAP TO EXPLORE PHOTOS & HISTORY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- View: Word Explorer ---
const WordListView = () => {
  const [mode, setMode] = useState<'LIST' | 'CARDS' | 'PLAY'>('LIST');
  const [filter, setFilter] = useState<string>('All');
  const [selectedWord, setSelectedWord] = useState<WordItem | null>(null);
  const [cardIdx, setCardIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredVocab = useMemo(() => filter === 'All' ? VOCABULARY : VOCABULARY.filter(w => w.category === filter), [filter]);

  useEffect(() => {
    let timer: any;
    if (mode === 'PLAY' && isPlaying) {
      timer = setInterval(() => setCardIdx(p => (p + 1) % filteredVocab.length), 3000);
    }
    return () => clearInterval(timer);
  }, [mode, isPlaying, filteredVocab]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex bg-white p-4 rounded-3xl shadow-xl border-4 border-yellow-400 mb-6 justify-between items-center gap-4">
        <div className="flex bg-gray-100 p-1 rounded-2xl border-2">
          <button onClick={() => setMode('LIST')} className={`px-4 py-2 rounded-xl flex items-center gap-2 font-bold ${mode === 'LIST' ? 'bg-white shadow text-blue-600' : 'text-gray-400'}`}><LucideList size={18}/>LIST</button>
          <button onClick={() => setMode('CARDS')} className={`px-4 py-2 rounded-xl flex items-center gap-2 font-bold ${mode === 'CARDS' ? 'bg-white shadow text-pink-600' : 'text-gray-400'}`}><LucideCreditCard size={18}/>CARDS</button>
          <button onClick={() => setMode('PLAY')} className={`px-4 py-2 rounded-xl flex items-center gap-2 font-bold ${mode === 'PLAY' ? 'bg-white shadow text-green-600' : 'text-gray-400'}`}><LucidePlay size={18}/>PLAY</button>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {['All', 'Activities', 'Feelings', 'Time'].map(c => (
            <button key={c} onClick={() => { setFilter(c); setCardIdx(0); }} className={`px-4 py-1 rounded-full border-2 font-bold whitespace-nowrap ${filter === c ? 'bg-blue-500 border-blue-600 text-white' : 'bg-white text-gray-400'}`}>{c}</button>
          ))}
        </div>
      </div>

      {mode === 'LIST' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVocab.map(w => (
            <div key={w.id} onClick={() => setSelectedWord(w)} className="bg-white p-5 rounded-3xl shadow-sm border-2 border-blue-50 flex items-center space-x-4 hover:border-yellow-400 hover:scale-[1.02] cursor-pointer">
              <span className="text-5xl">{w.emoji}</span>
              <div className="flex-1">
                <p className="text-2xl font-bold text-blue-600">{w.english}</p>
                <p className="text-xl text-gray-700 font-bold">{w.chinese}</p>
                <p className="text-sm text-gray-400 italic">{w.pronunciation}</p>
              </div>
              <LucideInfo className="text-gray-300"/>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {filteredVocab.length > 0 && (
            <>
              <div className="bg-white rounded-[3rem] shadow-2xl border-8 border-yellow-400 w-full max-w-md aspect-square flex flex-col items-center justify-center p-10 text-center cursor-pointer" onClick={() => setSelectedWord(filteredVocab[cardIdx])}>
                <span className="text-9xl mb-4 animate-bounce">{filteredVocab[cardIdx].emoji}</span>
                <h3 className="text-5xl font-title text-blue-600">{filteredVocab[cardIdx].english}</h3>
                <p className="text-3xl font-bold text-gray-600">{filteredVocab[cardIdx].chinese}</p>
                <div className="mt-8 bg-yellow-100 px-6 py-2 rounded-full font-bold text-yellow-700 flex items-center gap-2"><LucideSearch size={16}/> EXPLORE</div>
              </div>
              <div className="flex gap-8 mt-8">
                <button onClick={() => setCardIdx(p => (p - 1 + filteredVocab.length) % filteredVocab.length)} className="bg-blue-500 text-white p-4 rounded-full"><LucideArrowLeft/></button>
                {mode === 'PLAY' && <button onClick={() => setIsPlaying(!isPlaying)} className={`${isPlaying ? 'bg-red-500' : 'bg-green-500'} text-white p-4 rounded-full`}>{isPlaying ? <LucideX/> : <LucidePlay/>}</button>}
                <button onClick={() => setCardIdx(p => (p + 1) % filteredVocab.length)} className="bg-blue-500 text-white p-4 rounded-full"><LucideArrowRight/></button>
              </div>
            </>
          )}
        </div>
      )}
      {selectedWord && <WordDetailModal word={selectedWord} onClose={() => setSelectedWord(null)} />}
    </div>
  );
};

// --- Game: Emoji Detective ---
const EmojiDetective = ({ onWin }: { onWin: () => void }) => {
  const [idx, setIdx] = useState(0);
  const target = VOCABULARY[idx];
  const options = useMemo(() => [target.english, ...VOCABULARY.filter(w => w.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.english)].sort(() => Math.random() - 0.5), [idx]);

  const select = (o: string) => {
    if (o === target.english) {
      if (idx + 1 < VOCABULARY.length) setIdx(idx + 1);
      else onWin();
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-blue-50 rounded-[3rem] border-4 border-blue-200 min-h-[60vh]">
      <img src={getPokemonImageUrl(54)} className="w-32 h-32 pokemon-float" alt="Psyduck"/>
      <h3 className="text-3xl font-title text-blue-800 my-6">Matching Detective 🕵️</h3>
      <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center mb-10 border-8 border-blue-100">
        <span className="text-9xl block mb-2">{target.emoji}</span>
        <span className="text-4xl font-bold text-blue-400">{target.chinese}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        {options.map(o => <button key={o} onClick={() => select(o)} className="bg-white p-6 rounded-2xl border-4 border-blue-200 text-2xl font-bold text-blue-600 hover:bg-blue-100 shadow-md transition-all active:scale-95">{o}</button>)}
      </div>
    </div>
  );
};

// --- Game: Matching ---
const MatchingGame = ({ onWin }: { onWin: () => void }) => {
  const [pairs, setPairs] = useState<{en:string, cn:string}[]>([]);
  const [selEn, setSelEn] = useState<string|null>(null);
  const [selCn, setSelCn] = useState<string|null>(null);
  const [solved, setSolved] = useState<string[]>([]);

  useEffect(() => setPairs(VOCABULARY.sort(() => Math.random() - 0.5).slice(0, 5).map(w => ({ en: w.english, cn: w.chinese }))), []);
  const shuffledEn = useMemo(() => [...pairs].sort((a,b) => a.en.localeCompare(b.en)), [pairs]);
  const shuffledCn = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);

  useEffect(() => {
    if (selEn && selCn) {
      if (pairs.find(p => p.en === selEn && p.cn === selCn)) {
        setSolved([...solved, selEn]);
        if (solved.length + 1 === pairs.length) onWin();
      }
      setSelEn(null); setSelCn(null);
    }
  }, [selEn, selCn]);

  return (
    <div className="p-8 bg-pink-50 rounded-[3rem] border-4 border-pink-200 min-h-[60vh] text-center">
      <img src={getPokemonImageUrl(133)} className="w-24 h-24 mx-auto mb-6 pokemon-float" alt="Eevee"/>
      <h3 className="text-3xl font-title text-pink-700 mb-8">Word Link 🧩</h3>
      <div className="grid grid-cols-2 gap-10 max-w-2xl mx-auto">
        <div className="flex flex-col gap-4">
          {shuffledEn.map(p => <button key={p.en} disabled={solved.includes(p.en)} onClick={() => setSelEn(p.en)} className={`p-4 rounded-xl text-xl font-bold border-4 transition-all ${solved.includes(p.en) ? 'bg-gray-100 text-gray-300 border-gray-100' : selEn === p.en ? 'bg-pink-400 border-pink-600 text-white' : 'bg-white border-pink-200 text-pink-600'}`}>{p.en}</button>)}
        </div>
        <div className="flex flex-col gap-4">
          {shuffledCn.map(p => <button key={p.cn} disabled={solved.some(s => pairs.find(pair => pair.en === s && pair.cn === p.cn))} onClick={() => setSelCn(p.cn)} className={`p-4 rounded-xl text-xl font-bold border-4 transition-all ${solved.some(s => pairs.find(pair => pair.en === s && pair.cn === p.cn)) ? 'bg-gray-100 text-gray-300 border-gray-100' : selCn === p.cn ? 'bg-blue-400 border-blue-600 text-white' : 'bg-white border-blue-200 text-blue-600'}`}>{p.cn}</button>)}
        </div>
      </div>
    </div>
  );
};

// --- Game: Spelling Bee ---
const SpellingBee = ({ onWin }: { onWin: () => void }) => {
  const [idx, setIdx] = useState(0);
  const target = VOCABULARY[idx];
  const [guess, setGuess] = useState<string[]>([]);
  const letters = useMemo(() => target.english.toLowerCase().replace(/[^a-z]/g, "").split("").sort(() => Math.random() - 0.5), [idx]);

  const add = (l: string) => {
    const cleanTarget = target.english.toLowerCase().replace(/[^a-z]/g, "");
    if (guess.length < cleanTarget.length) {
      const next = [...guess, l];
      setGuess(next);
      if (next.join("") === cleanTarget) {
        if (idx + 1 < VOCABULARY.length) { setIdx(idx + 1); setGuess([]); }
        else onWin();
      }
    }
  };

  return (
    <div className="p-8 bg-yellow-50 rounded-[3rem] border-4 border-yellow-200 flex flex-col items-center min-h-[60vh]">
      <img src={getPokemonImageUrl(25)} className="w-32 h-32 mb-6" alt="Pikachu"/>
      <h3 className="text-3xl font-title text-yellow-800 mb-2">{target.chinese} {target.emoji}</h3>
      <div className="flex flex-wrap justify-center gap-4 my-10 h-16">
        {target.english.toLowerCase().split("").map((c, i) => {
          if (!/[a-z]/.test(c)) return <span key={i} className="text-4xl text-gray-300 mx-1">{c === ' ' ? '  ' : c}</span>;
          const charIdx = target.english.toLowerCase().substring(0, i).replace(/[^a-z]/g, "").length;
          const charInGuess = guess[charIdx];
          return <button key={i} onClick={() => charIdx === guess.length - 1 && setGuess(guess.slice(0, -1))} className="text-4xl font-bold w-12 border-b-4 border-yellow-400 text-center transition-all hover:text-yellow-400">{charInGuess || "_"}</button>;
        })}
      </div>
      <div className="grid grid-cols-5 gap-3 max-w-md">
        {letters.map((l, i) => <button key={i} onClick={() => add(l)} className="bg-white w-14 h-14 rounded-xl border-4 border-yellow-100 text-2xl font-bold shadow hover:bg-yellow-50 transition-all active:scale-95">{l}</button>)}
      </div>
    </div>
  );
};

// --- Game: Fill in Blanks ---
const FillBlanks = ({ onWin }: { onWin: () => void }) => {
  const [idx, setIdx] = useState(0);
  const target = VOCABULARY[idx];
  const options = useMemo(() => [target.english, ...VOCABULARY.filter(w => w.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.english)].sort(() => Math.random() - 0.5), [idx]);

  const select = (o: string) => {
    if (o === target.english) {
      if (idx + 1 < VOCABULARY.length) setIdx(idx + 1);
      else onWin();
    }
  };

  return (
    <div className="p-10 bg-green-50 rounded-[3rem] border-4 border-green-200 flex flex-col items-center">
      <img src={getPokemonImageUrl(1)} className="w-32 h-32 mb-8" alt="Bulbasaur"/>
      <div className="bg-white p-10 rounded-3xl shadow-lg text-3xl font-bold text-center mb-10 w-full max-w-2xl leading-relaxed relative overflow-hidden">
        <div className="absolute top-2 right-4 text-5xl opacity-30 select-none">{target.emoji}</div>
        <p className="z-10 relative">
          {target.sentence.split('_____').map((p, i, a) => (
            <span key={i}>{p}{i < a.length - 1 && <span className="text-green-500 underline underline-offset-8 px-2 font-black">_______</span>}</span>
          ))}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        {options.map(o => <button key={o} onClick={() => select(o)} className="bg-white p-5 rounded-2xl border-4 border-green-100 text-2xl font-bold text-green-700 shadow-md transition-all active:scale-95">{o}</button>)}
      </div>
    </div>
  );
};

// --- Game: Bubble Pop (Fixed Grid) ---
const BubblePop = ({ onWin }: { onWin: () => void }) => {
  const [idx, setIdx] = useState(0);
  const target = VOCABULARY[idx];
  const [caughtCount, setCaughtCount] = useState(0);
  const options = useMemo(() => [target.english, ...VOCABULARY.filter(w => w.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 5).map(w => w.english)].sort(() => Math.random() - 0.5), [idx]);

  const pop = (o: string) => {
    if (o === target.english) {
      setCaughtCount(c => c + 1);
      if (idx + 1 < VOCABULARY.length) setIdx(idx + 1);
      else onWin();
    }
  };

  return (
    <div className="bg-blue-900 rounded-[3rem] p-10 min-h-[70vh] flex flex-col items-center relative overflow-hidden text-center">
      <div className="absolute top-10 left-10 text-5xl opacity-20 bubble-float">🫧</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 bubble-float">🐢</div>
      <h3 className="text-4xl font-title text-cyan-300 drop-shadow-lg mb-4">Ocean Bubble Pop! 🫧</h3>
      <div className="bg-blue-800/50 px-10 py-4 rounded-full border-2 border-cyan-400 text-4xl font-bold text-white mb-12 shadow-2xl">{target.chinese}</div>
      <div className="grid grid-cols-3 grid-rows-2 gap-8 mb-12 z-10">
        {options.map((o, i) => (
          <button key={i} onClick={() => pop(o)} className="w-36 h-36 rounded-full bg-cyan-400/30 border-4 border-white flex items-center justify-center p-4 text-white font-bold text-xl hover:scale-110 active:scale-95 shadow-inner transition-transform">
            {o}
          </button>
        ))}
      </div>
      <div className="bg-white/10 w-full max-w-xl p-4 rounded-3xl border-2 border-white/20 flex flex-wrap gap-2 justify-center min-h-[80px]">
        {Array(caughtCount).fill(0).map((_, i) => (
          <div key={i} className="bg-white/20 rounded-full p-2 animate-in zoom-in duration-300">
            <img src={getPokemonImageUrl(POKEMON_LIST[i % POKEMON_LIST.length].id)} className="w-10 h-10" alt="poke"/>
          </div>
        ))}
        {caughtCount === 0 && <p className="text-cyan-200 italic">Catch Pokemons on shells! 🐚</p>}
      </div>
      <img src={getPokemonImageUrl(7)} className="absolute bottom-4 right-4 w-24 h-24 pokemon-float" alt="Squirtle"/>
    </div>
  );
};

// --- Game: Memory Game ---
const MemoryGame = ({ onWin }: { onWin: () => void }) => {
  const [phase, setPhase] = useState<'study' | 'guess'>('study');
  const [subset, setSubset] = useState<WordItem[]>([]);
  const [missing, setMissing] = useState<WordItem | null>(null);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const s = VOCABULARY.sort(() => Math.random() - 0.5).slice(0, 8);
    setSubset(s); setMissing(s[Math.floor(Math.random()*8)]); setPhase('study'); setTimer(10);
  }, []);

  useEffect(() => {
    if (phase === 'study' && timer > 0) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    } else if (phase === 'study') setPhase('guess');
  }, [timer, phase]);

  return (
    <div className="p-8 bg-purple-50 rounded-[3rem] border-4 border-purple-200 min-h-[60vh] flex flex-col items-center">
      <img src={getPokemonImageUrl(151)} className="w-24 h-24 mb-6 pokemon-float" alt="Mew"/>
      {phase === 'study' ? (
        <>
          <h3 className="text-3xl font-title text-purple-700 mb-2">Memory Time! 🧠</h3>
          <div className="text-5xl font-bold text-red-500 mb-10">{timer}s</div>
          <div className="grid grid-cols-4 gap-4">
            {subset.map(w => (
              <div key={w.id} className="bg-white p-3 rounded-xl shadow-md border-2 border-purple-100 flex flex-col items-center transition-all">
                <span className="text-4xl">{w.emoji}</span>
                <p className="text-[12px] font-bold text-center mt-2">{w.english}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="text-3xl font-title text-purple-700 mb-8">Who is missing? 🤔</h3>
          <div className="grid grid-cols-4 gap-4 mb-10 opacity-40">
            {subset.filter(w => w.id !== missing?.id).map(w => (
              <div key={w.id} className="bg-white p-3 rounded-xl border-2 border-purple-100 flex flex-col items-center">
                <span className="text-4xl">{w.emoji}</span>
              </div>
            ))}
            <div className="bg-purple-200 p-3 rounded-xl flex items-center justify-center text-5xl animate-pulse">❓</div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
            {subset.sort(() => Math.random() - 0.5).map(w => (
              <button key={w.id} onClick={() => w.id === missing?.id ? onWin() : setPhase('study')} className="bg-white p-6 rounded-2xl border-4 border-purple-300 font-bold hover:bg-purple-100 shadow-sm transition-all active:scale-95 text-xl">
                {w.english}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<GameType>(GameType.WORD_LIST);
  const [reward, setReward] = useState<Pokemon | null>(null);

  const handleWin = () => {
    setReward(POKEMON_LIST[Math.floor(Math.random() * POKEMON_LIST.length)]);
    setView(GameType.WORD_LIST);
  };

  return (
    <div className="min-h-screen pb-40 bg-[#f0fdf4]">
      <header className="bg-yellow-400 p-6 shadow-md flex justify-between items-center border-b-8 border-yellow-600 sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <img src={getPokemonImageUrl(25)} alt="Pikachu" className="w-14 h-14" />
          <h1 className="text-3xl font-title text-white drop-shadow-lg uppercase tracking-wider">Ch.2 My Diary</h1>
        </div>
        <div className="flex gap-4 text-4xl">✨🌈</div>
      </header>

      <main className="container mx-auto max-w-5xl p-6">
        {view === GameType.WORD_LIST && <WordListView/>}
        {view === GameType.EMOJI_DETECTIVE && <EmojiDetective onWin={handleWin}/>}
        {view === GameType.MATCHING && <MatchingGame onWin={handleWin}/>}
        {view === GameType.SPELLING_BEE && <SpellingBee onWin={handleWin}/>}
        {view === GameType.FILL_BLANKS && <FillBlanks onWin={handleWin}/>}
        {view === GameType.BUBBLE_POP && <BubblePop onWin={handleWin}/>}
        {view === GameType.MEMORY_GAME && <MemoryGame onWin={handleWin}/>}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-[0_-10px_30px_rgba(0,0,0,0.1)] border-t-8 border-yellow-400 p-4 z-50 overflow-x-auto">
        <div className="flex justify-around items-center min-w-max gap-8 px-6 max-w-5xl mx-auto">
          <NavBtn icon={<LucideHome size={32}/>} label="Review" active={view === GameType.WORD_LIST} onClick={() => setView(GameType.WORD_LIST)} color="text-gray-500" />
          <NavBtn icon="🕵️" label="Detective" active={view === GameType.EMOJI_DETECTIVE} onClick={() => setView(GameType.EMOJI_DETECTIVE)} color="text-blue-500" />
          <NavBtn icon="🧩" label="Link" active={view === GameType.MATCHING} onClick={() => setView(GameType.MATCHING)} color="text-pink-500" />
          <NavBtn icon="🐝" label="Spell" active={view === GameType.SPELLING_BEE} onClick={() => setView(GameType.SPELLING_BEE)} color="text-yellow-600" />
          <NavBtn icon="🖊️" label="Blanks" active={view === GameType.FILL_BLANKS} onClick={() => setView(GameType.FILL_BLANKS)} color="text-green-600" />
          <NavBtn icon="🫧" label="Bubble" active={view === GameType.BUBBLE_POP} onClick={() => setView(GameType.BUBBLE_POP)} color="text-cyan-600" />
          <NavBtn icon="🧠" label="Memory" active={view === GameType.MEMORY_GAME} onClick={() => setView(GameType.MEMORY_GAME)} color="text-purple-600" />
        </div>
      </nav>

      {reward && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-[100] backdrop-blur-md animate-in zoom-in duration-300">
          <div className="bg-white rounded-[5rem] p-12 max-w-sm w-full text-center shadow-2xl border-[16px] border-yellow-400">
            <img src={reward.imageUrl} className="w-64 h-64 mx-auto mb-8 pokemon-float" alt="Pokemon" />
            <h2 className="text-5xl font-title text-yellow-600 mb-4 uppercase tracking-tighter">Gotcha! 🎉</h2>
            <p className="text-3xl font-bold text-gray-700 italic mb-10 tracking-widest uppercase underline decoration-yellow-400">You caught {reward.name}!</p>
            <button onClick={() => setReward(null)} className="bg-green-500 text-white font-title text-2xl py-6 px-12 rounded-full w-full shadow-2xl hover:scale-105 transition-transform active:scale-95 border-b-8 border-green-700">AWESOME!</button>
          </div>
        </div>
      )}
    </div>
  );
}

function NavBtn({ icon, label, active, onClick, color }: { icon: any, label: string, active: boolean, onClick: () => void, color: string }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center p-3 rounded-3xl transition-all ${active ? 'bg-yellow-100 scale-125' : 'opacity-50 grayscale-[50%] hover:opacity-100'}`}>
      <span className={`text-4xl ${active ? color : 'text-gray-400'}`}>{icon}</span>
      <span className={`text-[12px] font-title mt-2 uppercase tracking-wide ${active ? color : 'text-gray-400'}`}>{label}</span>
    </button>
  );
}
