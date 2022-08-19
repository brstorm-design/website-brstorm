import React from 'react';
//
import Catarge from 'src/components/portfolio/Catarge';
import LFD from 'src/components/portfolio/LFD';
import MapTrack from 'src/components/portfolio/MapTrack';
import NewAge from 'src/components/portfolio/NewAge';
import PetsVida from 'src/components/portfolio/PetsVida';
import Rivana from 'src/components/portfolio/Rivana';
import RukaMachi from 'src/components/portfolio/RukaMachi';
import TiagoGarcia from 'src/components/portfolio/TiagoGarcia';

export default function ProjectPresentation({ project }) {
  /* console.log('current project:', project); */
  const projectComponents = {
    'catarge': Catarge, 
    'lfd': LFD,
    'maptrack': MapTrack,
    'new-age': NewAge,
    'petsvida': PetsVida,
    'rivana': Rivana,
    'rukamachi': RukaMachi,
    'tiago-garcia': TiagoGarcia,
  }

  const ProjectComponent = projectComponents[project.slug];

  return (
    <ProjectComponent />
  )
}