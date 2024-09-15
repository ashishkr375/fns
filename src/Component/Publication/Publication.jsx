import React from 'react'
import './Publication.css'

function Publication() {
  return (
    <>
    <div className="mx-5 md:mx-20">
      <h2 className='text-2xl text-red-700 text-center font-bold'>
      Open call for publications

      </h2>
      <p className='my-2 text-xl'>
      The research articles/ short communications indicating original research work in the areas of Nanomaterials sciences,
nanotechnology, and chemical engineering are encouraged to be submitted. The accepted and peer-reviewed manuscripts
will be published in Scopus-indexed Journals.

      </p>
      <h2 className='text-xl my-3 text-red-600'> Conference collective papers for publication in SCI approved Journals: (Details to be updated soon)
      </h2>
      <p className='my-2 text-xl'>
      All manuscripts shall not be communicated elsewhere for publication or monetary support. The format of manuscripts shall
be intimated to all authors as per the journal’s guidelines.
The main themes include, but are not limited to
      </p>
      <h2 className='text-2xl my-3 font-bold'>
      The main themes include, but are not limited to:
      </h2>
      <div className="conthemes">
          <div className="hiii">
          <ul className=" list-disc  contheme" >
            <li>Nanomaterials and technology</li>
            <li>Nanobiotechnology</li>
            <li>Nanomedicine</li>
            <li>Energy storage and solar cells</li>
            <li>Biomimetics and Biosensors</li>
          </ul>
          <ul className=" list-disc  contheme">
         
            <li>Nanotech Environment</li>
            <li>AI/ML in Nanotech</li>
            <li>Nano surfaces and engineering</li>
            <li>Nanocatalysis and reaction engineering</li>
            <li>Nanotherapeutics</li>
          </ul>
          
          </div>
        </div>
    </div>

    </>
  )
}

export default Publication