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
      "Full Stack developer. I created, manage an scale jep product such as Portyfolio(this site), CommonFunLib and CodeShifter from scratch using the  most effecient tech stacks",
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
    ],
  },
  {
    title: "Capdatacon.io",
    position: "Data Analyst Intern",
    time: "2020 Feb - 2020 July",
    location: "Remote",
    description:
      "Junior Data Analyst was responsible to represent data in all data formats(e.g JSON, CSV and etc) using JSONCSV",
    tech: ["pgAdmin", "R", "Python", "GraphQL", "Azure", "JSON", "CSV", "Excel"],
  },
];
