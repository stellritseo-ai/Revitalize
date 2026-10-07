import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useMemo } from "react";
import { Search, Calendar, Clock, BookOpen, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    title: "Blog & Home Improvement Inspiration | Revitalize Real Estate",
    meta: [
      {
        name: "description",
        content:
          "Read our latest articles on kitchen remodeling, bathroom design, custom cabinetry, local building codes, and home improvement tips in Tampa Bay. Real Estate & Remodeling insights.",
      },
    ],
  }),
  component: BlogPage,
});

import { Category, BlogPost, ALL_BLOG_POSTS, getBlogPosts } from "@/lib/blog-store";

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(ALL_BLOG_POSTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Load blog posts dynamically from MongoDB database
  React.useEffect(() => {
    let isMounted = true;
    getBlogPosts().then((data) => {
      if (isMounted && Array.isArray(data) && data.length > 0) {
        setPosts(data);
      }
    });

    const refreshBlogPosts = () => {
      getBlogPosts().then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setPosts(data);
        }
      });
    };

    window.addEventListener("revitalize-blog-updated", refreshBlogPosts);
    window.addEventListener("storage", refreshBlogPosts);

    return () => {
      isMounted = false;
      window.removeEventListener("revitalize-blog-updated", refreshBlogPosts);
      window.removeEventListener("storage", refreshBlogPosts);
    };
  }, []);

  const postsPerPage = 9;

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* 1. Page Hero Section */}
      <PageHero
        title="Our Blog"
        subtitle="Inspiration, Design Guides & Home Improvement Insights from Our Craftsmen"
      />

      {/* 2. Blog Grid & Controls */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-[1400px] mx-auto">
        
        {/* Controls Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-12 border-b border-charcoal/5 pb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {(["All", "Kitchen", "Bathroom", "Remodeling", "Cabinetry", "Tampa Insights"] as const).map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-copper text-white shadow-md shadow-copper/20"
                      : "bg-[#faf8f6] text-charcoal border border-[#efe5da] hover:border-copper/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-[#faf8f6] border border-[#efe5da] pl-10 pr-4 py-3 rounded-full text-charcoal placeholder-charcoal/30 text-sm focus:outline-none focus:border-copper transition"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-charcoal/35" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-charcoal/40 hover:text-charcoal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white border border-[#efe5da] rounded-2xl shadow-sm overflow-hidden hover:shadow-md hover:border-copper/30 transition-all duration-300"
              >
                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  
                  {/* Badge & Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-copper/5 border border-copper/10 text-copper text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-charcoal-soft/50">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold font-serif text-charcoal mb-4 line-clamp-2 hover:text-copper transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-charcoal-soft/80 text-sm leading-relaxed font-medium mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Bottom details */}
                  <div className="mt-auto pt-6 border-t border-[#efe5da]/50 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-charcoal-soft/50 font-bold">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-[#d57c4c] hover:text-[#954d26] transition-colors"
                    >
                      Read Article <BookOpen className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#faf8f6] border border-[#efe5da] rounded-2xl">
            <Sparkles className="w-10 h-10 text-copper/40 mx-auto mb-4 animate-bounce-slow" />
            <h3 className="text-xl font-bold font-serif text-charcoal mb-2">No Articles Found</h3>
            <p className="text-charcoal-soft/75 text-sm font-medium">
              We couldn't find any articles matching your search or category selection. Try resetting filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 px-6 py-2.5 bg-copper hover:bg-copper-deep transition text-white font-bold text-xs uppercase tracking-wider rounded-full"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16 border-t border-charcoal/5 pt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="p-2.5 rounded-full border border-[#efe5da] bg-white hover:border-copper disabled:opacity-40 disabled:hover:border-[#efe5da] transition"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4 text-charcoal" />
            </button>

            {Array.from({ length: totalPages }, (_, idx) => {
              const pageNumber = idx + 1;
              const isCurrent = currentPage === pageNumber;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-10 h-10 rounded-full font-bold text-xs uppercase tracking-wider transition ${
                    isCurrent
                      ? "bg-copper text-white shadow-md shadow-copper/20"
                      : "bg-white border border-[#efe5da] text-charcoal hover:border-copper"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="p-2.5 rounded-full border border-[#efe5da] bg-white hover:border-copper disabled:opacity-40 disabled:hover:border-[#efe5da] transition"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4 text-charcoal" />
            </button>
          </div>
        )}
      </section>

      {/* 3. In-App Blog Reader Lightbox / Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Modal Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedPost(null)}
          />

          {/* Modal Card */}
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full p-8 md:p-10 shadow-2xl border border-charcoal/10 transform scale-100 transition-all duration-300 z-10 max-h-[85vh] overflow-y-auto"
            style={{ boxShadow: "0 24px 70px rgba(0,0,0,0.35)" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute right-6 top-6 p-1.5 rounded-full bg-[#faf8f6] hover:bg-copper/10 hover:text-copper text-charcoal/50 transition cursor-pointer"
              aria-label="Close Reader"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Post Category & Reading Time */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-copper/5 border border-copper/10 text-copper text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                {selectedPost.category}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-charcoal-soft/50">
                <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
              </span>
            </div>

            {/* Post Title */}
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-charcoal mb-4 leading-tight">
              {selectedPost.title}
            </h2>

            {/* Post Date */}
            <div className="flex items-center gap-1.5 text-xs text-charcoal-soft/50 font-bold mb-6 pb-6 border-b border-[#efe5da]/70">
              <Calendar className="w-3.5 h-3.5" /> {selectedPost.date}
            </div>

            {/* Post Excerpt (Highlighted block) */}
            <blockquote className="border-l-4 border-copper/40 pl-4 py-1 text-sm text-charcoal-soft italic font-medium mb-6 bg-[#faf8f6] p-4 rounded-r-xl">
              {selectedPost.excerpt}
            </blockquote>

            {/* Full Content */}
            <div className="text-base text-charcoal-soft leading-relaxed font-sans font-medium space-y-4 whitespace-pre-line">
              <p>{selectedPost.content}</p>
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-8 pt-8 border-t border-[#efe5da]/70 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-xs font-semibold text-charcoal-soft/60 text-center sm:text-left">
                Want to learn more about our remodeling services?
              </p>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  window.location.href = "/contact";
                }}
                className="px-6 py-3 rounded-full bg-copper hover:bg-copper-deep text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-copper/25 transition cursor-pointer"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
