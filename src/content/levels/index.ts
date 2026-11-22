import { mi } from './mi';
import { mts } from './mts';
export { mi, mts };
export const levels = [mi, mts];

export const sharedFoundation = {
  badge: 'Satu fondasi. Dua arah pertumbuhan.',
  title: 'Al-Qur’an dan adab, selalu menjadi awal.',
  description: 'Melahirkan generasi beriman, berakhlak mulia, dan memberi dampak nyata bagi masyarakat.',
  items: [
    { title: 'Al-Qur’an & Ibadah', description: 'Mendekatkan anak pada Al-Qur’an dan membiasakan ibadah dalam keseharian.', icon: 'book-open' },
    { title: 'Adab & Karakter', description: 'Membimbing anak untuk santun, peduli, dan bertanggung jawab.', icon: 'heart-handshake' },
    { title: 'Kompetensi yang Bermakna', description: 'Menguatkan literasi, numerasi, dan kecakapan hidup sesuai tahap tumbuh anak.', icon: 'brain' },
    { title: 'Pengalaman Nyata', description: 'Belajar dengan mencoba, bekerja sama, merefleksikan, dan berkarya.', icon: 'leaf' },
  ],
};
