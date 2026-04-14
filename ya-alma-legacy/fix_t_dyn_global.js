const fs = require('fs');
const path = require('path');

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
    '"Institute Overview"': '"Gambaran Keseluruhan Institut"',
    '"University Type"': '"Jenis Universiti"',
    '"All Types"': '"Semua Jenis"',
    '"No Universities Found"': '"Tiada Universiti Ditemui"',
    '"Try adjusting your filters to find what you\'re looking for."': '"Cuba laraskan penapis anda untuk mencari apa yang anda inginkan."'
};

function processFile(filePath) {
    let text = fs.readFileSync(filePath, 'utf8');
    let originalText = text;
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
            let startOfArg = i;
            
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
            
            // If it has 2 args, add a zh duplicate fallback, then we add the ms arg
            if (args.length === 2) {
                args.push(args[0]); // Duplicate the En base for Zh fallback
            }

            let p1 = args[0];
            let newArg = null;
            
            if (map[p1]) {
                newArg = map[p1];
            } else if (p1.startsWith('university.') || p1.startsWith('center.') || p1.startsWith('course.') || p1.startsWith('prog.') || p1.startsWith('faculty.') || p1.startsWith('article.') || p1.startsWith('post.') || p1.startsWith('uni.')) {
                let base = p1.replace(/En$/, '');
                if (base === p1) {
                     if (p1 === 'university.location' || p1 === 'center.location' || p1 === 'uni.location') newArg = p1 + 'Ms';
                     else if (p1 === 'university.name' || p1 === 'center.name' || p1 === 'uni.name') newArg = p1 + 'Ms';
                     else if (p1 === 'center.state' || p1 === 'uni.state') newArg = p1 + 'Ms';
                     else if (p1 === 'prog.level') newArg = 'prog.levelMs';
                     else if (p1 === 'prog.duration') newArg = 'prog.durationMs';
                     else if (p1 === 'course.level') newArg = 'course.levelMs';
                     else if (p1 === 'course.intakes') newArg = 'course.intakesMs';
                     else if (p1 === 'course.universityName') newArg = 'course.universityNameMs';
                     else newArg = base + 'Ms';
                } else {
                     newArg = base + 'Ms';
                }
                
                // Do not append string if it's already a complex logical statement, instead use simple string manipulation.
                // E.g. uni.nameAr
                if (!newArg.includes(' ')) {
                   newArg = newArg + ' || ' + p1;
                } else {
                   newArg = p1; // Just fallback
                }
            } else {
                newArg = p1; // fallback
            }
            
            if (args.length < 4) {
               args.push(newArg);
            }
            out += args.join(", ") + ")";
        } else {
            out += text[i];
        }
    }
    
    if (originalText !== out) {
       fs.writeFileSync(filePath, out);
       console.log("Fixed " + filePath);
    }
}

// Recursively find tsx files
function walk(dir) {
    let files = fs.readdirSync(dir);
    for (let file of files) {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    }
}

walk(path.join(__dirname, 'src/app'));

