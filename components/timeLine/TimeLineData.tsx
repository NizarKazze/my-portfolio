export interface TimelinePoint {
  startDate?: string;
  endDate?: string;
  text: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Mock Data
// ─────────────────────────────────────────────────────────────────────────────
export const TIMELINE_POINTS: TimelinePoint[] = [
  {
    startDate: '2022',
    endDate: '2023',
    text: 'High School (Bachillerato).',
  },
  {
    startDate: '2023',
    endDate: '2025',
    text: 'Higher Vocational Training (Advanced Degree) in Web Application Development (DAW).',
  },
  {
    startDate: 'March 2025',
    endDate: '6 June 2025',
    text: 'Internships at Ibiza City Council and WeLoveMedia.',
  },
  {
    startDate: '10 June 2025',
    text: 'Working at WeLoveMedia (ongoing).',
  },
];