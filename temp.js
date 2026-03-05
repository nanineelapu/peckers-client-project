const fs = require('fs');

const files = [
    'app/careers/page.jsx',
    'app/home/page.jsx',
    'app/locations/page.jsx',
    'app/locations/hitchin/page.jsx',
    'app/locations/stevenage/page.jsx',
    'app/menu/page.jsx',
    'app/ourstory/page.jsx',
    'app/sauces/page.jsx',
    'app/uniqueness/page.jsx'
];

files.forEach(f => {
    if (!fs.existsSync(f)) {
        console.log('Not found:', f);
        return;
    }
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes('journeyOpen')) {
        console.log('Already updated:', f);
        return;
    }

    // 1. Add state
    content = content.replace(
        'const [locationsOpen, setLocationsOpen] = useState(false);',
        'const [locationsOpen, setLocationsOpen] = useState(false);\n  const [journeyOpen, setJourneyOpen] = useState(false);'
    );

    // 2. Desktop Dropdown
    content = content.replace(
        /<a href="uniqueness" className="whitespace-nowrap">THE JOURNEY<\/a>/g,
        `<div className="relative group">
            <span className="whitespace-nowrap cursor-default">THE JOURNEY</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg py-2 shadow-xl min-w-[250px]">
                <a href="/sauces" className="block px-5 py-3 hover:bg-[#262626] whitespace-nowrap text-[2vw] xl:text-[1.5vw] font-semibold tracking-[.2vw]">House-Made Sauces</a>
                <a href="/uniqueness" className="block px-5 py-3 hover:bg-[#262626] whitespace-nowrap text-[2vw] xl:text-[1.5vw] font-semibold tracking-[.2vw]">The Peckers Standard</a>
              </div>
            </div>
          </div>`
    );

    // 3. Mobile Expandable
    content = content.replace(
        /<a href="uniqueness" onClick={\(\) => setOpen\(false\)}>UNIQUENESS<\/a>/g,
        `<div className="flex flex-col items-center w-full">
              <button type="button" onClick={() => setJourneyOpen(!journeyOpen)} className="w-full text-center py-1">
                THE JOURNEY {journeyOpen ? "−" : "+"}
              </button>
              {(journeyOpen) && (
                <div className="flex flex-col items-center gap-2 mt-2 w-full">
                  <a href="/sauces" onClick={() => { setOpen(false); setJourneyOpen(false); }} className="w-full text-center py-3 text-xl">House-Made Sauces</a>
                  <a href="/uniqueness" onClick={() => { setOpen(false); setJourneyOpen(false); }} className="w-full text-center py-3 text-xl">The Peckers Standard</a>
                </div>
              )}
            </div>`
    );

    fs.writeFileSync(f, content);
    console.log('Updated ' + f);
});
