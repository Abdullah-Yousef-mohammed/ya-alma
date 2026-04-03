import { specializationsData } from './src/data/specializations';

async function seed() {
  for (const [slug, data] of Object.entries(specializationsData)) {
    const payload = {
      slug: data.slug,
      titleEn: data.titleEn,
      titleAr: data.titleAr,
      heroTaglineEn: data.heroTaglineEn,
      heroTaglineAr: data.heroTaglineAr,
      introEn: data.introEn,
      introAr: data.introAr,
      searchQuery: data.searchQuery,
      degreeLevelsJson: JSON.stringify(data.degreeLevels),
      topUniversitiesJson: JSON.stringify(data.topUniversities),
      budgetUniversitiesJson: JSON.stringify(data.budgetUniversities),
      courseYearsJson: JSON.stringify(data.courseYears),
      careerJobsEnJson: JSON.stringify(data.careerJobsEn),
      careerJobsArJson: JSON.stringify(data.careerJobsAr),
      seVsCsJson: data.seVsCs ? JSON.stringify(data.seVsCs) : null,
      countryComparisonsJson: JSON.stringify(data.countryComparisons),
      spotlightUniversitiesJson: JSON.stringify(data.spotlightUniversities)
    };

    try {
      const res = await fetch('http://localhost:8080/api/specializations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      console.log(`Seeded ${slug}: ${res.status}`);
    } catch(err) {
      console.error(`Failed to seed ${slug}:`, err);
    }
  }
}

seed();
