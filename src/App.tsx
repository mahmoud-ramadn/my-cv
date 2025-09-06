import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Section from "./components/Section";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import { LinkedInIcon, GitHubIcon, EmailIcon } from "./components/Icons";
import { cvData } from "./data/cvData";

function App() {
  const handleDownloadPDF = async () => {
    try {
      // Dynamic import to reduce bundle size
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).jsPDF;

      const element = document.getElementById("cv-content");
      if (!element) return;

      // Hide no-print elements
      const noPrintElements = document.querySelectorAll(".no-print");
      noPrintElements.forEach(
        (el) => ((el as HTMLElement).style.display = "none")
      );

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      // Restore no-print elements
      noPrintElements.forEach((el) => ((el as HTMLElement).style.display = ""));

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("Mahmoud_Ramadan_CV.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-inter transition-colors">
        <Header onDownloadPDF={handleDownloadPDF} />

        <main id="cv-content" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* About Section */}
            <Section title="About Me" id="about">
              <AboutSection personalInfo={cvData.personalInfo} />
            </Section>

            {/* Technical Skills */}
            <Section title="Technical Skills" id="skills">
              <SkillsSection skills={cvData.technicalSkills} />
            </Section>

            {/* Experience */}
            <Section title="Experience" id="experience">
              <ExperienceSection experiences={cvData.experience} />
            </Section>

            {/* Projects */}
            <Section title="Personal Projects" id="projects">
              <ProjectsSection projects={cvData.projects} />
            </Section>

            {/* Education */}
            <Section title="Education" id="education">
              <EducationSection education={cvData.education} />
            </Section>

            {/* Languages */}
            <Section title="Languages" id="languages">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-4">
                  {cvData.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full font-medium"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 no-print">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Mahmoud Ramadan. Built with React &
                Tailwind CSS.
              </p>
              <div className="mt-4 flex justify-center space-x-6">
                <a
                  href={cvData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={cvData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={`mailto:${cvData.personalInfo.email}`}
                  className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
