import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
     {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82RsDcZedXeuHi-HHnI4LC9kbpyQ37TPc76xyQeSRsQ&s=10',
      intro: '',
      color:'',
      tag: 'Satisfied',
      },
      {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCNpu0WgSkyaHtxPC8nAfEnAin1SlsMd-raCLmkxqNQ&s',
      intro: '',
      color:'',
      tag: 'UnderServed',
      },
      {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjweXuFeLHc81say9rixDPMI1H8CSigwbot0SRKWMgg&s=10',
      intro: '',
      color:'pink', 
      tag: 'Underbanked',
      },
    
  ]

  return (
   <div>
     <Section1 users={users} />
     <Section2 />
   </div>
  )
}

export default App