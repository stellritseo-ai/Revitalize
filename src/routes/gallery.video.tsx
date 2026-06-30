import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  X,
  Play,
  Maximize2,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

// Image fallbacks for video cover backgrounds
import bathThree from "@/assets/bathroom/3.webp";
import uploadedKitchen from "@/assets/kitchen/uploaded-kitchen.png";
import resFour from "@/assets/residential/1.webp";
import bathTwo from "@/assets/bathroom/2.webp";
import uploadedCabinets from "@/assets/kitchen/uploaded-cabinets.png";
import resFive from "@/assets/residential/5.webp";
import resOne from "@/assets/residential/1.webp";
import uploadedRealEstate from "@/assets/residential/uploaded-real-estate.png";
import vid_1 from "@/assets/video/04b45dfc-4db8-4375-b262-2eef763f0401.mp4";
import vid_2 from "@/assets/video/058607ae-d4b9-4555-99c6-fb7de6efaf6b.mp4";
import vid_3 from "@/assets/video/083820bd-bcdb-4457-be0d-a6a8a641648e.mp4";
import vid_4 from "@/assets/video/0db1e5c7-d27b-43d9-9b39-3520a11d966f.mp4";
import vid_5 from "@/assets/video/0e062993-9abc-4ccd-9505-023ef4d72a36.mp4";
import vid_6 from "@/assets/video/0f0ab888-5cfe-4861-a061-290fd12494b9.mp4";
import vid_7 from "@/assets/video/134da0eb-60b7-4d58-b68d-d1fc3b649f95.mp4";
import vid_8 from "@/assets/video/1d8813dc-98f6-42ec-a5ea-4d7399286907.mp4";
import vid_9 from "@/assets/video/1eba57c4-f155-404f-b15d-9d8911e58d3b.mp4";
import vid_10 from "@/assets/video/1fa6b239-e5a4-44f3-bab4-ce2f6ceed0cb.mp4";
import vid_11 from "@/assets/video/22439e9a-7437-4c89-bcca-f31d971bc0e9.mp4";
import vid_12 from "@/assets/video/30a3ac0f-967c-4ad2-bf95-d68b6ee0b7f5.mp4";
import vid_13 from "@/assets/video/34d454a9-0a87-4462-b1cf-269233bbe624.mp4";
import vid_14 from "@/assets/video/362c65c4-0459-4307-ad0c-29dc3b45457c.mp4";
import vid_15 from "@/assets/video/39496507-0761-4e4a-9f5f-f66fb4517e47.mp4";
import vid_16 from "@/assets/video/3cbc9df1-ad98-4823-92bb-a9c018067cec.mp4";
import vid_17 from "@/assets/video/3e0a5bf4-125e-49a4-a996-3b461d2dc8d6.mp4";
import vid_18 from "@/assets/video/41ac5ac4-1001-46b1-89e6-f78105333afd.mp4";
import vid_19 from "@/assets/video/42a701bc-ce99-411d-9eb3-46b9f8e67713.mp4";
import vid_20 from "@/assets/video/42eac369-da30-4b15-967c-e9ce167ba4f4.mp4";
import vid_21 from "@/assets/video/46586fe4-f18f-43c8-9c86-b34cdd6473de.mp4";
import vid_22 from "@/assets/video/4916647f-cd0d-4677-9b51-5beca8209180.mp4";
import vid_23 from "@/assets/video/4c664ca6-201e-402f-8a0e-aa45b9f35be2.mp4";
import vid_24 from "@/assets/video/553760c2-6e0e-4d7b-aa63-701a610a0618.mp4";
import vid_25 from "@/assets/video/5f80d36f-58a4-4fee-809b-e26db04dee8f.mp4";
import vid_26 from "@/assets/video/67772c8c-e22d-4572-85dc-16ac2628497c.mp4";
import vid_27 from "@/assets/video/6b990b37-23f2-4780-99d4-1eeaae244fe2.mp4";
import vid_28 from "@/assets/video/79c40a5a-18b1-415d-8301-a9d0809b3425.mp4";
import vid_29 from "@/assets/video/7a75337c-fd26-4ab4-a182-9f8000b0be85.mp4";
import vid_30 from "@/assets/video/82d47a0d-b313-4874-9e85-c44535821814.mp4";
import vid_31 from "@/assets/video/85d71fe7-c999-4e20-a215-89c878667589.mp4";
import vid_32 from "@/assets/video/8bb79f9c-1537-4db8-bc33-6b2a9c142440.mp4";
import vid_33 from "@/assets/video/8d0221e6-e602-4632-be43-8aa0e02a9220.mp4";
import vid_34 from "@/assets/video/8f60c34e-407f-4aa3-aaf5-efd8675d0177.mp4";
import vid_35 from "@/assets/video/9836b749-9c13-4a86-a869-096d7cba28a7.mp4";
import vid_36 from "@/assets/video/98a976f0-6b52-47f8-a8d5-203afbde58a7.mp4";
import vid_37 from "@/assets/video/a03e0c51-1e37-4410-9c38-c9838ee50af5.mp4";
import vid_38 from "@/assets/video/a0a5910b-badb-47fa-81ee-b9e5dbaf7ca8.mp4";
import vid_39 from "@/assets/video/a0ff905f-0202-430d-9457-5580e4981a8e.mp4";
import vid_40 from "@/assets/video/a28d4bd5-f11e-4b36-b2ba-2e1b6182ee71.mp4";
import vid_41 from "@/assets/video/aa4e55cf-f539-4da6-9cc3-fc445165e86a.mp4";
import vid_42 from "@/assets/video/af63dccc-f075-459d-a9de-7ae0a128d1cf.mp4";
import vid_43 from "@/assets/video/b580f393-a264-4b52-b9c1-2852379f3504.mp4";
import vid_44 from "@/assets/video/bc124cfc-b8e5-45e4-8884-7e6fe9160afc.mp4";
import vid_45 from "@/assets/video/bd3791be-b7cf-4dc1-b170-30be934d73da.mp4";
import vid_46 from "@/assets/video/c3c59551-3968-4aaf-8df6-c961f973bb44.mp4";
import vid_47 from "@/assets/video/c4f460ea-0b9a-4a9c-bc8a-b5c0b52caa76.mp4";
import vid_48 from "@/assets/video/cc2d041c-6600-4b9f-b44b-c1afcf7caf75.mp4";
import vid_49 from "@/assets/video/ccbb998d-cbe7-44a2-b9fd-ad69684f8a08.mp4";
import vid_50 from "@/assets/video/da943744-341a-4d54-aa73-e3a85a85323a.mp4";
import vid_51 from "@/assets/video/de762004-ad04-4f5a-a2b9-99cc0196b5ef.mp4";
import vid_52 from "@/assets/video/e59c069d-3734-45f8-a4bb-e32a02f3f5a7.mp4";
import vid_53 from "@/assets/video/e7a1df6a-f4f4-4b81-aafa-ca3c32f33333.mp4";
import vid_54 from "@/assets/video/e85f220a-6c40-4723-9fd6-d0000ab0b7f2.mp4";
import vid_55 from "@/assets/video/f78ca30c-14a3-44f2-864b-5d77d961fb72.mp4";
import vid_56 from "@/assets/video/fc43b7df-9963-47b4-b8d2-1335e448abf9.mp4";
export const Route = createFileRoute("/gallery/video")({
  head: () => ({
    title: "Video Gallery | Revitalize Real Estate – Tampa Bay's Premier Home Tour Videos",
    meta: [
      {
        name: "description",
        content:
          "Explore video tours of our kitchen remodeling, bathroom renovations, and outdoor living projects in Tampa Bay. Watch premium craftsmanship walk-throughs.",
      },
    ],
  }),
  component: VideoGalleryPage,
});

interface VideoItem {
  id: number;
  src: string;
  cover: string;
  title: string;
  category: "kitchen" | "bathroom" | "outdoor" | "residential";
  location: string;
  desc: string;
}

export const videoItems = [
  {
    id: 1,
    src: vid_1,
    cover: bathThree,
    title: "Project Tour #1",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 2,
    src: vid_2,
    cover: resFive,
    title: "Project Tour #2",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 3,
    src: vid_3,
    cover: resOne,
    title: "Project Tour #3",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 4,
    src: vid_4,
    cover: uploadedCabinets,
    title: "Project Tour #4",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 5,
    src: vid_5,
    cover: bathThree,
    title: "Project Tour #5",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 6,
    src: vid_6,
    cover: resFive,
    title: "Project Tour #6",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 7,
    src: vid_7,
    cover: resOne,
    title: "Project Tour #7",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 8,
    src: vid_8,
    cover: uploadedCabinets,
    title: "Project Tour #8",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 9,
    src: vid_9,
    cover: bathThree,
    title: "Project Tour #9",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 10,
    src: vid_10,
    cover: resFive,
    title: "Project Tour #10",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 11,
    src: vid_11,
    cover: resOne,
    title: "Project Tour #11",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 12,
    src: vid_12,
    cover: uploadedCabinets,
    title: "Project Tour #12",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 13,
    src: vid_13,
    cover: bathThree,
    title: "Project Tour #13",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 14,
    src: vid_14,
    cover: resFive,
    title: "Project Tour #14",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 15,
    src: vid_15,
    cover: resOne,
    title: "Project Tour #15",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 16,
    src: vid_16,
    cover: uploadedCabinets,
    title: "Project Tour #16",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 17,
    src: vid_17,
    cover: bathThree,
    title: "Project Tour #17",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 18,
    src: vid_18,
    cover: resFive,
    title: "Project Tour #18",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 19,
    src: vid_19,
    cover: resOne,
    title: "Project Tour #19",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 20,
    src: vid_20,
    cover: uploadedCabinets,
    title: "Project Tour #20",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 21,
    src: vid_21,
    cover: bathThree,
    title: "Project Tour #21",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 22,
    src: vid_22,
    cover: resFive,
    title: "Project Tour #22",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 23,
    src: vid_23,
    cover: resOne,
    title: "Project Tour #23",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 24,
    src: vid_24,
    cover: uploadedCabinets,
    title: "Project Tour #24",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 25,
    src: vid_25,
    cover: bathThree,
    title: "Project Tour #25",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 26,
    src: vid_26,
    cover: resFive,
    title: "Project Tour #26",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 27,
    src: vid_27,
    cover: resOne,
    title: "Project Tour #27",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 28,
    src: vid_28,
    cover: uploadedCabinets,
    title: "Project Tour #28",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 29,
    src: vid_29,
    cover: bathThree,
    title: "Project Tour #29",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 30,
    src: vid_30,
    cover: resFive,
    title: "Project Tour #30",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 31,
    src: vid_31,
    cover: resOne,
    title: "Project Tour #31",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 32,
    src: vid_32,
    cover: uploadedCabinets,
    title: "Project Tour #32",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 33,
    src: vid_33,
    cover: bathThree,
    title: "Project Tour #33",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 34,
    src: vid_34,
    cover: resFive,
    title: "Project Tour #34",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 35,
    src: vid_35,
    cover: resOne,
    title: "Project Tour #35",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 36,
    src: vid_36,
    cover: uploadedCabinets,
    title: "Project Tour #36",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 37,
    src: vid_37,
    cover: bathThree,
    title: "Project Tour #37",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 38,
    src: vid_38,
    cover: resFive,
    title: "Project Tour #38",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 39,
    src: vid_39,
    cover: resOne,
    title: "Project Tour #39",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 40,
    src: vid_40,
    cover: uploadedCabinets,
    title: "Project Tour #40",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 41,
    src: vid_41,
    cover: bathThree,
    title: "Project Tour #41",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 42,
    src: vid_42,
    cover: resFive,
    title: "Project Tour #42",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 43,
    src: vid_43,
    cover: resOne,
    title: "Project Tour #43",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 44,
    src: vid_44,
    cover: uploadedCabinets,
    title: "Project Tour #44",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 45,
    src: vid_45,
    cover: bathThree,
    title: "Project Tour #45",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 46,
    src: vid_46,
    cover: resFive,
    title: "Project Tour #46",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 47,
    src: vid_47,
    cover: resOne,
    title: "Project Tour #47",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 48,
    src: vid_48,
    cover: uploadedCabinets,
    title: "Project Tour #48",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 49,
    src: vid_49,
    cover: bathThree,
    title: "Project Tour #49",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 50,
    src: vid_50,
    cover: resFive,
    title: "Project Tour #50",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 51,
    src: vid_51,
    cover: resOne,
    title: "Project Tour #51",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 52,
    src: vid_52,
    cover: uploadedCabinets,
    title: "Project Tour #52",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 53,
    src: vid_53,
    cover: bathThree,
    title: "Project Tour #53",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 54,
    src: vid_54,
    cover: resFive,
    title: "Project Tour #54",
    category: "outdoor",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 55,
    src: vid_55,
    cover: resOne,
    title: "Project Tour #55",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
  {
    id: 56,
    src: vid_56,
    cover: uploadedCabinets,
    title: "Project Tour #56",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "HD video tour detailing remodeling craftsmanship, structural layouts, and premium finishes."
  },
];
function VideoGalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "kitchen" | "bathroom" | "outdoor" | "residential">("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredItems = selectedFilter === "all"
    ? videoItems
    : videoItems.filter(item => item.category === selectedFilter);

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* 1. Page Hero */}
      <PageHero
        title="Video Gallery"
        subtitle="Tampa Bay's Premier Home Tour & Craftsmanship Videos"
      />

      {/* 2. Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Cinematic Tours
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
            Watch Our Craftsmanship{" "}
            <span className="text-copper italic font-serif font-bold">Come to Life</span>
          </h2>
          <p className="text-[1.05rem] text-charcoal-soft/85 font-medium leading-relaxed">
            See the details, materials, and custom finishes in motion. Explore walkthroughs of finished kitchens, bathrooms, and outdoor additions across Tampa Bay. Click any video card to play.
          </p>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="pb-8 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "all"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Show All ({videoItems.length})
          </button>
          <button
            onClick={() => setSelectedFilter("kitchen")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "kitchen"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Kitchen Walks ({videoItems.filter(v => v.category === "kitchen").length})
          </button>
          <button
            onClick={() => setSelectedFilter("bathroom")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "bathroom"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Bathroom Tours ({videoItems.filter(v => v.category === "bathroom").length})
          </button>
          <button
            onClick={() => setSelectedFilter("outdoor")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "outdoor"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Outdoor Living ({videoItems.filter(v => v.category === "outdoor").length})
          </button>
          <button
            onClick={() => setSelectedFilter("residential")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "residential"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Renovation Process ({videoItems.filter(v => v.category === "residential").length})
          </button>
        </div>
      </section>

      {/* 4. Portfolio Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item.src)}
              className="group cursor-pointer bg-white border border-[#efe5da] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/5">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                />
                
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center transition-all group-hover:bg-black/50">
                  <div className="bg-white/95 p-4 rounded-full text-charcoal shadow-lg transform scale-90 group-hover:scale-100 transition duration-300 flex items-center justify-center">
                    <Play className="w-6 h-6 text-copper fill-copper ml-0.5" />
                  </div>
                </div>
                
                <span className="absolute top-4 left-4 bg-charcoal/85 text-white/90 border border-white/10 text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category === "kitchen" ? "Kitchen Walk" : item.category === "bathroom" ? "Bathroom Tour" : item.category === "outdoor" ? "Outdoor space" : "Process Walk"}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-charcoal-soft/60 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-copper shrink-0" />
                  <span>{item.location}</span>
                </div>
                <h4 className="text-lg font-bold font-serif text-charcoal leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Video Player Modal */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Close Player"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* 6. Call-To-Action (CTA) */}
      <section className="relative py-20 bg-gradient-brand bg-background text-white mx-[15px] rounded-2xl border border-white/5 shadow-lg overflow-hidden my-16">
        <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[60%] bg-copper/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white max-w-2xl mx-auto leading-tight">
            Ready to Start Your Construction Story?
          </h2>
          <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            See your own home remodeling tour documented next. Schedule a free design consultation today.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-copper hover:bg-copper-deep text-white font-bold text-sm shadow-lg shadow-copper/25 transition hover:scale-[1.02]"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:8133230291"
              className="inline-flex items-center gap-2 font-bold text-white hover:text-copper transition text-sm px-6 py-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            >
              <Phone className="w-4 h-4 text-copper" /> (813) 323-0291
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
