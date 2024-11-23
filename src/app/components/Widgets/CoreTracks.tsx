import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"

const CoreTracks = () => {
    const header = "Core Courses  \t \n           (Common in All Specializations):"
  return (
    <section className="mt-16 lg:mt-20">
        <Wrapper>
            {/* content */}
            <div className="max-w-screen-sm">
            <h4 className="text-teal-700 font-semibold text-lg mt-4">Program of Studies</h4>
            <h2 className="text-5xl font-bold">{header} </h2>
            <p className="mt-3 text-xl text-slate-600">Every participant of the program will start by completing the <br />
            following three core courses:</p>
        <div className="mt-5">
            <Button text={
                "LearnMore "} />
        </div>
        </div>
        {/* boxes */}
        <div>
            <div>
                <h4>Quarter I</h4>
                <p>CS-101 :Object Oriented Programming using typescript</p>
            </div>
        </div>
        </Wrapper>
          </section>
  )
}

export default CoreTracks
