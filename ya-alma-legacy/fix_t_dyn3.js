const fs = require('fs');

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
    '"Intakes"': '"Pengambilan"',
    '"Back to Directory"': '"Kembali ke Direktori"',
    
    // Extrapolated for Language Centers & Blogs
    '"No articles available yet."': '"Tiada artikel tersedia lagi."',
    '"Phone"': '"Telefon"',
    '"Email"': '"E-mel"',
    '"Headquarters"': '"Ibu Pejabat"',
    '"Other"': '"Lain-lain"',
    '"Search Center Name..."': '"Cari Nama Pusat..."',
    '"No Centers Found"': '"Tiada Pusat Ditemui"',
    '`Institutes in ${stateGroup}`': '`Institut di ${stateGroup}`',
    '"Back to Institutes"': '"Kembali ke Institut"',
    '"Language Institute"': '"Institut Bahasa"',
    '"Language Programs"': '"Program Bahasa"',
    '"Institute Overview"': '"Gambaran Keseluruhan Institut"'
};

function processFile(filePath) {
    let text = fs.readFileSync(filePath, 'utf8');
    let out = "";
    
    // Scan through text looking for t_dyn(
    for (let i = 0; i < text.length; i++) {
        if (text.substring(i, i + 6) === "t_dyn(") {
            out += "t_dyn(";
            i += 6;
            
            // Now parse arguments inside matching parentheses
            let level = 1;
            let args = [];
            let currentArg = "";
            
            while (i < text.length && level > 0) {
                if (text[i] === '(') level++;
                if (text[i] === ')') level--;
                
                if (level === 1 && text[i] === ',') {
                    args.push(currentArg.trim());
                    currentArg = "";
                } else if (level > 0) {
                    currentArg += text[i];
                }
                
                i++;
            }
            if (currentArg.length > 0) args.push(currentArg.trim());
            i--; // step back to keep the closing parenthesis context
            
            // If it already has 4 args, just output
            if (args.length >= 4) {
                out += args.join(", ") + ")";
                continue;
            }
            
            let p1 = args[0];
            let newArg = null;
            
            if (map[p1]) {
                newArg = map[p1];
            } else if (p1.startsWith('university.') || p1.startsWith('center.') || p1.startsWith('course.') || p1.startsWith('prog.') || p1.startsWith('faculty.') || p1.startsWith('article.') || p1.startsWith('post.')) {
                let base = p1.replace(/En$/, '');
                if (base === p1) {
                     if (p1 === 'university.location' || p1 === 'center.location') newArg = p1 + 'Ms';
                     else if (p1 === 'university.name' || p1 === 'center.name') newArg = p1 + 'Ms';
                     else if (p1 === 'center.state') newArg = p1 + 'Ms';
                     else if (p1 === 'prog.level') newArg = 'prog.levelMs';
                     else if (p1 === 'prog.duration') newArg = 'prog.durationMs';
                     else if (p1 === 'course.level') newArg = 'course.levelMs';
                     else if (p1 === 'course.intakes') newArg = 'course.intakesMs';
                     else if (p1 === 'course.universityName') newArg = 'course.universityNameMs';
                     else newArg = base + 'Ms';
                } else {
                     newArg = base + 'Ms';
                }
                // Check if p1 already involves a logical OR like p1Ar || p1, then fallback correctly
                newArg = newArg + ' || ' + p1;
            } else {
                newArg = p1; // fallback to English
            }
            
            args.push(newArg);
            out += args.join(", ") + ")";
        } else {
            out += text[i];
        }
    }
    
    fs.writeFileSync(filePath, out);
    console.log("Fixed " + filePath);
}

processFile('src/app/language-centers/page.tsx');
processFile('src/app/language-centers/[id]/page.tsx');
processFile('src/app/blog/page.tsx');
processFile('src/app/blog/[id]/page.tsx');
processFile('src/app/contact/page.tsx');
