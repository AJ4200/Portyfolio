import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "JEP Productions",
    position: "Software Engineer(Full Stack)",
    time: "2022 - Present",
    location: "Remote",
    description:
      "Full Stack developer. I create, manage and scale jep products such as Portyfolio(this site), H.D.F.Player, CommonFunLib and more from scratch using the most effecient tech stacks",
    tech: [
      "Nodejs",
      "Python",
      "Ruby",
      "Git",
      "GitHub",
      "Java",
      "Maven",
      "MongoDB",
      "PostgreSQL",
      "and more"
    ],
  },
  {
    title: "UJ Maqhawe's Men Residence",
    position: "IT Admin",
    time: "2020 Feb - 2022 Dec",
    location: "SA, Johannesburg",
    description:
      "I ensured the smooth operation of servers, routers, and Wi-Fi systems through regular checks and maintenance. Additionally, I promptly addressed any issues and resolved problems to minimize downtime. I also monitored network performance, reporting any outages or connectivity issues to the relevant teams",
    tech: ["Netgear Admin", "Excel", "Hands"],
  },
  {
    title: "UJ Maqhawe's Men Residence",
    position: "Web Developer",
    time: "2023 Feb - 2023 Dec",
    location: "SA, Johannesburg",
    description:
      "I designed and built a user-friendly web interface that resulted in increased user adoption and engagement. The intuitive and accessible design improved user experience and led to higher submission rates. Additionally, the implementation of secure authentication and authorization mechanisms ensured authorized access for students, and an efficient issue tracking and management system streamlined resolution and improved response times.",
    tech: ["Excel", "MS Access", "ASPN.NET", "JavaFx"],
  },
];
