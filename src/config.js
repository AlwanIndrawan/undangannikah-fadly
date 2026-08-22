// ============================================================
//  KONFIGURASI PERNIKAHAN — Fadly & Fadilah
//  Edit semua data di bawah sesuai pernikahan kamu
// ============================================================

export const WEDDING = {
  mempelai1: "Muh .Fadly Maulud",
  mempelai2: "Nurul Fadilah",

  namasingkat1: "Fadly",
  namasingkat2: "Fadilah",

  gelar1: "S.Tr.Pt",
  gelar2: "S.Ip",

  ayah1: "Nur Alamsyah, S.T. Dg. Situju",
  ibu1:  "Andi Norma. Dg. Bau",

  ayah2: "Mansur Masang. Dg. Naro",
  ibu2:  "Marwiah",

  tanggal: "2026-09-20",

  akad: {
    tanggal: "Jumat, 18 September 2026",
    waktu:   "10:00 WITA – selesai",
  },

  resepsi: {
    tanggal: "Minggu, 20 September 2026",
    waktu:   "10:00 WITA – selesai",
  },

  venue:  "Villa Ajaks, Gallang Rapa",

  akad: {
    tanggal: "Jumat, 18 September 2026",
    waktu:   "11:00 WITA – selesai",
    venue:   "Dusun Mampua, Desa Datara",
    alamat:  "Dusun Mampua, Desa Datara",
    mapsUrl: "https://maps.app.goo.gl/7h9JFSFpyPHz3pKB7",
    // Embed satelit + pin di titik lokasi akad (hasil resolve link pendek)
    mapsEmbed: "https://maps.google.com/maps?q=-5.4520328,119.8035529(Dusun%20Mampua%2C%20Desa%20Datara)&hl=id&z=16&t=k&output=embed",
  },

  resepsi: {
    tanggal: "Minggu, 20 September 2026",
    waktu:   "10:00 WITA – selesai",
    venue:   "Villa Ajaks, Gallang Rapa",
    alamat:  "Kel. Gantarang, Kec. Tinggimoncong, Kab. Gowa, Sulawesi Selatan",
    mapsUrl: "https://maps.app.goo.gl/7Ak8NoU8CLwLE15RA",
    // Embed satelit + pin di titik resmi Villa AJAKS
    mapsEmbed: "https://maps.google.com/maps?q=-5.2248502,119.8713817(Villa%20AJAKS)&hl=id&z=16&t=k&output=embed",
  },

  batasRsvp: "18 September 2026",

  // Undangan dibuka dengan nama tamu
  namaUndangan: "Bapak/Ibu/Saudara(i)",
};

// ============================================================
//  DATA MEMPELAI
// ============================================================

export const MEMPELAI = [
  {
    nama:      "Muh .Fadly Maulud, S.Tr.Pt",
    namasingkat: "Fadly",
    gelar:     "The Groom",
    ayah:      "Nur Alamsyah, S.T. Dg. Situju",
    ibu:       "Andi Norma. Dg. Bau",
    urutan:    "Putra Pertama",
    foto:      "/photos/mempelai1.JPG",
    instagram: "@muh_fadlym",
    igUrl:     "https://www.instagram.com/muh_fadlym?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  },
  {
    nama:      "Nurul Fadilah, S.Ip",
    namasingkat: "Fadilah",
    gelar:     "The Bride",
    ayah:      "Mansur Masang. Dg. Naro",
    ibu:       "Marwiah",
    urutan:    "Putri kedua",
    foto:      "/photos/mempelai2.JPG",
    instagram: "@nrlfdlh3011",
    igUrl:     "https://www.instagram.com/nrlfdlh3011?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  },
];

// ============================================================
//  YANG MENGUNDANG
// ============================================================

export const PENGUNDANG = {
  utama: "Nur Alamsyah, S.T. Dg. Situju & Andi Norma. Dg. Bau",
  turut: [
    { nama: "Keluarga besar Alm. H. A. Jamaluddin Karaeng Sawi / Hj. Hasnah Dg. Nurung", keterangan: "" },
    { nama: "Keluarga besar H. A. Mappa Karaeng Nompo / Hj. M. Dg. Rannu", keterangan: "" },
    { nama: "Kedua Mempelai", keterangan: "" },
  ],
};

// ============================================================
//  REKENING BANK (AMPLOP DIGITAL) — opsional
// ============================================================

export const BANKS = [
  {
    bank:  "Bank Mandiri",
    norek: "1740010508943",
    atas:  "Muh fadly maulud",
  },
];

// ============================================================
//  KISAH CINTA
// ============================================================

export const LOVE_STORY = [
  {
    tahun:  "Awal Pertemuan",
    judul:  "Takdir yang Indah",
    cerita: "Dua hati yang berbeda jalan, dipertemukan oleh Yang Maha Kuasa dalam waktu yang tepat.",
    icon:   "✨",
  },
  {
    tahun:  "Mengenal Lebih Dekat",
    judul:  "Tumbuh Bersama",
    cerita: "Seiring waktu, kedekatan kami semakin terasa. Setiap percakapan membawa kami lebih memahami satu sama lain.",
    icon:   "💌",
  },
  {
    tahun:  "Lamaran",
    judul:  "Satu Langkah Lebih Dekat",
    cerita: "Dengan niat yang tulus dan kesungguhan hati, saya memberanikan diri melangkah lebih jauh. Di hadapan keluarga, saya menyampaikan niat untuk menjadikannya pendamping hidup, dengan harapan dapat membangun rumah tangga yang penuh cinta dan keberkahan.",
    icon:   "💍",
  },
  {
    tahun:  "18 September 2026",
    judul:  "Ikatan Abadi",
    cerita: "Insya Allah, di hari yang penuh berkah ini, kami akan mengikat janji suci di hadapan Allah dan para saksi.",
    icon:   "🕊️",
  },
];

// ============================================================
//  FOTO GALERI
// ============================================================

export const PHOTOS = [
  "/photos/galeri1.JPG",
  "/photos/galeri2.JPG",
  "/photos/galeri3.JPG",
  "/photos/galeri4.JPG",
  "/photos/galeri5.JPG",
  "/photos/galeri6.JPG",
];

export const PHOTO_PLACEHOLDERS = ["📸", "🌸", "💍", "🌿", "🕊️", "🌹"];

// ============================================================
//  GOOGLE FORMS RSVP
// ============================================================

export const GOOGLE_FORM = {
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdGU9z1vhIsMItONuTQX57PPMPCgyWsvaZsEKMCiYGlvXZ43A/formResponse",
  fields: {
    nama:       "entry.34614750",
    telepon:    "entry.483468591",
    kehadiran:  "entry.1978178535",
    jumlahTamu: "entry.2127729527",
    pesan:      "entry.1661952454",
  },
  enabled: true,
};

// BUKU TAMU
export const GUESTBOOK_URL = "https://script.google.com/macros/s/AKfycbwXHW293A0KlMrXqOcz2i0xEOIE_bw9usRRtoR9iUsKUo468w4PZB78rH91b01WrQ/exec";

// ============================================================
//  MUSIK BACKGROUND
// ============================================================

export const MUSIC = {
  src:     "/music/background.mp3",
  enabled: true, // set true setelah tambah file MP3
};