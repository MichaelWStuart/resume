import { Header } from "./Header";
import { Summary } from "./Summary";
import { ExperienceSection } from "./ExperienceSection";
import { ReferenceBlock } from "./ReferenceBlock";
import type { ResumeData } from "../content/resume";

interface ResumePageProps {
  data: ResumeData;
}

export function ResumePage({ data }: ResumePageProps) {
  return (
    <div className="resume-page flex flex-col">
      <Header name={data.name} email={data.email} phone={data.phone} />
      <Summary text={data.summary} />
      <ExperienceSection entries={data.experience} />
      <ReferenceBlock text={data.referenceFooter} />
    </div>
  );
}
