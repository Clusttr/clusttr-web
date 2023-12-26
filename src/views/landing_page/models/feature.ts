import diversifyImage from "../../../assets/diversify.png";
import liquidityImage from "../../../assets/liquidity.png"
import financialsImage from "../../../assets/financial.png"
import analysisImage from "../../../assets/market-analysis.png"

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
  {
    title: "Diverse Investment Opportunities",
    description:
      "Own a share of high-value properties without the need for substantial upfront capital. Clusttr puts you in control, enabling you to buy, sell, or trade your real estate tokens effortlessly.",
    image: diversifyImage,
  },
  {
    title: "Liquidity and Flexibility",
    description: "Clusttr's intuitive platform ensures that even those new to real estate investing or blockchain can navigate with ease. No complex processes—just seamless transactions.",
    image: liquidityImage,
  },
  {
    title: "Integrated Financial Services",
    description: "Clusttr goes beyond real estate. Your tokenized assets can serve as collateral for loans or credit lines, unlocking additional financial services to empower your overall financial journey.",
    image: financialsImage,
  },
  {
    title: "Market Analysis and Insightss",
    description: "Leverage Clusttr's data and analytics tools for comprehensive market insights. Make informed decisions based on real-time trends and varifiable data.",
    image: analysisImage,
  },
];

