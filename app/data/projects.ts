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
    tagline: 'Membangun narasi visual baru dan profil perusahaan untuk kuliner autentik Medan.',
    client: 'Dimsum Qoqom',
    category: 'F&B · CULINARY',
    location: 'Medan, Indonesia',
    year: '2024',
    role: 'Branding Consultant · Creative Director',
    types: ['Branding', 'Creative direction', 'Company profile'],
    deliverables: [
      'Brand Strategy & Positioning',
      'Visual Identity Direction',
      'Packaging & Menu Concept',
      'Company Profile Direction',
      'Cinematic Brand Storytelling',
    ],
    image: '/images/dimsum.jpg',
    summary:
      'Dimsum Qoqom adalah brand kuliner berbasis di Medan yang berfokus pada kualitas cita rasa dimsum autentik. Proyek ini memposisikan ulang brand dengan identitas kontemporer dan company profile yang berdaya tarik emosional.',
    overview:
      'Dimsum Qoqom hadir sebagai destinasi kuliner yang mengedepankan resep autentik dan bahan-bahan segar pilihan. Dalam fase pertumbuhan bisnis yang cepat, Dimsum Qoqom memerlukan arahan merek (brand direction) yang matang untuk membedakan dirinya dari kompetitor kuliner kasual lainnya dan membangun reputasi sebagai brand kuliner modern yang terpercaya.',
    challenge:
      'Tantangan utama adalah mengubah persepsi publik terhadap dimsum menjadi pengalaman kuliner yang hangat, higienis, dan berkelas, tanpa menghilangkan rasa keakraban lokal Medan. Identitas visual lama kurang mencerminkan kualitas premium dari proses pembuatannya.',
    approach:
      'Kami menerapkan pendekatan sensory storytelling. Setiap elemen komunikasi visual untuk melihat proses: kepulan uap hangat dari wadah bambu tradisional, kelembutan tekstur kulit dimsum, serta interaksi hangat antar pelanggan. Kami merancang panduan identitas visual baru, tone of voice komunikasi, hingga menyutradarai profil perusahaan yang mengalirkan filosofi ketulusan dapur Dimsum Qoqom.',
    result:
      'Peluncuran arah merek dan profil visual baru menghasilkan peningkatan brand recall hingga 40% pada segmen target keluarga muda dan pekerja profesional, meningkatkan volume kunjungan gerai, serta memperkuat posisi Dimsum Qoqom sebagai salah satu ikon kuliner kontemporer di Medan.',
    quote: {
      text: 'Kehangatan sebuah sajian bukan hanya dari suhu masakannya, melainkan dari ketulusan cerita yang disampaikan di setiap gigitan.',
      author: 'Wakiki Creative Notes',
    },
  },
  {
    slug: 'susi-catering',
    number: '02',
    name: 'Susi Catering',
    tagline: 'Kampanye komersial dinamis dan arahan kreatif untuk pengalaman kuliner Jepang modern.',
    client: 'Susi Catering',
    category: 'F&B · CATERING & HOSPITALITY',
    location: 'Medan, Indonesia',
    year: '2023 - 2024',
    role: 'Branding Consultant · Creative Director',
    types: ['Branding', 'Campaign', 'TVC'],
    deliverables: [
      'Creative Campaign Concept',
      'TV Commercial (TVC) Direction',
      'Art Direction & Food Styling',
      'Brand Communication Guidelines',
      'Social Media Visual System',
    ],
    image: '/images/susi.jpg',
    summary:
      'Susi Catering menghadirkan layanan katering mulai dari wedding, event korporat, pesta privat, dan konsumsi harian. Wakiki.inc merancang konsep kampanye komersial dan menyutradarai TVC bertajuk "Ricebowl Itu Keren". dan juga menjadi konsultan brand untuk Susi Catering',
    overview:
      'Susi Catering lahir untuk menjembatani kecintaan masyarakat terhadap cita rasa kuliner dengan kemudahan layanan katering fleksibel dan produk ricebowl siap santap. Diperlukan sebuah kampanye komunikasi kreatif yang segar, energik, dan langsung melekat di benak konsumen muda.',
    challenge:
      'Katering dipenuhi oleh visual yang kaku dan repetitif. Tantangannya adalah merumuskan pesan yang persuasif dan trendi agar ricebowl dilihat praktis, tetap higienis serta bernilai gizi tinggi, Keren juga eksklusif .',
    approach:
      'Kami merumuskan kampanye "Ricebowl Itu Keren" dengan ritme video yang dinamis dan modern didukung narasi audio visual TVC yang playful dan profesional.',
    result:
      'Kampanye TVC dan visual digital berhasil melipatgandakan interaksi media sosial dan mendorong kenaikan pesanan katering korporat selama periode kuartal pertama kampanye diluncurkan, sekaligus memantapkan citra brand sebagai pelopor catering susi premium yang stylish.',
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
    types: ['Branding', 'Creative direction'],
    deliverables: [
      'Brand Strategy & Positioning',
      'Creative Concept Direction',
      'Brand Identity Architecture',
      'Spatial Visual Communication',
      'Digital Collaterals & Lookbook',
    ],
    image: '/images/golf.jpg',
    summary:
      'A3 Golf Gallery adalah galeri golf indoor dan pusat simulator presisi tinggi di Jakarta. Wakiki menyusun positioning brand eksklusif, arahan konsep kreatif, dan bahasa visual modern.',
    overview:
      'A3 Golf Gallery dirancang bagi para penikmat golf perkotaan yang mencari tempat berlatih dan bersosialisasi dengan privasi tinggi dan teknologi sensor simulator paling canggih. Brand ini membutuhkan positioning yang tidak hanya berbicara soal olahraga, melainkan tentang craftsmanship, relaksasi, dan keanggunan gaya hidup.',
    challenge:
      'Membedakan diri dari driving range terbuka dan tempat hiburan golf santai. Brand harus memancarkan kemewan dan ketenangan yang memikat para eksekutif dan pegolf serius tanpa terasa intimidatif.',
    approach:
      'Kami menyusun bahasa visual minimalis. Mengambil inspirasi dari sudut presisi club head stik golf, tipografi yang tajam. Setiap materi promosi dan komunikasi ruang dirancang untuk menyampaikan rasa fokus, ketenangan, dan kemewahan yang subtil.',
    result:
      'A3 Golf Gallery berhasil membuka pintunya dengan status reputasi tinggi di komunitas golf Jakarta, membukukan tingkat keanggotaan privat penuh pada tiga bulan pertama peluncuran, serta menjadi rujukan standar fasilitas indoor golf di ibu kota.',
    quote: {
      text: 'Presisi bukan sekadar angka pada layar sensor; ia adalah seni mengendalikan fokus dalam ruang yang tenang.',
      author: 'Wakiki Creative Notes',
    },
  },
  {
    slug: 'wonderful-indonesia',
    number: '04',
    name: 'Wonderful Indonesia',
    tagline: 'Narasi visual pariwisata nasional dan dokumentasi keindahan alam nusantara untuk panggung global.',
    client: 'Kemenparekraf / Wonderful Indonesia',
    category: 'TOURISM · DESTINATION BRANDING',
    location: 'Indonesia',
    year: '2023 - 2024',
    role: 'Visual Storyteller · Creative Consultant',
    types: ['Branding', 'Photography', 'Campaign'],
    deliverables: [
      'Tourism Campaign Strategy',
      'Cinematic Visual Documentation',
      'Destination Branding Guidelines',
      'Social Content Direction',
      'Editorial Photo Series',
    ],
    image: '/images/wonderful-indonesia.jpg',
    summary:
      'Kampanye komunikasi visual strategis untuk mempromosikan keanekaragaman lanskap dan kekayaan budaya Indonesia melalui pendekatan sinematik yang menggugah wisatawan mancanegara maupun domestik.',
    overview:
      'Wonderful Indonesia merupakan payung merek pariwisata nasional yang merepresentasikan pesona alam, keramahan budaya, dan kekayaan tradisi nusantara. Menghadapi era keterbukaan informasi digital, dibutuhkan penyegaran narasi visual yang tidak klise dan mampu bersaing di panggung promosi pariwisata dunia.',
    challenge:
      'Banyak promosi destinasi wisata terjebak dalam visual kartu pos konvensional. Tantangannya adalah menangkap kedalaman emosional, spiritualitas ruang alam nusantara, dan interaksi manusia yang autentik tanpa kehilangan daya tarik kemegahannya.',
    approach:
      'Setiap sudut visual dikurasi untuk mengajak penonton merasakan atmosfer, aroma, dan keindahan tempat yang mereka lihat.',
    result:
      'Materi kampanye dan arsip visual digunakan dalam berbagai showcase promosi internasional, memperkuat citra destinasi Indonesia sebagai pilihan perjalanan bernilai tinggi dan berkesan mendalam.',
    quote: {
      text: 'Keindahan sejati bukan sekadar panorama yang dilihat mata, melainkan keheningan dan kekaguman yang menetap di dalam hati.',
      author: 'Wakiki Creative Notes',
    },
  },
  {
    slug: 'mata-air',
    number: '05',
    name: 'Mata Air',
    tagline: 'Revolusi identitas visual dan brand experience untuk layanan perawatan otomotif premium.',
    client: 'Mata Air Auto Care',
    category: 'AUTOMOTIVE · PREMIUM CARE',
    location: 'Medan, Indonesia',
    year: '2023',
    role: 'Branding Consultant · Creative Director',
    types: ['Branding', 'Creative direction', 'Identity'],
    deliverables: [
      'Brand Identity Architecture',
      'Spatial Visual Experience',
      'Service Packaging & Tiering',
      'Creative Direction & Photography',
      'Digital Brand Guidelines',
    ],
    image: '/images/mata-air.jpg',
    summary:
      'Mata Air adalah penyedia layanan premium car care dan detailing modern. Wakiki merestrukturisasi identitas visual dan alur pengalaman pelanggan guna menegaskan standar presisi dan kebersihan tingkat tinggi.',
    overview:
      'Mata Air Auto Care hadir untuk menjawab kebutuhan para pemilik kendaraan yang menginginkan perawatan otomotif dengan ketelitian craftsmanship layaknya salon kecantikan mewah bagi mobil. Brand memerlukan positioning dari sekadar tempat cuci mobil menjadi studio perawatan kendaraan bereputasi tinggi.',
    challenge:
      'Industri car wash lokal kerap diidentikkan dengan tempat yang basah, kotor, dan kurang nyaman. Tantangan kami adalah mendefinisikan ulang impresi car care menjadi ruang yang bersih, elegan, dan menenangkan, dengan standar estetika yang baik.',
    approach:
      'Kami merancang sistem visual yang menonjolkan hasil dari kinerja tim mata air dengan hasil yang maksimal dan membangun brand image agar mata air menjadi top tier car care di medan',
    result:
      'Repositioning merek melahirkan lonjakan retensi pelanggan premium hingga 75% serta menjadikan Mata Air sebagai destinasi perawatan otomotif paling bergengsi di kawasan Medan.',
    quote: {
      text: 'Kilau yang sempurna adalah pantulan dari perhatian penuh pada detail terkecil.',
      author: 'Wakiki Creative Notes',
    },
  },
  {
    slug: 'hiru-koffee',
    number: '06',
    name: 'Hiru Koffee',
    tagline: 'Membangun atmosfer hangat dan identitas kopi artisan.',
    client: 'Hiru Koffee',
    category: 'F&B · SPECIALTY COFFEE',
    location: 'Medan, Indonesia',
    year: '2024',
    role: 'Branding Consultant · Creative Director',
    types: ['Branding', 'Creative direction', 'Spatial visual'],
    deliverables: [
      'Brand Story & Philosophy',
      'Visual Identity System',
      'Packaging & Merchandising',
      'Spatial & Signage Direction',
      'Social Media Aesthetic',
    ],
    image: '/images/hiru-koffee.jpg',
    summary:
      ' Wake. Inc merancang keseluruhan arah merek, bahasa visual, dan strategi komunikasi rasa yang hangat.',
    overview:
      'Di tengah maraknya kedai kopi modern, Hiru Koffee memerlukan fondasi merek yang kuat agar tidak sekadar menjadi tren sesaat, melainkan tempat yang memiliki keterikatan emosional mendalam dengan pelanggan.',
    challenge:
      'Memberikan suasau ruang yang ramah dan mudah didekati bagi siapa saja yang ingin bersantai atau bekerja produktif.',
    approach:
      'Kami membangun brand yang melekat pada desain desain kemasan beans, cup, serta visual media sosial yang mengedepankan cerita di balik brand itu sendiri.',
    result:
      'Hiru Koffee berhasil membuka pintunya dan menyambut hangat dari pecinta kopi.',
    quote: {
      text: 'Kopi yang baik menghubungkan pikiran, tetapi ruang yang tepat menghubungkan manusia.',
      author: 'Wakiki Creative Notes',
    },
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) =>
      p.slug === slug ||
      (slug === 'sushi-catering' && p.slug === 'susi-catering') ||
      (slug === 'coffeespace' && p.slug === 'hiru-koffee')
  )
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
