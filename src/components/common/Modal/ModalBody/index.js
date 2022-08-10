import React from 'react';
import MapTrack from 'src/components/portfolio/MapTrack';
import ProjectPresentation from 'src/components/portfolio/ProjectPresentation';
import RecentProjects from 'src/components/portfolio/RecentProjects';
import ProjectBody from 'src/components/portfolio/single/Body';
import ProjectHeader from 'src/components/portfolio/single/Header';

export default function ModalBody({ project }) {
  return (
    <>
      <ProjectHeader />
      <ProjectBody>
        <ProjectPresentation project={project} />
        <RecentProjects modal />
      </ProjectBody>
    </>
  )
}
