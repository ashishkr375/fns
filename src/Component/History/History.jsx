import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Notice from "../Home/Notice/Notice";
import "./History.css";
function History() {
  return (
    <>
      <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        <Sidebar />

        <div className="nitp-notice">
          <Notice />
        </div>
      </div>

      <div className="mx-5 md:mx-20">
        <h1 className="my-4 text-amber-900 font-bold text-xl md:text-2xl">About Us</h1>
        <p>
          National Institute of Technology (NIT), Patna is the 18th NIT, created
          by the Ministry of Education, Government of India after rechristening
          the erstwhile Bihar College of Engineering Patna on 28th January 2004
          . NIT Patna marked its humble beginning in 1886 with the establishment
          of pleaders survey training school, which was subsequently promoted to
          Bihar College of Engineering Patna in 1924 making it the 6th oldest
          engineering institute of India . NIT Patna has been declared as an
          Institute of National Importance and has been granted a fully
          autonomous status by the ministry of education, Government of India .
          The institute has also been declared as a Centre of Excellence to
          impart high -level education training, research and development in
          engineering technology, science and humanities . It is imparting high
          quality education and values at UG programmes (B .Tech . , B .Arch .),
          PG programmes ( M .Tech . , MURP . , D . D . , M . C . A . ) and Ph .
          D . programmes through its experienced faculty, who are well - versed
          in their respective fields of engineering and technology, with well
          -equipped laboratories . NIT Patna aims at setting out very high
          education standards and holds long records of academic excellence .
          The pedagogical aspects have been formulated to suit not only the
          needs of the contemporary industrial requirements but also to develop
          human potential to its fullest extent in a range of professions .
          Extra -curricular activities are planned through games and sports,
          cultural programmes and NSS (National Service Scheme) activities .
          Cultural activities provide the platform to know about the culture of
          various states and regions of the nation and the opportunity for
          national integration
        </p>
        <h1 className="my-4 text-amber-900 font-bold text-xl md:text-2xl">Vision</h1>
        <p>To contribute to India and the World through excellence in scientific and technical education and research
; to serve as
a
valuable resource for industry and society
; and to remain
a source of pride for all Indians
.
</p>
<h1 className="my-4 text-amber-900 font-bold text-xl md:text-2xl">  Mission</h1>
<p>
To generate new knowledge by engaging in cutting
-edge research and to promote academic growth by offering state
-of
-the
-
art undergraduate, postgraduate and doctoral programmes
To identify, based on an informed perception of Indian, regional and global needs, areas of specialization upon which the
Institute can concentrate
To undertake collaborative projects which offer opportunities for long term interaction with academia and industry
To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in
a
range of profession
</p>
<h1 className="my-4 text-amber-900 font-bold text-xl md:text-2xl">Campus</h1>
<p>
NIT Patna is situated on the South bank of river Ganges behind Gandhi Ghat, one of the most important and
sacred places of Patna
. The Institute campus is
8 Km from the Patna junction railway station and 20 Km from
the Jai Prakash Narayan International Airport, Patna
. The entrance to the institute is from Ashok Rajpath and it
is about
3Km from the famous Gandhi Maidan
. The Institute is residential in nature and provides residential
facilities to its students as well as teachers as per availability
. Its large campus has
a picturesque river view with
eyecatching historic buildings presenting
a spectacle of architectural and natural beauty
.

</p>

      </div>
    </>
  );
}

export default History;
