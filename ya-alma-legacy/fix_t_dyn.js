const fs = require('fs');
const path = require('path');

function replaceFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace t_dyn(a, b, c) with t_dyn(a, b, c, a.replace(/En$|Zh$/, 'Ms') or dynamic)
  
  // Example 1: t_dyn("Overview", "نظرة عامة", "综合介绍") -> t_dyn("Overview", "نظرة عامة", "综合介绍", "Gambaran Keseluruhan")
  // For static strings, we will use a small dictionary or just fallback. Actually if ms is not provided, it falls back to en. But we want to provide the fourth arg if it's a property.
  
  // Replace t_dyn(uni.name, uni.nameAr, uni.nameZh || uni.name) -> t_dyn(uni.name, uni.nameAr, uni.nameZh || uni.name, uni.nameMs)
  // Let's use a regex that matches `t_dyn( <en>, <ar>, <zh> )` and we extract them.
  
  const regex = /t_dyn\(([^,]+?),\s*([^,]+?),\s*([^\)]+?)\)/g;
  
  content = content.replace(regex, (match, p1, p2, p3) => {
    // If it already has 4 parameters, it wouldn't match this exactly if we're careful. Wait, regex matches until the last ).
    // Let's refine:
    p1 = p1.trim(); p2 = p2.trim(); p3 = p3.trim();
    
    // Check if it's variables
    if (p1.startsWith('university.') || p1.startsWith('course.') || p1.startsWith('prog.') || p1.startsWith('faculty.')) {
        let base = p1.replace(/En$/, '');
        let msField = base + 'Ms';
        if (base === p1) {
             // e.g. university.name -> university.nameMs
             if (p1 === 'university.location') msField = 'university.locationMs';
             else if (p1 === 'university.name') msField = 'university.nameMs';
             else if (p1 === 'prog.level') msField = 'prog.levelMs';
             else if (p1 === 'prog.duration') msField = 'prog.durationMs';
             else if (p1 === 'course.level') msField = 'course.levelMs';
             else if (p1 === 'course.intakes') msField = 'course.intakesMs';
             else if (p1 === 'course.universityName') msField = 'course.universityNameMs';
             else msField = base + 'Ms';
        }
        return `t_dyn(${p1}, ${p2}, ${p3}, ${msField})`;
    }
    
    // For static translations like "Private Institution", we can look up a map
    const map = {
        '"Private Institution"': '"Institusi Swasta"',
        '"Public Institution"': '"Institusi Awam"',
        '"Free Offer Letter"': '"Surat Tawaran Percuma"',
        '"Accredited Programs"': '"Program Diakui"',
        '"Overview"': '"Gambaran Keseluruhan"',
        '"Gallery"': '"Galeri"',
        '"Tour"': '"Lawatan"',
        '"Programs"': '"Program"',
        '"Scholarships"': '"Biasiswa"',
        '"Registration"': '"Pendaftaran"',
        '"Admission"': '"Kemasukan"',
        '"Location"': '"Lokasi"',
        '"University Overview"': '"Gambaran Keseluruhan Universiti"',
        '"Campus Gallery"': '"Galeri Kampus"',
        '"View All"': '"Lihat Semua"',
        '"Main Academic Wing"': '"Sayap Akademik Utama"',
        '"Virtual Tour"': '"Lawatan Maya"',
        '"Available Programs"': '"Program Tersedia"',
        '"Programs Available"': '"Program Tersedia"',
        '"Program"': '"Program"',
        '"Degree"': '"Ijazah"',
        '"Duration"': '"Tempoh"',
        '"Fee/Year"': '"Yuran/Tahun"',
        '"per academic year"': '"setiap tahun akademik"',
        '"Scholarships & Aid"': '"Biasiswa & Bantuan"',
        '"Merit Grants"': '"Geran Merit"',
        '"Max Discount"': '"Diskaun Maksimum"',
        '"Min Criteria"': '"Kriteria Minimum"',
        '"Admission Protocol"': '"Protokol Kemasukan"',
        '"Bachelor Requirements"': '"Syarat Sarjana Muda"',
        '"Master/PhD Entry"': '"Kemasukan Sarjana/PhD"',
        '"Campus Footprint"': '"Jejak Kampus"',
        '"Open Maps"': '"Buka Peta"',
        '"University at a Glance"': '"Universiti Sepintas Lalu"',
        "'Type'": "'Jenis'",
        "'Private University'": "'Universiti Swasta'",
        "'Public University'": "'Universiti Awam'",
        "'Location'": "'Lokasi'",
        "'Ranking'": "'Kedudukan'",
        "'Top Tier'": "'Tahap Teratas'",
        "'Programs'": "'Program'",
        "'Campus'": "'Kampus'",
        "'Global Campus'": "'Kampus Global'",
        '"Financial Overview"': '"Gambaran Keseluruhan Kewangan"',
        "'Registration Fee'": "'Yuran Pendaftaran'",
        "'Visa Processing'": "'Pemprosesan Visa'",
        "'EMGS Medical'": "'Perubatan EMGS'",
        "'Security Deposit'": "'Deposit Keselamatan'",
        "'Refundable'": "'Boleh Dipulangkan'",
        '"All prices are estimated and subject to university terms."': '"Semua harga adalah anggaran dan tertakluk kepada terma universiti."',
        '"Academic Consultants"': '"Perunding Akademik"',
        '"No agents found for this university."': '"Tiada ejen ditemui untuk universiti ini."',
        '"Book a Free Consultation"': '"Tempah Konsultasi Percuma"',
        '"Apply for Admission Now"': '"Mohon Kemasukan Sekarang"',
        '"Filter Results"': '"Tapis Keputusan"',
        '"All Fields"': '"Semua Bidang"',
        '"Intakes"': '"Pengambilan"'
    };
    
    if (map[p1]) {
        return `t_dyn(${p1}, ${p2}, ${p3}, ${map[p1]})`;
    }
    
    return match;
  });

  fs.writeFileSync(filePath, content);
  console.log('Fixed', filePath);
}

replaceFile(path.join(__dirname, 'src/app/universities/[id]/page.tsx'));
replaceFile(path.join(__dirname, 'src/app/courses/page.tsx'));
