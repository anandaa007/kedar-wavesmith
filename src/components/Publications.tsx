import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award, BookOpen } from "lucide-react";

const Publications = () => {
  const [showAllConferences, setShowAllConferences] = useState(false);

  const allJournalPublications = [
    {
      id: 1,
      title: "On the Application of Radon Transformation for the Synthesis of Thinned Planar Antenna Arrays",
      authors: "A. Kedar, P. Vangol, A. Mahesh",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2025",
      volume: "",
      type: "Journal Article"
    },
    {
      id: 2,
      title: "IEEE AP-S/MTT-S Distinguished Instructor Workshop: Igniting RF and Microwave Education in Young Minds [MGA News]",
      authors: "A. Kedar, C. Saha, Y. Yang, M.J. Akhtar",
      journal: "IEEE Microwave Magazine",
      year: "2025",
      volume: "",
      type: "Journal Article"
    },
    {
      id: 3,
      title: "Hybridization of Bayesian Compressive Sensing and Array Dilation Technique for Synthesis of Linear Isophoric Sparse Antenna Arrays",
      authors: "Ashutosh Kedar, P. Vangol and Mahesh A.",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2023",
      volume: "vol. 71, 2023",
      type: "Journal Article"
    },
    {
      id: 4,
      title: "Glimpses From the IEEE Microwave, Antenna and Propagation Conference (MAPCON-2022)",
      authors: "A Kedar, C Kumar, PK Mishra",
      journal: "IEEE Microwave Magazine",
      year: "2022",
      volume: "[Conference Report]",
      type: "Journal Article"
    },
    {
      id: 5,
      title: "Antenna Array Performance Diagnostics Using Theory of Collapsed Distributions",
      authors: "Ashutosh Kedar",
      journal: "IETE Journal of Research",
      year: "2022",
      volume: "June 2022",
      type: "Journal Article"
    },
    {
      id: 6,
      title: "Design Guidelines Using Theory of Characteristic Modes for a Broadband and Broad Beam SIW Cavity-Backed Microstrip Antenna",
      authors: "Ashutosh Kedar",
      journal: "Microwave Journal",
      year: "2022",
      volume: "vol. 65, no. 3, March 2022",
      type: "Journal Article"
    },
    {
      id: 7,
      title: "Complex Phased Array Antenna/Antenna Platform Interaction Analysis with Enhanced Computational Accuracy and Relaxed Computational Burden",
      authors: "Ashutosh Kedar",
      journal: "Ansys Advantage",
      year: "2021",
      volume: "",
      type: "Journal Article"
    },
    {
      id: 8,
      title: "Tutorial on research trends in antenna technology",
      authors: "Ashutosh Kedar",
      journal: "Microwave Journal",
      year: "2020",
      volume: "Oct 2020 (online)",
      type: "Journal Article"
    },
    {
      id: 9,
      title: "Deterministic Synthesis Approach for Linear Sparse Array Antennas",
      authors: "Ashutosh Kedar",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2020",
      volume: "Sept. 2020",
      type: "Journal Article"
    },
    {
      id: 10,
      title: "Deterministic Synthesis of Wide Scanning Sparse Concentric Ring Antenna Arrays",
      authors: "Ashutosh Kedar",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2019",
      volume: "vol. 67, No.12, pp. 7387-7395",
      type: "Journal Article"
    },
    {
      id: 11,
      title: "Dielectric Free Wide Scan UWB Low Cross-Pol Metallic Vivaldi Antenna for Active Phased Array Radars",
      authors: "Ashutosh Kedar",
      journal: "IETE Journal of Research",
      year: "2019",
      volume: "",
      type: "Journal Article",
      doi: "10.1080/03772063.2019.1617201"
    },
    {
      id: 12,
      title: "Wide Scanning Characteristics of Sparse Phased Array Antennas Using an Analytical Expression for Directivity",
      authors: "Ashutosh Kedar and L.P. Ligthart",
      journal: "IEEE Trans. on Antennas & Propagation",
      year: "2019",
      volume: "Vol. 67, No. 2, pp. 905-915",
      type: "Journal Article"
    },
    {
      id: 13,
      title: "A Wide Band Wide Scan Low Cross Polarized Grooved Tapered Slot Antenna Array",
      authors: "Ashutosh Kedar",
      journal: "IET Microwave Antennas & Propagation",
      year: "2019",
      volume: "Vol. 13, No.2, pp. 178-184, Feb. 2019",
      type: "Journal Article"
    },
    {
      id: 14,
      title: "Design and Development of Low Cost Low Sidelobe Level Slotted Waveguide Antenna Array in X-Band",
      authors: "Pramod Kumar, Ashutosh Kedar and Anil K. Singh",
      journal: "IEEE Trans. on Antennas & Propagation",
      year: "2015",
      volume: "vol. 63, 11, pp. 4723-4731, Nov 2015",
      type: "Journal Article"
    },
    {
      id: 15,
      title: "A Waveguide-Fed Pyramid-Shaped Dielectric Rod Antenna with Size Reduction and High Gain for Wideband Applications",
      authors: "Ashutosh Kedar and Anil K. Singh",
      journal: "Progress In Electromagnetics Research C",
      year: "2014",
      volume: "Vol. 52, 63-69",
      type: "Journal Article"
    },
    {
      id: 16,
      title: "CAD of wideband printed transmission line transformers using particle swarm optimisation",
      authors: "Ashutosh Kedar and A.K. Singh",
      journal: "Int. J. Swarm Intelligence",
      year: "2014",
      volume: "Vol. 1, No. 2, pp.193–208",
      type: "Journal Article"
    },
    {
      id: 17,
      title: "Wide beam tapered slot antenna for wide angle scanning phased array antenna",
      authors: "Ashutosh Kedar and K.S. Beenamole",
      journal: "Progress In Electromagnetics Research B",
      year: "2011",
      volume: "Vol. 27, 235-251",
      type: "Journal Article"
    },
    {
      id: 18,
      title: "Wide Band Low Profile Linear Microstrip Antenna Array with Cosecant Squared Shaped Beam Pattern",
      authors: "Ashutosh Kedar, Prem Kutiyal, Mahima Garg and U.K. Revankar",
      journal: "Microwave and Optical Technology Letters",
      year: "2007",
      volume: "vol.49, no.4, April 2007, 963-965",
      type: "Journal Article"
    },
    {
      id: 19,
      title: "Parametric Study of flat sandwich multilayer radome",
      authors: "Ashutosh Kedar and U.K. Revankar",
      journal: "Progress In Electromagnetic Research, PIER 66",
      year: "2006",
      volume: "253-265",
      type: "Journal Article"
    },
    {
      id: 20,
      title: "Performance appraisal of active phased array in presence of multilayer flat sandwich radome",
      authors: "Ashutosh Kedar, K.S. Beenamole and U.K. Revankar",
      journal: "Progress In Electromagnetic Research, PIER 66",
      year: "2006",
      volume: "157-171",
      type: "Journal Article"
    },
    {
      id: 21,
      title: "Efficient Analysis for Nonlinear Microwave Characteristics of High-Power HTS Thin Film Microstrip Resonators",
      authors: "Ashutosh Kedar and N.D. Kataria",
      journal: "Superconductor Science and Technology",
      year: "2005",
      volume: "18, 2005, 1-6",
      type: "Journal Article"
    },
    {
      id: 22,
      title: "Spectral Domain Modeling of Superconducting Transmission Lines and Resonators",
      authors: "Ashutosh Kedar, N.D. Kataria and K.K. Gupta",
      journal: "Microwave and Optical Technology Letters",
      year: "2004",
      volume: "vol.41, no.1, April 2004, 55-59",
      type: "Journal Article"
    },
    {
      id: 23,
      title: "Optimization of Substrate Thickness in GaAs MMICs for High Frequency Applications: Using a Microstrip Line",
      authors: "J.P. Thakur, A.K. Pandey, Ashutosh Kedar, K.K. Gupta and H.P. Vyas",
      journal: "Microwave and Optical Technology Letters",
      year: "2004",
      volume: "vol.41, no.1, April 2004, 55-59",
      type: "Journal Article"
    },
    {
      id: 24,
      title: "Characterisation and Analysis of High Temperature Superconducting Microstrip and Coplanar Resonators Using a Spectral Domain Method",
      authors: "Ashutosh Kedar, N.D. Kataria and K.K. Gupta",
      journal: "Superconductor Science and Technology",
      year: "2004",
      volume: "17, 2004, 823-827",
      type: "Journal Article"
    },
    {
      id: 25,
      title: "Modelling of GaAs-Mmic Microstrip Line up to 40 GHz",
      authors: "J.P. Thakur, A.K. Pandey, Ashutosh Kedar, K.K. Gupta and H.P. Vyas",
      journal: "International Journal of RF & Microwave Computer Aided Engineering",
      year: "2004",
      volume: "vol. 14, No. 5, September 2004, 475-482",
      type: "Journal Article"
    },
    {
      id: 26,
      title: "CAD analysis of HTS Microstrip Patch Antennas using Spectral Domain Method",
      authors: "Ashutosh Kedar, K.K. Gupta, G.P. Srivastava and N.D. Kataria",
      journal: "Electromagnetics",
      year: "2003",
      volume: "vol. 7, July 2003",
      type: "Journal Article"
    },
    {
      id: 27,
      title: "Accurate Computer Aided Modelling of Multilayer GaAs Microstrip Lines using a Spectral Domain Method",
      authors: "J. P. Thakur, Ashutosh Kedar, A.K. Pandey, K.K. Gupta and H.P. Vyas",
      journal: "Microwave and Optical Technology Letters",
      year: "2003",
      volume: "vol.39, no.2, October 2003, 169-172",
      type: "Journal Article"
    },
    {
      id: 28,
      title: "Full-Wave Modeling of Non-Linear Power Dependence of High-Tc Superconducting Microstrip Resonators",
      authors: "Ashutosh Kedar, N.D. Kataria and K.K. Gupta",
      journal: "Electronics Letters",
      year: "2003",
      volume: "vol. 39, no. 23, 2003, 1660-1661",
      type: "Journal Article"
    },
    {
      id: 29,
      title: "Accurate Full Wave Estimation of Quality Factor and Resonance Frequency of HTS Microstrip Resonator",
      authors: "Ashutosh Kedar, N.D. Kataria, Mukul Misra, K.K. Gupta and G.P. Srivastava",
      journal: "Electronics Letters",
      year: "2002",
      volume: "vol.32, no.1, January 2002, 32-34",
      type: "Journal Article"
    },
    {
      id: 30,
      title: "Modeling of HTS Microstrip Resonator by Spectral Domain Method: Comparison with Experimental Results",
      authors: "Ashutosh Kedar, N.D. Kataria, Mukul Misra and K.K. Gupta",
      journal: "Singapore Journal of Physics",
      year: "2002",
      volume: "vol.18, no.1, July 2002, 139-145",
      type: "Journal Article"
    },
    {
      id: 31,
      title: "Parametric and Temperature-Sensitivity Study of Resonance Frequency of Microstrip Antennas using Spectral Domain Method",
      authors: "Ashutosh Kedar, K.K. Gupta, G.P. Srivastava and N.D. Kataria",
      journal: "Microwave and Optical Technology Letters",
      year: "2001",
      volume: "vol.30, no.4, August 2001, 276-280",
      type: "Journal Article"
    }
  ];

  const [showAllJournals, setShowAllJournals] = useState(false);
  const displayedJournals = showAllJournals ? allJournalPublications : allJournalPublications.slice(0, 4);

  const publicationStats = [
    { number: "100+", label: "Published Papers" },
    { number: "2000+", label: "Total Citations" },
    { number: "30+", label: "h-index" },
    { number: "25+", label: "Conference Talks" }
  ];

  const books = [
    {
      title: "Sparse Phased Array Antennas: Theory and applications",
      publisher: "Artech House",
      year: "2022",
      type: "Book",
      description: "Comprehensive guide to sparse phased array antenna technologies and their applications in modern radar and communication systems."
    },
    {
      title: "Phased Array Antennas",
      publisher: "Handbook of Metrology, Springer Nature",
      year: "2022",
      type: "Book Chapter",
      description: "Detailed chapter covering the fundamentals and advanced concepts of phased array antenna systems."
    }
  ];

  const allConferences = [
    {
      id: 1,
      title: "Reducing Scanning Losses in Linear Arrays Using Dielectric Domes with Matching Layers",
      authors: "MG RG, RK JK, A Kedar",
      conference: "IEEE Space, Aerospace and Defence",
      location: "",
      year: "2025",
      type: "Conference Paper"
    },
    {
      id: 2,
      title: "X-Band Surveillance Radar System for Aerial Targets Detection",
      authors: "I Kedar, CM Nijas, A Kedar",
      conference: "IEEE Wireless Antenna and Microwave Symposium",
      location: "",
      year: "2025",
      type: "Conference Paper"
    },
    {
      id: 3,
      title: "Impact of Radiation Patterns on UAV Performance Across Various Sizes - Virtual Flight Test",
      authors: "A Kedar, S Kothidigi, A Bellary",
      conference: "IEEE Wireless Antenna and Microwave Symposium",
      location: "",
      year: "2025",
      type: "Conference Paper"
    },
    {
      id: 4,
      title: "Design and analysis of non-conventional dielectric dome antenna for scan enhancement",
      authors: "A. Raj, T.M. Madhusudan, A. Mahesh and Ashutosh Kedar",
      conference: "MAPCON 2024",
      location: "Hyderabad",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 5,
      title: "Studies on metasurface geometries for scan enhancement in phased array antennas",
      authors: "Ashutosh Kedar, G. Amogh, A. Mahesh, K S Sushrutha and P. Kumar",
      conference: "MAPCON 2024",
      location: "Hyderabad",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 6,
      title: "One-bit coded near field corrected metasurface for beam steering applications",
      authors: "Ishaan Kedar, M. Raju, Debdeep Sarkar and Ashutosh Kedar",
      conference: "MAPCON 2024",
      location: "Hyderabad",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 7,
      title: "A Sparse Concentric Ring Antenna Array Design with Wide Scanning and Low Sidelobe Level",
      authors: "Ashutosh Kedar",
      conference: "WAMS 2024",
      location: "Vishakhapatnam",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 8,
      title: "Design of a Broadband Stacked Annular Ring Antenna Using Theory of Characteristic Modes",
      authors: "A. Teja, U. Teja, Ashutosh Kedar",
      conference: "WAMS 2024",
      location: "Vishakhapatnam",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 9,
      title: "Python-Based Graphical User Interface to Extract Electromagnetic Parameters Using NRW Method",
      authors: "Ishaan Kedar, T. S. Kumar, A. Zakharia and Ashutosh Kedar",
      conference: "WAMS 2024",
      location: "Vishakhapatnam",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 10,
      title: "Investigations on the Performance of Isophoric Linear Sparse Array Antenna with Low Sidelobe Level Due to Non-Isotropic Radiators",
      authors: "Ashutosh Kedar",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 11,
      title: "Design Proposal for Wide Scan Energy Efficient Concentric Ring Phased Array Antennas Using Penrose Tessellations",
      authors: "Ashutosh Kedar, F.A. Dicandia, S. Genovesi and G. Manara",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 12,
      title: "Parametric Analysis of Unmanned Aerial Vehicle Based Antenna Arrays",
      authors: "Ashutosh Kedar, Angel S.C. and Anudeep B.",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 13,
      title: "Heuristically Aided Design of Dual Band Shared Aperture Antenna Array",
      authors: "Karthik PB, Ashutosh Kedar, and Saumya Adhikari",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 14,
      title: "Cross-Polarization Mitigation Technique in Vertically Integrable Antenna Elements for Phased Array Applications",
      authors: "A. Kedar",
      conference: "IEEE Wireless Antenna and Microwave Symposium (WAMS)",
      location: "Gujarat, India",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 15,
      title: "High Gain, Wide Band and Wide Scanning Substrate Integrated Waveguide Based U-Slot Phased Array Antenna for X-Band",
      authors: "Aravind A. Bhat, Rahul C., Mahesh A and Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "2022",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 16,
      title: "An S/X Band Shared Aperture Antenna",
      authors: "Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper",
      doi: "10.1109/MAPCON56011.2022.10047714",
      views: "131 views"
    },
    {
      id: 17,
      title: "A Comparative study of Dielectric Lenses for Wide Scanning Performance",
      authors: "Shruthi M, Aravind A. Bhat, Mahesh A and Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 18,
      title: "T/R Module Technologies for Radar EW and Communication Applications (Invited)",
      authors: "K. Sreenivasulu, Ashutosh Kedar and Benoy K.",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper (invited)"
    },
    {
      id: 19,
      title: "Indigenous State-Of-The-Art Development of Wide Band and Wide Scan Active Phased Array Antennas (Invited)",
      authors: "Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper (invited)"
    },
    {
      id: 20,
      title: "A High Gain Wide Beam and Wide Band Antenna Design Using Characteristic Modes Inspired Design Optimization",
      authors: "Ashutosh Kedar",
      conference: "Altair, ATC",
      location: "",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 21,
      title: "Antenna Platform interaction study in phased array antennas",
      authors: "Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 22,
      title: "A high gain wide beam and wide band antenna design using characteristic modes Inspired design and optimization",
      authors: "Ashutosh Kedar",
      conference: "ALTAIR ATC",
      location: "Bangalore",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 23,
      title: "Realization of low sidelobe sparse array antennas using fractal structures (Best Paper)",
      authors: "Ashutosh Kedar",
      conference: "IEEE WAMS",
      location: "Rourkela, India",
      year: "2022",
      type: "Conference Paper (Best Paper)"
    },
    {
      id: 24,
      title: "Current trends in antenna technology for active phased array radars (Invited talk)",
      authors: "Ashutosh Kedar",
      conference: "IEEE WAMS",
      location: "Rourkela, India",
      year: "2022",
      type: "Conference Paper (invited talk)"
    },
    {
      id: 25,
      title: "Dual-polarized ultra-wideband TCDA with superstrate and FSS networks for wide-band and wide scanning",
      authors: "Ashutosh Kedar, Rafi Ullah and Soundarya V.",
      conference: "IEEE WAMS",
      location: "Rourkela, India",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 26,
      title: "Preliminary Investigations on Hybridization of Bayesian Compressive Sensing and Array Dilation Technique",
      authors: "Ashutosh Kedar, P. Vangol, R. Chikkodi and Mahesh A.",
      conference: "INCAP",
      location: "",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 27,
      title: "Preliminary Investigations on Hybridization of Bayesian Compressive Sensing and Array Dilation Technique",
      authors: "Ashutosh Kedar, P. Vangol, Rahul C. and Mahesh A.",
      conference: "INCAP 2021",
      location: "Jaipur",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 28,
      title: "Scan error studies in a tightly coupled dipole array due to strong mutual coupling",
      authors: "Ashutosh Kedar, Rafi U., J. Huysamen and Vasanth A.",
      conference: "INCAP 2021",
      location: "Jaipur",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 29,
      title: "Antenna platform interaction study in phased array antennas",
      authors: "Ashutosh Kedar",
      conference: "IMARC 2021",
      location: "Lucknow, India",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 30,
      title: "Wide scan and wideband antenna array design for phased array applications in X-band",
      authors: "Ashutosh Kedar, P. Vangol, Rahul C. and Mahesh A.",
      conference: "MysuruCon 2021",
      location: "Mysore, India",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 31,
      title: "Geometry aided deterministic synthesis approach for concentric ring sparse array antennas",
      authors: "Ashutosh Kedar",
      conference: "MTTW21",
      location: "Latvia",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 32,
      title: "Scan Performance Prediction in Active Phased Array Antennas",
      authors: "Ashutosh Kedar",
      conference: "IEEE MTTW20",
      location: "Latvia",
      year: "2020",
      type: "Conference Paper"
    },
    {
      id: 33,
      title: "Design and Development of Wide Band True Time Delay (TTD) based Transmit/Receive Module",
      authors: "K. Sreenivasulu, Ashutosh Kedar, D. S. Rao, S. Pal, and K.P. Ray",
      conference: "IEEE MTTW20",
      location: "Latvia",
      year: "2020",
      type: "Conference Paper"
    },
    {
      id: 34,
      title: "GaN Based Wide Band C-Band Active Phased Array Antenna Design with Wide Scan Volume",
      authors: "Ashutosh Kedar, A.S. Bisht, K. Sreenivasulu, D. S. Rao, N.K. Vishwakarma and others",
      conference: "2020 IEEE International Radar Conference (RADAR)",
      location: "Washington DC, USA",
      year: "2020",
      type: "Conference Paper",
      pages: "pp. 88-93"
    },
    {
      id: 35,
      title: "Wide Band SIW Based Microstrip Patch Antenna Array in X-Band",
      authors: "Ashutosh Kedar and Abhilasha",
      conference: "IEEE INCAP 2019",
      location: "Ahmedabad",
      year: "2019",
      type: "Conference Paper"
    },
    {
      id: 36,
      title: "Development of C-Band Active Phased Array Antenna Unit for AESA Radars",
      authors: "Ashutosh Kedar, A.S. Bisht, D. S. Rao and K. Sreenivasulu, R. Balaji, Harish M S, M. Reddy and Anil Kumar H.L.",
      conference: "IRSI2019",
      location: "India",
      year: "2019",
      type: "Conference Paper"
    },
    {
      id: 37,
      title: "Automated Fault Diagnosis of Active Antenna Unit (AAAU)",
      authors: "Ashutosh Kedar, A.S. Bisht, D.S. Rao, M. Reddy and Pooja",
      conference: "IRSI2019",
      location: "India",
      year: "2019",
      type: "Conference Paper"
    },
    {
      id: 38,
      title: "Genetic Algorithm Aided Synthesis of Low SLL Antenna Array Utilizing Position Optimization based on Zoning Technique",
      authors: "Ashutosh Kedar, Pramod Kumar and N. K. Vishwakarma",
      conference: "INCAP 2018 (special session)",
      location: "Hyderabad, India",
      year: "2018",
      type: "Conference Paper"
    },
    {
      id: 39,
      title: "Wide Band Wide Scan Low Sidelobe Level GaN Based Active Phased Array Antenna in C-Band (BEST PAPER AWARD)",
      authors: "Ashutosh Kedar, D. Srinivas Rao, Amit Bisht, N. K. Vishwakarma and K. Sreenivasulu",
      conference: "ATMS 2018",
      location: "Pune",
      year: "2018",
      type: "Conference Paper (BEST PAPER AWARD)"
    },
    {
      id: 40,
      title: "Wideband Wide Beam Metallic Tapered Slot Antenna Design for Phased Array Radar Applications",
      authors: "Ashutosh Kedar and A. K. Singh",
      conference: "EuCAP 2015",
      location: "Portugal",
      year: "2015",
      type: "Conference Paper"
    },
    {
      id: 41,
      title: "Subarray Scheme for Wide Scan Active Phased Array Antennas",
      authors: "Pramod Kumar, Ashutosh Kedar and Anil K. Singh",
      conference: "IEEE International Microwave and RF Conference (IMaRC)",
      location: "Bangalore",
      year: "2014",
      type: "Conference Paper"
    },
    {
      id: 42,
      title: "Design of a Wide Band Printed Dipole Radiating Element For Scanning Antenna Arrays",
      authors: "N. K. Vishwakarma, Ashutosh Kedar, Dr. A. K. Singh, S. Ghimiray and K. Singh",
      conference: "ATMS",
      location: "Mumbai, India",
      year: "2012",
      type: "Conference Paper"
    },
    {
      id: 43,
      title: "Design Considerations for a Wide Scan Cavity Backed Patch Antenna for Active Phased Array Radar",
      authors: "N.K. Vishwakarma, Ravi Samminga, Ashutosh Kedar and A.K. Singh",
      conference: "IEEE Indian Antenna Week",
      location: "Kolkata, India",
      year: "2011",
      type: "Conference Paper"
    },
    {
      id: 44,
      title: "Design, Development and Implementation of Quad-Pack T/R Module Group Unit Controller for a Distributed Beam Steering Unit",
      authors: "Vibhishna B., Ashutosh Kedar and A.K. Singh",
      conference: "IRSI-2011",
      location: "India",
      year: "2011",
      type: "Conference Paper"
    },
    {
      id: 45,
      title: "Design and development of array test jigs for characterization of active phased array antennas (Invited talk)",
      authors: "Ashutosh Kedar, Virendra Kumar and K.S. Beenamole",
      conference: "EESOF User Group Meeting",
      location: "Bangalore",
      year: "2010",
      type: "Conference Paper (invited talk)"
    },
    {
      id: 46,
      title: "Digitally Controlled Feed Network for Scan Performance Evaluation of Active Phased Array Antenna",
      authors: "V. Kumar, Anant Raut, Deval Kumar, Ashutosh Kedar, K.S. Beenamole and B.V. Ramesh",
      conference: "ISM2010",
      location: "Bangalore",
      year: "2010",
      type: "Conference Paper"
    },
    {
      id: 47,
      title: "Design of Phased Array Antennas for Radar Applications using High Frequency Structure Simulator (HFSS) (Invited Talk)",
      authors: "Ashutosh Kedar",
      conference: "Ansoft Technical Seminar",
      location: "Bangalore",
      year: "2009",
      type: "Conference Paper (Invited Talk)"
    },
    {
      id: 48,
      title: "E-Plane Scan Performance of a Wide Scanning Active Phased Array",
      authors: "Ashutosh Kedar, K.S. Beenamole, Virendra Kumar and B.V. Ramesh",
      conference: "ICMARS",
      location: "Jodhpur",
      year: "2009",
      type: "Conference Paper"
    },
    {
      id: 49,
      title: "Triangular Microstrip Antenna Array With Embedded BITE Network For Active Phased Array Radars",
      authors: "Ashutosh Kedar, K.S. Beenamole, Virendra Kumar and B.V. Ramesh",
      conference: "IRSI 2009",
      location: "Bangalore",
      year: "2009",
      type: "Conference Paper"
    },
    {
      id: 50,
      title: "Beam Collimation and Calibration of 320 Element Active Phased Array Antenna Unit",
      authors: "V. Kumar, Ashutosh Kedar, K.S. Beenamole, S.Mondal and U. S. Pandey",
      conference: "APSYM-2008",
      location: "Cusat, Cochin",
      year: "2008",
      type: "Conference Paper"
    },
    {
      id: 51,
      title: "Two Axes Monopulse Error Estimation for an Active Array Radar (Best Paper Award)",
      authors: "K. S. Beenamole, Sona O. Kundukulam, Ashutosh Kedar, Virendra Kumar and Mahima Garg",
      conference: "INCMARS 2008",
      location: "Jodhpur",
      year: "2008",
      type: "Conference Paper (Best paper Award)"
    },
    {
      id: 52,
      title: "Wide Band Wide Beamwidth Microstrip Antenna Element",
      authors: "Ashutosh Kedar, K.S. Beenamole and Virendra Kumar",
      conference: "INCMARS 2008",
      location: "Jodhpur",
      year: "2008",
      type: "Conference Paper"
    },
    {
      id: 53,
      title: "Microstrip Antenna Array Unit with Embedded BITE Network for Active Phased Arrays",
      authors: "K.S. Beenamole, P.N.S. Kutiyal, Sona O.K, Ashutosh Kedar, U.K. Revankar, V.M. Pandharipande",
      conference: "Radar 2008",
      location: "Australia",
      year: "2008",
      type: "Conference Paper"
    },
    {
      id: 54,
      title: "Planar Microstrip Antenna Array for Radar System with Surveillance Applications",
      authors: "Prem N. S. Kutiyal, Ashutosh Kedar, Mahima Garg, Sona O. Kundukulam, K. S. Beenamole and U. K. Revankar",
      conference: "EuCAP 2007",
      location: "Edinburgh",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 55,
      title: "Planar Microstrip Antenna Array for Wide-Scan Angle Active Phased Arrays",
      authors: "K.S. Beenamole, Prem N.S Kutiyal, Mahima Garg, Ashutosh Kedar and Sona.O. Kundukulam",
      conference: "EuCAP 2007",
      location: "Edinburgh",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 56,
      title: "Studies on Ultra Wide Band Antennas",
      authors: "Ashutosh Kedar, Prem N.S. Kutiyal, Sona O. Kundukolan and K.S. Beenamole",
      conference: "National Conference on Microwaves, Antenna, Propagation & Remote Sensing",
      location: "Jodhpur, India",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 57,
      title: "Full Wave Analysis of Radome –Antenna System: Theoretical and Measured Results",
      authors: "Prem N.S. Kutiyal, Ashutosh Kedar, K.S. Beenamole and Sona O. Kundukolan",
      conference: "IRSI 2007",
      location: "Bangalore, India",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 58,
      title: "Performance of active phased array apertures with multi-step amplitude and phase quantization",
      authors: "Sona O. Kundukulam, K. S. Beenamole, Ashutosh Kedar and P.N.S. Kutiyal",
      conference: "IRSI 2007",
      location: "Bangalore, India",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 59,
      title: "Microstrip Antenna Array Solution for Large Size Active Phased Array Aperture",
      authors: "U.K. Revankar, K.S. Beenamole, Prem N.S. Kutiyal, Mahima Garg, Saravan Kumar and Ashutosh Kedar",
      conference: "IEEE Radar 2007",
      location: "Boston, Massachusetts",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 60,
      title: "Development of a Light Weight Linear Array with Cosecant Squared Pattern Using a U-Slot Rectangular Microstrip Antenna Element",
      authors: "U.K. Revankar, Prem Kutiyal, Ashutosh Kedar and K.S. Beenamole",
      conference: "International Conference on Microwaves, Antenna and Propagation",
      location: "University of Rajasthan, Jaipur",
      year: "2006",
      type: "Conference Paper"
    },
    {
      id: 61,
      title: "Shaped Beam Synthesis for Surveillance Radar Applications",
      authors: "U.K. Revankar, Ashutosh Kedar and K.S. Beenamole",
      conference: "National Conference on Microwaves, Antenna, Propagation & Remote Sensing",
      location: "Jodhpur, India",
      year: "2006",
      type: "Conference Paper"
    },
    {
      id: 62,
      title: "Low Loss Low Profile Air-Dielectric Stripline Power Divider",
      authors: "Mahima Garg, Ashutosh Kedar, K.S. Beenamole and U.K. Revankar",
      conference: "IEEE-ISM06",
      location: "Bangalore, India",
      year: "2006",
      type: "Conference Paper"
    },
    {
      id: 63,
      title: "Investigations of Microwave Characteristics of High-Tc Superconducting Planar Resonators at Low and High Power Levels: Comparison with Experimental Results",
      authors: "Ashutosh Kedar and N.D. Kataria",
      conference: "East Asia Symposium on Superconductive Electronics",
      location: "Korea",
      year: "2005",
      type: "Conference Paper"
    },
    {
      id: 64,
      title: "Light Weight Microstrip Antenna Array for L-Band Surveillance Radar System",
      authors: "U.K. Revankar, V. Saravana Kumar, V. Sarala , K.S. Beenamole, Ashutosh Kedar, Prem N.S. Kutiyal, and Mahima Garg",
      conference: "IRSI 2005",
      location: "Bangalore",
      year: "2005",
      type: "Conference Paper"
    },
    {
      id: 65,
      title: "Effect of Thickness Variation of Flat Sandwich Radome on Array Pattern Performance in S-Band",
      authors: "U.K. Revankar, Ashutosh Kedar, V. Saravana Kumar and K.S. Beenamole",
      conference: "IRSI 2005",
      location: "Bangalore",
      year: "2005",
      type: "Conference Paper"
    },
    {
      id: 66,
      title: "Gaas MMIC Microstrip Line Attenuation and Effective Dielectric Constant Modeling up to 40 GHz",
      authors: "J.P. Thakur, A.K. Pandey, Ashutosh Kedar, K.K. Gupta and H.P. Vyas",
      conference: "CODEC-04",
      location: "Univ. of Calcutta",
      year: "2004",
      type: "Conference Paper"
    },
    {
      id: 67,
      title: "Attenuation and Q-Value Measurements in HTS CPW Structures",
      authors: "Ashutosh Kedar, N.D. Kataria and K.K. Gupta",
      conference: "CODEC-04",
      location: "Univ. of Calcutta",
      year: "2004",
      type: "Conference Paper"
    },
    {
      id: 68,
      title: "GaAs MMIC Process Optimization for High Frequency Applications: A Full–Wave approach",
      authors: "J.P. Thakur, Ashutosh Kedar, K.K. Gupta, A.K. Pandey and H.P. Vyas",
      conference: "Asia Pacific Microwave Conference",
      location: "Seoul, Korea",
      year: "2003",
      type: "Conference Paper"
    },
    {
      id: 69,
      title: "GaAs MMIC Microstrip Line Loss Modeling",
      authors: "J.P. Thakur, H.P. Vyas , Ashutosh Kedar, A.K. Pandey and K.K. Gupta",
      conference: "IWPSD",
      location: "IIT Chennai",
      year: "2003",
      type: "Conference Paper"
    },
    {
      id: 70,
      title: "Photonic Band Gap Band-Stop Filter at Microwave Frequencies",
      authors: "Ashutosh Kedar, N.D. Kataria, Vijay Kumar and K.K. Gupta",
      conference: "IWPSD",
      location: "IIT Chennai",
      year: "2003",
      type: "Conference Paper"
    },
    {
      id: 71,
      title: "Analysis of Non-Linear Power Dependence of Resonant Frequency of HTS Microstrip Resonator",
      authors: "Ashutosh Kedar, N.D. Kataria and K.K. Gupta",
      conference: "National Symposium on Advances in Microwave and Lightwaves",
      location: "Dept. of Electronic Science, University of Delhi South Campus",
      year: "2003",
      type: "Conference Paper"
    },
    {
      id: 72,
      title: "CAD of HTS Planar Resonators and Antennas Using Spectral Domain Method",
      authors: "Ashutosh Kedar, N.D. Kataria, K.K.Gupta",
      conference: "Mediterranean Microwave Symposium 2002",
      location: "Cáceres, Spain",
      year: "2002",
      type: "Conference Paper"
    },
    {
      id: 73,
      title: "Parametric Study of HTS Microstrip Patch Antenna using Spectral Domain Method",
      authors: "Ashutosh Kedar, N.D. Kataria, K.K. Gupta and G.P. Srivastava",
      conference: "MMTA-2002",
      location: "Jawaharlal Nehru University, New Delhi, India",
      year: "2002",
      type: "Conference Paper"
    },
    {
      id: 74,
      title: "Full Wave Analysis of Superconducting Transmission lines Using Spectral Domain Method",
      authors: "Ashutosh Kedar and K.K. Gupta",
      conference: "National Conference on Microwaves, Antenna, Propagation & Remote Sensing",
      location: "Jodhpur, India",
      year: "2002",
      type: "Conference Paper"
    },
    {
      id: 75,
      title: "Modeling of HTS Microstrip Resonator by Spectral Domain Method: Comparison with Experimental Results",
      authors: "Ashutosh Kedar, N.D. Kataria, Mukul Misra and K.K. Gupta",
      conference: "East Asia Symposium on Superconductive Electronics",
      location: "Sendai, Japan",
      year: "2001",
      type: "Conference Paper"
    },
    {
      id: 76,
      title: "Electromagnetically Coupled Multilayer Circular Patch Antenna for L-Band Mobile Applications",
      authors: "Ashutosh Kedar, Mukul Misra, Kailash Sharma, N. D. Kataria, K.K. Gupta and G. P. Srivastava",
      conference: "National Symposium on Advances in Microwave and Lightwaves",
      location: "New Delhi, India",
      year: "2000",
      type: "Conference Paper"
    },
    {
      id: 77,
      title: "Efficient Evaluation of 2d Reaction Integrals in Microstrip Patch Antenna Structures",
      authors: "Ashutosh Kedar, Kailash Sharma, K. K. Gupta, G. P. Srivastava, Mukul Misra and N. D. Kataria",
      conference: "Antenna Propagation Symposium",
      location: "CUSAT, Cochin, India",
      year: "2000",
      type: "Conference Paper"
    },
    {
      id: 78,
      title: "Parametric Study of Microstrip Patch Antennas",
      authors: "Ashutosh Kedar, Kailash Sharma, K. K. Gupta, G. P. Srivastava and Mukul Misra, N. D. Kataria",
      conference: "Asia Pacific Microwave Conference",
      location: "Sydney, Australia",
      year: "2000",
      type: "Conference Paper"
    }
  ];

  const editorialRoles = [
    {
      role: "Editor",
      journal: "IETE Journal of Research",
      period: "Current"
    },
    {
      role: "Reviewer",
      journal: "IEEE Transactions on Antennas and Propagation",
      period: "Ongoing"
    },
    {
      role: "Reviewer",
      journal: "IEEE Communication Magazine",
      period: "Ongoing"
    },
    {
      role: "Reviewer",
      journal: "IET Electronic Letters",
      period: "Ongoing"
    },
    {
      role: "Reviewer",
      journal: "IET Microwaves, Antennas and Propagation",
      period: "Ongoing"
    }
  ];

  const researchInterests = [
    "Microwave and Millimeter-wave Engineering",
    "Smart Antenna Systems",
    "Metamaterial Applications",
    "Radar Signal Processing",
    "RF Circuit Design",
    "Electromagnetic Compatibility"
  ];

  const displayedConferences = showAllConferences ? allConferences : allConferences.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-academic-blue/10 to-academic-light-blue/20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-academic-navy mb-6">Publications & Research</h1>
              <p className="text-xl text-academic-grey leading-relaxed">
                Comprehensive collection of research contributions in microwave engineering, 
                antenna design, and radar technology spanning over two decades.
              </p>
            </div>
          </div>
        </section>

        {/* Publication Stats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {publicationStats.map((stat, index) => (
                  <Card key={index} className="card-elevated text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-academic-blue mb-2">{stat.number}</div>
                      <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Journal Details */}
        <section className="py-20 bg-academic-light-grey">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Journal Details</h2>
              <div className="space-y-4">
                {displayedJournals.map((pub, index) => (
                  <Card key={pub.id} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <span className="text-sm font-bold text-academic-blue bg-academic-light-blue px-2 py-1 rounded-full min-w-[2rem] text-center">
                              {pub.id}
                            </span>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white mb-1">{pub.title}</h4>
                              <div className="text-white/80 text-sm mb-1">
                                <span className="font-medium">{pub.authors}</span>
                              </div>
                              <div className="text-white/80 text-sm">
                                <span className="font-medium">{pub.journal}</span>
                                {pub.volume && ` • ${pub.volume}`} • {pub.year}
                                {pub.doi && (
                                  <div className="text-xs text-white/60 mt-1">
                                    DOI: <a 
                                      href={`https://doi.org/${pub.doi}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-academic-light-blue hover:text-white underline hover:no-underline transition-colors duration-200"
                                    >
                                      {pub.doi}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mt-2 md:mt-0">
                          {pub.type}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* View More Button for Journals */}
              <div className="flex justify-center mt-12 mb-8">
                <Button 
                  onClick={() => setShowAllJournals(!showAllJournals)}
                  size="lg"
                  className="bg-academic-blue hover:bg-academic-blue/90 text-blue-800"
                >
                  {showAllJournals ? 'View Less Papers' : `View More Papers (${allJournalPublications.length - 4} remaining)`}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Books */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Books & Chapters</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {books.map((book, index) => (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-academic-light-blue text-academic-blue">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-white">{book.title}</CardTitle>
                          <div className="text-sm text-white/80">
                            {book.publisher} • {book.year}
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 bg-academic-light-blue text-academic-navy rounded-full">
                          {book.type}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 leading-relaxed mb-4">{book.description}</p>
                      <Button size="sm" className="text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Publication
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conferences/Symposiums */}
        <section className="py-20 bg-academic-light-grey">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Conferences/Symposiums</h2>
              <div className="space-y-4">
                {displayedConferences.map((conf, index) => (
                  <Card key={conf.id} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <span className="text-sm font-bold text-academic-blue bg-academic-light-blue px-2 py-1 rounded-full min-w-[2rem] text-center">
                              {conf.id}
                            </span>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white mb-1">{conf.title}</h4>
                              <div className="text-white/80 text-sm mb-1">
                                <span className="font-medium">{conf.authors}</span>
                              </div>
                              <div className="text-white/80 text-sm">
                                <span className="font-medium">{conf.conference}</span>
                                {conf.location && ` • ${conf.location}`} • {conf.year}
                                {conf.pages && ` • ${conf.pages}`}
                                {conf.doi && (
                                  <div className="text-xs text-white/60 mt-1">
                                    DOI: <a 
                                      href={`https://doi.org/${conf.doi}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-academic-light-blue hover:text-white underline hover:no-underline transition-colors duration-200"
                                    >
                                      {conf.doi}
                                    </a>
                                  </div>
                                )}
                                {conf.views && (
                                  <div className="text-xs text-white/60 mt-1">
                                    {conf.views}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mt-2 md:mt-0">
                          {conf.type}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* View More Button - Enhanced Visibility */}
              <div className="flex justify-center mt-12 mb-8">
                <Button 
                  onClick={() => setShowAllConferences(!showAllConferences)}
                  size="lg"
                  className="bg-academic-blue hover:bg-academic-blue/90 text-blue-800"
                >
                  {showAllConferences ? 'View Less Papers' : `View More Papers (${allConferences.length - 3} remaining)`}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial & Review Work */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Editorial & Review Work</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {editorialRoles.map((role, index) => (
                  <Card key={index} className="card-elevated">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <Award className="h-8 w-8 text-academic-blue mx-auto" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">{role.role}</h4>
                      <p className="text-sm text-white/80 mb-2">{role.journal}</p>
                      <p className="text-xs text-white/80">{role.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="py-20 bg-academic-light-grey">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Research Interests</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-xl text-academic-navy">Research Interests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {researchInterests.map((interest, index) => (
                        <li key={index} className="flex items-center text-white">
                          <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                          {interest}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
