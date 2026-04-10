"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoTours() {
  const { t, language } = useLanguage();
  const vt: any = t.video_tours || {};
  
  const [videos, setVideos] = useState<any[]>([]);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handlePlay = (url: string) => {
    setIframeLoaded(false);
    setPlayingVideo(url);
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/videos`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setVideos(data);
      })
      .catch(err => console.error("Could not fetch videos", err));
  }, []);

  const getTitle = (v: any) => {
    if (language === 'ar') return v.titleAr || v.titleEn;
    if (language === 'zh') return v.titleZh || v.titleEn;
    return v.titleEn;
  };

  const getUrl = (v: any) => {
    if (language === 'ar' && v.youtubeUrlAr) return v.youtubeUrlAr;
    if (language === 'zh' && v.youtubeUrlZh) return v.youtubeUrlZh;
    return v.youtubeUrl;
  };

  const getThumb = (v: any) => {
    if (language === 'ar' && v.thumbnailUrlAr) return v.thumbnailUrlAr;
    if (language === 'zh' && v.thumbnailUrlZh) return v.thumbnailUrlZh;
    return v.thumbnailUrl;
  };

  // Convert standand youtube url to embed url
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    let videoId = "";
    if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("embed/")) {
      return url + "?autoplay=1";
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  if (videos.length === 0) return null;

  const mainVideo = videos[0];
  const sideVideos = videos.slice(1, 3);
  const extraVideos = videos.slice(3);

  return (
    <section className="py-24 bg-[var(--color-brand-navy)] text-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {vt.title || "Exclusive Campus Coverage"}
          </h2>
          <p className="text-gray-300 text-lg">
            {vt.desc || "Take a real look at student life in Malaysia."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Main Video Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`md:col-span-8 ${sideVideos.length === 0 ? 'md:col-span-12' : ''}`}
          >
            <div onClick={() => handlePlay(getUrl(mainVideo))} className="block relative rounded-[32px] overflow-hidden bg-black aspect-video border-4 border-white/10 shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" style={{ backgroundImage: `url('${getThumb(mainVideo) || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop"}')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center text-white pl-1 shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={36} className="fill-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="bg-[var(--color-brand-navy)] px-3 py-1 rounded-lg text-sm font-bold mb-3 inline-block">Campus Tour</span>
                <h3 className="text-2xl font-bold line-clamp-1">{getTitle(mainVideo)}</h3>
              </div>
            </div>
          </motion.div>

          {/* Side Video Features */}
          {sideVideos.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 flex flex-col gap-6"
            >
              {sideVideos.map((v) => (
                <div key={v.id} onClick={() => handlePlay(getUrl(v))} className="block relative rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 group cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" style={{ backgroundImage: `url('${getThumb(v) || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"}')` }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={20} className="fill-white pl-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h4 className="font-bold text-sm drop-shadow-md">{getTitle(v)}</h4>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Extra Videos Grid */}
        {extraVideos.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            {extraVideos.map(v => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={v.id} onClick={() => handlePlay(getUrl(v))} className="block relative rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 group cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" style={{ backgroundImage: `url('${getThumb(v) || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"}')` }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} className="fill-white pl-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="font-bold text-sm drop-shadow-md pt-2 line-clamp-2">{getTitle(v)}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Inline Video Player Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
          >
            <button 
              onClick={() => setPlayingVideo(null)} 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 z-[110]"
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-0">
                  <div className="w-12 h-12 border-4 border-white/20 border-t-[var(--color-brand-gold)] rounded-full animate-spin mb-4"></div>
                  <span className="text-sm font-bold text-gray-400">Loading YouTube Player...</span>
                </div>
              )}
              <iframe 
                width="100%" 
                height="100%" 
                src={getEmbedUrl(playingVideo)} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                onLoad={() => setIframeLoaded(true)}
                className={`relative z-10 transition-opacity duration-700 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
