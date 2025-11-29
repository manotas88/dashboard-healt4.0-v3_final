export enum View {
  DASHBOARD = 'DASHBOARD',
  HEALTH_40 = 'HEALTH_40',
  REGULATORY = 'REGULATORY',
  LIFECYCLE = 'LIFECYCLE',
  AI_ASSISTANT = 'AI_ASSISTANT'
}

export interface RiskItem {
  id: string;
  hazard: string;
  severity: 'Negligible' | 'Minor' | 'Serious' | 'Critical' | 'Catastrophic';
  probability: 'Improbable' | 'Remote' | 'Occasional' | 'Probable' | 'Frequent';
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface TechCard {
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}