import DocumentTitle from "../components/ui/DocumentTitle";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <DocumentTitle />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
