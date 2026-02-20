export type BenefitType =
  | "top_benefits"
  | "welcome_benefits"
  | "travel_benefits"
  | "lounge_benefits"
  | "movie_benefits"
  | "dining_benefits"
  | "fuel_benefits"
  | "insurance_benefits"
  | "bank_benefits";

export interface BenefitSubsection {
  label: string;
  points: string[];
}

export interface CardBenefitData {
  subtitle?: string;
  points: string[];
  tags?: string[];
  hasCheck?: boolean;
  hasCross?: boolean;
  subsections?: BenefitSubsection[];
}

export interface BenefitItem {
  type: BenefitType;
  title: string;
  card1: CardBenefitData;
  card2: CardBenefitData;
}

export interface BestForRow {
  card1Tags: string[];
  card2Tags: string[];
}

export interface FeeRow {
  label: string;
  card1Value: string;
  card2Value: string;
}

export interface AccordionSection {
  id: string;
  title: string;
  type: "benefits" | "fees";
  bestFor?: BestForRow;
  benefits?: BenefitItem[];
  fees?: FeeRow[];
}

export const cards = [
  {
    id: 1,
    name: "American Express Gold Credit Card",
    shortName: "Amex Gold",
    image: "/assets/cards/card-image.png",
    shine: "/assets/cards/card-shine.svg",
    bestFor: ["Groceries", "Dining", "Food Ordering", "Travel", "UPI"],
  },
  {
    id: 2,
    name: "HDFC Swiggy Credit Card",
    shortName: "HDFC Swiggy",
    image: "/assets/cards/card-2-image.svg",
    shine: "/assets/cards/card-2.svg",
    bestFor: ["Bills", "Fuel", "Groceries", "Travel", "Rent", "UPI"],
  },
];

export const navigationPills = [
  "Key Information",
  "Benefits",
  "Fees & Eligibilty",
  "Bank Fee Structure",
  "Late Payment Fee Structure",
  "Cashback/Rewards Exclusions",
];

export const benefitIcons: Record<BenefitType, { bg: string; icon: string }> = {
  top_benefits: {
    bg: "/assets/icons/ellipse-top-benefits.svg",
    icon: "/assets/icons/icon-top-benefits.svg",
  },
  welcome_benefits: {
    bg: "/assets/icons/ellipse-welcome.svg",
    icon: "/assets/icons/icon-welcome.svg",
  },
  travel_benefits: {
    bg: "/assets/icons/ellipse-travel.svg",
    icon: "/assets/icons/icon-travel.svg",
  },
  lounge_benefits: {
    bg: "/assets/icons/ellipse-lounge.svg",
    icon: "/assets/icons/icon-lounge.svg",
  },
  movie_benefits: {
    bg: "/assets/icons/ellipse-movie.svg",
    icon: "/assets/icons/icon-movie.svg",
  },
  dining_benefits: {
    bg: "/assets/icons/ellipse-dining.svg",
    icon: "/assets/icons/icon-dining.svg",
  },
  fuel_benefits: {
    bg: "/assets/icons/ellipse-fuel.svg",
    icon: "/assets/icons/icon-fuel.svg",
  },
  insurance_benefits: {
    bg: "/assets/icons/ellipse-insurance.svg",
    icon: "/assets/icons/icon-insurance.svg",
  },
  bank_benefits: {
    bg: "/assets/icons/ellipse-bank.svg",
    icon: "/assets/icons/icon-bank.svg",
  },
};

export const accordionSections: AccordionSection[] = [
  {
    id: "key-information",
    title: "KEY INFORMATION",
    type: "benefits",
    bestFor: {
      card1Tags: ["Groceries", "Dining", "Food Ordering", "Travel", "UPI"],
      card2Tags: ["Bills", "Fuel", "Groceries", "Travel", "Rent", "UPI"],
    },
    benefits: [
      {
        type: "top_benefits",
        title: "Top Benefits",
        card1: {
          points: [
            "Get 4,000 Bonus Membership Rewards Points in The First Year On Payment Of The Annual Fee And Spending \u20B910,000 Within 90 Days Of Cardmembership",
            "Redeem your Membership Rewards Points Across The 18 & 24 Karat Gold Collection And Premium Brand Vouchers Such As Taj, Amazon, Tanishq, Flipkart, Myntra, And More",
          ],
        },
        card2: {
          points: [
            "Get 5% Cashback on\nAll Online Spends With A Capping Of \u20B95,000 (Including Offline Spends)",
            "Get 5% Cashback on\nBlinkit, Zepto, BigBasket, Instamart With A Capping Of \u20B95,000 Per Statement Cycle",
          ],
        },
      },
    ],
  },
  {
    id: "benefits",
    title: "BENEFITS",
    type: "benefits",
    benefits: [
      {
        type: "top_benefits",
        title: "Top Benefits",
        card1: {
          points: [
            "Get 4,000 Bonus Membership Rewards Points in The First Year On Payment Of The Annual Fee And Spending \u20B910,000 Within 90 Days Of Cardmembership",
            "Redeem your Membership Rewards Points Across The 18 & 24 Karat Gold Collection And Premium Brand Vouchers Such As Taj, Amazon, Tanishq, Flipkart, Myntra, And More",
          ],
        },
        card2: {
          points: [
            "Get 5% Cashback on\nAll Online Spends With A Capping Of \u20B95,000 (Including Offline Spends)",
            "Get 5% Cashback on\nBlinkit, Zepto, BigBasket, Instamart With A Capping Of \u20B95,000 Per Statement Cycle",
          ],
        },
      },
      {
        type: "welcome_benefits",
        title: "Welcome Benefits",
        card1: {
          points: [
            "Complimentary Economy Ticket \u2014 Complimentary Economy Ticket can be issued within 6 months from the date of issuance of the credit card and the voucher is valid till 3 months of issuance of the voucher. The validity of the voucher can be extended by paying a service fee. Only one way base fare is covered (Taxes are excluded). The voucher can only be redeemed by logging into your Club Vistara Account on web.",
          ],
        },
        card2: {
          points: [
            "Activate Your Card To Receive A 3-Month Free Swiggy One Membership, Providing Unlimited Benefits Across Restaurants, Instamart, And Genie Orders On Swiggy, Including Free Delivery And Exclusive Discounts",
          ],
        },
      },
      {
        type: "travel_benefits",
        title: "Travel Benefits",
        card1: {
          subsections: [
            {
              label: "Flight Benefits",
              points: [
                "Room Upgrade And US$100 Hotel Credit At 400+ Hotels Under The Hotel Collection With A Minimum Two-Night Stay",
              ],
            },
            {
              label: "Railway Benefits",
              points: [
                "Room Upgrade And US$100 Hotel Credit At 400+ Hotels Under The Hotel Collection With A Minimum Two-Night Stay",
              ],
            },
            {
              label: "Cab Benefits",
              points: [
                "Room Upgrade And US$100 Hotel Credit At 400+ Hotels Under The Hotel Collection With A Minimum Two-Night Stay",
              ],
            },
            {
              label: "Bus Benefits",
              points: [
                "Room Upgrade And US$100 Haotel Credit At 400+ Hotels Under The Hotel Collection With A Minimum Two-Night Stay",
              ],
            },
          ],
          points: [],
        },
        card2: {
          subsections: [
            {
              label: "Flight Benefits",
              points: [
                "Room Upgrade And US$100 Hotel Credit At 400+ Hotels Under The Hotel Collection With A Minimum Two-Night Stay",
              ],
            },
            {
              label: "subtext",
              points: [
                "Room Upgrade And US$100 Hotel Credit At 400+ Hotels Under The Hotel Collection With A Minimum Two-Night Stay",
              ],
            },
            {
              label: "subtext",
              points: [
                "Room Upgrade And US$100 Hotel Credit At 400+ Hotels Under The Hotel Collection With A Minimum Two-Night Stay",
              ],
            },
            {
              label: "subtext",
              points: [
                "Room Upgrade And US$100 Haotel Credit At 400+ Hotels Under The Hotel Collection With A Minimum Two-Night Stay",
              ],
            },
          ],
          points: [],
        },
      },
      {
        type: "lounge_benefits",
        title: "Lounge Benefits",
        card1: {
          subsections: [
            {
              label: "Airport Lounge Benefits",
              points: [
                "Unlimited international lounge access via Priority Pass, Includes 4 complimentary guest visits per year, Unlimited domestic airport lounge access in India, Domestic lounge access requires \u20B950,000 spend in previous 3 months, Spend condition waived for newly issued cards initially",
              ],
            },
            {
              label: "Railway Lounge",
              points: ["None"],
            },
          ],
          points: [],
        },
        card2: {
          subsections: [
            {
              label: "Airport Lounge Benefits",
              points: ["None"],
            },
            {
              label: "Railway Lounge",
              points: ["None"],
            },
          ],
          points: [],
        },
      },
      {
        type: "movie_benefits",
        title: "Movie Benefits",
        card1: {
          points: ["None"],
          hasCross: true,
        },
        card2: {
          points: [
            "10x Rewards Points per \u20B9100 spend on Movies. Each reward point is worth \u20B90.25. This equates to 1.25% back on Movie tickets. Max 5000 Reward points per cycle, that means max Rs 1250 per cycle for all Grocery, Departmental Stores, Movies and Dining combined",
          ],
        },
      },
      {
        type: "dining_benefits",
        title: "Dining Benefits",
        card1: {
          points: [
            "Up To 20% Off Every Time You Dine At Select Restaurant Partners",
          ],
        },
        card2: {
          points: [
            "Get Complimentary Swiggy One Membership On Card Activation, Unlocking Exclusive Dining Benefits On Swiggy",
            "Enjoy 10% Cashback On Swiggy Dineout Transactions, Capped At \u20B91,500 Per Billing Cycle",
          ],
        },
      },
      {
        type: "fuel_benefits",
        title: "Fuel Benefits",
        card1: {
          subsections: [
            {
              label: "Fuel Benefits",
              points: [
                "4.25% value back (13X Reward Points) on fuel purchases at BPCL petrol pumps (max 1,300 Reward Points per billing cycle); 3.25% value back on BPCL transactions up to \u20B94,000 (exclusive of GST & other charges); Fuel Freedom Benefits: maximum limit \u20B910,000 per billing cycle; Instant redemption of Reward Points at select BPCL petrol pumps",
              ],
            },
            {
              label: "Surcharge Waiver Benefits",
              points: ["Text block"],
            },
          ],
          points: [],
        },
        card2: {
          subsections: [
            {
              label: "Fuel Benefits",
              points: ["None"],
            },
            {
              label: "Surcharge Waiver Benefits",
              points: ["Text block"],
            },
          ],
          points: [],
        },
      },
      {
        type: "insurance_benefits",
        title: "Insurance Benefits",
        card1: {
          points: ["Zero Lost Card Liability"],
        },
        card2: {
          points: [
            "Cardholders are covered with Card Liability Protection against lost card, counterfeit, skimming, phishing and online fraud. Additional covers include Purchase Protection, Personal Accident (Air \u2013 Death only), Credit Shield on accidental death, and Global Travel Insurance such as loss or delay of checked-in baggage, loss of passport and plane hijacking",
          ],
        },
      },
      {
        type: "bank_benefits",
        title: "Bank Offer Benefits",
        card1: {
          points: ["None"],
          hasCross: true,
        },
        card2: {
          points: [
            "Complimentary Fraud Liability cover of up to \u20B91 lakh is provided for unauthorized transactions, applicable from 48 hours prior to reporting card loss and up to 7 days after reporting",
          ],
        },
      },
    ],
  },
  {
    id: "fees-eligibility",
    title: "FEES & ELIGIBILTY",
    type: "fees",
    fees: [
      { label: "Joining Fee", card1Value: "\u20B91000", card2Value: "\u20B90" },
      { label: "Joining Fee Waiver", card1Value: "Welcome 4000 reward points . 1 Reward Point = \u20B90.50", card2Value: "None" },
      { label: "Annual Fee", card1Value: "\u20B94999\n2nd year -  Rs.4,500 + taxes", card2Value: "\u20B9500" },
      { label: "Annual Fee Waiver", card1Value: "None", card2Value: "Spend \u20B92,00,000 in preceding year" },
      { label: "Minimum Age", card1Value: "21", card2Value: "21" },
      { label: "Maximum Age", card1Value: "60", card2Value: "60" },
      { label: "Income (Salaried)", card1Value: "6 LPA", card2Value: "6 LPA" },
      { label: "Income (Self-Employed)", card1Value: "8 LPA", card2Value: "8 LPA" },
      { label: "Credit Score Reccomended", card1Value: "700", card2Value: "725" },
    ],
  },
  {
    id: "bank-fee-structure",
    title: "BANK FEE STRUCTURE",
    type: "fees",
    fees: [
      { label: "Over Limit Fee", card1Value: "2.5% of the over limit amount", card2Value: "2.5% of the over limit amount" },
      { label: "Late Payment Fee", card1Value: "Up to Rs 1,300", card2Value: "Up to Rs 1,300" },
      { label: "Cheque Bounce", card1Value: "Rs 500", card2Value: "Rs 500" },
      { label: "Foreign Currency Markup", card1Value: "3.5% + GST", card2Value: "3.5% + GST" },
      { label: "EMI Processing Fee", card1Value: "Rs 199 + GST", card2Value: "Rs 199 + GST" },
      { label: "Reward Point Value", card1Value: "1 RP = Rs 0.50 (approx)", card2Value: "Auto cashback" },
      { label: "Min Due", card1Value: "5% of Total Outstanding", card2Value: "5% of Total Outstanding" },
      { label: "Surcharge on Fuel", card1Value: "1% waiver (Rs 400-Rs 4,000)", card2Value: "1% waiver (Rs 400-Rs 5,000)" },
    ],
  },
  {
    id: "late-payment-fee",
    title: "LATE PAYMENT FEE STRUCTURE",
    type: "fees",
    fees: [
      { label: "Nil - 100", card1Value: "Nil", card2Value: "Nil" },
      { label: "100 - 500", card1Value: "Rs 100", card2Value: "Rs 100" },
      { label: "501 - 5,000", card1Value: "Rs 500", card2Value: "Rs 500" },
      { label: "5,001 - 10,000", card1Value: "Rs 600", card2Value: "Rs 600" },
      { label: "10,001 - 25,000", card1Value: "Rs 800", card2Value: "Rs 800" },
      { label: "25,001 - 50,000", card1Value: "Rs 1,100", card2Value: "Rs 1,100" },
      { label: "Above 50,000", card1Value: "Rs 1,300", card2Value: "Rs 1,300" },
    ],
  },
  {
    id: "cashback-exclusions",
    title: "CASHBACK/REWARDS EXCLUSIONS",
    type: "benefits",
    benefits: [
      {
        type: "top_benefits",
        title: "Exclusion Categories",
        card1: {
          points: [
            "Fuel transactions",
            "Wallet loading transactions",
            "Cash advances",
            "EMI transactions",
            "Government/utility related payments",
          ],
          hasCross: true,
        },
        card2: {
          points: [
            "Rent payments",
            "Wallet loading",
            "Fuel transactions",
            "Government related payments",
            "Insurance premium payments",
          ],
          hasCross: true,
        },
      },
    ],
  },
];
