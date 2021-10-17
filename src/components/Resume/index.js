import React from "react";

function Resume() {
  return (
    <>
    <div id="hero" class="h-44 flex items-center justify-center">
      <a href="./assets/files/resume.pdf" download="resume.pdf"><button
        class="
          bg-blue-400
          p-2
          rounded-lg
          text-white
          font-extrabold
          hover:bg-blue-800
        "
      >
        Download Resume
      </button></a>
    </div>
      <section class="flex justify-between border-b-2">
        <div class="education w-3/6 pl-4 pt-2 text-lg">
          <h1 class="font-bold text-2xl">Education:</h1>
          <h3 class="font-semibold">Medgar Ever College</h3>
          <h4>
            <p>Business Administration (A.S)</p>
            <p>Accounting (B.S)</p>
            <h3 class="font-semibold pt-4">Certification:</h3>
            <p>CompTIA A+, Security+, Network+ Certified</p>
            <p>Full Stack Web Developer - UCONN</p>
          </h4>
        </div>
        <div class="w-3/6 pt-4">
          <div class="font-bold text-2xl">Key Skills:</div>
          <div class="text-lg font-thin">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>GitHub</li>
              <li>Node</li>
              <li>Mysql2</li>
            </ul>
          </div>
        </div>
      </section>

      <h2 class="text-2xl font-extrabold pt-4 pl-4">
        Professional Experience:
      </h2>
      <div>
        <div class="p-2">
          <p class="font-semibold text-xl pl-4">AC Auto Group</p>
          <p class="font-thin text-lg pl-4 pb-2">
            Director of Operation | 10/2016 - Present
          </p>
        </div>
        <div class="pl-4 w-full">
          <ul class="p-2">
            <li class="p-2 rounded bg-gray-200">
              Creates an environment and culture that focuses on fulfilling the
              company’s mission, vision, and values.
            </li>
            <li class="p-2 rounded bg-gray-100">
              Operational management of all business departments.
            </li>
            <li class="p-2 rounded bg-gray-200">
              Develops business prospects by studying economic trends and
              revenue opportunities, identifying opportunities for improvement,
              cost reduction, and systems enhancement.
            </li>
            <li class="p-2 bg-gray-100 w-auto">
              Ensures the company is staffed with well-trained, quality, and
              engaged employees at all times, while works closely with the
              management team to develop effective hiring, training, and
              compensation plans to retain our quality talent.
            </li>
            <li class="p-2 rounded bg-gray-200">
              Ensures the timely submission of month-end financial and
              operational reviews, contributes to the development of and
              participation in corporate-wide strategic planning efforts.
            </li>
            <li class="p-2 bg-gray-100 w-auto">
              Monitors company performance by measuring and analyzing results,
              initiating corrective actions, and minimizing the impact of
              variances.
            </li>
            <li class="p-2 rounded bg-gray-200">
              Increases revenues and income before inter-company allocations and
              implements operating cost controls in the areas of staffing,
              supplies, purchased services, etc.
            </li>
            <li class="p-2 bg-gray-100 w-auto">
              Effectively manages contract negotiations and statutory
              compliance.
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="jobs">
        <div class="p-2">
          <p class="font-semibold text-lg p-4">Junk A Car Inc.</p>
          <p class="font-thin text-lg pl-4 pb-2">
            Business Development Manager | 10/2013 - 09/2016
          </p>
        </div>
        <div class="pl-4 w-full">
          <ul class="p-2">
            <li class="p-2 rounded bg-gray-200">
              Acquired new client accounts, establish client credit line, and
              managed billings/collections.
            </li>
            <li class="p-2 rounded bg-gray-100">
              Created new revenue streams by venturing into new markets using
              creative marketing strategies.
            </li>
            <li class="p-2 rounded bg-gray-200">
              Work directly with CFO in creating sales and marketing strategies,
              client contacts and rate agreements for the organization
            </li>
            <li class="p-2 rounded bg-gray-100">
              Resolve any issues that partner clients may have regarding
              billings or bid adjustments.
            </li>
            <li class="p-2 rounded bg-gray-200">
              Maintain and update daily operational metrics/KPI’s.
            </li>
          </ul>
        </div>
      </div>
      <div class="pl-4 pb-4 w-full">
        <div class="font-thin text-lg pl-4 pt-4">
          Account Receivable Manager | 10/2010 - 09/2013
        </div>
        <div class="txt">
          <ul class="p-2">
            <li class="p-2 rounded bg-gray-200">
              Collection of account receivables due by clients for services
              rendered weekly.
            </li>
            <li class="p-2 rounded bg-gray-100">
              Responsible for 4080 accounts for clients who work with Junk A Car
              Inc.
            </li>
            <li class="p-2 rounded bg-gray-200">
              Individually improved collection by 118% over a six-month period.
            </li>
            <li class="p-2 rounded bg-gray-100">
              Meeting assigned weekly goal and target collection numbers.
            </li>
            <li class="p-2 rounded bg-gray-200">
              Relay to controller all accounts that needed to be written off as
              bad debt.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;