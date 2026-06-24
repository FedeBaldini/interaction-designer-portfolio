/**
 * Intrinsic pixel dimensions of the local portfolio images. Used to set
 * width/height on <img>, so the browser reserves space from the implicit
 * aspect ratio and avoids layout shift (CLS) while the image loads.
 *
 * Remote images (e.g. Unsplash) carry their size in the URL query (w/h),
 * so they are resolved at runtime by imageDimensions() instead.
 */
const LOCAL: Record<string, [number, number]> = {
  'placeholder.svg': [1200, 800],
  '3.png': [3249, 2396],
  'AppBommie.png': [4284, 1995],
  'ArtaleBaldiniVerdicaro_Tabu_.png': [1240, 1754],
  'ArtaleBaldiniVerdicaro_Tabu_2.png': [1240, 1754],
  'ArtaleBaldiniVerdicaro_Tabu_3.png': [1240, 1754],
  'ArtaleBaldiniVerdicaro_Tabu_4.png': [1240, 1754],
  'Box_Mockups_3.png': [1171, 1166],
  'Free_iPhone_11_Pro_Mockup_1.png': [3000, 3000],
  'Free_Notepad_Mockup_5.png': [2139, 1924],
  'GamePage.png': [1090, 1090],
  'Gemini_Generated_Image_8209lu8209lu8209.png': [1024, 4048],
  'Home.png': [1090, 1090],
  'IMG_0291.jpg': [3553, 5330],
  'IMG_0292.jpg': [3573, 5360],
  'IMG_0329.jpg': [3648, 5472],
  'iPhone_16_Pro.jpg': [1500, 1125],
  'Lega.png': [1090, 1090],
  'Magazine_Mockup_1.png': [2200, 1400],
  'Magazine_Mockup_3.png': [2200, 1400],
  'Magazine_Mockup_6.png': [2200, 1600],
  'Magazine_Mockup_7.png': [2200, 1399],
  'MockUp_Carte_1.png': [4000, 3200],
  'MockUp_PatternCRTE.png': [4000, 3200],
  'Orizzontale-1.jpg': [6000, 4000],
  'Orizzontale-2.jpg': [5433, 3622],
  'Orizzontale-3.jpg': [6000, 4000],
  'Orizzontale-4.jpg': [6000, 4000],
  'Risorsa_1_1.jpg': [1049, 343],
  'Screenshot_2026-06-21_alle_12.56.59.png': [1270, 1800],
  'SitoWeb.png': [4000, 2000],
  'Verticale-5.jpg': [4000, 6000],
};

export function imageDimensions(src: string): { width: number; height: number } | undefined {
  if (src.startsWith('/portfolio/')) {
    const d = LOCAL[src.slice('/portfolio/'.length)];
    return d ? { width: d[0], height: d[1] } : undefined;
  }
  try {
    const url = new URL(src);
    const w = Number(url.searchParams.get('w'));
    const h = Number(url.searchParams.get('h'));
    if (w && h) return { width: w, height: h };
  } catch {
    // not a parseable absolute URL — fall through
  }
  return undefined;
}
