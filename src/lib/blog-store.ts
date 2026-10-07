// Category definition helper
export type Category = "All" | "Kitchen" | "Bathroom" | "Remodeling" | "Cabinetry" | "Tampa Insights";

export interface BlogPost {
  id: number | string;
  title: string;
  category: Category;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  isCustom?: boolean;
}

export const ALL_POSTS: BlogPost[] = [
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
    excerpt: "Building or remodeling in Tampa requires navigating specific local building codes. We explain the permit process, wind mitigation rules, and why hiring a local real estate and home improvement company is crucial.",
    content: "Navigating local building permits and codes is one of the most critical aspects of any residential home improvement project in Tampa Bay. Florida's building codes are strict, especially regarding wind load calculations, structural framing, and impact-resistant materials due to hurricane mitigation guidelines. Working with local, licensed home improvement professionals guarantees that your designs adhere to municipal codes in Tampa, Wesley Chapel, St. Petersburg, and Clearwater. Proper permitting protects your home value, ensures safety, and prevents costly project delays."
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
    title: "Choosing the Right Home Improvement Professionals: Questions to Ask Before You Hire",
    category: "Tampa Insights",
    date: "March 25, 2026",
    readTime: "6 min read",
    excerpt: "Ensure your peace of mind by asking potential home improvement professionals about licensing, insurance coverage, vetting, and detailed project milestone scopes before signing a contract.",
    content: "Hiring a real estate and home improvement company for your kitchen, bathroom, or whole-home remodeling project is a major decision. Protect your investment by asking vital questions upfront. Verify their credentials, check if they hold active state licensing and general liability insurance, and request references from recent projects. A reputable home improvement team will provide a detailed contract, line-item budget estimates, clear milestone schedules, and a transparent payment structure. Avoid bids that seem too good to be true, as they often lead to subpar work or hidden change orders."
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

const generatedPosts: BlogPost[] = postTitles.map((title, idx) => {
  const id = idx + 25;
  const category = categoriesList[idx % categoriesList.length];
  const date = datesList[idx % datesList.length];
  const readTime = `${4 + (idx % 3)} min read`;
  const excerpt = `Insights and expert recommendations regarding ${title.toLowerCase()}. Discover tips, material selections, and layouts to transform your space.`;
  const content = `When considering ${title.toLowerCase()}, proper planning, high-quality material selection, and experienced craftsmanship make all the difference. Our residential home improvement team specializes in delivering custom, high-end designs tailored to your home and lifestyle. In this article, we detail the core design systems, step-by-step processes, and budget considerations to help you plan your next home remodeling project with complete confidence. Let our experts guide you to create spaces that merge visual beauty with absolute durability.`;
  return { id, title, category, date, readTime, excerpt, content };
});

export const ALL_BLOG_POSTS: BlogPost[] = [...ALL_POSTS, ...generatedPosts];

// ── GENERIC API FETCH HELPER ──
async function apiCall<T>(url: string, method: string, body?: any): Promise<T> {
  const options: RequestInit = { method };
  const headers: Record<string, string> = {};

  if (body !== undefined) {
    headers["content-type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("revitalize-session-token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  options.headers = headers;

  const res = await fetch(url, options);
  if (!res.ok) {
    let errorMsg = `HTTP error ${res.status}`;
    try {
      const text = await res.text();
      try {
        const parsed = JSON.parse(text);
        if (parsed.error) errorMsg = parsed.error;
      } catch {}
    } catch {}
    throw new Error(errorMsg);
  }
  return res.json() as Promise<T>;
}

const BLOGS_CACHE_KEY = "revitalize-all-blogs";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  if (typeof window === "undefined") return ALL_BLOG_POSTS;
  try {
    const remotePosts = await apiCall<BlogPost[]>("/api/blogs", "GET");
    if (Array.isArray(remotePosts) && remotePosts.length > 0) {
      localStorage.setItem(BLOGS_CACHE_KEY, JSON.stringify(remotePosts));
      return remotePosts;
    }
  } catch (err) {
    console.warn("Could not fetch blogs from API, checking local cache:", err);
  }

  try {
    const cached = localStorage.getItem(BLOGS_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}

  return ALL_BLOG_POSTS;
};

export const addBlogPost = async (
  newPostData: Omit<BlogPost, "id" | "date">
): Promise<BlogPost> => {
  const postToSave: BlogPost = {
    ...newPostData,
    id: "blog-" + Math.random().toString(36).substr(2, 9),
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    isCustom: true
  };

  try {
    const res = await apiCall<BlogPost | BlogPost[]>("/api/blogs", "POST", postToSave);
    const savedPost = Array.isArray(res) ? (res.find(p => p.title === postToSave.title) || postToSave) : res;

    // Refresh and update local cache
    const current = await getBlogPosts();
    const updated = [savedPost, ...current.filter(p => p.id !== savedPost.id)];
    if (typeof window !== "undefined") {
      localStorage.setItem(BLOGS_CACHE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent("revitalize-blog-updated"));
    }
    return savedPost;
  } catch (err) {
    console.warn("API POST /api/blogs failed, saving locally:", err);
    if (typeof window !== "undefined") {
      const current = await getBlogPosts();
      const updated = [postToSave, ...current];
      localStorage.setItem(BLOGS_CACHE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent("revitalize-blog-updated"));
    }
    return postToSave;
  }
};

export const deleteBlogPost = async (id: string | number): Promise<BlogPost[]> => {
  try {
    const res = await apiCall<BlogPost[]>("/api/blogs", "DELETE", { id });
    if (Array.isArray(res)) {
      if (typeof window !== "undefined") {
        localStorage.setItem(BLOGS_CACHE_KEY, JSON.stringify(res));
        window.dispatchEvent(new CustomEvent("revitalize-blog-updated"));
      }
      return res;
    }
  } catch (err) {
    console.warn("API DELETE /api/blogs failed, updating locally:", err);
  }

  const current = await getBlogPosts();
  const updated = current.filter(p => String(p.id) !== String(id));
  if (typeof window !== "undefined") {
    localStorage.setItem(BLOGS_CACHE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("revitalize-blog-updated"));
  }
  return updated;
};

