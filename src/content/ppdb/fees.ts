import type { FeeItem, SectionHeader } from '../../types';

export const feesHeader: SectionHeader = {
  badge: 'Biaya',
  title: 'Biaya Pendidikan',
  description: 'Komponen biaya pendidikan di Madrasah Khairul Falah.',
};

/** Ditampilkan sebagai badge peringatan di FeesSection. */
export const feesNotice = 'Silakan hubungi sekolah untuk informasi terbaru.';

/**
 * PENTING: seluruh `amount` WAJIB tetap berupa penanda placeholder.
 * CLAUDE.md Content Rules melarang mengarang angka — nominal biaya resmi hanya boleh
 * diisi setelah dikonfirmasi yayasan/panitia PPDB.
 */
export const fees: FeeItem[] = [
  {
    id: 'formulir',
    name: 'Formulir Pendaftaran',
    amount: '[Akan diinformasikan]',
    icon: 'file-text',
  },
  {
    id: 'uang-pangkal',
    name: 'Uang Pangkal',
    amount: '[Akan diinformasikan]',
    icon: 'wallet',
  },
  {
    id: 'spp-bulanan',
    name: 'SPP Bulanan',
    amount: '[Akan diinformasikan]',
    icon: 'receipt',
  },
];
