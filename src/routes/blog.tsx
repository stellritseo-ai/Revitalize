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

// Category definition helper
type Category = "All" | "Kitchen" | "Bathroom" | "Remodeling" | "Cabinetry" | "Tampa Insights";

interface BlogPost {
  id: number;
  title: string;
  category: Category;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

const ALL_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Creative Kitchen Layouts: Maximizing Space and Style",
    category: "Kitchen",
    date: "April 15, 2026",
    readTime: "5 min read",
    excerpt: "Discover how to optimize your kitchen workspace with our expert design layouts. We explore U-shaped, L-shaped, and open-concept island configurations for ultimate utility and modern appeal.",
    content: "A well-designed kitchen layout is the foundation of a functional and beautiful home. When planning your kitchen remodeling project, it is essential to consider the 'work triangle'—the path between your sink, stove, and refrigerator. In this article, we break down the most popular layouts. U-shaped kitchens offer maximum counter space, L-shaped layouts are perfect for corner spaces and open dining areas, and open-concept island designs serve as the ultimate gathering hub. Choosing the right configuration ensures smooth traffic flow and elevates your daily cooking experience."
  },
  {
    id: 2,
    title: "Innovative Design Meets Function: A Guide to Bespoke Cabinet Configuration",
    category: "Cabinetry",
    date: "April 12, 2026",
    readTime: "6 min read",
    excerpt: "Bespoke cabinetry can transform any room. Learn how to plan the perfect storage solutions, choose premium wood species, and select smart inserts that match your functional needs.",
    content: "Custom cabinetry is not just about storage; it's about tailoring your home to fit your exact lifestyle. In this guide, we discuss how custom cabinet configurations can maximize storage capacity in kitchens, pantries, closets, and offices. From soft-close drawers and pull-out spice racks to blind corner organizers, bespoke solutions eliminate wasted space. We also explore material choices—like solid maple, cherry, and high-density plywood—and premium hardware selections that ensure your cabinets look stunning and remain durable for decades."
  },
  {
    id: 3,
    title: "Why Local Expertise Matters: Navigating Permits and Codes in Tampa Bay",
    category: "Tampa Insights",
    date: "April 8, 2026",
    readTime: "4 min read",
    excerpt: "Building or remodeling in Tampa requires navigating specific local building codes. We explain the permit process, wind mitigation rules, and why hiring a local contractor is crucial.",
    content: "Navigating local building permits and codes is one of the most critical aspects of any residential home improvement project in Tampa Bay. Florida's building codes are strict, especially regarding wind load calculations, structural framing, and impact-resistant materials due to hurricane mitigation guidelines. Working with a local, licensed general contractor guarantees that your designs adhere to municipal codes in Tampa, Wesley Chapel, St. Petersburg, and Clearwater. Proper permitting protects your home value, ensures safety, and prevents costly project delays."
  },
  {
    id: 4,
    title: "Before and After: From Outdated and Dark to Bright and Open",
    category: "Remodeling",
    date: "April 5, 2026",
    readTime: "5 min read",
    excerpt: "Take a visual journey through one of our recent whole-home remodeling projects. See how removing structural walls and adding smart lighting turned a dark house into a bright home.",
    content: "Many older homes in the Tampa Bay area feature compartmentalized rooms that block natural light and restrict movement. In this case study, we walk through a whole-home transformation where we removed non-load-bearing walls to connect the kitchen, dining, and living areas. By replacing small windows with expansive sliding glass doors and installing energy-efficient LED recessed lighting, we turned a dark, outdated floor plan into a bright, open oasis that breathes life into the home."
  },
  {
    id: 5,
    title: "Transformative Design: Building Cabinets That Fit Your Lifestyle",
    category: "Cabinetry",
    date: "April 1, 2026",
    readTime: "4 min read",
    excerpt: "Your kitchen cabinets should match your cooking habits. Explore custom drawer divider options, deep pot storage, and integrated appliance doors for a cohesive visual layout.",
    content: "Every homeowner uses their kitchen differently. Dedicated home chefs require specialized storage for baking sheets, heavy stand mixers, and spice assortments, while busy families might prioritize easy-access snack drawers and child-safe locks. Our design process starts with an audit of your storage needs to create custom cabinets that fit your lifestyle. Integrated cabinetry panels can also hide refrigerators and dishwashers for a seamless, luxurious aesthetic."
  },
  {
    id: 6,
    title: "Artist Installations: Showcasing Custom Built-Ins for Home Offices",
    category: "Cabinetry",
    date: "March 28, 2026",
    readTime: "5 min read",
    excerpt: "With remote work here to stay, custom built-in desks, bookshelves, and media storage are top home additions. We cover layouts that blend productivity with architectural beauty.",
    content: "A home office should be more than just a desk in a corner; it should be a quiet sanctuary designed to stimulate focus. Custom built-ins offer the perfect solution by combining workspace, display shelves, and hidden file storage into a single cohesive unit. We use premium custom cabinetry designs to frame workspaces, hide cords, and build elegant shelving configurations that showcase books, artwork, and awards, turning a functional office into a beautiful piece of craftsmanship."
  },
  {
    id: 7,
    title: "Choosing the Right Contractor: Questions to Ask Before You Hire",
    category: "Tampa Insights",
    date: "March 25, 2026",
    readTime: "6 min read",
    excerpt: "Ensure your peace of mind by asking potential contractors about licensing, insurance coverage, sub-contractor vetting, and detailed project milestone scopes before signing a contract.",
    content: "Hiring a general contractor for your kitchen, bathroom, or whole-home remodeling project is a major decision. Protect your investment by asking vital questions upfront. Verify their credentials, check if they hold active state licensing and general liability insurance, and request references from recent projects. A reputable builder will provide a detailed contract, line-item budget estimates, clear milestone schedules, and a transparent payment structure. Avoid bids that seem too good to be true, as they often lead to subpar work or hidden change orders."
  },
  {
    id: 8,
    title: "Building for the Future: Eco-Friendly Remodeling Practices for Modern Homes",
    category: "Remodeling",
    date: "March 20, 2026",
    readTime: "5 min read",
    excerpt: "Learn how green building choices, low-VOC finishes, energy-efficient appliances, and sustainable wood items can create a healthier indoor environment and reduce bills.",
    content: "Sustainability and home comfort go hand-in-hand. When remodeling your home, choosing eco-friendly materials and practices can significantly improve indoor air quality and lower utility bills. We recommend using low-VOC (volatile organic compound) paints and sealants to prevent off-gassing, installing low-flow plumbing fixtures in bathrooms, and opting for energy-star certified appliances. Sustainable cabinet wood materials and recycled quartz countertops also help reduce environmental impact while maintaining a high-end luxury look."
  },
  {
    id: 9,
    title: "Interior Design Trends: Merging Classic Aesthetics with Modern Comfort",
    category: "Remodeling",
    date: "March 15, 2026",
    readTime: "5 min read",
    excerpt: "Explore the balance between classic architecture and modern finishes. Discover how combining rich natural wood tones with sleek stone surfaces creates a timeless home.",
    content: "Modern design is shifting away from cold, stark minimalism toward warm, textured spaces that feel inviting and lived-in. We achieve this by blending classic architectural details—like crown molding, wainscoting, and natural wood cabinetry—with sleek, contemporary elements like quartz countertops, matte black plumbing fixtures, and smart lighting. This hybrid aesthetic ensures your newly renovated space feels character-rich, timeless, and completely comfortable."
  },
  {
    id: 10,
    title: "Innovative Storage Solutions: Making the Most of Small Closets",
    category: "Cabinetry",
    date: "March 10, 2026",
    readTime: "4 min read",
    excerpt: "Transform cluttered closets into highly organized storage zones. We cover double-hanging rods, custom shoe shelves, and pull-out accessory drawers for master suites.",
    content: "Maximize every square inch of your closet space with a custom closet organization system. Standard wire shelving often leaves massive amounts of vertical space wasted. By utilizing custom floor-to-ceiling cabinetry, we can build custom configurations containing double-hanging rods for shirts, deep pull-out drawers for accessories, tilted shoe racks, and top shelves for seasonal storage. Organizing your wardrobe changes how you start your morning, bringing order and peace to your master suite."
  },
  {
    id: 11,
    title: "Outdoor Living Spaces: Creating a Backyard Oasis in the Sunshine State",
    category: "Remodeling",
    date: "March 5, 2026",
    readTime: "5 min read",
    excerpt: "Tampa living means enjoying the outdoors year-round. We discuss designing durable custom outdoor kitchens, pavers, pergolas, and pool decks that stand up to Florida weather.",
    content: "Expanding your living area into the outdoors is a great way to maximize your home's square footage and enjoy Florida's climate. When designing an outdoor kitchen or patio space, material selection is critical to ensure durability against high heat, humidity, and summer rains. We use marine-grade polymers or stainless steel for outdoor cabinetry, high-grade stone countertops, and durable concrete pavers. Adding a covered pergola, integrated lighting, and seating creates a perfect backyard oasis for hosting family and friends."
  },
  {
    id: 12,
    title: "Pre-Listing Remodels: Simple Upgrades that Maximize Your Selling Price",
    category: "Tampa Insights",
    date: "March 1, 2026",
    readTime: "4 min read",
    excerpt: "Before putting your home on the market, targeted home improvements can boost its value. Learn why refreshing cabinet paint, new countertops, and modern light fixtures pay off.",
    content: "If you're planning to sell your home, certain strategic updates will yield a high return on investment and attract serious buyers. Instead of a full-scale gut remodel, focus on high-impact areas. Replacing old, laminate countertops with quartz, repainting worn cabinets, updating plumbing fixtures, and replacing dated light fixtures can transform the visual appeal of your kitchen and bathrooms. Fresh neutral paint and clean flooring make a strong first impression, allowing buyers to picture themselves in the home."
  },
  {
    id: 13,
    title: "Understanding Project Timelines: What to Expect During a Home Renovation",
    category: "Remodeling",
    date: "February 25, 2026",
    readTime: "5 min read",
    excerpt: "Remodeling is an exciting journey, but planning is key. We outline the key phases of a renovation project—from schematic design and permits to construction and final walkthrough.",
    content: "A successful remodel relies on a detailed, phased schedule. In this guide, we map out the realistic timeline of home improvement projects. The pre-construction phase involves initial design sketches, material selections, and permit approvals, which can take several weeks. Once construction begins, milestones include demolition, framing, rough-in plumbing/electrical, drywall, cabinet installation, and finishes. We maintain clear communication and manage expectations, ensuring you know exactly when trades will be on-site."
  },
  {
    id: 14,
    title: "Modernizing Heritage Homes: Preserving Character While Adding Convenience",
    category: "Remodeling",
    date: "February 20, 2026",
    readTime: "5 min read",
    excerpt: "Historic homes have unique charm, but outdated layouts and plumbing need attention. Discover how to upgrade wiring, insulation, and layouts without losing historic character.",
    content: "Renovating a historic home requires a delicate balance of preservation and modernization. In historic districts around the Tampa Bay area, building regulations require matching historical aesthetics. We specialize in upgrading structural elements, electrical wiring, plumbing systems, and insulation behind the scenes, while retaining original features like wood trim, masonry, and doors. This preserves the home's historic integrity while ensuring modern comfort and efficiency."
  },
  {
    id: 15,
    title: "Smart Home Technology Integration: Enhancing Comfort and Efficiency",
    category: "Remodeling",
    date: "February 15, 2026",
    readTime: "4 min read",
    excerpt: "Smart homes are no longer a luxury. Learn how integrating smart lighting controls, thermostats, custom motorized shades, and safety systems can elevate your daily living.",
    content: "Integrating smart home systems during a remodeling project is cost-effective and seamless. Wiring smart control switches, smart thermostats, and security cameras while walls are open ensures a clean, wireless finish. We can configure automated lighting scenes that adjust based on the time of day, smart climate controls that lower energy bills, and motorized window shades that protect your interiors from the intense Florida sun, providing convenient and secure luxury living."
  },
  {
    id: 16,
    title: "Lighting Design: How to Brighten Up Your Space and Improve Mood",
    category: "Remodeling",
    date: "February 10, 2026",
    readTime: "4 min read",
    excerpt: "Good lighting design uses layering to highlight tasks and set the mood. We cover recessed cans, elegant under-cabinet lighting, and statement pendant choices.",
    content: "Lighting is one of the most powerful design elements, yet it is often overlooked. A premium lighting plan integrates three layers: ambient (general light), task (focused light for cooking or reading), and accent (highlighting art or architecture). In kitchens, installing under-cabinet LED strips makes food preparation safer and adds a warm, floating glow. Hanging statement pendants over an island adds architectural character and helps define the visual boundaries of open-concept spaces."
  },
  {
    id: 17,
    title: "The Cost of Quality: Why Premium Materials Pay Off in the Long Run",
    category: "Remodeling",
    date: "February 5, 2026",
    readTime: "5 min read",
    excerpt: "Choosing cheap materials can save money initially but lead to early failure. We compare budget and premium selections for cabinetry, hardware, and stone countertops.",
    content: "When budgeting for a home renovation, it is tempting to cut costs by choosing builder-grade materials. However, premium materials pay off in longevity, look, and performance. For example, solid wood cabinet boxes withstand humidity far better than particle board, preventing sagging and warping. High-grade quartz or quartzite countertops resist scratching and staining without the maintenance of laminate. Investing in quality ensures your home stays beautiful and functional for years."
  },
  {
    id: 18,
    title: "Flooring Selection: Finding the Perfect Balance Between Aesthetics and Durability",
    category: "Remodeling",
    date: "February 1, 2026",
    readTime: "5 min read",
    excerpt: "Selecting floors involves weighing looks, traffic levels, and moisture exposure. We compare hardwood, luxury vinyl plank (LVP), and porcelain tile for active homes.",
    content: "Flooring is the hard-working surface in your home, subject to foot traffic, pets, and moisture. Hardwood floors offer unmatched warmth and value but are sensitive to moisture and scratching. Luxury Vinyl Plank (LVP) has become incredibly popular due to its 100% waterproof nature, scratch resistance, and realistic wood look—making it perfect for active families. Porcelain tile is the most durable choice, ideal for wet areas like bathrooms, entryways, and laundries."
  },
  {
    id: 19,
    title: "Creating Functional Mudrooms: Keeping Your Home Organized and Clean",
    category: "Remodeling",
    date: "January 25, 2026",
    readTime: "4 min read",
    excerpt: "A mudroom is your home's transition zone. Learn how to configure custom lockers, benches, and charging drawers to corral daily clutter and stay organized.",
    content: "Prevent clutter from spilling into your living room by designing a dedicated entryway drop zone. A functional mudroom incorporates custom storage lockers for family members, integrated shoe storage bins, hooks for bags and keys, and a comfortable bench for putting on shoes. We also build smart charging drawers inside lockers to keep phones, tablets, and smartwatches organized, charged, and out of sight."
  },
  {
    id: 20,
    title: "Bathroom Oasis: Tips for Creating a Spa-Like Experience at Home",
    category: "Bathroom",
    date: "January 20, 2026",
    readTime: "5 min read",
    excerpt: "Turn your bathroom into a luxury retreat. We cover freestanding bathtubs, walk-in curbless showers, custom tile designs, and heated floors.",
    content: "Modern bathroom remodeling projects focus on creating a relaxing, spa-like escape. Curbless walk-in showers with seamless glass enclosures create an airy feeling and improve accessibility. Installing a freestanding soaking tub, a rain showerhead with wall body sprays, and elegant porcelain tiles elevates the aesthetic. We also recommend custom floating vanities with LED backlit mirrors and built-in drawer outlets for hair tools to maintain clean counters."
  },
  {
    id: 21,
    title: "The Ultimate Guide to Cabinets: Styles, Materials, and Layouts",
    category: "Cabinetry",
    date: "January 15, 2026",
    readTime: "6 min read",
    excerpt: "Cabinets set the visual tone of your kitchen and bath. Understand the differences between shaker, slab, and raised-panel doors, and paint vs. stain options.",
    content: "Cabinetry occupies the largest visual footprint in your kitchen and bathrooms. When choosing cabinets, consider construction styles: frameless cabinets offer a modern, clean look with slightly more interior space, while framed cabinets provide a classic, structured feel. Door styles like Shaker doors are versatile and timeless, while slab doors suit modern designs. Choosing a high-durability factory finish over site-applied paint ensures a lasting, chip-resistant surface."
  },
  {
    id: 22,
    title: "Color Psychology: How to Choose the Perfect Paint Colors for Every Room",
    category: "Remodeling",
    date: "January 10, 2026",
    readTime: "4 min read",
    excerpt: "Paint colors influence how a room feels. We explore warm neutrals for living rooms, soothing blues for bedrooms, and bold accents that add drama.",
    content: "Selecting paint colors is about creating the right mood. Soothing blues and soft greens are ideal for bedrooms and bathrooms as they promote relaxation. Living spaces benefit from warm neutrals and off-whites that feel bright and inviting without looking clinical. When using dark, dramatic colors like charcoal or forest green, place them on feature walls or inside cozy library areas, balancing them with ample natural light."
  },
  {
    id: 23,
    title: "Tile Trends: Bold Patterns and Textures for Backsplashes and Showers",
    category: "Bathroom",
    date: "January 5, 2026",
    readTime: "5 min read",
    excerpt: "Tile is a great canvas for personal expression. Discover handmade zellige tiles, dynamic herringbone layouts, and large-format porcelain slabs.",
    content: "Tile designs are leaning toward organic textures and unique layouts. Zellige tiles, with their hand-molded imperfections and glaze variations, capture light beautifully and add a rich, artisanal character to kitchen backsplashes. Herringbone and vertical stack patterns create visual interest, making ceilings appear taller. Large-format porcelain tiles minimize grout lines, creating clean, modern shower walls that are easy to clean."
  },
  {
    id: 24,
    title: "Maximizing Natural Light: Simple Layout Adjustments for Brighter Rooms",
    category: "Remodeling",
    date: "January 1, 2026",
    readTime: "4 min read",
    excerpt: "Natural light makes homes feel larger and more welcoming. Learn how strategic furniture placement, window selection, and mirrors can brighten dark rooms.",
    content: "Natural light enhances mood and highlights design details. To maximize light, keep furniture paths clear of windows and use lightweight, semi-sheer window treatments. Placing large, decorative mirrors opposite windows reflects light deeper into the room, making hallways and small living spaces feel twice as large. Upgrading to larger, double-paned windows during construction is also a great investment for light and efficiency."
  }
];

// Add 36 more articles dynamically to make a total of 60 posts matching the grid count in the image
const categoriesList: Category[] = ["Kitchen", "Bathroom", "Remodeling", "Cabinetry", "Tampa Insights"];
const datesList = [
  "December 25, 2025", "December 20, 2025", "December 15, 2025", "December 10, 2025", "December 5, 2025", "December 1, 2025",
  "November 25, 2025", "November 20, 2025", "November 15, 2025", "November 10, 2025", "November 5, 2025", "November 1, 2025",
  "October 25, 2025", "October 20, 2025", "October 15, 2025", "October 10, 2025", "October 5, 2025", "October 1, 2025",
  "September 25, 2025", "September 20, 2025", "September 15, 2025", "September 10, 2025", "September 5, 2025", "September 1, 2025",
  "August 25, 2025", "August 20, 2025", "August 15, 2025", "August 10, 2025", "August 5, 2025", "August 1, 2025",
  "July 25, 2025", "July 20, 2025", "July 15, 2025", "July 10, 2025", "July 5, 2025", "July 1, 2025"
];

const postTitles = [
  "Home Office Design: Creating a Productive and Ergonomic Workspace",
  "The Power of Accents: Using Custom Molding and Trim to Elevate Your Space",
  "Budgeting for Your Remodel: Tips for Avoiding Hidden Costs",
  "Curating Art and Decor: How to Personalize Your Newly Renovated Space",
  "Multi-Generational Living: Adapting Your Home for Extended Family",
  "Safe and Stylish: Designing Accessible Spaces for Aging in Place",
  "The Importance of Proper Ventilation in Kitchens and Bathrooms",
  "Landscaping and Pavers: Creating Curb Appeal that Lasts",
  "Home Maintenance 101: Post-Remodel Care to Protect Your Investment",
  "Understanding Home Appraisals: How Remodeling Impacts Your Property Value",
  "Selecting the Perfect Countertops: Granite, Quartz, or Marble?",
  "Creating a Cozy Reading Nook: Small Space Design Tips",
  "Historic Remodeling: Navigating Guidelines for Historic Tampa Districts",
  "Modern Minimalism: How to Achieve a Clean, Clutter-Free Look",
  "Kid-Friendly Design: Creating Spaces that Grow with Your Family",
  "Pet-Friendly Remodeling: Designing for Your Four-Legged Family Members",
  "Seasonal Home Prep: Summer and Winter Checklist for Florida Homeowners",
  "The Art of Entertaining: Designing a Dining Room and Layout for Hosting",
  "DIY vs. Professional: When to Call in the Experts for Home Improvement",
  "Cabinet Care: How to Maintain the Beauty of Your Custom Cabinets",
  "Creating a Home Gym: Design and Layout Tips for a Healthy Space",
  "Designing for Florida Weather: Hurricane Prep and Wind Mitigation Upgrades",
  "The Value of Outdoor Kitchens: Expanding Your Living and Entertaining Space",
  "Closet Organization Systems: Tips for a Clutter-Free Wardrobe",
  "Soundproofing Your Home: Solutions for Peace and Quiet",
  "Accent Walls: Creative Ideas to Make a Bold Statement in Any Room",
  "The Ultimate Guide to Flooring: Hardwood, Vinyl, Tile, and Carpet",
  "Eco-Friendly Material Selections: Green Building Choices for Your Home",
  "Transforming Your Attic or Basement: Creative Living Space Conversion Ideas",
  "Designing a Custom Closet: From Planning to Installation",
  "Smart Lighting: Automating Your Home's Ambiance and Energy Efficiency",
  "Home Bar Design: Ideas for Creating the Perfect Entertainment Spot",
  "Building a Custom Pantry: Storage and Layout Tips for the Home Chef",
  "Creating a Mudroom / Entryway Combo for Busy Families",
  "The Art of Custom Cabinetry: Tailored Storage Solutions for Every Room",
  "Designing a Master Suite Sanctuary: Tips for Layout, Lighting, and Finishes"
];

// Fill out remaining list elements programmatically to get a solid list of 60 items
const generatedPosts: BlogPost[] = postTitles.map((title, idx) => {
  const id = idx + 25;
  const category = categoriesList[idx % categoriesList.length];
  const date = datesList[idx % datesList.length];
  const readTime = `${4 + (idx % 3)} min read`;
  const excerpt = `Insights and expert recommendations regarding ${title.toLowerCase()}. Discover tips, material selections, and layouts to transform your space.`;
  const content = `When considering ${title.toLowerCase()}, proper planning, high-quality material selection, and experienced craftsmanship make all the difference. Our residential home improvement team specializes in delivering custom, high-end designs tailored to your home and lifestyle. In this article, we detail the core design systems, step-by-step processes, and budget considerations to help you plan your next home remodeling project with complete confidence. Let our experts guide you to create spaces that merge visual beauty with absolute durability.`;
  return { id, title, category, date, readTime, excerpt, content };
});

const ALL_BLOG_POSTS: BlogPost[] = [...ALL_POSTS, ...generatedPosts];

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const postsPerPage = 9;

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return ALL_BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
            <div className="text-base text-charcoal-soft leading-relaxed font-sans font-medium space-y-4">
              <p>{selectedPost.content}</p>
              <p>
                Whether you're starting from scratch or refining an existing floor plan, custom home improvement projects require attention to design, materials, and local municipal guidelines. Our team at Revitalize Real Estate is dedicated to guiding you through every step, ensuring clear communication, professional project management, and premium craftsmanship that transforms your space. Contact us today to schedule a free on-site consultation and estimate.
              </p>
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
