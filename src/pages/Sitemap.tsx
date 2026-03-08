import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Map, Home, Wrench, MapPin, BookOpen, FileText } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const Sitemap = () => {
  useDocumentTitle("Sitemap — QuoteMyFence");
  const sitemapSections = [{
    title: "Main Pages",
    icon: Home,
    links: [{
      name: "Home",
      href: "/"
    }, {
      name: "Contact Us",
      href: "/contact"
    }, {
      name: "FAQ",
      href: "/faq"
    }]
  }, {
    title: "Fencing Services",
    icon: Wrench,
    links: [{
      name: "Timber Fencing",
      href: "/timber-fencing"
    }, {
      name: "Colorbond Fencing",
      href: "/colorbond-fencing"
    }, {
      name: "Feature Fencing",
      href: "/feature-fencing"
    }, {
      name: "Aluminium Fencing",
      href: "/aluminium-fencing"
    }, {
      name: "Chain Link Fencing",
      href: "/chain-link-fencing"
    }, {
      name: "Security Fencing",
      href: "/security-fencing"
    }, {
      name: "Steel Fencing",
      href: "/steel-fencing"
    }, {
      name: "Pool Fencing",
      href: "/pool-fencing"
    }, {
      name: "Fence Repairs",
      href: "/fence-repairs"
    }, {
      name: "Gate Installation",
      href: "/gate-installation"
    }]
  }, {
    title: "Service Areas",
    icon: MapPin,
    links: [{
      name: "Sydney",
      href: "/sydney"
    }, {
      name: "Melbourne",
      href: "/melbourne"
    }, {
      name: "Brisbane",
      href: "/brisbane"
    }, {
      name: "Perth",
      href: "/perth"
    }, {
      name: "Adelaide",
      href: "/adelaide"
    }, {
      name: "Canberra",
      href: "/canberra"
    }, {
      name: "Hobart",
      href: "/hobart"
    }, {
      name: "Darwin",
      href: "/darwin"
    }]
  }, {
    title: "Resources",
    icon: BookOpen,
    links: [{
      name: "Fencing Guides",
      href: "/fencing-guides"
    }]
  }, {
    title: "Legal",
    icon: FileText,
    links: [{
      name: "Privacy Policy",
      href: "/privacy-policy"
    }, {
      name: "Terms",
      href: "/terms-of-service"
    }]
  }];
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Map className="w-4 h-4" />
            <span className="text-sm font-medium">Site Navigation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Find everything you need on QuoteMyFence with our complete site directory.</p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => <li key={linkIndex}>
                      <Link to={link.href} className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent/50 rounded-full"></span>
                        {link.name}
                      </Link>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      {/* SEO Suburb Links Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Fencing by Location</h2>

          {/* NSW */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">NSW (4537 suburbs)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1">
              {["Wadalba", "Wadeville", "Wagga Wagga", "Wagstaffe", "Wahroonga", "Waitara", "Wakefield", "Wakeley", "Walcha", "Walgett", "Wallsend", "Waratah", "Warners Bay", "Warrawong", "Waterfall", "Waterloo", "Waverley", "Waverton", "Wentworth Falls", "Wentworth Point", "Wentworthville", "Werrington", "West Ryde", "Westmead", "Wetherill Park", "Willoughby", "Windsor", "Winston Hills", "Wollongong", "Wollstonecraft", "Woollahra", "Woolloomooloo", "Wyoming", "Wyong", "Yagoona", "Yamba", "Yass", "Zetland"].map((suburb, idx) => (
                <a key={`nsw-extra-${idx}`} href="/sydney" className="text-xs text-muted-foreground hover:text-accent transition-colors truncate">
                  Fencing in {suburb}
                </a>
              ))}
            </div>
          </div>

          {/* VIC */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">VIC (3201 suburbs)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1">
              {["Abbotsford", "Albert Park", "Alphington", "Altona", "Armadale", "Ascot Vale", "Ashburton", "Ashwood", "Avondale Heights", "Balaclava", "Balwyn", "Bayswater", "Beaconsfield", "Belgrave", "Bentleigh", "Berwick", "Blackburn", "Box Hill", "Brighton", "Broadmeadows", "Brunswick", "Bulleen", "Bundoora", "Burwood", "Camberwell", "Canterbury", "Carlton", "Carnegie", "Caulfield", "Chelsea", "Cheltenham", "Clayton", "Coburg", "Collingwood", "Cranbourne", "Croydon", "Dandenong", "Doncaster", "Eltham", "Essendon", "Fitzroy", "Footscray", "Frankston", "Glen Waverley", "Greensborough", "Hampton", "Hawthorn", "Heidelberg", "Ivanhoe", "Kew", "Malvern", "Melbourne", "Mentone", "Moonee Ponds", "Moorabbin", "Mornington", "Mount Waverley", "Narre Warren", "Noble Park", "Northcote", "Nunawading", "Oakleigh", "Pakenham", "Preston", "Reservoir", "Richmond", "Ringwood", "Rowville", "Sandringham", "South Yarra", "Springvale", "St Kilda", "Sunshine", "Templestowe", "Thomastown", "Toorak", "Werribee", "Williamstown"].map((suburb, idx) => (
                <a key={`vic-${idx}`} href="/melbourne" className="text-xs text-muted-foreground hover:text-accent transition-colors truncate">
                  Fencing in {suburb}
                </a>
              ))}
            </div>
          </div>

          {/* QLD */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">QLD (3800+ suburbs)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1">
              {["Albion", "Ascot", "Aspley", "Bowen Hills", "Brisbane City", "Bulimba", "Calamvale", "Cannon Hill", "Chermside", "Clayfield", "Coorparoo", "East Brisbane", "Fortitude Valley", "Hamilton", "Hawthorne", "Holland Park", "Indooroopilly", "Kelvin Grove", "Kenmore", "Milton", "Morningside", "Mount Gravatt", "New Farm", "Nundah", "Paddington", "Redcliffe", "South Brisbane", "Sunnybank", "Toowong", "West End", "Woolloongabba", "Wynnum"].map((suburb, idx) => (
                <a key={`qld-${idx}`} href="/brisbane" className="text-xs text-muted-foreground hover:text-accent transition-colors truncate">
                  Fencing in {suburb}
                </a>
              ))}
            </div>
          </div>

          {/* WA */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">WA (2500+ suburbs)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1">
              {["Applecross", "Balcatta", "Bassendean", "Belmont", "Canning Vale", "Claremont", "Cockburn", "Como", "Cottesloe", "Fremantle", "Innaloo", "Joondalup", "Karrinyup", "Mandurah", "Midland", "Morley", "Mount Lawley", "Nedlands", "Perth", "Rockingham", "Scarborough", "South Perth", "Subiaco", "Victoria Park", "Wanneroo"].map((suburb, idx) => (
                <a key={`wa-${idx}`} href="/perth" className="text-xs text-muted-foreground hover:text-accent transition-colors truncate">
                  Fencing in {suburb}
                </a>
              ))}
            </div>
          </div>

          {/* SA */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">SA (1500+ suburbs)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1">
              {["Adelaide", "Brighton", "Burnside", "Glenelg", "Henley Beach", "Marion", "Mitcham", "Modbury", "Norwood", "Prospect", "Salisbury", "Tea Tree Gully", "Unley", "West Torrens"].map((suburb, idx) => (
                <a key={`sa-${idx}`} href="/adelaide" className="text-xs text-muted-foreground hover:text-accent transition-colors truncate">
                  Fencing in {suburb}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Sitemap;
