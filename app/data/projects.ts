export interface Project {
  slug: string
  number: string
  name: string
  tagline: string
  client: string
  category: string
  location: string
  year: string
  role: string
  types: string[]
  deliverables: string[]
  image: string
  summary: string
  overview: string
  challenge: string
  approach: string
  result: string
  quote?: {
    text: string
    author?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'dimsum-qoqom',
    number: '01',
    name: 'Dimsum Qoqom',
    tagline: 'Membangun narasi visual baru dan film profil perusahaan untuk kuliner autentik Medan.',
    client: 'Dimsum Qoqom',
    category: 'F&B · CULINARY',
    location: 'Medan, Indonesia',
    year: '2024',
    role: 'Branding Consultant · Creative Director',
    types: ['BRANDING', 'CREATIVE DIRECTION', 'COMPANY PROFILE'],
    deliverables: [
      'Brand Strategy & Positioning',
      'Visual Identity Direction',
      'Packaging & Menu Concept',
      'Company Profile Direction',
      'Cinematic Brand Storytelling',
    ],
    image: '/images/dimsum.jpg',
    summary:
      'Dimsum Qoqom adalah brand kuliner berbasis di Medan yang berfokus pada kualitas cita rasa dimsum kukus autentik. Proyek ini memposisikan ulang brand dengan identitas kontemporer dan film company profile yang berdaya tarik emosional.',
    overview:
      'Dimsum Qoqom hadir sebagai destinasi kuliner yang mengedepankan resep autentik dan bahan-bahan segar pilihan. Dalam fase pertumbuhan bisnis yang cepat, Dimsum Qoqom memerlukan arahan merek (brand direction) yang matang untuk membedakan dirinya dari kompetitor kuliner kasual lainnya dan membangun reputasi sebagai brand kuliner modern yang terpercaya.',
    challenge:
      'Tantangan utama adalah mengubah persepsi publik terhadap dimsum—dari sekadar makanan santai pinggir jalan menjadi pengalaman kuliner yang hangat, higienis, dan berkelas, tanpa menghilangkan rasa keakraban lokal Medan. Identitas visual lama kurang mencerminkan kualitas premium dari proses pembuatannya.',
    approach:
      'Kami menerapkan pendekatan sensory storytelling. Setiap elemen komunikasi visual diarahkan untuk merayakan proses: kepulan uap hangat dari wadah bambu tradisional, kelembutan tekstur kulit dimsum, serta interaksi hangat antar pelanggan. Kami merancang panduan identitas visual baru, tone of voice komunikasi, hingga menyutradarai film profil perusahaan yang mengalirkan filosofi ketulusan dapur Dimsum Qoqom.',
    result:
      'Peluncuran arah merek dan profil visual baru menghasilkan peningkatan brand recall hingga 40% pada segmen target keluarga muda dan pekerja profesional, meningkatkan volume kunjungan gerai, serta memperkuat posisi Dimsum Qoqom sebagai salah satu ikon kuliner kontemporer di Medan.',
    quote: {
      text: 'Kehangatan sebuah sajian bukan hanya dari suhu masakannya, melainkan dari ketulusan cerita yang disampaikan di setiap gigitan.',
      author: 'Wakiki Creative Notes',
    },
  },
  {
    slug: 'sushi-catering',
    number: '02',
    name: 'Sushi Catering',
    tagline: 'Kampanye komersial dinamis dan arahan kreatif untuk pengalaman kuliner Jepang modern.',
    client: 'Susi Catering',
    category: 'F&B · CATERING & HOSPITALITY',
    location: 'Medan, Indonesia',
    year: '2023 - 2024',
    role: 'Branding Consultant · Creative Director',
    types: ['BRANDING', 'CAMPAIGN', 'TVC'],
    deliverables: [
      'Creative Campaign Concept',
      'TV Commercial (TVC) Direction',
      'Art Direction & Food Styling',
      'Brand Communication Guidelines',
      'Social Media Visual System',
    ],
    image: '/images/sushi.jpg',
    summary:
      'Sushi Catering menghadirkan layanan katering sushi dan sajian Jepang kontemporer untuk event korporat, pesta privat, dan konsumsi harian. Wakiki merancang konsep kampanye komersial dan menyutradarai TVC bertajuk "Ricebowl Itu Keren".',
    overview:
      'Sushi Catering (Susi Catering) lahir untuk menjembatani kecintaan masyarakat terhadap cita rasa kuliner Jepang segar dengan kemudahan layanan katering fleksibel dan produk ricebowl siap santap. Diperlukan sebuah kampanye komunikasi kreatif yang segar, energik, dan langsung melekat di benak konsumen muda.',
    challenge:
      'Pasar sajian Jepang dipenuhi oleh visual yang kaku dan repetitif. Tantangannya adalah merumuskan pesan yang persuasif dan trendi agar ricebowl dan katering sushi dipandang sebagai gaya hidup yang keren, praktis, dan tetap higienis serta bernilai gizi tinggi.',
    approach:
      'Kami merumuskan kampanye "Ricebowl Itu Keren" yang memadukan fotografi makro bahan-bahan segar (potongan salmon segar, nori renyah, dan butiran beras premium) dengan ritme video yang dinamis dan modern. Arahan seni menggunakan kontras warna tegas yang memancing selera makan, didukung narasi audio visual TVC yang playful namun profesional.',
    result:
      'Kampanye TVC dan visual digital berhasil melipatgandakan interaksi media sosial dan mendorong kenaikan pesanan katering korporat lebih dari 65% selama periode kuartal pertama kampanye diluncurkan, sekaligus memantapkan citra brand sebagai pelopor catering sushi premium yang stylish.',
    quote: {
      text: 'Menghadirkan seni kuliner Jepang ke piring sehari-hari dengan energi muda dan standar visual kelas satu.',
      author: 'Wakiki Creative Notes',
    },
  },
  {
    slug: 'a3-golf-gallery',
    number: '03',
    name: 'A3 Golf Gallery',
    tagline: 'Brand positioning eksklusif dan estetika minimalis presisi untuk indoor golf simulator premium.',
    client: 'A3 Golf Gallery',
    category: 'LIFESTYLE · SPORTS & LEISURE',
    location: 'Jakarta, Indonesia',
    year: '2023',
    role: 'Branding Consultant · Creative Director',
    types: ['BRANDING', 'CREATIVE DIRECTION'],
    deliverables: [
      'Brand Strategy & Positioning',
      'Creative Concept Direction',
      'Brand Identity Architecture',
      'Spatial Visual Communication',
      'Digital Collaterals & Lookbook',
    ],
    image: '/images/golf.jpg',
    summary:
      'A3 Golf Gallery adalah galeri golf indoor dan pusat simulator presisi tinggi di Jakarta. Wakiki menyusun positioning brand eksklusif, arahan konsep kreatif, dan bahasa visual modern yang mencerminkan presisi dan gaya hidup elegan.',
    overview:
      'A3 Golf Gallery dirancang bagi para penikmat golf perkotaan yang mencari tempat berlatih dan bersosialisasi dengan privasi tinggi dan teknologi sensor simulator paling canggih. Brand ini membutuhkan positioning yang tidak hanya berbicara soal olahraga, melainkan tentang craftsmanship, relaksasi, dan keanggunan gaya hidup.',
    challenge:
      'Membedakan diri dari driving range terbuka yang bising dan tempat hiburan golf santai yang kurang memperhatikan presisi teknik. Brand harus memancarkan wibawa dan ketenangan yang memikat para eksekutif dan pegolf serius tanpa terasa intimidatif.',
    approach:
      'Kami menyusun bahasa visual minimalis monokromatik dengan aksen detail logam dan tekstur bersih. Mengambil inspirasi dari sudut presisi club head stik golf, tipografi Space Grotesk yang tajam, serta layout editorial yang hening dan tertata. Setiap materi promosi dan komunikasi ruang dirancang untuk menyampaikan rasa fokus, ketenangan, dan kemewahan yang subtil.',
    result:
      'A3 Golf Gallery berhasil membuka pintunya dengan status reputasi tinggi di komunitas golf Jakarta, membukukan tingkat keanggotaan privat penuh pada tiga bulan pertama peluncuran, serta menjadi rujukan standar fasilitas indoor golf di ibu kota.',
    quote: {
      text: 'Presisi bukan sekadar angka pada layar sensor; ia adalah seni mengendalikan fokus dalam ruang yang tenang.',
      author: 'Wakiki Creative Notes',
    },
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: Project
  next: Project
} {
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length
  const nextIndex = (currentIndex + 1) % projects.length
  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  }
}
