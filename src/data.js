const menu = [
  {
    id: 1,
    title: 'CİPS',
    category: 'Atıştırmalık',
    price: 20,
    img: '/images/cipsss.jpg',
    desc: `Lays, Doritos(cubun), Ruffles, Çerezza çeşitleri mevcuttur.`,
  },
  {
    id: 2,
    title: 'PATSO',
    category: 'Yiyecek',
    price: 18.00,
    img: '/images/patso.jpg',
    desc: `İçerik : Patates Ekmek istege göre ketçap mayonez.`,
  },
  {
    id: 3,
    title: 'AKMİNA MADEN SUYU',
    category: 'İçecek',
    price: 5.99,
    img: '/images/akmina.jpg',
    desc: `Limon, Ananas, Nar, Kırmızı Orman Meyveleri Çeşitlerimiz mevcuttur.`,
  },
  {
    id: 4,
    title: 'SİGARA',
    category: 'Sigara',
    price: 36.00,
    img: '/images/ekrem.jpg',
    desc: `tüm sigara çeşitleri 36.00 tl -45.00 tl `,
  },
  {
    id: 5,
    title: 'Magnum',
    category: 'Dondurma',
    price: 25,
    img: '/images/magnum.jpg',
    desc: `Algida Magnum Classic ,Badem ,Düet Kırmızı Meyveler,Magnum Double Karadut & Böğürtlen,Magnum Cookie , Magnum Double Starchaser  çeşitler mevcuttur `,
  },
  {
    id: 6,
    title: 'Ankara Makarna',
    category: 'Gıda',
    price: 15.00,
    img: '/images/ankara makarna.jpg',
    desc: `Spaghetti, Fiyonk, Burgu, Yüksük, Kelebek çeşitlerimiz mevcuttur.`,
  },
  {
    id: 7,
    title: 'Fıstık',
    category: 'Çerez',
    price: 21.99,
    img: '/images/item-11.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

  {
    id: 8,
    title: 'JBL Kulaklık',
    category: 'Elektronik',
    price: 89.99,
    img: '/images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'ZARF',
    category: 'Kırtasiye',
    price: 2,
    img: '/images/zarf.jpg',
    desc: `A3,A4,A5, Diplomat , Mektup Zarfı Çeşitlerimiz mevcuttur.`,
  },
  {
    id: 10,
    title: 'OFİS TEMİZLİK ÜRÜNLERİ',
    category: 'Temizlik',
    price: 9.99,
    img: '/images/temizlik.jpg',
    desc: `Çamaşır suyu,Bulaşık deterjanı,Sıvı sabun Yag,kireç sökücü, Oda kokusu, Camsil Sarı bez, Cam bezi Bulaşık süngeri Küçük büyük battal boy çöp torbası karton pet baradak Yüzey temizleyici çeşitlerimiz vardır.
     fiyat bilgisi için whapsapdan yazabilirsiniz.`,
  },
  {
    id: 11,
    title: 'Düşler Bahçesi  Sigara Ve Kötü Koku Giderici 300 Ml',
    category: 'Oto Aksesuar',
    price: 50.00,
    img: '/images/düşler bahçesi.jpg',
    desc: `Düşler bahçesi spesiyal , Kavun , Begonvil, Tatlı düşler çeşitlerimiz mevcuttur. `,
  },
  {
    id: 12,
    title: 'Kokusuz Küllük',
    category: 'Oto Aksesuar',
    price: 15,
    img: '/images/küllük.jpg',
    desc: `Araç içi veya ofis için kokusuz küllük`,
  },
  { 
    id: 13,
    title: 'KOLA',
    category: 'İçecek',
    price: 35,
    img: '/images/gazlı.jpg',
    desc: `Cocacola,Fanta,Pepsi, Sprite ,Schweppes  şişe kutu litre çeşitlerimiz mevcuttur. ,`,
  },
  {
    id: 14,
    title: 'Cornetto',
    category: 'Dondurma',
    price: 22.5,
    img: '/images/dondurma cornetto.jpg',
    desc: `Cornetto classic ,Aşk ateşi çeşitleri mevcuttur `,
  },
  {
    id: 15,
    title: 'Classics',
    category: 'Dondurma',
    price: 10,
    img: '/images/nogger.jpg',
    desc: `Classics , Keyif, Nogger, Frigola , Toblerone , Combo çeşitlerimiz mevcuttur `,
  },
  
  {
    id: 16,
    title: 'İndomie  Noodle',
    category: 'Gıda',
    price: 6.5,
    img: '/images/nodle.jpg',
    desc: `Tavuk, Sebze, Kori, Spesiyal Aromalı çeşitlerimiz mevcuttur.`,
  },
  
  {
    id: 17,
    title: 'Sıvı Yağ',
    category: 'Gıda',
    price: 40,
    img: '/images/yag.jpg',
    desc: `Besler 1 lt Ayçiçek yağı`,
  },
  
  {
    id: 18,
    title: 'Tuz',
    category: 'Gıda',
    price: 10,
    img: '/images/salina.jpg',
    desc: `Salina sofra tuzu 500 gr tuzluk ambalajı ve 750 gr poşet ambalajlı çeşitleri mevcuttur.`,
  },
  { 
    id: 19,
    title: 'GAZOZ',
    category: 'İçecek',
    price: 8,
    img: '/images/gazozz.jpg',
    desc: `Beyoğlu sade, Beyoglu Turunçgiller, Çamlıca, Çamlıca Portakal, Nigde , Beylerbeyi gazoz cam şişe  çeşitlerimiz mevcuttur. ,`,
  },
  {
    id: 20,
    title: 'ATIŞTIRMALIK',
    category: 'Atıştırmalık',
    price: 9.99,
    img: '/images/atıştırmalık.jpg',
    desc: `Tüm Eti,Ülker çikolata bisküvi  çeşitleri mevcuttur.`,
  },
  {
    id: 21,
    title: 'SAKIZ',
    category: 'Atıştırmalık',
    price: 9.99,
    img: '/images/sakız.jpg',
    desc: `Falım, Vivident , Oneo , Yıldız sakız   çeşitleri mevcuttur.`,
  },
  {
    id: 22,
    title: 'KAŞARLI TOST',
    category: 'Yiyecek',
    price: 20.00,
    img: '/images/ktost.jpg',
    desc: `İçerik :Tost Ekmeği arası kaşar peyniri.`,
  },
  {
    id: 23,
    title: 'SUCUKLU TOST',
    category: 'Yiyecek',
    price: 22.00,
    img: '/images/stost.jpg',
    desc: `İçerik :Tost ekmeği arası sucuk.`,
  },
  {
    id: 24,
    title: 'KARIŞIK TOST',
    category: 'Yiyecek',
    price: 25.00,
    img: '/images/kktost.jpg',
    desc: `İçerik :Tost ekmeği arası kaşar peyniri ve sucuk.`,
  },
  {
    id: 25,
    title: 'KAVURMALI KAŞARLI TOST',
    category: 'Yiyecek',
    price: 70.00,
    img: '/images/kavurma.jpg',
    desc: `İçerik :Tost ekmeği arası kaşar peyniri ve kavurma.`,
  },
  {
    id: 26,
    title: 'AYVALIK TOSTU',
    category: 'Yiyecek',
    price: 60.00,
    img: '/images/ayvalık.jpg',
    desc: `İçerik :Ayvalık tost ekmegine sucuk, sosis, salam, domates, patates, amerikan salatası .`,
  },
  {
    id: 27,
    title: 'MENEMEN',
    category: 'Yiyecek',
    price: 60.00,
    img: '/images/menemen.jpg',
    desc: `İçerik :Biber, Domates, (istege göre sogan) Yumurta .`,
  },
  {
    id: 28,
    title: 'KAHVALTI TABAĞI',
    category: 'Yiyecek',
    price: 60.00,
    img: '/images/kahvaltı.jpeg',
    desc: `İçerik :Haşlanmış yumurta(istege göre omlet) Peynir, Domates, Salatalık, Zeytin, Reçel,Patates .`,
  },
  {
    id: 29,
    title: 'KAVURMALI YUMURTA',
    category: 'Yiyecek',
    price: 75.00,
    img: '/images/kyumurta.jpg',
    desc: `İçerik Kavurtma eti teragıyı eşliginde 2 yumurta ile tavada sevris edilir.`,
  },
  {
    id: 30,
    title: 'OMLET',
    category: 'Yiyecek',
    price: 25.00,
    img: '/images/omlet.jpg',
    desc: `İçerik Teretagı eşiginde yumurta tavada sevris edilir.`,
  }
];
export default menu;
