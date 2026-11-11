// تنظیمات منو، قیمت‌ها و صداها — هر چیزی که لازم شد عوض شود فقط همین فایل است.
// قیمت‌ها به تومان. null یعنی «قیمت را بپرسید».

window.JALAL = {
  phone: '09991834999',
  address: 'بلوار الغدیر، کوچه ۸',
  instagram: 'https://instagram.com/',

  base: { name: 'هات‌داگ کلاسیک', price: 439000 },

  // order = ترتیب روی هم قرار گرفتن لایه‌ها (کوچک‌تر = پایین‌تر)
  toppings: [
    { id: 'mushroom', name: 'سس قارچ', tub: 'tub-mushroom', price: 109000, order: 2 },
    { id: 'onion', name: 'پیاز کاراملی', tub: 'tub-onion', price: 89000, order: 1 },
    { id: 'cheese', name: 'دیپ پنیر', tub: 'tub-cheese', price: 129000, order: 4 },
    { id: 'bacon', name: 'بیکن و پارمسان', tub: 'tub-bacon', price: 151000, order: 5, sample: true }, // قیمت نمونه — در منو نیست
  ],

  sauces: [
    { id: 'ketchup', name: 'کچاپ', bottle: 'bottle-ketchup' },
    { id: 'mustard', name: 'خردل', bottle: 'bottle-mustard' },
    { id: 'pink', name: 'سس مخصوص', bottle: 'bottle-pink' },
    { id: 'mayo', name: 'سس سیر', bottle: 'bottle-mayo' },
  ],

  sides: [
    { id: 'coke', name: 'کوکا', img: 'can-red', price: null, sound: 'can' },
    { id: 'zero', name: 'زیرو', img: 'can-black', price: null, sound: 'can' },
    { id: 'fanta', name: 'فانتا', img: 'can-orange', price: null, sound: 'can' },
    { id: 'sprite', name: 'اسپرایت', img: 'can-green', price: null, sound: 'can' },
    { id: 'malt', name: 'ماءالشعیر', img: 'bottle-malt', price: null, sound: 'can' },
    { id: 'water', name: 'آب معدنی', img: 'bottle-water', price: null, sound: 'pop' },
    { id: 'fries', name: 'سیب‌زمینی اضافه', img: 'fries-cup', price: null, sound: 'crunch' },
  ],

  // منوی آماده؛ وقتی انتخاب دقیقاً یکی از این‌ها باشد، قیمت منو نمایش داده می‌شود
  presets: [
    { id: 'classic', name: 'کلاسیک', price: 439000, toppings: [], sauces: ['ketchup', 'pink'] },
    { id: 'onion', name: 'پیاز کاراملی', price: 479000, toppings: ['onion'], sauces: ['mayo'] },
    { id: 'mushroom', name: 'سس قارچ', price: 549000, toppings: ['mushroom'], sauces: ['ketchup'] },
    { id: 'cheese', name: 'پنیری', price: 569000, toppings: ['cheese'], sauces: ['mustard'] },
    { id: 'bacon', name: 'بیکن', price: 590000, toppings: ['bacon'], sauces: ['pink'] },
  ],

  // صداها: فایل‌های داخل assets/sfx. «synth:...» یعنی با کد ساخته می‌شود.
  // برای عوض کردن، یکی از فایل‌های پوشه‌ی sounds را با همین اسم در assets/sfx کپی کنید.
  sounds: {
    sizzle: { src: 'sizzle.mp3', volume: 0.55, max: 1.8 },
    drop: { src: 'drop.mp3', volume: 0.8 },
    paper: { src: 'paper.mp3', volume: 0.7 },
    paperQuick: { src: 'paper-quick.mp3', volume: 0.6 },
    can: { src: 'can.mp3', volume: 0.8 },
    pop: { src: 'pop.mp3', volume: 0.6 },
    whoosh: { src: 'whoosh.mp3', volume: 0.35, max: 0.7 },
    crunch: { src: 'crunch.mp3', volume: 0.6, max: 1.1 },
    squeeze: { src: 'synth:squirt' },
    receipt: { src: 'synth:receipt' },
  },
};
