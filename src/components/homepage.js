import React from 'react'
import Service from "./Service";
import Project from "./Project";
import ClientFeedBack from "./ClientFeedBack";
import BookUs from "./BookUs";

import FounderPage from "./FounderPage";
import Courses from "./courses";
import Body from "./Body"
import Collaborations from './Collaborations';

export default function Homepage() {
  return (
    <div>
      <Body />
{/* <Service /> */}
<Collaborations/>
<Courses/>

<Project />

<FounderPage />

<div>
  <ClientFeedBack />
</div>
<div>
  {/* <BookUs /> */}
</div>

</div>
  )
}
