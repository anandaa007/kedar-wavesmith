import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award, BookOpen } from "lucide-react";

const Publications = () => {
  const [showAllConferences, setShowAllConferences] = useState(false);

  const featuredPublications = [
    {
      title: "On the Application of Radon Transformation for the Synthesis of Thinned Planar Antenna Arrays",
      authors: "Ashutosh Kedar, P. Vangol and A. Mahesh",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2025",
      volume: "vol. 73, no. 8, pp. 5637-5649",
      type: "Journal Article"
    },
    {
      title: "Hybridization of Bayesian Compressive Sensing and Array Dilation Technique for Synthesis of Linear Isophoric Sparse Antenna Arrays",
      authors: "Ashutosh Kedar, P. Vangol and Mahesh A.",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2023",
      volume: "vol. 71",
      type: "Journal Article"
    },
    {
      title: "Deterministic Synthesis of Wide Scanning Linear Sparse Antenna Arrays",
      authors: "Ashutosh Kedar",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2020",
      volume: "vol. 67, no.2, pp. 905-914",
      type: "Journal Article"
    },
    {
      title: "Deterministic Synthesis of Wide Scanning Sparse Concentric Ring Antenna Arrays",
      authors: "Ashutosh Kedar",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2019", 
      volume: "vol. 67, No.12, pp.7387-7395",
      type: "Journal Article"
    }
  ];

  const publicationStats = [
    { number: "100+", label: "Published Papers" },
    { number: "2000+", label: "Total Citations" },
    { number: "30+", label: "h-index" },
    { number: "25+", label: "Conference Talks" }
  ];

  const books = [
    {
      title: "Sparse Phased Array Antenna: Technologies and applications",
      publisher: "Artech House",
      year: "2024",
      type: "Book",
      description: "Comprehensive guide to sparse phased array antenna technologies and their applications in modern radar and communication systems."
    },
    {
      title: "Phased Array Antennas",
      publisher: "Handbook of Metrology by Springer Nature",
      year: "2023",
      type: "Book Chapter",
      description: "Detailed chapter covering the fundamentals and advanced concepts of phased array antenna systems."
    }
  ];

  const allConferences = [
    {
      id: 1,
      title: "A Sparse Concentric Ring Antenna Array Design with Wide Scanning and Low Sidelobe Level",
      authors: "Ashutosh Kedar",
      conference: "WAMS 2024",
      location: "Visakhapatnam",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 2,
      title: "Design of a Broadband Stacked Annular Ring Antenna Using Theory of Characteristic Modes",
      authors: "Ashutosh Kedar et.al.",
      conference: "WAMS 2024", 
      location: "Visakhapatnam",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 3,
      title: "Python-based Graphical User Interface to Extract Electromagnetic Parameters using NRW Method",
      authors: "Ishaan Kedar, T. S. Kumar, A. Zakharia and Ashutosh Kedar",
      conference: "WAMS 2024",
      location: "Visakhapatnam",
      year: "2024",
      type: "Conference Paper"
    },
    {
      id: 4,
      title: "Investigations on the Performance of Isophoric Linear Sparse Array Antenna with Low Sidelobe Level Due to Non-Isotropic Radiators",
      authors: "Ashutosh Kedar",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 5,
      title: "Design Proposal for Wide Scan Energy Efficient Concentric Ring Phased Array Antennas Using Penrose Tessellations",
      authors: "Ashutosh Kedar, F.A. Dicandia, S. Genovesi and G. Manara",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 6,
      title: "Parametric Analysis of Unmanned Aerial Vehicle Based Antenna Arrays",
      authors: "Ashutosh Kedar, Angel S.C. and Anudeep B.",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 7,
      title: "Heuristically Aided Design of Dual Band Shared Aperture Antenna Array",
      authors: "Karthik PB, Ashutosh Kedar, and Saumya Adhikari",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    },
    {
      id: 8,
      title: "A High Gain Wide Beam U-Slot Elliptical Microstrip Patch Antenna for Phased Array Applications",
      authors: "A. K. Adiga, M. A, A. Kedar and P. P. Vangol",
      conference: "IEEE International Symposium on Antennas and Propagation and USNC-URSI Radio Science Meeting (USNC-URSI)",
      location: "Portland, OR, USA",
      year: "2023",
      type: "Conference Paper",
      doi: "10.1109/USNC-URSI52151.2023.10238232",
      pages: "pp. 87-88"
    },
    {
      id: 9,
      title: "An X-band U-Slot Modified Square Microstrip Patch Antenna with wide beam and high gain for Radar applications",
      authors: "A. K. Adiga, M. A and A. Kedar",
      conference: "IEEE Wireless Antenna and Microwave Symposium (WAMS)",
      location: "Ahmedabad, India",
      year: "2023",
      type: "Conference Paper",
      doi: "10.1109/WAMS57261.2023.10242800",
      pages: "pp. 1-5"
    },
    {
      id: 10,
      title: "Cross-Polarization Mitigation Technique in Vertically Integrable Antenna Elements for Phased Array Applications",
      authors: "A. Kedar",
      conference: "IEEE Wireless Antenna and Microwave Symposium (WAMS)",
      location: "Ahmedabad, India",
      year: "2023",
      type: "Conference Paper",
      doi: "10.1109/WAMS57261.2023.10242934",
      pages: "pp. 1-5"
    },
    {
      id: 11,
      title: "High Gain, Wide Band and Wide Scanning Substrate Integrated Waveguide Based U-Slot Phased Array Antenna for X-Band",
      authors: "Aravind A. Bhat, Rahul C., Mahesh A and Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 12,
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
      id: 13,
      title: "A Comparative study of Dielectric Lenses for Wide Scanning Performance",
      authors: "Shruthi M, Aravind A. Bhat, Mahesh A and Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 14,
      title: "T/R Module Technologies for Radar EW and Communication Applications",
      authors: "K. Sreenivasulu, Ashutosh Kedar and Benoy K.",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper (invited)"
    },
    {
      id: 15,
      title: "Indigenous State-Of-The-Art Development of Wide Band and Wide Scan Active Phased Array Antennas",
      authors: "Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper (invited)"
    },
    {
      id: 16,
      title: "A High Gain Wide Beam and Wide Band Antenna Design Using Characteristic Modes Inspired Design Optimization",
      authors: "Ashutosh Kedar",
      conference: "Altair, ATC",
      location: "",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 17,
      title: "Antenna Platform interaction study in phased array antennas",
      authors: "Ashutosh Kedar",
      conference: "IEEE MAPCON",
      location: "",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 18,
      title: "A high gain wide beam and wide band antenna design using characteristic modes Inspired design and optimization",
      authors: "Ashutosh Kedar",
      conference: "ALTAIR ATC",
      location: "Bangalore",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 19,
      title: "Realization of low sidelobe sparse array antennas using fractal structures",
      authors: "Ashutosh Kedar",
      conference: "IEEE WAMS",
      location: "Rourkela, India",
      year: "2022",
      type: "Conference Paper (Best Paper)"
    },
    {
      id: 20,
      title: "Current trends in antenna technology for active phased array radars",
      authors: "Ashutosh Kedar",
      conference: "IEEE WAMS",
      location: "Rourkela, India",
      year: "2022",
      type: "Conference Paper (invited talk)"
    },
    {
      id: 21,
      title: "Dual-polarized ultra-wideband TCDA with superstrate and FSS networks for wide-band and wide scanning",
      authors: "Ashutosh Kedar, Rafi Ullah and Soundarya V.",
      conference: "IEEE WAMS",
      location: "Rourkela, India",
      year: "2022",
      type: "Conference Paper"
    },
    {
      id: 22,
      title: "Preliminary Investigations on Hybridization of Bayesian Compressive Sensing and Array Dilation Technique",
      authors: "Ashutosh Kedar, P. Vangol, R. Chikkodi and Mahesh A.",
      conference: "INCAP",
      location: "",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 23,
      title: "Preliminary Investigations on Hybridization of Bayesian Compressive Sensing and Array Dilation Technique",
      authors: "Ashutosh Kedar, P. Vangol, Rahul C. and Mahesh A.",
      conference: "INCAP 2021",
      location: "Jaipur",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 24,
      title: "Scan error studies in a tightly coupled dipole array due to strong mutual coupling",
      authors: "Ashutosh Kedar, Rafi U., J. Huayasman and Vasanth M.",
      conference: "INCAP 2021",
      location: "Jaipur",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 25,
      title: "Antenna platform interaction study in phased array antennas",
      authors: "Ashutosh Kedar",
      conference: "IMARC 2021",
      location: "Lucknow, India",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 26,
      title: "Wide scan and wideband antenna array design for phased array applications in X-band",
      authors: "Ashutosh Kedar, P. Vangol, Rahul C. and Mahesh A.",
      conference: "MysuruCon 2021",
      location: "Mysore, India",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 27,
      title: "Geometry aided deterministic synthesis approach for concentric ring sparse array antennas",
      authors: "Ashutosh Kedar",
      conference: "MTTW21",
      location: "Latvia",
      year: "2021",
      type: "Conference Paper"
    },
    {
      id: 28,
      title: "Scan Performance Prediction in Active Phased Array Antennas",
      authors: "Ashutosh Kedar",
      conference: "IEEE MTTW20",
      location: "Latvia",
      year: "2020",
      type: "Conference Paper"
    },
    {
      id: 29,
      title: "Design and Development of Wide Band True Time Delay (TTD) based Transmit/Receive Module",
      authors: "K. Sreenivasulu, Ashutosh Kedar, D. S. Rao, S. Pal, and K.P. Ray",
      conference: "IEEE MTTW20",
      location: "Latvia",
      year: "2020",
      type: "Conference Paper"
    },
    {
      id: 30,
      title: "GaN Based Active phased array antenna with Wide scan volume",
      authors: "Ashutosh Kedar, Srinivas Rao, A. S. Bisht, N.K. Vishwakarma and K. Sreenivasulu",
      conference: "IEEE Radar 2020",
      location: "Washington DC, USA",
      year: "2020",
      type: "Conference Paper"
    },
    {
      id: 31,
      title: "Genetic Algorithm Aided Synthesis of Low SLL Antenna Array Utilizing Position Optimization based on Zoning Technique",
      authors: "Ashutosh Kedar, Pramod Kumar and N. K. Vishwakarma",
      conference: "INCAP 2019 (special session)",
      location: "Hyderabad, India",
      year: "2018",
      type: "Conference Paper"
    },
    {
      id: 32,
      title: "Wide Band SIW Based Microstrip Patch Antenna Array in X-Band",
      authors: "Ashutosh Kedar and Abhilasha",
      conference: "IEEE INCAP 2019",
      location: "Ahmedabad",
      year: "2019",
      type: "Conference Paper"
    },
    {
      id: 33,
      title: "Development of C-Band Active Phased Array Antenna Unit for AESA Radars",
      authors: "Ashutosh Kedar, A.S. Bisht, D. S. Rao and K. Sreenivasulu, R. Balaji, Harish M S, M. Reddy and Anil Kumar H.L.",
      conference: "IRSI2019",
      location: "India",
      year: "2019",
      type: "Conference Paper"
    },
    {
      id: 34,
      title: "Automated Fault Diagnosis of Active Antenna Unit (AAAU)",
      authors: "Ashutosh Kedar, A.S. Bisht, D.S. Rao, M. Reddy and Pooja",
      conference: "IRSI2019",
      location: "India",
      year: "2019",
      type: "Conference Paper"
    },
    {
      id: 35,
      title: "Wide Bandwidth and Wide Scanning Phased Array Antennas",
      authors: "Ashutosh Kedar",
      conference: "INCAP 2018 (special session)",
      location: "Hyderabad, India",
      year: "2018",
      type: "Conference Paper"
    },
    {
      id: 36,
      title: "Wide Band Wide Scan Low Sidelobe Level GaN Based Active Phased Array Antenna in C-Band",
      authors: "Ashutosh Kedar, D. Srinivas Rao, Amit Bisht, N. K. Vishwakarma and K, Sreenivasulu",
      conference: "ATMS 2018",
      location: "Pune",
      year: "2018",
      type: "Conference Paper (BEST PAPER AWARD)"
    },
    {
      id: 37,
      title: "Wideband Wide Beam Metallic Tapered Slot Antenna Design for Phased Array Radar Applications",
      authors: "Ashutosh Kedar and A. K. Singh",
      conference: "EuCAP 2015",
      location: "Portugal",
      year: "2015",
      type: "Conference Paper"
    },
    {
      id: 38,
      title: "Subarray Scheme for Wide Scan Active Phased Array Antennas",
      authors: "Pramod Kumar, Ashutosh Kedar and Anil K. Singh",
      conference: "IEEE International Microwave and RF Conference (IMaRC)",
      location: "Bangalore",
      year: "2014",
      type: "Conference Paper"
    },
    {
      id: 39,
      title: "Design of a Wide Band Printed Dipole Radiating Element For Scanning Antenna Arrays",
      authors: "N. K. Vishwakarma, Ashutosh Kedar, Dr. A. K. Singh, S. Ghimiray and K. Singh",
      conference: "ATMS",
      location: "Mumbai, India",
      year: "2012",
      type: "Conference Paper"
    },
    {
      id: 40,
      title: "Design Considerations for a Wide Scan Cavity Backed Patch Antenna for Active Phased Array Radar",
      authors: "N.K. Vishwakarma, Ravi Samminga, Ashutosh Kedar and A.K. Singh",
      conference: "IEEE Indian Antenna Week",
      location: "Kolkatta, India",
      year: "2011",
      type: "Conference Paper"
    },
    {
      id: 41,
      title: "Design, Development and Implementation of Quad-Pack T/R Module Group Unit Controller for a Distributed Beam Steering Unit",
      authors: "Vibhishna B., Ashutosh Kedar and A.K. Singh",
      conference: "IRSI-2011",
      location: "India",
      year: "2011",
      type: "Conference Paper"
    },
    {
      id: 42,
      title: "Design and development of array test jigs for characterization of active phased array antennas",
      authors: "Ashutosh Kedar, Virendra Kumar and K.S. Beenamole",
      conference: "EESOF User Group Meeting",
      location: "Bangalore",
      year: "2010",
      type: "Conference Paper (invited talk)"
    },
    {
      id: 43,
      title: "Digitally Controlled Feed Network for Scan Performance Evaluation of Active Phased Array Antenna",
      authors: "V. Kumar, Anant Raut, Deval Kumar, Ashutosh Kedar, K.S. Beenamole and B.V. Ramesh",
      conference: "ISM2010",
      location: "Bangalore",
      year: "2010",
      type: "Conference Paper"
    },
    {
      id: 44,
      title: "Design of Phased Array Antennas for Radar Applications using High Frequency Structure Simulator (HFSS)",
      authors: "Ashutosh Kedar",
      conference: "Ansoft technical Seminar",
      location: "Bangalore",
      year: "2009",
      type: "Conference Paper (Invited Talk)"
    },
    {
      id: 45,
      title: "E-Plane Scan Performance of a Wide Scanning Active Phased Array",
      authors: "Ashutosh Kedar, K.S. Beenamole, Virendra Kumar and B.V. Ramesh",
      conference: "ICMARS",
      location: "Jodhpur",
      year: "2009",
      type: "Conference Paper"
    },
    {
      id: 46,
      title: "Triangular Microstrip Antenna Array With Embedded Bite Network For Active Phased Array Radars",
      authors: "Ashutosh Kedar, K.S. Beenamole, Virendra Kumar and B.V. Ramesh",
      conference: "IRSI 2009",
      location: "Bangalore",
      year: "2009",
      type: "Conference Paper"
    },
    {
      id: 47,
      title: "Beam Collimation and Calibration of 320 Element Active Phased Array Antenna Unit",
      authors: "V. Kumar, Ashutosh Kedar, K.S. Beenamole, S.Mondal and U. S. Pandey",
      conference: "APSYM-2008",
      location: "Cusat, Cochin",
      year: "2008",
      type: "Conference Paper"
    },
    {
      id: 48,
      title: "Two Axes Monopulse Error Estimation for an Active Array Radar",
      authors: "K. S. Beenamole, Sona O. Kundukulam, Ashutosh Kedar, Virendra Kumar and Mahima Garg",
      conference: "INCMARS 2008",
      location: "Jodhpur",
      year: "2008",
      type: "Conference Paper (Best paper Award)"
    },
    {
      id: 49,
      title: "Wide Band Wide Beamwidth Microstrip Antenna Element",
      authors: "Ashutosh Kedar, K.S. Beenamole and Virendra Kumar",
      conference: "INCMARS 2008",
      location: "Jodhpur",
      year: "2008",
      type: "Conference Paper"
    },
    {
      id: 50,
      title: "Microstrip Antenna Array Unit with Embedded BITE Network for Active Phased Arrays",
      authors: "K.S. Beenamole, P.N.S. Kutiyal, Sona O.K, Ashutosh Kedar, U.K. Revankar, V.M. Pandharipande",
      conference: "Radar 2008",
      location: "Australia",
      year: "2008",
      type: "Conference Paper"
    },
    {
      id: 51,
      title: "Planar Microstrip Antenna Array for Radar System with Surveillance Applications",
      authors: "Prem N. S. Kutiyal, Ashutosh Kedar, Mahima Garg, Sona O. Kundukulam, K. S. Beenamole and U. K. Revankar",
      conference: "EuCAP2007",
      location: "Edinburg",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 52,
      title: "Planar Microstrip Antenna Array for Wide-Scan Angle Active Phased Arrays",
      authors: "K.S. Beenamole, Prem N.S Kutiyal, Mahima Garg, Ashutosh Kedar and Sona.O. Kundukulam",
      conference: "EuCAP2007",
      location: "Edinburg",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 53,
      title: "Studies on Ultra Wide Band Antennas",
      authors: "Ashutosh Kedar, Prem N.S. Kutiyal, Sona O. Kundukolan and K.S. Beenamole",
      conference: "National Conference on Microwaves, Antenna, Propagation & Remote Sensing",
      location: "Jodhpur, India",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 54,
      title: "Full Wave Analysis of Radome –Antenna System: Theoretical and Measured Results",
      authors: "Prem N.S. Kutiyal, Ashutosh Kedar, K.S. Beenamole and Sona O. Kundukolan",
      conference: "IRSI 2007",
      location: "Bangalore, India",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 55,
      title: "Performance of active phased array apertures with multi-step amplitude and phase quantization",
      authors: "Sona O. Kundukulam, K. S. Beenamole, Ashutosh Kedar and P.N.S. Kutiyal",
      conference: "IRSI 2007",
      location: "Bangalore, India",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 56,
      title: "Microstrip Antenna Array Solution for Large Size Active Phased Array Aperture",
      authors: "U.K. Revankar, K.S. Beenamole, Prem N.S. Kutiyal, Mahima Garg, Saravan Kumar and Ashutosh Kedar",
      conference: "IEEE Radar 2007",
      location: "Boston, Massachussetts",
      year: "2007",
      type: "Conference Paper"
    },
    {
      id: 57,
      title: "Development of a Light Weight Linear Array with Cosecant Squared Pattern Using a U-Slot Rectangular Microstrip Antenna Element",
      authors: "U.K. Revankar, Prem Kutiyal, Ashutosh Kedar and K.S. Beenamole",
      conference: "International Conference on Microwaves, Antenna and Propagation",
      location: "University of Rajasthan, Jaipur",
      year: "2006",
      type: "Conference Paper"
    },
    {
      id: 58,
      title: "Shaped Beam Synthesis for Surveillance Radar Applications",
      authors: "U.K. Revankar, Ashutosh Kedar and K.S. Beenamole",
      conference: "National Conference on Microwaves, Antenna, Propagation & Remote Sensing",
      location: "Jodhpur, India",
      year: "2006",
      type: "Conference Paper"
    },
    {
      id: 59,
      title: "Low Loss Low Profile Air-Dielectric Stripline Power Divider",
      authors: "Mahima Garg, Ashutosh Kedar, K.S. Beenamole and U.K. Revankar",
      conference: "IEEE-ISM06",
      location: "Bangalore, India",
      year: "2006",
      type: "Conference Paper"
    },
    {
      id: 60,
      title: "Investigations of Microwave Characteristics of High-Tc Superconducting Planar Resonators at Low and High Power Levels: Comparison with Experimental Results",
      authors: "Ashutosh Kedar and N.D. Kataria",
      conference: "East Asia Symposium on Superconductive Electronics",
      location: "Korea",
      year: "2005",
      type: "Conference Paper"
    },
    {
      id: 61,
      title: "Light Weight Microstrip Antenna Array for L-Band Surveillance Radar System",
      authors: "U.K. Revankar, V. Saravana Kumar, V. Sarala , K.S. Beenamole, Ashutosh Kedar, Prem N.S. Kutiyal, and Mahima Garg",
      conference: "IRSI 2005",
      location: "Bangalore",
      year: "2005",
      type: "Conference Paper"
    },
    {
      id: 62,
      title: "Effect of Thickness Variation of Flat Sandwich Radome on Array Pattern Performance in S-Band",
      authors: "U.K. Revankar, Ashutosh Kedar, V. Saravana Kumar and K.S. Beenamole",
      conference: "IRSI 2005",
      location: "Bangalore",
      year: "2005",
      type: "Conference Paper"
    },
    {
      id: 63,
      title: "Gaas MMIC Microstrip Line Attenuation and Effective Dielectric Constant Modeling up to 40 GHz",
      authors: "J.P. Thakur, A.K. Pandey, Ashutosh Kedar, K.K. Gupta and H.P. Vyas",
      conference: "CODEC-04",
      location: "Univ. of Calcutta",
      year: "2004",
      type: "Conference Paper"
    },
    {
      id: 64,
      title: "Attenuation and Q-Value Measurements in HTS CPW Structures",
      authors: "Ashutosh Kedar, N.D. Kataria and K.K. Gupta",
      conference: "CODEC-04",
      location: "Univ. of Calcutta",
      year: "2004",
      type: "Conference Paper"
    },
    {
      id: 65,
      title: "GaAs MMIC Process Optimization for High Frequency Applications: A Full–Wave approach",
      authors: "J.P. Thakur, Ashutosh Kedar, K.K. Gupta, A.K. Pandey and H.P. Vyas",
      conference: "Asia Pacific Microwave Conference",
      location: "Seoul, Korea",
      year: "2003",
      type: "Conference Paper"
    },
    {
      id: 66,
      title: "GaAs MMIC Microstrip Line Loss Modeling",
      authors: "J.P. Thakur, H.P. Vyas , Ashutosh Kedar, A.K. Pandey and K.K. Gupta",
      conference: "IWPSD",
      location: "IIT Chennai",
      year: "2003",
      type: "Conference Paper"
    },
    {
      id: 67,
      title: "Photonic Band Gap Band-Stop Filter at Microwave Frequencies",
      authors: "Ashutosh Kedar, N.D. Kataria, Vijay Kumar and K.K. Gupta",
      conference: "IWPSD",
      location: "IIT Chennai",
      year: "2003",
      type: "Conference Paper"
    },
    {
      id: 68,
      title: "Analysis of Non-Linear Power Dependence of Resonant Frequency of HTS Microstrip Resonator",
      authors: "Ashutosh Kedar, N.D. Kataria and K.K. Gupta",
      conference: "National Symposium on Advances in Microwave and Lightwaves",
      location: "Dept. of Electronic Science, University of Delhi South Campus",
      year: "2003",
      type: "Conference Paper"
    },
    {
      id: 69,
      title: "CAD of HTS Planar Resonators and Antennas Using Spectral Domain Method",
      authors: "Ashutosh Kedar, N.D. Kataria, K.K.Gupta",
      conference: "Mediterranean Microwave symposium 2002",
      location: "Cáceres, Spain",
      year: "2002",
      type: "Conference Paper"
    },
    {
      id: 70,
      title: "Parametric Study of HTS Microstrip Patch Antenna using Spectral Domain Method",
      authors: "Ashutosh Kedar, N.D. Kataria, K.K. Gupta and G.P. Srivastava",
      conference: "Symposium on Microwave Measurements Techniques and Applications MMTA-2002",
      location: "School of environmental sciences, Jawaharlal Nehru University, New Delhi, India",
      year: "2002",
      type: "Conference Paper"
    },
    {
      id: 71,
      title: "Full Wave Analysis of Superconducting Transmission lines Using Spectral Domain Method",
      authors: "Ashutosh Kedar and K.K. Gupta",
      conference: "National Conference on Microwaves, Antenna, Propagation & Remote Sensing",
      location: "Jodhpur, India",
      year: "2002",
      type: "Conference Paper"
    },
    {
      id: 72,
      title: "Modeling of HTS Microstrip Resonator by Spectral Domain Method: Comparison with Experimental Results",
      authors: "Ashutosh Kedar, N.D. Kataria, Mukul Misra and K.K. Gupta",
      conference: "East Asia Symposium on Superconductive Electronics",
      location: "Sendai, Japan",
      year: "2001",
      type: "Conference Paper"
    },
    {
      id: 73,
      title: "Electromagnetically Coupled Multilayer Circular Patch Antenna for L-Band Mobile Applications",
      authors: "Ashutosh Kedar, Mukul Misra, Kailash Sharma, N. D. Kataria, K.K. Gupta and G. P. Srivastava",
      conference: "National Symposium on Advances in Microwave and Lightwaves",
      location: "Dept. of Electronic Science, University of Delhi South Campus, New Delhi, India",
      year: "2000",
      type: "Conference Paper"
    },
    {
      id: 74,
      title: "Efficient Evaluation of 2d Reaction Integrals in Microstrip Patch Antenna Structures",
      authors: "Ashutosh Kedar, Kailash Sharma, K. K. Gupta, G. P. Srivastava, Mukul Misra and N. D. Kataria",
      conference: "Antenna Propagation Symposium",
      location: "Department of Electronics, CUSAT, Cochin, India",
      year: "2000",
      type: "Conference Paper"
    },
    {
      id: 75,
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
      journal: "IET Electronic letters",
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

        {/* Featured Publications */}
        <section className="py-20 bg-academic-light-grey">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Journal Details</h2>
              <div className="space-y-6">
                {featuredPublications.map((pub, index) => (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-academic-navy mb-2">{pub.title}</CardTitle>
                          <div className="text-sm text-academic-grey mb-2">
                            <span className="font-medium">{pub.authors}</span>
                          </div>
                          <div className="text-sm text-academic-grey mb-3">
                            <span className="font-medium">{pub.journal}</span> • {pub.volume} • {pub.year}
                          </div>
                          <div className="flex items-center space-x-4 text-xs">
                            <span className="flex items-center">
                              <FileText className="h-3 w-3 mr-1" />
                              {pub.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className="text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Paper
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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