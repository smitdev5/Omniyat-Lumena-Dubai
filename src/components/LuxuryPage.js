// LuxuryPage.jsx
import React from "react";
// import "./LuxuryPage.css";
import "../App.css";
import { useEnquiryModal } from "./EnquiryModal";

const LuxuryPage = () => {
  const { openModal } = useEnquiryModal();
  return (
    <div id="about" className="luxury-page">
      {/* ----------- Section 1: Luxury Launch ----------- */}
      <section className="luxury-section">
        <div className="luxury-image">
          <img
            src="../Assets/banner2.webp"
            alt="Luxury View"
          />
        </div>
        <div className="luxury-text">
          <h2 className="font-semibold">
            About Omniyat Lumena Dubai
          </h2>
          <p>
            Lumena by OMNIYAT is a bold new commercial icon in Business Bay, redefining the future of work. Rising 260 meters with 91 offices, Omniyat Lumena Business Bay sculptural design blends light, clarity, and modern ambition. With landmark views of Burj Khalifa, Burj Al Arab, and the Arabian Gulf, Lumena features flexible shell & core office spaces, landscaped terraces, curated retail, and an Executive Wellness Suite with a sky pool. Smart, sustainable, and service-driven, Omniyat Lumena Dubai offers direct connectivity across Dubai and is targeting LEED Platinum, WiredScore, and SmartScore certifications—delivering a workspace beyond imagination.
          </p>
          <button onClick={openModal} className="mt-4 font-semibold border-2 rounded-md border-[#997736] text-[#997736] hover:text-white px-6 py-2 hover:bg-[#997736] transition">DOWNLOAD BROCHURE</button>
        </div>
      </section>
    </div>
  );
};

export default LuxuryPage;
