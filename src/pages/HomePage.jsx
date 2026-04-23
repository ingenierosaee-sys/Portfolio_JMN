import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageShell } from '../components/PageShell';

function useAmbientSound() {
  const ctxRef = useRef(null);
  const nodesRef = useRef({});

  const start = async () => {
    if (!ctxRef.current) {
      const ctx = new AudioContext();
      const noise = ctx.createBufferSource();
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
      noise.buffer = buffer;
      noise.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 520;
      const gain = ctx.createGain();
      gain.gain.value = 0.018;
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
      ctxRef.current = ctx;
      nodesRef.current = { noise };
    }
    await ctxRef.current.resume();
  };

  const stop = async () => {
    if (ctxRef.current) await ctxRef.current.suspend();
  };

  return { start, stop };
}

export function HomePage({ t, lang }) {
  const [showIntro, setShowIntro] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const { start, stop } = useAmbientSound();
  const bio = useMemo(() => (lang === 'es' ? 'Explora el portfolio' : 'Explore portfolio'), [lang]);

  const toggleSound = async () => {
    if (soundOn) {
      await stop();
      setSoundOn(false);
    } else {
      await start();
      setSoundOn(true);
    }
  };

  return (
    <PageShell>
      <AnimatePresence>
        {showIntro && (
          <motion.section className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="intro-grain" />
            <h1>{t.intro.line}</h1>
            <div className="intro-actions">
              <button onClick={() => setShowIntro(false)}>{t.intro.enter}</button>
              <button onClick={toggleSound}>{soundOn ? t.intro.soundOn : t.intro.soundOff}</button>
              <button onClick={() => setShowIntro(false)}>{t.intro.skip}</button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {!showIntro && (
        <section className="home-hero">
          <div className="atmosphere-blob blob-a" />
          <div className="atmosphere-blob blob-b" />
          <p className="muted">{bio}</p>
          <h2>Jorge Mas Navalón</h2>
          <p className="role">{t.home.role}</p>
          <p className="home-text">{t.home.statement}</p>
          <div className="home-links">
            <Link className="interactive" to="/projects">{t.nav.projects}</Link>
            <Link className="interactive" to="/about">{t.nav.about}</Link>
          </div>
        </section>
      )}
    </PageShell>
  );
}
