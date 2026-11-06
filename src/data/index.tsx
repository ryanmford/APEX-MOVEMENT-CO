import React from "react";
import { Instagram, Youtube, Twitter } from "lucide-react";
export const GIF_POOL = [
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/6b32f8106414469b8c5a2912216ab78df1df0c5669fb463fbd4018a2d95142a2.gif", 
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/7e442be4b6c24198a081b90338bc2f839dec9e3bd2354297a58e085da53ebacf.gif", 
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/5f256ddb9a5f4b9cb26db788a3bf0d30dd408047109545d8844ae7bc46cbefca.gif", 
];

export const CONFIG = {
  brand: "Apex Movement",
  tagline: "move better in the real world",
  subline: "efficiency is the highest form of truth.",
  cta: "JOIN THE COMMUNITY",
  skoolLink: "https://www.skool.com/apexmovement/about?ref=ceaa23f64b494958924a0fe4b69e4be1",
  merchLink: "https://shop.apexmovement.com/",
  blogLink: "https://apexmovement.substack.com/",
  calendlyLink: "https://calendly.com/apexmovement/coach", 
  cohort: {
    spotsLeft: 0,
    totalSpots: 15,
    date: "Oct 3",
    fullDate: "October 3",
    endDate: "January 3",
    nextCohort: "Q1 2027",
    enrollmentDeadline: "Sep 30",
    get bannerFull() {
      return `${this.fullDate.toUpperCase()} COHORT SOLD OUT; APPLY FOR ${this.nextCohort} COHORT`;
    },
    get bannerMedium() {
      return `${this.date.toUpperCase()} COHORT SOLD OUT; APPLY FOR ${this.nextCohort}`;
    },
    get bannerShort() {
      return `${this.date.toUpperCase()} SOLD OUT; APPLY FOR ${this.nextCohort}`;
    },
    get bannerAria() {
      return `${this.fullDate} cohort sold out; apply for ${this.nextCohort} cohort`;
    },
    get description() {
      return `Our ${this.fullDate} cohort sold out and runs through ${this.endDate}. Next cohort starts in ${this.nextCohort}. The waitlist is now open.`;
    }
  },
  socials: [
    { key: "instagram", url: "https://instagram.com/apexmovement", icon: <Instagram size={18}/> },
    { key: "youtube", url: "https://youtube.com/apexmovement", icon: <Youtube size={18}/> },
    { key: "x", url: "https://x.com/apexmvmnt", icon: <Twitter size={18}/> }
  ]
};

