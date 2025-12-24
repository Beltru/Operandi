
export interface CaseStudyProps {
  onClose: () => void;
}

export interface Metric {
  label: string;
  value: string;
  trend?: string;
  icon: string;
}
