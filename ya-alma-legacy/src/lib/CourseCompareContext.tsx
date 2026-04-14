"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CourseCompareEntity {
  id: number;
  title: string;
  titleAr: string;
  titleZh: string;
  titleMs: string;
  faculty: string;
  level: string;
  universityName: string;
  intakes: string;
}

interface CourseCompareContextType {
  courseCompareList: CourseCompareEntity[];
  addToCourseCompare: (course: CourseCompareEntity) => void;
  removeFromCourseCompare: (id: number) => void;
  clearCourseCompare: () => void;
}

const CourseCompareContext = createContext<CourseCompareContextType | undefined>(undefined);

export const CourseCompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courseCompareList, setCourseCompareList] = useState<CourseCompareEntity[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('yaalma_course_compare');
    if (saved) {
      try {
        setCourseCompareList(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const addToCourseCompare = (course: CourseCompareEntity) => {
    if (courseCompareList.length >= 3) {
      alert("You can only compare up to 3 courses at a time.");
      return;
    }
    if (!courseCompareList.find(c => c.id === course.id)) {
      const newList = [...courseCompareList, course];
      setCourseCompareList(newList);
      localStorage.setItem('yaalma_course_compare', JSON.stringify(newList));
    }
  };

  const removeFromCourseCompare = (id: number) => {
    const newList = courseCompareList.filter(c => c.id !== id);
    setCourseCompareList(newList);
    localStorage.setItem('yaalma_course_compare', JSON.stringify(newList));
  };

  const clearCourseCompare = () => {
    setCourseCompareList([]);
    localStorage.removeItem('yaalma_course_compare');
  };

  return (
    <CourseCompareContext.Provider value={{ courseCompareList, addToCourseCompare, removeFromCourseCompare, clearCourseCompare }}>
      {children}
    </CourseCompareContext.Provider>
  );
};

export const useCourseCompare = () => {
  const context = useContext(CourseCompareContext);
  if (context === undefined) {
    throw new Error('useCourseCompare must be used within a CourseCompareProvider');
  }
  return context;
};
