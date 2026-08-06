// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   async redirects() {
//     return [
//       {
//         source: "/quarter-3",
//         destination: "/listing-compliance/2023-24/q3",
//         permanent: true, // 301 redirect (SEO friendly)
//       },
//     ];
//   },
// };
// module.exports = {
//   Images: {
//     domains: ["Images.pexels.com"],
//   },
// };
// export default nextConfig;




import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/quarter-3-2",
        destination: "/listing-compliance/2023-24/q3",
        permanent: true,
      },
       {
        source: "/quarter-3",
        destination: "/listing-compliance/2023-24/q3",
        permanent: true,
      },
      {
        source: "/quarter-2",
        destination: "/listing-compliance/2023-24/q2",
        permanent: true,
      },
      {
        source: "/quarter-4",
        destination: "/listing-compliance/2023-24/q4",
        permanent: true,
      },
      {
        source: "/agm-disclosures",
        destination: "/notices-announcements/agm/2024-25",
        permanent: true,
      },
      {
        source: "/quarter-1",
        destination: "/listing-compliance/2023-24/q1",
        permanent: true,
      },
      {
        source: "/shareholding-pattern",
        destination: "/governance/shareholding-pattern",
        permanent: true,
      },
      {
        source: "/f-y-2023-24",
        destination: "/listing-compliance/2023-24/q4",
        permanent: true,
      },

       {
        source:
          "/wp-content/uploads/2025/07/Non-Applicability-of-Annual-Secretarial-Compliance-Report-for-the-year-ended-31.03.2025.pdf",
        destination:
          "/Brochure/Non-Applicability-of-Annual-Secretarial-Compliance-Report-for-the-year-ended-31.03.2025.pdf",
        permanent: true,
      },

      {
        source:
          "/wp-content/uploads/2025/07/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor-for-the-F.Y.-2023-24.pdf",
        destination:
          "/Brochure/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor-for-the-F.Y.-2023-24.pdf",
        permanent: true,
      },
       {
        source:
          "/wp-content/uploads/2025/07/Reply-to-NSE-seeking-Clarification-on-Appointment-of-ID-Mr.-Narendra-Dev-Garg.pdf",
        destination:
          "/Brochure/Reply-to-NSE-seeking-Clarification-on-Appointment-of-ID-Mr.-Narendra-Dev-Garg.pdf",
        permanent: true,
      },
       {
        source:
          "/wp-content/uploads/2025/10/Regulation-30_Intimation-for-Appointment-of-Internal-Auditor-for-the-F.Y.-2025-26.pdf",
        destination:
          "/Brochure/Regulation-30_Intimation-for-Appointment-of-Internal-Auditor-for-the-F.Y.-2025-26.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2025/07/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor-for-the-F.Y.-2024-25.pdf",
        destination:
          "/Brochure/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor-for-the-F.Y.-2024-25.pdf",
        permanent: true,
      },

      {
  source:
    "/wp-content/uploads/2025/07/Press-Release_Goyal-Salt-strengthens-Brand-in-Tier-1-6-cities_16.01.2025-1.pdf",
  destination:
    "/Brochure/Press-Release_Goyal-Salt-strengthens-Brand-in-Tier-1-6-cities_16.01.2025-1.pdf",
  permanent: true,
},
{
  source:
    "/wp-content/uploads/2025/10/Trading-Window-Closure-for-the-period-ended-30.09.2025.pdf",
  destination:
    "/Brochure/Trading-Window-Closure-for-the-period-ended-30.09.2025.pdf",
  permanent: true,
},
{
  source:
    "/wp-content/uploads/2025/07/Trading-Window-Closure-for-the-period-ended-30.09.2024.pdf",
  destination:
    "/Brochure/Trading-Window-Closure-for-the-period-ended-30.09.2024.pdf",
  permanent: true,
},
{
  source:
    "/wp-content/uploads/2025/07/Trading-Window-Closure-for-the-period-ended-31.03.2025.pdf",
  destination:
    "/Brochure/Trading-Window-Closure-for-the-period-ended-31.03.2025.pdf",
  permanent: true,
},
{
  source:
    "/wp-content/uploads/2025/07/Regulation-30_Appointment-of-Mr.-Narendra-Dev-Garg-as-Independent-Director.pdf",
  destination:
    "/Brochure/Regulation-30_Appointment-of-Mr.-Narendra-Dev-Garg-as-Independent-Director.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/RPT_Non-Applicability.pdf",
  destination: "/Brochure/RPT_Non-Applicability.pdf",
  permanent: true,
},
{
        source: "/wp-content/uploads/2025/07/Statement-of-Deviation_GSL.pdf",
        destination: "/Brochure/Statement-of-Deviation_GSL.pdf",
        permanent: true,
      },
      {
  source: "/wp-content/uploads/2025/07/SDD-Compliance-Certificate.pdf",
  destination: "/Brochure/SDD-Compliance-Certificate.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Risk-Management-Policy.pdf",
  destination: "/Brochure/Risk-Management-Policy.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Integrated-Filing-Governance.pdf",
  destination: "/Brochure/Integrated-Filing-Governance.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/08/Integrated-Governance-Filing.pdf",
  destination: "/Brochure/Integrated-Governance-Filing.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/RPT-Non-Applicability.pdf",
  destination: "/Brochure/RPT-Non-Applicability.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/10/Regulation-30_Chhattisgarh-Work-Order.pdf",
  destination: "/Brochure/Regulation-30_Chhattisgarh-Work-Order.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Familirization-programme-for-ID.pdf",
  destination: "/Brochure/Familirization-programme-for-ID.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/SDD-Compliance-Certificate-3.pdf",
  destination: "/Brochure/SDD-Compliance-Certificate-3.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Audit-Committee.pdf",
  destination: "/Brochure/Audit-Committee.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/CSR-Committee.pdf",
  destination: "/Brochure/CSR-Committee.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Outcome-of-BM_05.07.2024.pdf",
  destination: "/Brochure/Outcome-of-BM_05.07.2024.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/11/Outcome-of-BM_07.11.2025.pdf",
  destination: "/Brochure/Outcome-of-BM_07.11.2025.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Outcome-of-BM_31.05.2025.pdf",
  destination: "/Brochure/Outcome-of-BM_31.05.2025.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Policy-on-Preservation-of-Documents.pdf",
  destination: "/Brochure/Policy-on-Preservation-of-Documents.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/SDD-Compliance-Certificate-1-1.pdf",
  destination: "/Brochure/SDD-Compliance-Certificate-1-1.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Committee-of-Board.pdf",
  destination: "/Brochure/Committee-of-Board.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Intimation-of-BM_29.03.2025.pdf",
  destination: "/Brochure/Intimation-of-BM_29.03.2025.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Outcome-of-BM_29.03.2025.pdf",
  destination: "/Brochure/Outcome-of-BM_29.03.2025.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/10/Voting-Result-and-Scrutinizers-Report.pdf",
  destination: "/Brochure/Voting-Result-and-Scrutinizers-Report.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Intimation-of-BM_10.11.2023.pdf",
  destination: "/Brochure/Intimation-of-BM_10.11.2023.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Regulation-30_Credit-Rating-from-CRISIL-Ratings.pdf",
  destination: "/Brochure/Regulation-30_Credit-Rating-from-CRISIL-Ratings.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Intimation-of-BM_18.03.2024.pdf",
  destination: "/Brochure/Intimation-of-BM_18.03.2024.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/10/Outcome-of-BM_30.08.2025.pdf",
  destination: "/Brochure/Outcome-of-BM_30.08.2025.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Regulation-30_Re-appointment-of-Statutory-Auditor.pdf",
  destination: "/Brochure/Regulation-30_Re-appointment-of-Statutory-Auditor.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Intimation-of-BM_24.04.2024.pdf",
  destination: "/Brochure/Intimation-of-BM_24.04.2024.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/10/Intimation-of-BM_30.08.2025.pdf",
  destination: "/Brochure/Intimation-of-BM_30.08.2025.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Intimation-of-BM_27.01.2024.pdf",
  destination: "/Brochure/Intimation-of-BM_27.01.2024.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Terms-and-Conditions-for-appointment-of-IDs.pdf",
  destination: "/Brochure/Terms-and-Conditions-for-appointment-of-IDs.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Non-Applicability-of-Regulation-272-2.pdf",
  destination: "/Brochure/Non-Applicability-of-Regulation-272-2.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Non-Applicability-of-Regulation-272-3.pdf",
  destination: "/Brochure/Non-Applicability-of-Regulation-272-3.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Internal-Complaint-Committee-ICC.pdf",
  destination: "/Brochure/Internal-Complaint-Committee-ICC.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/09/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor.pdf",
  destination: "/Brochure/Regulation-30_Intimation-for-Appointment-of-Secretarial-Auditor.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Non-Applicability-of-Regulation-272-1.pdf",
  destination: "/Brochure/Non-Applicability-of-Regulation-272-1.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/10/Proceeding-of-AGM-dated-26.09.2025.pdf",
  destination: "/Brochure/Proceeding-of-AGM-dated-26.09.2025.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/10/Shareholding-Pattern-as-on-September-30-2025.pdf",
  destination: "/Brochure/Shareholding-Pattern-as-on-September-30-2025.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Regulation-30_Intimation-for-Resignation-of-Company-Secretary.pdf",
  destination: "/Brochure/Regulation-30_Intimation-for-Resignation-of-Company-Secretary.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Reply-to-NSE-for-Price-Movement.pdf",
  destination: "/Brochure/Reply-to-NSE-for-Price-Movement.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Regulation-30_Completion-of-Jharkhand-Govt.-Tender-Offer.pdf",
  destination: "/Brochure/Regulation-30_Completion-of-Jharkhand-Govt.-Tender-Offer.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/10/Reconciliation-of-Share-Capital-Audit-Report-under-Regulation-76.pdf",
  destination: "/Brochure/Reconciliation-of-Share-Capital-Audit-Report-under-Regulation-76.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Financial-Results-for-the-Half-Year-ended-30.09.2024.pdf",
  destination: "/Brochure/Financial-Results-for-the-Half-Year-ended-30.09.2024.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Certificate-under-SEBI-Depositories-and-Participants-Regulations-2018-1.pdf",
  destination: "/Brochure/Certificate-under-SEBI-Depositories-and-Participants-Regulations-2018-1.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Investor-Grievances-Certificate-under-Regulation-13-3.pdf",
  destination: "/Brochure/Investor-Grievances-Certificate-under-Regulation-13-3.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Reconciliation-of-Share-Capital-Audit-Report-under-Regulation-76-2.pdf",
  destination: "/Brochure/Reconciliation-of-Share-Capital-Audit-Report-under-Regulation-76.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Statement-of-Grievance-Redressal-Mechanism-under-Regulation-133-1.pdf",
  destination: "/Brochure/Statement-of-Grievance-Redressal-Mechanism-under-Regulation-133-1.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Certificate-under-SEBI-Depositories-and-Participants-Regulations-2018-3.pdf",
  destination: "/Brochure/Certificate-under-SEBI-Depositories-and-Participants-Regulations-2018-3.pdf",
  permanent: true,
},
{
  source: "/wp-content/uploads/2025/07/Statement-of-Grievance-Redressal-Mechanism-under-Regulation-133-3.pdf",
  destination: "/Brochure/Statement-of-Grievance-Redressal-Mechanism-under-Regulation-133.pdf",
  permanent: true,
}
    
    ];
  },

  images: {
    domains: ["images.pexels.com"],
  },
};

export default nextConfig;