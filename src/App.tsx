import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import usePrefetch from "./hooks/usePrefetch";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ColorbondFencing from "./pages/ColorbondFencing";
import TimberFencing from "./pages/TimberFencing";
import AluminiumFencing from "./pages/AluminumFencing";
import GlassFencing from "./pages/GlassFencing";
import FeatureFencing from "./pages/FeatureFencing";
import ChainLinkFencing from "./pages/ChainLinkFencing";
import SecurityFencing from "./pages/SecurityFencing";
import SteelFencing from "./pages/SteelFencing";
import PoolFencing from "./pages/PoolFencing";
import FenceRepairs from "./pages/FenceRepairs";
import GateInstallation from "./pages/GateInstallation";
import Sydney from "./pages/Sydney";
import Melbourne from "./pages/Melbourne";
import Brisbane from "./pages/Brisbane";
import Perth from "./pages/Perth";
import Adelaide from "./pages/Adelaide";
import Canberra from "./pages/Canberra";
import Hobart from "./pages/Hobart";
import Darwin from "./pages/Darwin";
import FencingGuides from "./pages/FencingGuides";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import SubscriptionConfirmation from "./pages/SubscriptionConfirmation";
import MelbournePakenham from "./pages/MelbournePakenham";
import MelbournePortsea from "./pages/MelbournePortsea";
import MelbourneSorrento from "./pages/MelbourneSorrento";
import MelbourneMountMartha from "./pages/MelbourneMountMartha";
import MelbourneLangwarrin from "./pages/MelbourneLangwarrin";
import MelbourneFrankston from "./pages/MelbourneFrankston";
import MelbourneCarrumDowns from "./pages/MelbourneCarrumDowns";
import MelbourneMornington from "./pages/MelbourneMornington";
import MelbourneRosebud from "./pages/MelbourneRosebud";
import MelbourneMountEliza from "./pages/MelbourneMountEliza";
import MelbourneCranbourne from "./pages/MelbourneCranbourne";
import MelbourneBerwick from "./pages/MelbourneBerwick";
import MelbourneNarreWarren from "./pages/MelbourneNarreWarren";
import MelbourneOfficer from "./pages/MelbourneOfficer";
import MelbourneBotanicRidge from "./pages/MelbourneBotanicRidge";
import MelbourneLynbrook from "./pages/MelbourneLynbrook";
import MelbourneRingwood from "./pages/MelbourneRingwood";
import MelbourneLilydale from "./pages/MelbourneLilydale";
import MelbourneRowville from "./pages/MelbourneRowville";
import MelbourneCroydon from "./pages/MelbourneCroydon";
import MelbourneBoxHill from "./pages/MelbourneBoxHill";
import MelbourneToorak from "./pages/MelbourneToorak";
import MelbourneGlenWaverley from "./pages/MelbourneGlenWaverley";
import MelbourneRichmond from "./pages/MelbourneRichmond";
import MelbourneSouthYarra from "./pages/MelbourneSouthYarra";
import MelbourneDoncaster from "./pages/MelbourneDoncaster";
import MelbourneStKilda from "./pages/MelbourneStKilda";
import MelbourneMountWaverley from "./pages/MelbourneMountWaverley";
import MelbourneCarlton from "./pages/MelbourneCarlton";
import MelbourneDandenong from "./pages/MelbourneDandenong";
import MelbourneBayswater from "./pages/MelbourneBayswater";
import MelbourneClayton from "./pages/MelbourneClayton";
import MelbourneWantirna from "./pages/MelbourneWantirna";
import MelbourneFerntreeGully from "./pages/MelbourneFerntreeGully";
import MelbourneSeaford from "./pages/MelbourneSeaford";
import MelbourneClyde from "./pages/MelbourneClyde";
import MelbourneBoronia from "./pages/MelbourneBoronia";
import MelbourneWheelersHill from "./pages/MelbourneWheelersHill";
import MelbourneSpringvale from "./pages/MelbourneSpringvale";
import MelbourneTemplestowe from "./pages/MelbourneTemplestowe";
import MelbourneAshwood from "./pages/MelbourneAshwood";
import MelbourneHamptonPark from "./pages/MelbourneHamptonPark";
import MelbourneMooroolbark from "./pages/MelbourneMooroolbark";
import MelbourneKilsyth from "./pages/MelbourneKilsyth";
import MelbourneBurwood from "./pages/MelbourneBurwood";
import MelbourneEndeavourHills from "./pages/MelbourneEndeavourHills";
import MelbourneKeysborough from "./pages/MelbourneKeysborough";
import MelbourneSomerville from "./pages/MelbourneSomerville";
import MelbourneBlackburn from "./pages/MelbourneBlackburn";
import MelbourneNoblePark from "./pages/MelbourneNoblepark";
import MelbourneBalwyn from "./pages/MelbourneBalwyn";

const queryClient = new QueryClient();

const PrefetchProvider = ({ children }: { children: React.ReactNode }) => {
  usePrefetch();
  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    const onDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "IMG") e.preventDefault();
    };
    document.addEventListener("dragstart", onDragStart);
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
    return () => document.removeEventListener("dragstart", onDragStart);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <PrefetchProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/colorbond-fencing" element={<ColorbondFencing />} />
              <Route path="/timber-fencing" element={<TimberFencing />} />
              <Route path="/aluminum-fencing" element={<AluminiumFencing />} />
              <Route path="/aluminium-fencing" element={<AluminiumFencing />} />
              <Route path="/glass-fencing" element={<GlassFencing />} />
              <Route path="/feature-fencing" element={<FeatureFencing />} />
              <Route path="/chain-link-fencing" element={<ChainLinkFencing />} />
              <Route path="/security-fencing" element={<SecurityFencing />} />
              <Route path="/steel-fencing" element={<SteelFencing />} />
              <Route path="/pool-fencing" element={<PoolFencing />} />
              <Route path="/fence-repairs" element={<FenceRepairs />} />
              <Route path="/gate-installation" element={<GateInstallation />} />
              <Route path="/sydney" element={<Sydney />} />
              <Route path="/melbourne" element={<Melbourne />} />
              <Route path="/vic/pakenham-fencing" element={<MelbournePakenham />} />
              <Route path="/vic/portsea-fencing" element={<MelbournePortsea />} />
              <Route path="/vic/sorrento-fencing" element={<MelbourneSorrento />} />
              <Route path="/vic/mount-martha-fencing" element={<MelbourneMountMartha />} />
              <Route path="/vic/langwarrin-fencing" element={<MelbourneLangwarrin />} />
              <Route path="/vic/frankston-fencing" element={<MelbourneFrankston />} />
              <Route path="/vic/carrum-downs-fencing" element={<MelbourneCarrumDowns />} />
              <Route path="/vic/mornington-fencing" element={<MelbourneMornington />} />
              <Route path="/vic/rosebud-fencing" element={<MelbourneRosebud />} />
              <Route path="/vic/mount-eliza-fencing" element={<MelbourneMountEliza />} />
              <Route path="/vic/cranbourne-fencing" element={<MelbourneCranbourne />} />
              <Route path="/vic/berwick-fencing" element={<MelbourneBerwick />} />
              <Route path="/vic/narre-warren-fencing" element={<MelbourneNarreWarren />} />
              <Route path="/vic/officer-fencing" element={<MelbourneOfficer />} />
              <Route path="/vic/botanic-ridge-fencing" element={<MelbourneBotanicRidge />} />
              <Route path="/vic/lynbrook-fencing" element={<MelbourneLynbrook />} />
              <Route path="/vic/ringwood-fencing" element={<MelbourneRingwood />} />
              <Route path="/vic/lilydale-fencing" element={<MelbourneLilydale />} />
              <Route path="/vic/rowville-fencing" element={<MelbourneRowville />} />
              <Route path="/vic/croydon-fencing" element={<MelbourneCroydon />} />
              <Route path="/vic/box-hill-fencing" element={<MelbourneBoxHill />} />
              <Route path="/vic/toorak-fencing" element={<MelbourneToorak />} />
              <Route path="/vic/glen-waverley-fencing" element={<MelbourneGlenWaverley />} />
              <Route path="/vic/richmond-fencing" element={<MelbourneRichmond />} />
              <Route path="/vic/south-yarra-fencing" element={<MelbourneSouthYarra />} />
              <Route path="/vic/doncaster-fencing" element={<MelbourneDoncaster />} />
              <Route path="/vic/st-kilda-fencing" element={<MelbourneStKilda />} />
              <Route path="/vic/mount-waverley-fencing" element={<MelbourneMountWaverley />} />
              <Route path="/vic/carlton-fencing" element={<MelbourneCarlton />} />
              <Route path="/vic/dandenong-fencing" element={<MelbourneDandenong />} />
              <Route path="/vic/bayswater-fencing" element={<MelbourneBayswater />} />
              <Route path="/vic/clayton-fencing" element={<MelbourneClayton />} />
              <Route path="/vic/wantirna-fencing" element={<MelbourneWantirna />} />
              <Route path="/vic/ferntree-gully-fencing" element={<MelbourneFerntreeGully />} />
              <Route path="/vic/seaford-fencing" element={<MelbourneSeaford />} />
              <Route path="/vic/clyde-fencing" element={<MelbourneClyde />} />
              <Route path="/vic/boronia-fencing" element={<MelbourneBoronia />} />
              <Route path="/vic/wheelers-hill-fencing" element={<MelbourneWheelersHill />} />
              <Route path="/vic/springvale-fencing" element={<MelbourneSpringvale />} />
              <Route path="/vic/templestowe-fencing" element={<MelbourneTemplestowe />} />
              <Route path="/vic/ashwood-fencing" element={<MelbourneAshwood />} />
              <Route path="/vic/hampton-park-fencing" element={<MelbourneHamptonPark />} />
              <Route path="/vic/mooroolbark-fencing" element={<MelbourneMooroolbark />} />
              <Route path="/vic/kilsyth-fencing" element={<MelbourneKilsyth />} />
              <Route path="/vic/burwood-fencing" element={<MelbourneBurwood />} />
              <Route path="/vic/endeavour-hills-fencing" element={<MelbourneEndeavourHills />} />
              <Route path="/vic/keysborough-fencing" element={<MelbourneKeysborough />} />
              <Route path="/vic/somerville-fencing" element={<MelbourneSomerville />} />
              <Route path="/vic/blackburn-fencing" element={<MelbourneBlackburn />} />
              <Route path="/vic/noble-park-fencing" element={<MelbourneNoblePark />} />
              <Route path="/vic/balwyn-fencing" element={<MelbourneBalwyn />} />
              <Route path="/brisbane" element={<Brisbane />} />
              <Route path="/perth" element={<Perth />} />
              <Route path="/adelaide" element={<Adelaide />} />
              <Route path="/canberra" element={<Canberra />} />
              <Route path="/hobart" element={<Hobart />} />
              <Route path="/darwin" element={<Darwin />} />
              <Route path="/fencing-guides" element={<FencingGuides />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/subscription-confirmed" element={<SubscriptionConfirmation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PrefetchProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
