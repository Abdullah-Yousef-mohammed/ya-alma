package com.yaalma.api.controllers;

import com.yaalma.api.models.Consultant;
import com.yaalma.api.models.Testimonial;
import com.yaalma.api.models.University;
import com.yaalma.api.models.LanguageCenter;
import com.yaalma.api.models.LanguageProgram;
import com.yaalma.api.models.Course;
import com.yaalma.api.models.BlogPost;
import com.yaalma.api.models.DynamicPage;
import com.yaalma.api.models.AppConfig;
import com.yaalma.api.models.ContactSubmission;
import com.yaalma.api.models.Video;
import com.yaalma.api.repositories.ConsultantRepository;
import com.yaalma.api.repositories.TestimonialRepository;
import com.yaalma.api.repositories.UniversityRepository;
import com.yaalma.api.repositories.LanguageCenterRepository;
import com.yaalma.api.repositories.LanguageProgramRepository;
import com.yaalma.api.repositories.CourseRepository;
import com.yaalma.api.repositories.BlogPostRepository;
import com.yaalma.api.repositories.DynamicPageRepository;
import com.yaalma.api.repositories.AppConfigRepository;
import com.yaalma.api.repositories.ContactSubmissionRepository;
import com.yaalma.api.repositories.TranslationRepository;
import com.yaalma.api.repositories.VideoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;
import java.nio.file.*;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private UniversityRepository universityRepository;
    
    @Autowired
    private ConsultantRepository consultantRepository;
    
    @Autowired
    private TestimonialRepository testimonialRepository;

    @Autowired
    private LanguageCenterRepository languageCenterRepository;

    @Autowired
    private LanguageProgramRepository languageProgramRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private BlogPostRepository blogPostRepository;

    @Autowired
    private VideoRepository videoRepository;

    @Autowired
    private DynamicPageRepository dynamicPageRepository;

    @Autowired
    private AppConfigRepository appConfigRepository;

    @Autowired
    private ContactSubmissionRepository contactSubmissionRepository;

    @Autowired
    private TranslationRepository translationRepository;

    // ─── Universities CRUD ─────────────────────────
    @GetMapping("/universities")
    public List<University> getUniversities() {
        return universityRepository.findAll();
    }

    @GetMapping("/universities/{id}")
    public ResponseEntity<University> getUniversityById(@PathVariable Long id) {
        return ResponseEntity.of(universityRepository.findById(id));
    }

    @PostMapping("/universities")
    public University createUniversity(@RequestBody University university) {
        return universityRepository.save(university);
    }

    @PutMapping("/universities/{id}")
    public ResponseEntity<University> updateUniversity(@PathVariable Long id, @RequestBody University university) {
        return universityRepository.findById(id).map(existing -> {
            BeanUtils.copyProperties(university, existing, "id");
            return ResponseEntity.ok(universityRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/universities/{id}")
    public ResponseEntity<Void> deleteUniversity(@PathVariable Long id) {
        if (universityRepository.existsById(id)) {
            universityRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // ─── Consultants ───────────────────────────────
    @GetMapping("/consultants")
    public List<Consultant> getAllConsultants() {
        return consultantRepository.findAll(Sort.by(Sort.Direction.ASC, "sortOrder"));
    }

    @PostMapping("/consultants")
    public Consultant createConsultant(@RequestBody Consultant consultant) {
        return consultantRepository.save(consultant);
    }

    @PutMapping("/consultants/{id}")
    public ResponseEntity<Consultant> updateConsultant(@PathVariable Long id, @RequestBody Consultant consultantDetails) {
        return consultantRepository.findById(id).map(consultant -> {
            consultant.setName(consultantDetails.getName());
            consultant.setNameAr(consultantDetails.getNameAr());
            consultant.setNameZh(consultantDetails.getNameZh());
            consultant.setNameMs(consultantDetails.getNameMs());
            consultant.setTitle(consultantDetails.getTitle());
            consultant.setTitleAr(consultantDetails.getTitleAr());
            consultant.setTitleZh(consultantDetails.getTitleZh());
            consultant.setTitleMs(consultantDetails.getTitleMs());
            consultant.setAvatar(consultantDetails.getAvatar());
            consultant.setWhatsappNumber(consultantDetails.getWhatsappNumber());
            consultant.setSortOrder(consultantDetails.getSortOrder());
            consultant.setActive(consultantDetails.isActive());
            return ResponseEntity.ok(consultantRepository.save(consultant));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/consultants/{id}")
    public ResponseEntity<?> deleteConsultant(@PathVariable Long id) {
        if (!consultantRepository.existsById(id)) return ResponseEntity.notFound().build();
        consultantRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    // ─── Testimonials ──────────────────────────────
    @GetMapping("/testimonials")
    public List<Testimonial> getTestimonials() {
        return testimonialRepository.findAll();
    }

    // ─── Language Centers CRUD ─────────────────────
    @GetMapping("/language-centers")
    public List<LanguageCenter> getLanguageCenters() {
        return languageCenterRepository.findAll();
    }

    @GetMapping("/language-centers/{id}")
    public ResponseEntity<LanguageCenter> getLanguageCenterById(@PathVariable Long id) {
        return ResponseEntity.of(languageCenterRepository.findById(id));
    }

    @PostMapping("/language-centers")
    public LanguageCenter createLanguageCenter(@RequestBody LanguageCenter lc) {
        return languageCenterRepository.save(lc);
    }

    @PutMapping("/language-centers/{id}")
    public ResponseEntity<LanguageCenter> updateLanguageCenter(@PathVariable Long id, @RequestBody LanguageCenter lc) {
        return languageCenterRepository.findById(id).map(existing -> {
            BeanUtils.copyProperties(lc, existing, "id");
            return ResponseEntity.ok(languageCenterRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/language-centers/{id}")
    public ResponseEntity<Void> deleteLanguageCenter(@PathVariable Long id) {
        if (languageCenterRepository.existsById(id)) {
            languageCenterRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // ─── Language Programs CRUD ─────────────────────
    @GetMapping("/language-programs")
    public List<LanguageProgram> getLanguagePrograms() {
        return languageProgramRepository.findAll();
    }

    @GetMapping("/language-programs/center/{id}")
    public List<LanguageProgram> getLanguageProgramsByCenterId(@PathVariable Long id) {
        return languageProgramRepository.findByLanguageCenterId(id);
    }

    @PostMapping("/language-programs")
    public LanguageProgram createLanguageProgram(@RequestBody LanguageProgram program) {
        return languageProgramRepository.save(program);
    }

    @PutMapping("/language-programs/{id}")
    public ResponseEntity<LanguageProgram> updateLanguageProgram(@PathVariable Long id, @RequestBody LanguageProgram program) {
        return languageProgramRepository.findById(id).map(existing -> {
            BeanUtils.copyProperties(program, existing, "id");
            return ResponseEntity.ok(languageProgramRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/language-programs/{id}")
    public ResponseEntity<Void> deleteLanguageProgram(@PathVariable Long id) {
        if (languageProgramRepository.existsById(id)) {
            languageProgramRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // ─── Courses CRUD ──────────────────────────────
    @GetMapping("/courses")
    public List<Course> getCourses() {
        return courseRepository.findAll();
    }

    @GetMapping("/courses/university/{id}")
    public List<Course> getCoursesByUniversityId(@PathVariable Long id) {
        return courseRepository.findByUniversityId(id);
    }

    @PostMapping("/courses")
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course) {
        return courseRepository.findById(id).map(existing -> {
            BeanUtils.copyProperties(course, existing, "id");
            return ResponseEntity.ok(courseRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        if (courseRepository.existsById(id)) {
            courseRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // ─── Blog Posts CRUD ───────────────────────────
    @GetMapping("/blog")
    public List<BlogPost> getBlogPosts() {
        return blogPostRepository.findAll();
    }

    @GetMapping("/blog/published")
    public List<BlogPost> getPublishedBlogPosts() {
        return blogPostRepository.findByPublishedTrue();
    }

    @GetMapping("/blog/{id}")
    public ResponseEntity<BlogPost> getBlogPostById(@PathVariable Long id) {
        return ResponseEntity.of(blogPostRepository.findById(id));
    }

    @PostMapping("/blog")
    public BlogPost createBlogPost(@RequestBody BlogPost post) {
        return blogPostRepository.save(post);
    }

    @PutMapping("/blog/{id}")
    public ResponseEntity<BlogPost> updateBlogPost(@PathVariable Long id, @RequestBody BlogPost post) {
        return blogPostRepository.findById(id).map(existing -> {
            BeanUtils.copyProperties(post, existing, "id");
            return ResponseEntity.ok(blogPostRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/blog/{id}")
    public ResponseEntity<Void> deleteBlogPost(@PathVariable Long id) {
        if (blogPostRepository.existsById(id)) {
            blogPostRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // ─── Dynamic Pages CRUD ────────────────────────
    @GetMapping("/pages")
    public List<DynamicPage> getDynamicPages() {
        return dynamicPageRepository.findAll();
    }

    @GetMapping("/pages/slug/{slug}")
    public ResponseEntity<DynamicPage> getDynamicPageBySlug(@PathVariable String slug) {
        return ResponseEntity.of(dynamicPageRepository.findBySlug(slug));
    }

    @PostMapping("/pages")
    public DynamicPage createDynamicPage(@RequestBody DynamicPage page) {
        return dynamicPageRepository.save(page);
    }

    @PutMapping("/pages/{id}")
    public ResponseEntity<DynamicPage> updateDynamicPage(@PathVariable Long id, @RequestBody DynamicPage page) {
        return dynamicPageRepository.findById(id).map(existing -> {
            BeanUtils.copyProperties(page, existing, "id");
            return ResponseEntity.ok(dynamicPageRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/pages/{id}")
    public ResponseEntity<Void> deleteDynamicPage(@PathVariable Long id) {
        if (dynamicPageRepository.existsById(id)) {
            dynamicPageRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // ─── App Config Key-Value Store ───────────────
    @GetMapping("/config")
    public List<AppConfig> getAllConfigs() {
        return appConfigRepository.findAll();
    }

    @GetMapping("/config/{key}")
    public ResponseEntity<AppConfig> getConfigByKey(@PathVariable String key) {
        return ResponseEntity.of(appConfigRepository.findBySettingKey(key));
    }

    @PostMapping("/config")
    public AppConfig saveOrUpdateConfig(@RequestBody AppConfig config) {
        return appConfigRepository.findBySettingKey(config.getSettingKey())
            .map(existing -> {
                existing.setSettingValue(config.getSettingValue());
                return appConfigRepository.save(existing);
            })
            .orElseGet(() -> appConfigRepository.save(config));
    }

    // ─── Contact Submissions CRUD ─────────────────
    @GetMapping("/contact-submissions")
    public List<ContactSubmission> getContactSubmissions() {
        return contactSubmissionRepository.findAll();
    }

    @PostMapping("/contact-submissions")
    public ContactSubmission createContactSubmission(@RequestBody ContactSubmission submission) {
        return contactSubmissionRepository.save(submission);
    }

    @DeleteMapping("/contact-submissions/{id}")
    public ResponseEntity<Void> deleteContactSubmission(@PathVariable Long id) {
        if (contactSubmissionRepository.existsById(id)) {
            contactSubmissionRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }


    // ─── Translations CRUD ────────────────────────
    @GetMapping("/translations")
    public List<com.yaalma.api.models.Translation> getTranslations() {
        return translationRepository.findAll();
    }

    @PostMapping("/translations")
    public com.yaalma.api.models.Translation updateTranslation(@RequestBody com.yaalma.api.models.Translation translation) {
        return translationRepository.save(translation);
    }

    @PostMapping("/translations/batch")
    public List<com.yaalma.api.models.Translation> updateTranslations(@RequestBody List<com.yaalma.api.models.Translation> translations) {
        return translationRepository.saveAll(translations);
    }

    // ─── Image / File Uploads ──────────────────────
    private final Path fileStorageLocation = Paths.get("uploads").toAbsolutePath().normalize();

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            Files.createDirectories(fileStorageLocation);
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            String uniqueName = System.currentTimeMillis() + "_" + fileName;
            Path targetLocation = this.fileStorageLocation.resolve(uniqueName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            
            String fileUrl = "https://yaalmalegacy.com/api/uploads/" + uniqueName;
            return ResponseEntity.ok(Map.of("url", fileUrl));
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(Map.of("error", "Could not store file."));
        }
    }

    // --- VIDEO ENDPOINTS ---

    @GetMapping("/videos")
    public List<Video> getAllVideos() {
        return videoRepository.findAllByOrderBySortOrderAsc();
    }

    @PostMapping("/videos")
    public Video createVideo(@RequestBody Video video) {
        return videoRepository.save(video);
    }

    @PutMapping("/videos/{id}")
    public ResponseEntity<Video> updateVideo(@PathVariable Long id, @RequestBody Video videoDetails) {
        Video video = videoRepository.findById(id).orElse(null);
        if (video == null) return ResponseEntity.notFound().build();
        BeanUtils.copyProperties(videoDetails, video, "id");
        return ResponseEntity.ok(videoRepository.save(video));
    }

    @DeleteMapping("/videos/{id}")
    public ResponseEntity<?> deleteVideo(@PathVariable Long id) {
        videoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/uploads/{fileName:.+}")
    public ResponseEntity<org.springframework.core.io.Resource> getFile(@PathVariable String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            org.springframework.core.io.Resource resource = new org.springframework.core.io.UrlResource(filePath.toUri());
            if(resource.exists()) {
                String contentType = "application/octet-stream";
                if (fileName.toLowerCase().endsWith(".png")) contentType = "image/png";
                else if (fileName.toLowerCase().endsWith(".jpg") || fileName.toLowerCase().endsWith(".jpeg")) contentType = "image/jpeg";
                else if (fileName.toLowerCase().endsWith(".webp")) contentType = "image/webp";
                else if (fileName.toLowerCase().endsWith(".gif")) contentType = "image/gif";
                else if (fileName.toLowerCase().endsWith(".svg")) contentType = "image/svg+xml";
                
                return ResponseEntity.ok()
                        .header(org.springframework.http.HttpHeaders.CONTENT_TYPE, contentType)
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
