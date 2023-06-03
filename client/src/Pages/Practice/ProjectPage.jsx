import React from "react";
import ProjectCard2 from "./Projectcard2";
export default function ProjectPage() {
  return (
    <div className="flex flex-wrap gap-4">
      <ProjectCard2
        image="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/483/500/datas/medium.png"
        name="ar-tifacts"
        link="https://devpost.com/software/ar-tifacts"
      />
      <ProjectCard2
        image="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/438/793/datas/medium.jpg"
        name="padawan-academy"
        link="https://devpost.com/software/padawan-academy"
      />
      <ProjectCard2
        image="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/467/866/datas/medium.png"
        name="Laughhub"
        link="https://devpost.com/software/funnyhub"
      />
      <ProjectCard2
        image="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/451/631/datas/medium.gif"
        name="cleanup-ai"
        link="https://devpost.com/software/cleanup-ai"
      />
      <ProjectCard2
        image="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/471/929/datas/medium.png"
        name="language-agnostic-document-semantic-search"
        link="https://devpost.com/software/language-agnostic-document-semantic-search"
      />
      <ProjectCard2
        image="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/471/506/datas/medium.png"
        name="omowe-ai"
        link="https://devpost.com/software/omowe-ai"
      />
    </div>
  );
}
