import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import photo_1 from "@/assets/revital-img/all/0a618828-85ef-4f90-8ae9-91d045f74b23.webp";
import photo_2 from "@/assets/revital-img/all/0cbbbe37-6866-43ad-89bd-44a17aab37e8.webp";
import photo_3 from "@/assets/revital-img/all/103569b1-a51d-4312-9a45-f040a8aa8db0.webp";
import photo_4 from "@/assets/revital-img/all/125769ab-926f-4322-8355-19472594b6ca.webp";
import photo_5 from "@/assets/revital-img/all/133e3a63-d16b-4dcc-bb88-850b66d1e229.webp";
import photo_6 from "@/assets/revital-img/all/1e2ffbfe-9957-4ee9-a32c-8f3e82c33b83.webp";
import photo_7 from "@/assets/revital-img/all/1f02714b-c15d-49d6-91c1-865a0955516d.webp";
import photo_8 from "@/assets/revital-img/all/205c996a-ad04-48ab-9354-a5124043f0b0.webp";
import photo_9 from "@/assets/revital-img/all/23f7d6a9-96e7-435c-b82e-78af383cb34e.webp";
import photo_10 from "@/assets/revital-img/all/2824a1dc-bdef-4e40-b847-aacb7758c982.webp";
import photo_11 from "@/assets/revital-img/all/2b18a9df-ba00-43bb-9f27-cf90ac8338ff.webp";
import photo_12 from "@/assets/revital-img/all/31dda1a8-8a01-474d-83ab-e7390909f466.webp";
import photo_13 from "@/assets/revital-img/all/34dc1753-a996-4872-be54-aecc9de714a2.webp";
import photo_14 from "@/assets/revital-img/all/3884a510-cf54-415c-9381-9fb88baeed3a.webp";
import photo_15 from "@/assets/revital-img/all/3a5cfd28-5a29-403b-b47f-d9b8d9f231da.webp";
import photo_16 from "@/assets/revital-img/all/415792f9-ce72-4a50-9668-044a0cb30dd8.webp";
import photo_17 from "@/assets/revital-img/all/46b711ae-1529-4c85-92dc-1e41dae0a79a.webp";
import photo_18 from "@/assets/revital-img/all/46df3060-efc3-4ef9-8fee-df5e6afd369a.webp";
import photo_19 from "@/assets/revital-img/all/4ae63ab4-756e-474c-9049-2827a462363e.webp";
import photo_20 from "@/assets/revital-img/all/4e9da749-3048-480c-b56f-5f7b8c1788be.webp";
import photo_21 from "@/assets/revital-img/all/510f8d2d-41ec-4c9f-981d-d53995460497.webp";
import photo_22 from "@/assets/revital-img/all/5631973e-b5e6-427d-ac15-432daa4f88da.webp";
import photo_23 from "@/assets/revital-img/all/5ad9c0b7-bbeb-48e1-9b3a-d8d0d8e935a8.webp";
import photo_24 from "@/assets/revital-img/all/62d6367e-c956-4a11-b41d-dcabcad3d656.webp";
import photo_25 from "@/assets/revital-img/all/67e95364-a24d-4871-91b8-f98351f1cdd5.webp";
import photo_26 from "@/assets/revital-img/all/6d6ada0b-acbd-418b-91a6-304faca96536.webp";
import photo_27 from "@/assets/revital-img/all/7abba0f7-507f-4337-821b-159673b43b01.webp";
import photo_28 from "@/assets/revital-img/all/7cd310b6-ea0f-492e-8cdf-1ee0013b1126.webp";
import photo_29 from "@/assets/revital-img/all/81dc5c89-c773-4102-807e-5dd9db5c5ed6.webp";
import photo_30 from "@/assets/revital-img/all/83a09c10-9332-4ac4-bf37-7b2e7aa5ccd0.webp";
import photo_31 from "@/assets/revital-img/all/843d5a0b-e112-4cc4-97b7-4ac1a703d6d0.webp";
import photo_32 from "@/assets/revital-img/all/88341858-cad1-4130-a919-547590bfb8d3.webp";
import photo_33 from "@/assets/revital-img/all/8dcc476e-d9f6-4dd1-b9d7-b570b1a3e2b2.webp";
import photo_34 from "@/assets/revital-img/all/940f6c66-ff37-4911-b87e-edade29e06de.webp";
import photo_35 from "@/assets/revital-img/all/94a7d0a1-6572-4f31-ac24-384a1737482a.webp";
import photo_36 from "@/assets/revital-img/all/96bb42da-3667-4ad0-bff4-301e3959806f.webp";
import photo_37 from "@/assets/revital-img/all/9fa78ab9-b396-417c-903f-ea242a60a49e.webp";
import photo_38 from "@/assets/revital-img/all/9fc1917a-52ac-40a1-991c-84aa1d1314c4.webp";
import photo_39 from "@/assets/revital-img/all/a37e2629-c024-415c-b18b-4392581d57f5.webp";
import photo_40 from "@/assets/revital-img/all/a77586d0-d89d-403d-b737-9b9187fb229a.webp";
import photo_41 from "@/assets/revital-img/all/af5fbc16-5f2a-4107-b6ed-5202338440dd.webp";
import photo_42 from "@/assets/revital-img/all/b45f047e-d7bc-4f2d-b28e-f07433e2f4f6.webp";
import photo_43 from "@/assets/revital-img/all/b789bd5b-c961-4df3-8317-2335363240ce.webp";
import photo_44 from "@/assets/revital-img/all/bb996248-4e8d-4463-a55a-aaa4fb5df65e.webp";
import photo_45 from "@/assets/revital-img/all/bba05d76-50e6-4524-9b83-0343d5f72d38.webp";
import photo_46 from "@/assets/revital-img/all/bcb80b9f-dfab-4455-b4ad-41a0c8e6bdcf.webp";
import photo_47 from "@/assets/revital-img/all/be50c4cb-ebb3-4798-a962-3f933d2d4384.webp";
import photo_48 from "@/assets/revital-img/all/c7712177-df98-4369-92ec-dc47840f3c62.webp";
import photo_49 from "@/assets/revital-img/all/ca6023cf-6ea4-454f-8206-a980d603cc42.webp";
import photo_50 from "@/assets/revital-img/all/e5064927-f093-41f1-8ec9-0c59469a9652.webp";
import photo_51 from "@/assets/revital-img/all/e5ee3f89-367e-4899-8fc7-15e948e648b8.webp";
import photo_52 from "@/assets/revital-img/all/ec442b92-1d86-4001-b240-6dfdf8ea0113.webp";
import photo_53 from "@/assets/revital-img/all/ec94d749-4250-4fc2-a03f-97543ae1620d.webp";
import photo_54 from "@/assets/revital-img/all/edf0c3d4-836a-4110-b0d5-8b3862942737.webp";
import photo_55 from "@/assets/revital-img/all/f110b6b0-895c-4833-abfe-de8f2dab2f62.webp";
import photo_56 from "@/assets/revital-img/all/f1d5d2d4-f9bc-4138-934e-11761c195000.webp";
export const Route = createFileRoute("/gallery/all-photos")({
  head: () => ({
    title: "All Photos Gallery | Revitalize Real Estate – Tampa Bay's Remodeling Projects Portfolio",
    meta: [
      {
        name: "description",
        content:
          "Explore all our remodeling project photos in Tampa Bay. Kitchens, bathrooms, residential additions, custom designs, and carpentry work. Free consultation.",
      },
    ],
  }),
  component: AllPhotosGalleryPage,
});

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  category: "kitchen" | "bathroom" | "residential";
  location: string;
  desc: string;
}

export const photoItems = [
  {
    id: 1,
    src: photo_1,
    title: "Project Photo #1",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 2,
    src: photo_2,
    title: "Project Photo #2",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 3,
    src: photo_3,
    title: "Project Photo #3",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 4,
    src: photo_4,
    title: "Project Photo #4",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 5,
    src: photo_5,
    title: "Project Photo #5",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 6,
    src: photo_6,
    title: "Project Photo #6",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 7,
    src: photo_7,
    title: "Project Photo #7",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 8,
    src: photo_8,
    title: "Project Photo #8",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 9,
    src: photo_9,
    title: "Project Photo #9",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 10,
    src: photo_10,
    title: "Project Photo #10",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 11,
    src: photo_11,
    title: "Project Photo #11",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 12,
    src: photo_12,
    title: "Project Photo #12",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 13,
    src: photo_13,
    title: "Project Photo #13",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 14,
    src: photo_14,
    title: "Project Photo #14",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 15,
    src: photo_15,
    title: "Project Photo #15",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 16,
    src: photo_16,
    title: "Project Photo #16",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 17,
    src: photo_17,
    title: "Project Photo #17",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 18,
    src: photo_18,
    title: "Project Photo #18",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 19,
    src: photo_19,
    title: "Project Photo #19",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 20,
    src: photo_20,
    title: "Project Photo #20",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 21,
    src: photo_21,
    title: "Project Photo #21",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 22,
    src: photo_22,
    title: "Project Photo #22",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 23,
    src: photo_23,
    title: "Project Photo #23",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 24,
    src: photo_24,
    title: "Project Photo #24",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 25,
    src: photo_25,
    title: "Project Photo #25",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 26,
    src: photo_26,
    title: "Project Photo #26",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 27,
    src: photo_27,
    title: "Project Photo #27",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 28,
    src: photo_28,
    title: "Project Photo #28",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 29,
    src: photo_29,
    title: "Project Photo #29",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 30,
    src: photo_30,
    title: "Project Photo #30",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 31,
    src: photo_31,
    title: "Project Photo #31",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 32,
    src: photo_32,
    title: "Project Photo #32",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 33,
    src: photo_33,
    title: "Project Photo #33",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 34,
    src: photo_34,
    title: "Project Photo #34",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 35,
    src: photo_35,
    title: "Project Photo #35",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 36,
    src: photo_36,
    title: "Project Photo #36",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 37,
    src: photo_37,
    title: "Project Photo #37",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 38,
    src: photo_38,
    title: "Project Photo #38",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 39,
    src: photo_39,
    title: "Project Photo #39",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 40,
    src: photo_40,
    title: "Project Photo #40",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 41,
    src: photo_41,
    title: "Project Photo #41",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 42,
    src: photo_42,
    title: "Project Photo #42",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 43,
    src: photo_43,
    title: "Project Photo #43",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 44,
    src: photo_44,
    title: "Project Photo #44",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 45,
    src: photo_45,
    title: "Project Photo #45",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 46,
    src: photo_46,
    title: "Project Photo #46",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 47,
    src: photo_47,
    title: "Project Photo #47",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 48,
    src: photo_48,
    title: "Project Photo #48",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 49,
    src: photo_49,
    title: "Project Photo #49",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 50,
    src: photo_50,
    title: "Project Photo #50",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 51,
    src: photo_51,
    title: "Project Photo #51",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 52,
    src: photo_52,
    title: "Project Photo #52",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 53,
    src: photo_53,
    title: "Project Photo #53",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 54,
    src: photo_54,
    title: "Project Photo #54",
    category: "kitchen",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 55,
    src: photo_55,
    title: "Project Photo #55",
    category: "bathroom",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
  {
    id: 56,
    src: photo_56,
    title: "Project Photo #56",
    category: "residential",
    location: "Tampa Bay Area",
    desc: "Premium residential design detailing custom craftsmanship, luxury materials, and styling."
  },
];
function AllPhotosGalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "kitchen" | "bathroom" | "residential">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredItems = selectedFilter === "all"
    ? photoItems
    : photoItems.filter(item => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    const actualItem = filteredItems[index];
    const originalIndex = photoItems.findIndex(item => item.id === actualItem.id);
    setLightboxIndex(originalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? photoItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === photoItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* 1. Page Hero */}
      <PageHero
        title="All Photos"
        subtitle="Tampa Bay's Premier Home Remodeling & Design Portfolio"
      />

      {/* 2. Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Complete Photo Archive
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
            Browse All Our{" "}
            <span className="text-copper italic font-serif font-bold">Project Craftsmanship</span>
          </h2>
          <p className="text-[1.05rem] text-charcoal-soft/85 font-medium leading-relaxed">
            See the details, materials, and custom finishes. Explore photos of finished kitchens, bathrooms, additions, and outdoor construction across Tampa Bay. Click any card to expand details.
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
            Show All ({photoItems.length})
          </button>
          <button
            onClick={() => setSelectedFilter("kitchen")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "kitchen"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Kitchen Design ({photoItems.filter(p => p.category === "kitchen").length})
          </button>
          <button
            onClick={() => setSelectedFilter("bathroom")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "bathroom"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Bathroom Remodel ({photoItems.filter(p => p.category === "bathroom").length})
          </button>
          <button
            onClick={() => setSelectedFilter("residential")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "residential"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Residential Spaces ({photoItems.filter(p => p.category === "residential").length})
          </button>
        </div>
      </section>

      {/* 4. Portfolio Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer bg-white border border-[#efe5da] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/5">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full text-charcoal transform scale-90 group-hover:scale-100 transition duration-300">
                    <Maximize2 className="w-5 h-5 text-copper" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 bg-charcoal/85 text-white/90 border border-white/10 text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
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

      {/* 5. Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Close Gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col items-center space-y-4"
          >
            <div className="relative aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src={photoItems[lightboxIndex].src}
                alt={photoItems[lightboxIndex].title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-center text-white/90 max-w-2xl px-4 space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-xs text-white/60 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-copper shrink-0" />
                <span>{photoItems[lightboxIndex].location}</span>
                <span className="mx-2">•</span>
                <span className="uppercase tracking-widest text-[10px] text-copper font-black">
                  {photoItems[lightboxIndex].category}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-white leading-tight">
                {photoItems[lightboxIndex].title}
              </h4>

              <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider pt-2">
                Image {lightboxIndex + 1} of {photoItems.length}
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
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
            Ready to Plan Your Next Remodel?
          </h2>
          <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            See your own home transformation added to our gallery next. Schedule a free estimate consultation today.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-copper hover:bg-copper-deep text-white font-bold text-sm shadow-lg shadow-copper/25 transition hover:scale-[1.02]"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:8139456736"
              className="inline-flex items-center gap-2 font-bold text-white hover:text-copper transition text-sm px-6 py-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            >
              <Phone className="w-4 h-4 text-copper" /> (813) 945-6736
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
