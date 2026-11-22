import type { LevelId } from '../../types/levels';
import type { FAQ } from '../../types';

// Isi hanya setelah disahkan panitia. URL kosong tidak menghasilkan tombol pendaftaran palsu.
export const admissions = {
  year: '2027/2028',
  status: 'Informasi akan diumumkan',
  schedules: [] as string[],
  fees: [] as string[],
  requirements: { mi: [], mts: [] } as Record<LevelId, string[]>,
  formUrls: { mi: '', mts: '' } as Record<LevelId, string>,
  contactLabel: 'Kontak panitia SPMB',
  missingContact: 'Kontak panitia sedang dikonfirmasi. Silakan lihat halaman Kontak atau kunjungi madrasah untuk informasi lebih lanjut.',
  stepsTitle: 'Mulai dengan mengenal, lanjutkan dengan informasi resmi.',
  stepsNote: 'Panduan awal untuk orang tua. Alur administrasi dan ketentuan penerimaan resmi 2027/2028 akan diumumkan panitia.',
  steps: [
    { title: 'Kenali jenjang', description: 'Pelajari identitas, pendekatan, dan arah program MI atau MTs.' },
    { title: 'Konfirmasi informasi', description: 'Tanyakan kesiapan program, persyaratan, jadwal, biaya, dan mekanisme pendaftaran kepada panitia.' },
    { title: 'Ikuti arahan panitia', description: 'Gunakan formulir dan tahapan resmi setelah diumumkan. Halaman ini akan diperbarui ketika informasi tersedia.' },
  ],
};

export function admissionFaq(level: LevelId): FAQ[] {
  const name = level === 'mi' ? 'MI' : 'MTs';
  return [
    { id: 'jadwal', question: `Kapan pendaftaran ${name} 2027/2028 dibuka?`, answer: 'Informasi akan diumumkan. Jadwal, gelombang, kuota, dan biaya belum dipublikasikan pada halaman ini.' },
    { id: 'syarat', question: `Apa persyaratan pendaftaran ${name}?`, answer: `Persyaratan ${name} tahun pelajaran 2027/2028 akan diumumkan setelah disahkan panitia. Konfirmasikan dokumen dan ketentuan usia/jenjang melalui kanal resmi.` },
    { id: 'program', question: level === 'mi' ? 'Apa fokus pendidikan MI Khairul Falah?' : 'Apakah semua program Digital Creator sudah berjalan?', answer: level === 'mi' ? 'MI berfokus pada adab, Al-Qur’an, ibadah, karakter, kemandirian, dan life skills. Student Growth Portal masih dalam pengembangan.' : 'Digital Creator merupakan arah program unggulan 2027/2028 dalam pengembangan. Learning Journey kelas 7–9 adalah rancangan jalur belajar. Kesiapan pelaksanaan akan dikonfirmasi madrasah.' },
    { id: 'daftar', question: 'Bagaimana mendapatkan formulir pendaftaran?', answer: 'Gunakan tautan formulir resmi saat sudah tersedia pada halaman ini, atau hubungi panitia melalui kanal kontak yang telah dikonfirmasi. Jangan mengirim dokumen anak melalui tautan yang tidak terverifikasi.' },
    { id: 'kekhasan', question: level === 'mi' ? 'Apakah portal sudah digunakan semua orang tua?' : 'Apakah siswa harus punya akun bisnis atau menghasilkan uang?', answer: level === 'mi' ? 'Belum. Student Growth Portal adalah fitur dalam pengembangan. Tampilan di halaman MI merupakan ilustrasi, bukan layanan yang sudah digunakan semua keluarga.' : 'Tidak. Pemasaran dan affiliate menggunakan konteks pembelajaran dan simulasi sesuai usia, tanpa kewajiban akun platform komersial siswa dan tanpa janji penghasilan.' },
  ];
}
