import React, { useState, useEffect, useRef } from "react";
import { Bell, Volume2, VolumeX } from "lucide-react";

function playWaiterBeep(audioCtxRef: React.MutableRefObject<AudioContext | null>) {
  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;

  if (!AudioContextClass) return;

  try {
    if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
      audioCtxRef.current = new AudioContextClass();
    }
    const audioContext = audioCtxRef.current;

    if (audioContext.state === "suspended") {
      audioContext.resume().catch(() => {});
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 880;

    gain.gain.setValueAtTime(0.15, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.25
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.25);

    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
    };
  } catch {
    // Ignore audio errors on restricted devices
  }
}

export const CallWaiter: React.FC = () => {
  const [muted, setMuted] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const handleCallWaiterClick = () => {
    if (!muted) {
      playWaiterBeep(audioCtxRef);
    }
    setIsClicking(true);
    window.setTimeout(() => setIsClicking(false), 450);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      <button
        type="button"
        onClick={() => setMuted((prev) => !prev)}
        aria-label={muted ? "Unmute Call Waiter beep" : "Mute Call Waiter beep"}
        title={muted ? "Unmute beep sound" : "Mute beep sound"}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2D0000]/90 hover:bg-[#2D0000] text-[#EEEAD7] border border-[#C9A227]/60 shadow-lg flex items-center justify-center transition-transform duration-150 hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A227]"
      >
        {muted ? (
          <VolumeX className="w-4 h-4 text-[#C9A227]" />
        ) : (
          <Volume2 className="w-4 h-4 text-[#C9A227]" />
        )}
      </button>

      <button
        type="button"
        onClick={handleCallWaiterClick}
        className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-[#6D0808] hover:bg-[#2D0000] text-[#FFFFFF] text-sm font-semibold border border-[#C9A227] shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C9A227] ${
          isClicking ? "animate-waiter-ring" : ""
        }`}
      >
        <Bell className="w-4 h-4 text-[#C9A227]" aria-hidden="true" />
        <span>Call Waiter</span>
      </button>
    </div>
  );
};
