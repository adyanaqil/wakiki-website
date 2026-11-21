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
      'Dimsum Qoqom adalah brand kuliner berbasis di Medan yang berfokus pada kualitas cita rasa dimsum kukus autentik. Proyek ini memposisikan ulang brand dengan identitas kontemporer dan company profile yang berdaya tarik emosional.',
    overview:
      'Dimsum Qoqom hadir sebagai destinasi kuliner yang mengedepankan resep autentik dan bahan-bahan segar pilihan. Dalam fase pertumbuhan bisnis yang cepat, Dimsum Qoqom memerlukan arahan merek (brand direction) yang matang untuk membedakan dirinya dari kompetitor kuliner kasual lainnya dan membangun reputasi sebagai brand kuliner modern yang terpercaya.',
    challenge:
      'Tantangan utama adalah mengubah persepsi publik terhadap dimsum—dari sekadar makanan santai pinggir jalan menjadi pengalaman kuliner yang hangat, higienis, dan berkelas, tanpa menghilangkan rasa keakraban lokal Medan. Identitas visual lama kurang mencerminkan kualitas premium dari proses pembuatannya.',
    approach:
      'Kami menerapkan pendekatan sensory storytelling. Setiap elemen komunikasi visual diarahkan untuk merayakan proses: kepulan uap hangat dari wadah bambu tradisional, kelembutan tekstur kulit dimsum, serta interaksi hangat antar pelanggan. Kami merancang panduan identitas visual baru, tone of voice komunikasi, hingga menyutradarai profil perusahaan yang mengalirkan filosofi ketulusan dapur Dimsum Qoqom.',
    quote: {
      text: 'Kehangatan sebuah sajian bukan hanya dari suhu masakannya, melainkan dari ketulusan cerita yang disampaikan di setiap gigitan.',
      author: 'Wake. Inc Creative Notes',
    },
  },
  {
    slug: 'susi-catering',
    number: '02',
    name: 'Susi Catering',
    tagline: 'Kampanye komersial dinamis dan arahan kreatif untuk pengalaman kuliner modern.',
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
      'Susi Catering menghadirkan layanan katering susi dan sajian kontemporer untuk event korporat, pesta privat, dan konsumsi harian. Wake. Inc merancang konsep kampanye komersial dan menyutradarai TVC bertajuk "Ricebowl Itu Keren".',
    overview:
      'Susi Catering lahir untuk menjembatani kecintaan masyarakat terhadap cita rasa kuliner segar dengan kemudahan layanan katering fleksibel dan produk ricebowl siap santap. Diperlukan sebuah kampanye komunikasi kreatif yang segar, energik, dan langsung melekat di benak konsumen muda.',
    challenge:
      'Pasar sajian kuliner dipenuhi oleh visual yang kaku dan repetitif. Tantangannya adalah merumuskan pesan yang persuasif dan trendi agar ricebowl dan katering susi dipandang sebagai gaya hidup yang keren, praktis, dan tetap higienis serta bernilai gizi tinggi.',
    approach:
      'Kami merumuskan kampanye "Ricebowl Itu Keren" yang memadukan fotografi makro bahan-bahan segar (potongan salmon segar, nori renyah, dan butiran beras premium) dengan ritme video yang dinamis dan modern. Arahan seni menggunakan kontras warna tegas yang memancing selera makan, didukung narasi audio visual TVC yang playful namun profesional.',
    quote: {
      text: 'Menghadirkan seni kuliner ke piring sehari-hari dengan energi muda dan standar visual kelas satu.',
      author: 'Wake. Inc Creative Notes',
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
      'A3 Golf Gallery adalah galeri golf indoor dan pusat simulator presisi tinggi di Jakarta. Wake. Inc menyusun positioning brand eksklusif, arahan konsep kreatif, dan bahasa visual modern yang mencerminkan presisi dan gaya hidup elegan.',
    overview:
      'A3 Golf Gallery dirancang bagi para penikmat golf perkotaan yang mencari tempat berlatih dan bersosialisasi dengan privasi tinggi dan teknologi sensor simulator paling canggih. Brand ini membutuhkan positioning yang tidak hanya berbicara soal olahraga, melainkan tentang craftsmanship, relaksasi, dan keanggunan gaya hidup.',
    challenge:
      'Membedakan diri dari driving range terbuka yang bising dan tempat hiburan golf santai yang kurang memperhatikan presisi teknik. Brand harus memancarkan wibawa dan ketenangan yang memikat para eksekutif dan pegolf serius tanpa terasa intimidatif.',
    approach:
      'Kami menyusun bahasa visual minimalis monokromatik dengan aksen detail logam dan tekstur bersih. Mengambil inspirasi dari sudut presisi club head stik golf, tipografi Space Grotesk yang tajam, serta layout editorial yang hening dan tertata. Setiap materi promosi dan komunikasi ruang dirancang untuk menyampaikan rasa fokus, ketenangan, dan kemewahan yang subtil.',
    quote: {
      text: 'Presisi bukan sekadar angka pada layar sensor; ia adalah seni mengendalikan fokus dalam ruang yang tenang.',
      author: 'Wake. Inc Creative Notes',
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
    types: ['Photography'],
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
      'Kami menerapkan teknik dokumenter berstandar internasional dengan pencahayaan alami dramatis dan framing humanis. Setiap sudut visual dikurasi untuk mengajak penonton merasakan atmosfer, aroma, dan keagungan tempat yang mereka lihat.',
    quote: {
      text: 'Keindahan sejati bukan sekadar panorama yang dilihat mata, melainkan keheningan dan kekaguman yang menetap di dalam hati.',
      author: 'Wake. Inc Creative Notes',
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
    types: ['Creative direction', 'Identity'],
    deliverables: [
      'Brand Identity Architecture',
      'Spatial Visual Experience',
      'Service Packaging & Tiering',
      'Creative Direction & Photography',
      'Digital Brand Guidelines',
    ],
    image: '/images/mata-air.jpg',
    summary:
      'Mata Air adalah penyedia layanan premium car care dan detailing modern. Wake. Inc merestrukturisasi identitas visual dan alur pengalaman pelanggan guna menegaskan standar presisi dan kebersihan tingkat tinggi.',
    overview:
      'Mata Air Auto Care hadir untuk menjawab kebutuhan para pemilik kendaraan yang menginginkan perawatan otomotif dengan ketelitian craftsmanship layaknya salon kecantikan mewah bagi mobil. Brand memerlukan repositioning dari sekadar tempat cuci mobil menjadi studio perawatan kendaraan bereputasi tinggi.',
    challenge:
      'Industri car wash lokal kerap diidentikkan dengan tempat yang basah, kotor, dan bising. Tantangan kami adalah mendefinisikan ulang impresi bengkel perawatan menjadi ruang yang bersih, elegan, dan menenangkan, dengan standar estetika monokromatik kontemporer.',
    approach:
      'Kami merancang sistem visual berbasis tipografi presisi, palet warna dingin yang higienis, serta tata ruang beraksen pencahayaan tajam yang menonjolkan pantulan kilau cat kendaraan. Setiap titik sentuh pelanggan—mulai dari ruang tunggu hingga seragam teknisi—dikurasi dengan standar hospitality.',
    quote: {
      text: 'Kilau yang sempurna adalah pantulan dari perhatian penuh pada detail terkecil.',
      author: 'Wake. Inc Creative Notes',
    },
  },
  {
    slug: 'hiru-koffee',
    number: '06',
    name: 'Hiru Koffee',
    tagline: 'Membangun atmosfer ruang komunal dan identitas kopi artisanal kontemporer.',
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
      'Hiru Koffee merupakan kedai kopi artisanal dan ruang berkarya komunal. Wake. Inc merancang keseluruhan arah merek, bahasa visual ruang, dan strategi komunikasi rasa yang hangat dan inklusif.',
    overview:
      'Hiru Koffee didirikan sebagai titik temu bagi para kreator, profesional, dan penikmat kopi spesialti. Di tengah maraknya kedai kopi modern, Hiru Koffee memerlukan fondasi merek yang kuat agar tidak sekadar menjadi tren sesaat, melainkan tempat yang memiliki keterikatan emosional mendalam dengan komunitasnya.',
    challenge:
      'Menyeimbangkan kesan kepakaran kopi yang serius dengan atmosfer ruang yang ramah dan mudah didekati bagi siapa saja yang ingin bersantai atau bekerja produktif.',
    approach:
      'Kami mengembangkan konsep "Thoughtful Space, Crafted Cup". Identitas visual memadukan garis arsitektural minimalis dengan nuansa earth-tone hangat. Kami mengarahkan desain kemasan beans, elemen signage kayu dan akrilik, serta visual media sosial yang mengedepankan cerita di balik setiap biji kopi.',
    quote: {
      text: 'Kopi yang baik menghubungkan pikiran, tetapi ruang yang tepat menghubungkan manusia.',
      author: 'Wake. Inc Creative Notes',
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
