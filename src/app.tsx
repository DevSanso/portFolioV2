import React,{Fragment} from "react";
import dom from "react-dom/client";
import AOS from 'aos';
import 'aos/dist/aos.css';

import ChangeBoxWidget from '@app/widget/ChangeBox';
import NavLinkWidget from '@app/widget/NavLink';

import MainView from '@app/view/Main';
import AboutMeView from "./view/AboutMe";
import ProjectView from '@app/view/Project';


import confactData from '@assets/json/confact.json';

const App = () => {
    return (
        <Fragment>
            <nav>
                <section>
                    <NavLinkWidget url="https://github.com/DevSanso">
                        GitHub
                    </NavLinkWidget>
                    <NavLinkWidget url="https://velog.io/@sunken_ahn">
                        Velog
                    </NavLinkWidget>
                </section>
                <footer>
                    <p>{confactData.email}</p>
                </footer>
            </nav>


            <section>
                <ChangeBoxWidget>
                    <MainView/>
                    <AboutMeView/>
                    <ProjectView/>
                </ChangeBoxWidget>
            </section>
        </Fragment>
    );
};


AOS.init();
const element = () => document.getElementById("app");
const root = (rootElement : HTMLElement) => dom.createRoot(rootElement);
root(element() as HTMLElement).render(<App/>);




