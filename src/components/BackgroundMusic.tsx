import { useEffect, useRef, useState } from 'react';
import type { Stage } from '../App';

export interface BackgroundMusicProps {
  stage: Stage;
}

const MUSIC_URL = '/assets/back.mpeg';

export default function BackgroundMusic({ stage }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicOn, setMusicOn] = useState(true);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (stage !== 'home' || !musicOn) {
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    const playAudio = async () => {
      try {
        audio.currentTime = 0;
        await audio.play();
      } catch {
        // Autoplay is blocked until a user gesture. The user can still enable music manually.
      }
    };

    void playAudio();
  }, [musicOn, stage]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !musicOn;
  }, [musicOn]);

  return (
    <button
      type="button"
      onClick={() => setMusicOn((prev) => !prev)}
      aria-label={musicOn ? 'Turn music off' : 'Turn music on'}
      className="fixed right-6 top-6 z-[200] flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-bone backdrop-blur-md transition hover:border-white/30"
      style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
    >
      <span className={`inline-block h-2.5 w-2.5 rounded-full ${musicOn ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]' : 'bg-zinc-500'}`} />
      {musicOn ? 'Music On' : 'Music Off'}
    </button>
  );
}
