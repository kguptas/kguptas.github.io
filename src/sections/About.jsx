import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false); //how it works: when value is changed, the component re-renders

    const handleCopy = () => {
        navigator.clipboard.writeText('kritig@umich.edu');
        setHasCopied(true);

        setTimeout(() => { //so that you can copy it again later
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about"> {/*margin y*/}
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/kriti_about.svg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/> {/*what does alt tag do: image description*/}
                        <div>
                            <p className="grid-headtext">Hi, I'm Kriti</p>
                            <p className="grid-subtext">As a recent computer science graduate from the University of Michigan,
                                I am focusing on honing my skills in adopting bleeding-edge technologies, exploring Agentic AI
                                and having delved into new AR/VR frameworks in college.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/tech_stack.svg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Languages: Python, C++, C#, JavaScript/TypeScript, HTML, CSS, SQL, Java</p>
                            <br/>
                            <p className="grid-subtext">Libraries/Frameworks: React, Three.js, Unity, Unreal Engine, OpenAI API,
                                Gemini API, LangChain, LangGraph, pandas, numpy, scikit-learn, PyTorch</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                // labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Location</p>
                            <p className="grid-subtext">I&apos;m based in the Bay Area, CA but am open to relocation or remote work.</p>
                            <a href="#contact">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I like building things that can make a difference in someone&apos;s life. In particular, I like seeing how existing platforms can be elevated with new technology. I love learning new things and working
                                on projects that challenge me and make me excited for the future of technology.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">kritig@umich.edu</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
