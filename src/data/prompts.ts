export interface Prompt {
  id: string;
  title: string;
  titleZh: string;
  category: string;
  subcategory?: string;
  prompt: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  model: 'seedance-1.0' | 'seedance-1.0-pro' | 'seedance-2.0';
  type: 'text-to-video' | 'image-to-video';
  duration?: string;
  resolution?: string;
  camera?: string[];
  featured?: boolean;
  videoPreview?: string;
  createdAt: string;
}

export const categories = [
  { id: 'cinematic', name: 'Cinematic', nameZh: '电影风格', icon: '🎬', color: '#E50914' },
  { id: 'commercial', name: 'Commercial', nameZh: '商业广告', icon: '💼', color: '#00D4AA' },
  { id: 'anime', name: 'Anime', nameZh: '动漫风格', icon: '🎨', color: '#FF6B9D' },
  { id: 'product', name: 'Product', nameZh: '产品展示', icon: '📦', color: '#FFB800' },
  { id: 'portrait', name: 'Portrait', nameZh: '人像视频', icon: '👤', color: '#9B59B6' },
  { id: 'nature', name: 'Nature', nameZh: '自然风景', icon: '🌿', color: '#27AE60' },
  { id: 'action', name: 'Action', nameZh: '动作场景', icon: '⚡', color: '#E74C3C' },
  { id: 'fantasy', name: 'Fantasy/Sci-Fi', nameZh: '奇幻科幻', icon: '🚀', color: '#3498DB' },
  { id: 'lifestyle', name: 'Lifestyle', nameZh: '生活方式', icon: '☕', color: '#F39C12' },
  { id: 'ugc', name: 'UGC Style', nameZh: 'UGC风格', icon: '📱', color: '#1ABC9C' },
];

export const prompts: Prompt[] = [
  // === CINEMATIC ===
  {
    id: 'cinematic-001',
    title: 'Detective in Rain',
    titleZh: '雨中侦探',
    category: 'cinematic',
    prompt: `Medium full shot of a detective in a long trench coat as he stalks down a dimly lit, rainy city street at night. Neon signs reflect off wet pavement. The camera tracks alongside him with slight handheld movement. Film noir style, high contrast lighting, rain droplets visible, moody atmosphere, cinematic color grading.`,
    tags: ['noir', 'rain', 'detective', 'night', 'tracking shot'],
    difficulty: 'intermediate',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '5-8s',
    camera: ['tracking shot', 'handheld'],
    featured: true,
    createdAt: '2026-02-15',
  },
  {
    id: 'cinematic-002',
    title: 'Epic Sunrise Mountain',
    titleZh: '史诗日出山峰',
    category: 'cinematic',
    prompt: `Aerial drone shot slowly rising over misty mountain peaks at golden hour sunrise. Volumetric fog fills the valleys below. Warm orange and pink light illuminates snow-capped summits. Camera gradually tilts up to reveal endless mountain range. Cinematic 2.39:1 aspect ratio feel, documentary style, breathtaking natural beauty.`,
    tags: ['aerial', 'mountains', 'sunrise', 'drone', 'landscape'],
    difficulty: 'beginner',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '8-10s',
    camera: ['aerial', 'tilt up', 'slow rise'],
    featured: true,
    createdAt: '2026-02-14',
  },
  {
    id: 'cinematic-003',
    title: 'Samurai Showdown',
    titleZh: '武士对决',
    category: 'cinematic',
    prompt: `Two samurai warriors face each other in a bamboo forest clearing. Wind rustles the leaves. Close-up on eyes, lens switch to wide shot as they draw swords simultaneously. Slow motion sword clash with sparks flying. Camera orbits around the impact point. Japanese period drama style, golden hour backlight, dust particles in air.`,
    tags: ['samurai', 'action', 'slow motion', 'sword', 'japanese'],
    difficulty: 'advanced',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '10-15s',
    camera: ['close-up', 'wide shot', 'orbit', 'slow motion'],
    featured: false,
    createdAt: '2026-02-13',
  },

  // === COMMERCIAL ===
  {
    id: 'commercial-001',
    title: 'Luxury Watch Showcase',
    titleZh: '奢华手表展示',
    category: 'commercial',
    prompt: `A luxury silver chronograph watch rotating smoothly 360 degrees on a reflective black surface. Dramatic side lighting creates sharp highlights on polished metal. Camera slowly pushes in from medium to macro detail on watch face. Studio lighting, commercial photography style, high-end product advertisement, no background distractions.`,
    tags: ['watch', 'luxury', 'product', '360 rotation', 'macro'],
    difficulty: 'beginner',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '5-8s',
    camera: ['push in', '360 rotation', 'macro'],
    featured: true,
    createdAt: '2026-02-15',
  },
  {
    id: 'commercial-002',
    title: 'Skincare Product Drop',
    titleZh: '护肤品水滴',
    category: 'commercial',
    prompt: `A droplet of golden serum falls in slow motion onto a frosted glass bottle. The liquid splashes elegantly, creating a crown shape. Soft diffused lighting, clean white background with subtle shadows. Camera captures the moment at 120fps equivalent. Luxury cosmetics commercial style, pristine and clinical aesthetic.`,
    tags: ['skincare', 'cosmetics', 'slow motion', 'product', 'drop'],
    difficulty: 'intermediate',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '3-5s',
    camera: ['macro', 'slow motion'],
    featured: false,
    createdAt: '2026-02-12',
  },
  {
    id: 'commercial-003',
    title: 'Coffee Pour Perfection',
    titleZh: '完美咖啡倾倒',
    category: 'commercial',
    prompt: `Barista hands pour steaming latte art into a ceramic cup. The milk creates a perfect rosetta pattern on the coffee surface. Steam rises gently. Warm morning light from side window. Close-up shot, shallow depth of field. Cozy cafe atmosphere, artisanal coffee advertisement style.`,
    tags: ['coffee', 'latte art', 'barista', 'cafe', 'food'],
    difficulty: 'beginner',
    model: 'seedance-1.0-pro',
    type: 'text-to-video',
    duration: '5-8s',
    camera: ['close-up', 'static'],
    featured: false,
    createdAt: '2026-02-10',
  },

  // === ANIME ===
  {
    id: 'anime-001',
    title: 'Anime Girl Cherry Blossoms',
    titleZh: '樱花下的动漫少女',
    category: 'anime',
    prompt: `An 18-year-old anime girl with long pink hair, wearing a white sailor uniform, standing under cherry blossom trees in spring. She slowly turns toward the camera and smiles gently. Pink petals fall around her. A light breeze moves her hair and skirt. Camera slowly pushes in from medium shot to close-up. Soft natural lighting, film grain, healing and peaceful mood, Studio Ghibli inspired.`,
    tags: ['anime', 'cherry blossom', 'school', 'peaceful', 'ghibli'],
    difficulty: 'intermediate',
    model: 'seedance-2.0',
    type: 'image-to-video',
    duration: '5-8s',
    camera: ['push in', 'medium to close-up'],
    featured: true,
    createdAt: '2026-02-15',
  },
  {
    id: 'anime-002',
    title: 'Mecha Battle Explosion',
    titleZh: '机甲战斗爆炸',
    category: 'anime',
    prompt: `Giant mecha robot firing beam cannon, massive explosion in background. Dynamic action lines, speed blur effects. Camera shakes with impact. Lens switch to cockpit interior showing pilot's determined expression, control screens flashing red. Back to exterior as mecha dashes forward through smoke. Gundam-style mecha anime, dramatic lighting, high energy.`,
    tags: ['mecha', 'robot', 'action', 'explosion', 'gundam'],
    difficulty: 'advanced',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '10-15s',
    camera: ['dynamic', 'lens switch', 'cockpit POV'],
    featured: false,
    createdAt: '2026-02-11',
  },

  // === PRODUCT ===
  {
    id: 'product-001',
    title: 'Smartphone Reveal',
    titleZh: '智能手机揭幕',
    category: 'product',
    prompt: `A sleek black smartphone emerges from darkness, light gradually revealing its glass and metal body. The device rotates to show all angles. Screen turns on displaying colorful interface. Floating in space with subtle reflection below. Camera orbits smoothly. Apple-style product reveal, minimalist, premium tech aesthetic, infinite white/black background.`,
    tags: ['smartphone', 'tech', 'product reveal', 'minimal', 'apple style'],
    difficulty: 'beginner',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '8-10s',
    camera: ['orbit', 'reveal'],
    featured: true,
    createdAt: '2026-02-14',
  },
  {
    id: 'product-002',
    title: 'Sneaker Explosion',
    titleZh: '运动鞋爆炸分解',
    category: 'product',
    prompt: `A Nike-style running shoe explodes apart in slow motion, revealing all internal components: sole layers, cushioning foam, mesh fabric, laces floating. Components then reassemble perfectly. Camera circles around the floating parts. Pure white infinite background, dramatic lighting highlighting textures and materials. Technical product breakdown style.`,
    tags: ['sneaker', 'shoes', 'exploded view', 'tech', 'breakdown'],
    difficulty: 'advanced',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '10-12s',
    camera: ['orbit', 'slow motion'],
    featured: false,
    createdAt: '2026-02-09',
  },

  // === PORTRAIT ===
  {
    id: 'portrait-001',
    title: 'Fashion Model Wind',
    titleZh: '时尚模特风吹',
    category: 'portrait',
    prompt: `A young woman with flowing black hair stands in a studio. Strong wind blows her hair dramatically to the side. She wears a red silk dress that ripples in the wind. Her expression is confident and powerful. Camera slowly dollies in. High fashion photography style, strong rim lighting, smoke machine haze in background, Vogue editorial aesthetic.`,
    tags: ['fashion', 'model', 'wind', 'studio', 'editorial'],
    difficulty: 'intermediate',
    model: 'seedance-2.0',
    type: 'image-to-video',
    duration: '5-8s',
    camera: ['dolly in', 'static'],
    featured: true,
    createdAt: '2026-02-13',
  },
  {
    id: 'portrait-002',
    title: 'CEO Interview Setup',
    titleZh: 'CEO访谈设置',
    category: 'portrait',
    prompt: `A middle-aged businessman in a navy suit sits in a modern office. He speaks directly to camera with confident gestures. Bokeh city skyline visible through floor-to-ceiling windows behind him. Three-point lighting setup. Camera on gimbal with subtle movement. Corporate interview style, professional and authoritative, 4K documentary quality.`,
    tags: ['business', 'interview', 'corporate', 'office', 'professional'],
    difficulty: 'beginner',
    model: 'seedance-1.0-pro',
    type: 'text-to-video',
    duration: '8-10s',
    camera: ['gimbal', 'talking head'],
    featured: false,
    createdAt: '2026-02-08',
  },

  // === NATURE ===
  {
    id: 'nature-001',
    title: 'Ocean Waves Sunset',
    titleZh: '日落海浪',
    category: 'nature',
    prompt: `Massive ocean wave crashing on rocky coastline at sunset. Golden and orange light illuminates the spray. Camera positioned low, capturing the power of the water. Slow motion capture of droplets and foam. Wide angle lens, dramatic natural lighting, nature documentary style, sense of raw power and beauty.`,
    tags: ['ocean', 'waves', 'sunset', 'nature', 'slow motion'],
    difficulty: 'beginner',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '5-8s',
    camera: ['low angle', 'wide', 'slow motion'],
    featured: true,
    createdAt: '2026-02-15',
  },
  {
    id: 'nature-002',
    title: 'Butterfly Macro',
    titleZh: '蝴蝶微距',
    category: 'nature',
    prompt: `Extreme macro shot of a monarch butterfly landing on a purple flower. Wings slowly open and close, revealing intricate orange and black patterns. Shallow depth of field, flower petals blur into soft bokeh. Morning dew droplets visible on petals. Camera holds steady with slight focus pull. BBC nature documentary style.`,
    tags: ['butterfly', 'macro', 'nature', 'insect', 'flower'],
    difficulty: 'intermediate',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '5-8s',
    camera: ['macro', 'static', 'focus pull'],
    featured: false,
    createdAt: '2026-02-07',
  },

  // === ACTION ===
  {
    id: 'action-001',
    title: 'Parkour Rooftop',
    titleZh: '屋顶跑酷',
    category: 'action',
    prompt: `A parkour athlete sprints across urban rooftops at dusk. He jumps across a gap between buildings, performing a front flip. Camera follows in smooth tracking shot, then cuts to slow motion mid-air moment. City lights beginning to turn on in background. Gritty urban aesthetic, adrenaline energy, action sports cinematography.`,
    tags: ['parkour', 'action', 'urban', 'jump', 'rooftop'],
    difficulty: 'advanced',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '8-10s',
    camera: ['tracking', 'slow motion', 'follow'],
    featured: true,
    createdAt: '2026-02-14',
  },
  {
    id: 'action-002',
    title: 'Boxing Punch Impact',
    titleZh: '拳击冲击',
    category: 'action',
    prompt: `Close-up of a boxer throwing a powerful right hook in slow motion. Sweat droplets fly off on impact. Opponent's face deforms slightly from the punch. Camera captures the moment from side angle. Boxing ring environment with dramatic overhead lighting. Rocky movie style, gritty and intense, high-speed camera effect.`,
    tags: ['boxing', 'sports', 'punch', 'slow motion', 'impact'],
    difficulty: 'advanced',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '3-5s',
    camera: ['close-up', 'slow motion', 'side angle'],
    featured: false,
    createdAt: '2026-02-06',
  },

  // === FANTASY/SCI-FI ===
  {
    id: 'fantasy-001',
    title: 'Dragon Fire Breath',
    titleZh: '龙喷火',
    category: 'fantasy',
    prompt: `A massive dragon perched on a castle tower unleashes a stream of fire into the night sky. Wings spread wide, scales glinting in the firelight. Camera starts on dragon's eye, pulls back dramatically to reveal full creature. Medieval fantasy castle burns below. Epic fantasy movie style, Game of Thrones atmosphere, volumetric fire effects.`,
    tags: ['dragon', 'fantasy', 'fire', 'medieval', 'epic'],
    difficulty: 'advanced',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '10-12s',
    camera: ['pull back', 'dramatic reveal'],
    featured: true,
    createdAt: '2026-02-12',
  },
  {
    id: 'fantasy-002',
    title: 'Cyberpunk Street',
    titleZh: '赛博朋克街道',
    category: 'fantasy',
    prompt: `A woman with neon pink hair walks through a rain-soaked cyberpunk alley. Holographic advertisements flicker on walls. Flying cars pass overhead. Steam rises from street vents. Camera follows behind her, then rises up to reveal towering megastructures. Blade Runner aesthetic, neon colors reflecting in puddles, dystopian future city.`,
    tags: ['cyberpunk', 'neon', 'rain', 'future', 'scifi'],
    difficulty: 'intermediate',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '8-10s',
    camera: ['follow', 'crane up', 'reveal'],
    featured: false,
    createdAt: '2026-02-05',
  },

  // === LIFESTYLE ===
  {
    id: 'lifestyle-001',
    title: 'Morning Yoga Flow',
    titleZh: '晨间瑜伽',
    category: 'lifestyle',
    prompt: `A woman practices yoga sun salutation on a wooden deck overlooking mountains at sunrise. She flows smoothly from downward dog to upward dog. Soft morning mist in valley below. Camera captures from side angle with gentle gimbal movement. Wellness brand aesthetic, peaceful and aspirational, warm golden light.`,
    tags: ['yoga', 'wellness', 'morning', 'mountains', 'lifestyle'],
    difficulty: 'beginner',
    model: 'seedance-1.0-pro',
    type: 'text-to-video',
    duration: '8-10s',
    camera: ['side angle', 'gimbal'],
    featured: true,
    createdAt: '2026-02-11',
  },
  {
    id: 'lifestyle-002',
    title: 'Cozy Reading Nook',
    titleZh: '温馨阅读角',
    category: 'lifestyle',
    prompt: `A person curled up in an armchair reading a book by a window. Rain falls outside. A cat sleeps on the armrest. Steam rises from a cup of tea on side table. Warm lamp light creates cozy atmosphere. Camera slowly pushes in. ASMR-like calm, hygge aesthetic, autumn afternoon vibes.`,
    tags: ['reading', 'cozy', 'rain', 'cat', 'hygge'],
    difficulty: 'beginner',
    model: 'seedance-1.0',
    type: 'text-to-video',
    duration: '8-10s',
    camera: ['push in', 'static'],
    featured: false,
    createdAt: '2026-02-04',
  },

  // === UGC STYLE ===
  {
    id: 'ugc-001',
    title: 'Unboxing Reaction',
    titleZh: '开箱反应',
    category: 'ugc',
    prompt: `A young woman opens a package excitedly on her bed. She pulls out a new handbag, gasping with delight. She holds it up to camera showing details. Natural bedroom lighting from window. Slightly shaky handheld camera feel. TikTok/Instagram unboxing style, authentic and relatable, Gen-Z aesthetic.`,
    tags: ['unboxing', 'tiktok', 'reaction', 'handbag', 'ugc'],
    difficulty: 'beginner',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '5-8s',
    camera: ['handheld', 'POV'],
    featured: true,
    createdAt: '2026-02-10',
  },
  {
    id: 'ugc-002',
    title: 'GRWM Makeup',
    titleZh: 'GRWM化妆',
    category: 'ugc',
    prompt: `Close-up of a woman applying lipstick in a bathroom mirror. Ring light reflection visible in her eyes. She blots lips and smiles at camera. Phone mounted selfie angle. Get Ready With Me TikTok format, beauty influencer aesthetic, casual and intimate, good natural skin texture visible.`,
    tags: ['grwm', 'makeup', 'beauty', 'tiktok', 'influencer'],
    difficulty: 'beginner',
    model: 'seedance-2.0',
    type: 'text-to-video',
    duration: '5-8s',
    camera: ['selfie', 'static', 'mirror'],
    featured: false,
    createdAt: '2026-02-03',
  },
];

export function getPromptsByCategory(categoryId: string): Prompt[] {
  return prompts.filter(p => p.category === categoryId);
}

export function getFeaturedPrompts(): Prompt[] {
  return prompts.filter(p => p.featured);
}

export function getPromptById(id: string): Prompt | undefined {
  return prompts.find(p => p.id === id);
}

export function searchPrompts(query: string): Prompt[] {
  const q = query.toLowerCase();
  return prompts.filter(p => 
    p.title.toLowerCase().includes(q) ||
    p.titleZh.includes(q) ||
    p.prompt.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}
