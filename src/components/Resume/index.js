import React from "react";

function Resume() {
  return (
    <>
      <div className="px-6 border-2 m-4 rounded">
        <div className="flex justify-between border-b-2 flex-col sm:flex-row">
          <div className="education sm:w-3/6 pl-4 pt-2 text-lg">
            <h2 className="font-bold text-2xl">Education:</h2>
            <h3 className="font-semibold">Medgar Ever College</h3>
            <p>Business Administration (A.S)</p>
            <p>Accounting (B.S)</p>
            <h4 className="font-semibold pt-4">Certification:</h4>
            <p>CompTIA A+, Security+, Network+ Certified</p>
            <p>Full Stack Web Developer - UCONN</p>
          </div>
          <div className="sm:w-2/6 pt-4">
            <div className="font-bold text-2xl">Lauguages Skills:</div>
            <div className="text-lg flex">
              <ul className="flex flex-wrap md:list-disc sm:flex-col pl-4">
                <li className=" pr-2">HTML5</li>
                <li className=" pr-2">CSS</li>
                <li className=" pr-2">JavaScript</li>
                <li className=" pr-2">React.js</li>
                <li className=" pr-2">Node</li>
                <li className=" pr-2">Express.js</li>
                <li>Mysql2</li>
              </ul>
              <ul className="flex flex-wrap md:list-disc sm:flex-col pl-6">
                <li className=" pr-2">GitHub</li>
                <li className=" pr-2">Graphql</li>
                <li className=" pr-2">Rest API's</li>
                <li className=" pr-2">Python</li>
                <li className=" pr-2">MongoDB</li>
                <li className=" pr-2">Tailwindcss</li>
                <li className=" pr-2">Material UI</li>
              </ul>
            </div>
          </div>
          <div
            id="hero"
            className="my-4 flex items-center animate-pulse justify-center"
          >
            <a href="./assets/files/resume.pdf" download="resume.pdf">
              <button
                className="
          bg-blue-400
          p-2
          rounded-lg
          text-white
          font-extrabold
          hover:bg-blue-800
        "
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold pt-4 pl-4">
          Professional Experience:
        </h2>
        <div>
          <div className="p-2">
            <p className="font-semibold text-xl pl-4">AC Auto Group</p>
            <p className="font-thin text-lg pl-4 pb-2">
              Director of Operation | 10/2016 - Present
            </p>
          </div>
          <div className="pl-4 w-full">
            <ul className="p-2">
              <li className="p-2 rounded bg-gray-200">
                Creates an environment and culture that focuses on fulfilling
                the company’s mission, vision, and values.
              </li>
              <li className="p-2 rounded bg-gray-100">
                Operational management of all business departments.
              </li>
              <li className="p-2 rounded bg-gray-200">
                Develops business prospects by studying economic trends and
                revenue opportunities, identifying opportunities for
                improvement, cost reduction, and systems enhancement.
              </li>
              <li className="p-2 bg-gray-100 w-auto">
                Ensures the company is staffed with well-trained, quality, and
                engaged employees at all times, while works closely with the
                management team to develop effective hiring, training, and
                compensation plans to retain our quality talent.
              </li>
              <li className="p-2 rounded bg-gray-200">
                Ensures the timely submission of month-end financial and
                operational reviews, contributes to the development of and
                participation in corporate-wide strategic planning efforts.
              </li>
              <li className="p-2 bg-gray-100 w-auto">
                Monitors company performance by measuring and analyzing results,
                initiating corrective actions, and minimizing the impact of
                variances.
              </li>
              <li className="p-2 rounded bg-gray-200">
                Increases revenues and income before inter-company allocations
                and implements operating cost controls in the areas of staffing,
                supplies, purchased services, etc.
              </li>
              <li className="p-2 bg-gray-100 w-auto">
                Effectively manages contract negotiations and statutory
                compliance.
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="jobs">
          <div className="p-2">
            <p className="font-semibold text-lg p-4">Junk A Car Inc.</p>
            <p className="font-thin text-lg pl-4 pb-2">
              Business Development Manager | 10/2013 - 09/2016
            </p>
          </div>
          <div className="pl-4 w-full">
            <ul className="p-2">
              <li className="p-2 rounded bg-gray-200">
                Acquired new client accounts, establish client credit line, and
                managed billings/collections.
              </li>
              <li className="p-2 rounded bg-gray-100">
                Created new revenue streams by venturing into new markets using
                creative marketing strategies.
              </li>
              <li className="p-2 rounded bg-gray-200">
                Work directly with CFO in creating sales and marketing
                strategies, client contacts and rate agreements for the
                organization
              </li>
              <li className="p-2 rounded bg-gray-100">
                Resolve any issues that partner clients may have regarding
                billings or bid adjustments.
              </li>
              <li className="p-2 rounded bg-gray-200">
                Maintain and update daily operational metrics/KPI’s.
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-4 pb-4 w-full">
          <div className="font-thin text-lg pl-4 pt-4">
            Account Receivable Manager | 10/2010 - 09/2013
          </div>
          <div className="txt">
            <ul className="p-2">
              <li className="p-2 rounded bg-gray-200">
                Collection of account receivables due by clients for services
                rendered weekly.
              </li>
              <li className="p-2 rounded bg-gray-100">
                Responsible for 4080 accounts for clients who work with Junk A
                Car Inc.
              </li>
              <li className="p-2 rounded bg-gray-200">
                Individually improved collection by 118% over a six-month
                period.
              </li>
              <li className="p-2 rounded bg-gray-100">
                Meeting assigned weekly goal and target collection numbers.
              </li>
              <li className="p-2 rounded bg-gray-200">
                Relay to controller all accounts that needed to be written off
                as bad debt.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
