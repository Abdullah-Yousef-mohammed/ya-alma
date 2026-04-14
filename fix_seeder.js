const fs = require('fs');

const file = 'ya-alma-legacy-api/src/main/java/com/yaalma/api/config/DatabaseSeeder.java';
let c = fs.readFileSync(file, 'utf8');

c = c.replace(/new DynamicPage\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^\)]+)\)/g, 
  "(new java.util.function.Supplier<DynamicPage>() { public DynamicPage get() { DynamicPage d = new DynamicPage(); d.setSlug($2); d.setPublished($3); d.setTitleEn($4); d.setTitleAr($5); d.setTitleZh($6); d.setContentEn($7); d.setContentAr($8); d.setContentZh($9); return d; } }).get()");

c = c.replace(/new Testimonial\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^\)]+)\)/g, 
  "(new java.util.function.Supplier<Testimonial>() { public Testimonial get() { Testimonial t = new Testimonial(); t.setStudentNameEn($2); t.setStudentNameAr($3); t.setStudentNameZh($4); t.setProgramEn($5); t.setProgramAr($6); t.setProgramZh($7); t.setQuoteEn($8); t.setQuoteAr($9); t.setRating($10); return t; } }).get()");

c = c.replace(/new LanguageCenter\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^\)]+)\)/g, 
  "(new java.util.function.Supplier<LanguageCenter>() { public LanguageCenter get() { LanguageCenter l = new LanguageCenter(); l.setNameEn($2); l.setNameAr($3); l.setNameZh($4); l.setLocationEn($5); l.setLocationAr($6); l.setLocationZh($7); l.setAvatarUrl($8); l.setGalleryUrl1($9); l.setGalleryUrl2($10); l.setGalleryUrl3($11); return l; } }).get()");

c = c.replace(/new LanguageProgram\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^\)]+)\)/g, 
  "(new java.util.function.Supplier<LanguageProgram>() { public LanguageProgram get() { LanguageProgram p = new LanguageProgram(); p.setTitleEn($2); p.setTitleAr($3); p.setTitleZh($4); p.setDurationEn($5); p.setDurationAr($6); p.setDurationZh($7); p.setLevelEn($8); p.setLevelAr($9); p.setLevelZh($10); p.setIntakesEn($11); p.setIntakesAr($12); p.setIntakesZh($13); p.setTotalFeeMyr($14); p.setCenterId($15); return p; } }).get()");

fs.writeFileSync(file, c);
