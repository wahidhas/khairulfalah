import type { FAQ, SectionHeader } from '../../types';

export const futureSkillsFaqHeader: SectionHeader = {
  title: 'Pertanyaan yang Sering Diajukan',
};

/** Jawaban bersifat umum, tidak mengarang kebijakan/perangkat spesifik yang belum diverifikasi. */
export const futureSkillsFaq: FAQ[] = [
  {
    id: 'apa-itu-future-skills',
    question: 'Apa itu Future Skills?',
    answer:
      'Future Skills adalah keterampilan masa depan — AI Literacy, Coding, Robotics, Communication, Entrepreneurship, dan Digital Citizenship — yang dipersiapkan sejak dini agar siswa siap menghadapi perubahan zaman.',
  },
  {
    id: 'harus-laptop',
    question: 'Apakah siswa harus memiliki laptop?',
    answer:
      'Kebutuhan perangkat mengikuti kebijakan dan fasilitas madrasah. Silakan hubungi admin untuk informasi terbaru mengenai perangkat yang digunakan.',
  },
  {
    id: 'coding-anak-sd',
    question: 'Apakah Coding cocok untuk anak SD/MI?',
    answer:
      'Ya. Materi coding disesuaikan dengan tahap perkembangan siswa SD/MI, dimulai dari konsep logika sederhana yang menyenangkan.',
  },
  {
    id: 'ai-aman',
    question: 'Apakah AI aman digunakan anak?',
    answer:
      'AI Literacy diajarkan dengan pendampingan dan penekanan pada penggunaan yang bertanggung jawab, sesuai usia siswa.',
  },
  {
    id: 'robotics-wajib',
    question: 'Apakah Robotics wajib?',
    answer:
      'Robotics menjadi bagian dari Future Skills Academy — ketentuan wajib/pilihan mengikuti kebijakan program yang berlaku, silakan hubungi admin untuk detailnya.',
  },
  {
    id: 'manfaat-jangka-panjang',
    question: 'Apa manfaat jangka panjang program ini?',
    answer:
      'Program ini membekali siswa dengan cara berpikir, beradaptasi, dan berkarya yang relevan untuk pendidikan lanjutan maupun kehidupan di masa depan.',
  },
];
