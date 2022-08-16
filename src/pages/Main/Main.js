import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills, Education, Experience, Contacts} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Profile</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            {/*
            <Projects />
            <Achievement />
            <Testimonials />*/}
            <Contacts />
            {/*<Footer />*/}
        </div>
    )
}

export default Main
