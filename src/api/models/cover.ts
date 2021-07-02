export default interface Cover {
  count: number;
  recommendations: Recommendations[];
  unsupportedTokens: UnsupportedTokens[];
}

export interface Recommendations {
  cover: RecommendationCover;
  reasoning: Reasoning;
}

export interface UnsupportedTokens {
  name: string;
  address: string;
  symbol: string;
  owner: string;
}

export interface RecommendationCover {
  name: string;
  address: string;
  type: string;
  logo: string;
  supportedChains: [];
}

export interface Reasoning {
  token: string;
  logoUrl: string;
  description: string;
}