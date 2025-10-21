import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const talks: { topic: string; venue: string; year: string }[] = [
  { topic: "Design of phased array antennas for radar applications using hfss", venue: "Ansoft Technical Seminar", year: "2009" },
  { topic: "Passive phased array radars", venue: "CEP course on emerging trends in antenna measurements, LRDE, Bangalore", year: "2010" },
  { topic: "Digitally controlled feed network for scan performance evaluation of active phased array antenna", venue: "ISM 2010, Bangalore", year: "2010" },
  { topic: "Active/passive phased array antennas", venue: "CEP on radar system concepts, LRDE, Bangalore", year: "2011" },
  { topic: "Antenna technology for digital array", venue: "SODET, Bangalore", year: "2011" },
  { topic: "Phased array radar basics", venue: "CEP on radar basics, LRDE, Bangalore", year: "2011" },
  { topic: "Antenna technology:basics and latest trends", venue: "IETE ICON-RFW12 Microwave School", year: "2012" },
  { topic: "Smart antenna systems", venue: "CEP on cognitive radars, LRDE, Bangalore", year: "2012" },
  { topic: "Active phased array antennas", venue: "CEP on radar fundamentals, LRDE, Bangalore", year: "2013" },
  { topic: "Radomes: effect on antenna perfromance", venue: "CEP, LRDE, Bangalore", year: "2013" },
  { topic: "Shared aperture antennas", venue: "CEP on airborne surveillance radars, LRDE, Bangalore", year: "2013" },
  { topic: "Shared aperture and conformal antenna arrays", venue: "CEP, LRDE, Bangalore", year: "2014" },
  { topic: "Antenna array: analysis and synthesis advancements", venue: "Knowledge Sharing lecture, LRDE, Bangalore", year: "2015" },
  { topic: "Radar antennas", venue: "BEL IETE, bangalore", year: "2016" },
  { topic: "Advances in radar technology", venue: "CEP, DLRL, Hyderabad", year: "2018" },
  { topic: "Advances in radar technology", venue: "CEP, LRDE", year: "2016" },
  { topic: "Active antenna arrays", venue: "CEP, LRDE, Bangalore", year: "2016" },
  { topic: "Active antenna arrays", venue: "DRDO Young Scientists Induction Program, Bangalore", year: "2018" },
  { topic: "Active phased array antenna technology", venue: "BEL, Bangalore", year: "2018" },
  { topic: "Antenna technology for digital array", venue: "CEP, LRDE, Bangalore", year: "2018" },
  { topic: "Active antenna arrays", venue: "LRDE Induction program", year: "2018" },
  { topic: "Radar technology: recent advances", venue: "SODET, Hyderabad", year: "2018" },
  { topic: "Non active phased arrays", venue: "IETE - BEL Talk", year: "2018" },
  { topic: "Shared aperture electronically scanned antenna arrays", venue: "Knowledge Sharing lecture, LRDE, Bangalore", year: "2019" },
  { topic: "Role of cem tools in deisgn cycle of phased arrays", venue: "Ansys Technical Seminar, Bangalore", year: "2019" },
  { topic: "Large antenna array simulations and platform interaction", venue: "Altair Technology Conference, Bangalore", year: "2019" },
  { topic: "Electronically scanned antennas", venue: "BEL, Bangalore", year: "2019" },
  { topic: "Antenna technologies for radar applications", venue: "IIIT Raipur", year: "2019" },
  { topic: "INCAP", venue: "", year: "2019" },
  { topic: "Electronically scanned antennas", venue: "IETE-BEL Talk, Banglaore", year: "2020" },
  { topic: "Microwave and millimeter wave trasnmission lines", venue: "LRDE, Bangalore", year: "2020" },
  { topic: "Microstrip antennas", venue: "IETE BIT, Bangalore (online)", year: "2020" },
  { topic: "Antenna technology for phased array antennas", venue: "IIT Kanpur (online)", year: "2020" },
  { topic: "Advances in antenna technology for active phased array radars", venue: "IEEE INCAP (online)", year: "2020" },
  { topic: "Rf circuits and transmit receive modules", venue: "PESIT, Bangalore", year: "2020" },
  { topic: "Phased array antenna technology", venue: "RV College of Engineering, Bangalore", year: "2021" },
  { topic: "Development of antenna technology in indian context", venue: "Army Air Defence, Hyderabad", year: "2021" },
  { topic: "Wideband antenna arrays development for defence applications", venue: "Altair Technology Conference (online)", year: "2021" },
  { topic: "Few perspectives on effective technical writing and expressing your research outcomes.", venue: "IEEE Authorship Workshop, IEEE AP/MTT Jt Chapter, Bangalore", year: "2021" },
  { topic: "Active phased array antenna technology", venue: "IETE-BEL, Bangalore", year: "2022" },
  { topic: "A high gain wide beam and wide band antenna design using characteristic modes inspired design optimization", venue: "Altair Technology Conference, Bangalore", year: "2022" },
  { topic: "Indigenous state of the art development of wide band and wide scan active phased array antennas", venue: "IEEE MAPCON 2022, Bangalore", year: "2022" },
  { topic: "Shared aperture technology for active phased array antennas", venue: "CEP, LRDE, Bangalore", year: "2022" },
  { topic: "Current trends in antenna technology for active phased array radars", venue: "WAMS 2022", year: "2022" },
  { topic: "Demystifying career prospects in rf and microwave domain in industry", venue: "IEEE YPSIC Bangalore", year: "2020" },
  { topic: "Advanced radar antennas: basics and advancements", venue: "IETE-BEL CEP, Bangalore", year: "2023" },
  { topic: "Antenna technology: latest trends and technology", venue: "IETE BEL, Bangalore", year: "2023" },
  { topic: "Antenna technology: latest trends and technology", venue: "R V College of Engineering, Bangalore", year: "2023" },
  { topic: "Development of antenna technology in indian context", venue: "Mount Carmel College, Bangalore", year: "2023" },
  { topic: "Workshop on phased array antenna technology: trends and technologies", venue: "IEEE MAPCON 2024, Ahmedabad", year: "2024" },
  { topic: "Next generation active phased array antenna systems", venue: "CII-Conference on Defence Electronics and Communications Systems, Bangalore", year: "2023" },
  { topic: "Simplifying antenna design using theory of characteristic modes", venue: "VIT, Amravati (online)", year: "2023" },
  { topic: "Shared aperture antenna array: a solution for multi-function phased arrays antennas", venue: "KSL, LRDE, Bangalore", year: "2023" },
  { topic: "Few perspectives on effective technical writing and expressing your research outcomes.", venue: "IEEE Authorship Workshop, KLEIT, Hubbali", year: "2024" },
  { topic: "Antennas for phased array applications: design perspectives and challenges", venue: "NIT Trichy, Trichy", year: "2024" },
  { topic: "Phased array antenna design using em solvers for radar", venue: "IEEE Technical Seminar, Hubbali (online)", year: "2024" },
  { topic: "Futuristic trends on phased array antenna technology", venue: "IEEE Delhi Chapter (online)", year: "2024" },
  { topic: "Aperiodic/unconventional phased array antenna technology: a new paradigm for realization of active phased array radars", venue: "IIT Palakkad, Kerala (online)", year: "2024" },
  { topic: "Shared aperture antenna technology for active phased array antennas", venue: "ATMS Lecture (online)", year: "2024" },
  { topic: "Glimpses on research activities related to wide band wide scanning antenna arrays", venue: "Workshop on Trends and techniques on advancements of antenna & microwave technology, Kerala", year: "2024" },
  { topic: "Demystifying career prospects in rf and microwave domain in industry", venue: "IEEE FDP, SVCE, Bangalore", year: "2024" },
  { topic: "Antenna technologies for radar applications", venue: "IEEE Kerala Wayaand GEC", year: "2024" },
  { topic: "Phased array antennas:design perspectives and research trends", venue: "IEEE 75th year celebration, Barton Hills, Trivandrum", year: "2024" },
  { topic: "Shared aperture antenna arrays: a solution for multi-fucntion phased arrays", venue: "IEEE MNIT, Jaipur", year: "2024" },
  { topic: "Feasibiity study of radiating elements for phased array applications for radars", venue: "Haldia Institute of Technology (Online)", year: "2024" },
  { topic: "Phased array antennas: design perspectives and research trends", venue: "MNIT Jaipur", year: "2024" },
  { topic: "Phased array antennas: design perspectives and research trends", venue: "MIT Jaipur", year: "2024" },
  { topic: "Careers in rf and microwaves for yound professionals", venue: "IEEE YPSIC", year: "2024" },
  { topic: "Phased array antennas: a solution provider for 5g/6g communications", venue: "IEEE-IETE Event on 5G/6G Technologies, RVCE, Bangalore", year: "2024" },
  { topic: "Futuristic trends on phased array antenna technology", venue: "IEEE SPACE", year: "2024" },
  { topic: "Phased array antennas: trends and advancements", venue: "ASTEW-2024, Christ University<, Bangalore", year: "2024" },
  { topic: "Antenna technology: latest trends and technology", venue: "IEEE Distinguished Instructor Workshop, Bangalore", year: "2025" },
  { topic: "Role of electromagnetic  solvers in design of phased array antennas", venue: "IEEE Distinguished Instructors Workshop, Reva University, Bangalore", year: "2025" },
  { topic: "Why to join ieee microwave theory and techniques society ?", venue: "IEEE Chapter Inaugural Talk, Cambridge Univerity, Bangalore", year: "2025" },
  { topic: "Phased array antennas and rcs reduction", venue: "RAASTA, IIT Indore", year: "2025" },
  { topic: "Phased array antennas: technology and trends with a perspective on applications of metamaterials", venue: "Workshop on metamaterials, IIT Kanpur", year: "2025" },
  { topic: "Research and development trends in rf and microwave antennas:a phased array perspective", venue: "IEEE AP/MTT Jt Chapter  Industry Event, Mathworks, Bangalore", year: "2025" },
  { topic: "Active electronically scanned arrays: shared aperture phased array perspective", venue: "CEP, DLRL, Hyderabad", year: "2025" },
  { topic: "Next generation active phased array antenna systems", venue: "World Telecommunication Day, NITTE Meenakshi, Bangalore", year: "2025" },
  { topic: "Drdo:harnessing emerging technologies for viksit bharat", venue: "IEEE Conecct 2025", year: "2025" },
  { topic: "Next generation active phased array antenna systems", venue: "Chief Guest Plenary Talk, VTU, Bangalore", year: "2025" },
  { topic: "Rf circuits and antennas for sensing and communication", venue: "REVA University, Bangalore", year: "2025" },
  { topic: "Aperiodic/unconventional phased array antenna technology: a new paradigm for realization of active phased array radars", venue: "IIT BHU", year: "2025" },
  { topic: "Survey of applications of artificial intelligence and machine learning techniques in optimizing the performance of phased array antennas", venue: "IEEE SPACE 2025", year: "2025" },
  { topic: "Drdo: embarking on a voyage of excellence in arena of rf & microwaves", venue: "IEEE Microwave World Leaders Conclave 2025 (IMWLC)", year: "2025" },
  { topic: "Phased Array Antennas: State of the art technologies", venue: "Manipal Institute of Technology, Bangalore", year: "2025" },
];

export default function InvitedTalks() {
  const PAGE_SIZE = 10;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleTalks = talks.slice(0, visibleCount);
  const hasMore = visibleCount < talks.length;

  const handleShowMore = () => {
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, talks.length));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-24">
        <h1 className="text-3xl font-bold mb-6">Invited Talks</h1>
        <p className="text-sm text-muted-foreground mb-4">Topic • Venue • Year</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleTalks.map((t, idx) => (
            <div key={idx} className="rounded-lg border p-4 bg-white/60 backdrop-blur">
              <div className="font-semibold">{t.topic}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.venue || "—"}</div>
              <div className="text-xs mt-2">{t.year}</div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 rounded-md bg-[hsl(var(--academic-navy))] text-white hover:opacity-90 transition"
            >
              Show more
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
