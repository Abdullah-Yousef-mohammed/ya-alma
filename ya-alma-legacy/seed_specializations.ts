import fs from 'fs';
import { specializationsData } from './src/data/specializations.js';

const seedSpecializations = async () => {
    for (const [key, spec] of Object.entries(specializationsData)) {
        const payload = {
            slug: spec.slug,
            titleEn: spec.titleEn,
            titleAr: spec.titleAr,
            heroTaglineEn: spec.heroTaglineEn,
            heroTaglineAr: spec.heroTaglineAr,
            introEn: spec.introEn,
            introAr: spec.introAr,
            searchQuery: spec.searchQuery || spec.slug,
            degreeLevelsJson: JSON.stringify(spec.degreeLevels || []),
            topUniversitiesJson: JSON.stringify(spec.topUniversities || []),
            budgetUniversitiesJson: JSON.stringify(spec.budgetUniversities || []),
            courseYearsJson: JSON.stringify(spec.courseYears || []),
            careerJobsEnJson: JSON.stringify(spec.careerJobsEn || []),
            careerJobsArJson: JSON.stringify(spec.careerJobsAr || []),
            seVsCsJson: JSON.stringify(spec.seVsCs || {}),
            countryComparisonsJson: JSON.stringify(spec.countryComparisons || []),
            spotlightUniversitiesJson: JSON.stringify(spec.spotlightUniversities || [])
        };

        try {
            const res = await fetch("http://localhost:8080/api/specializations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            console.log(`Seeded ${key}:`, res.status);
        } catch (e) {
            console.error(`Failed to seed ${key}:`, (e as Error).message);
        }
    }
}

seedSpecializations();
