import { useEffect, useState } from "react";

import { ReactComponent as MobileLogo } from "./assets/images/bg-header-mobile.svg";
import { ReactComponent as DesktopLogo } from "./assets/images/bg-header-desktop.svg";

import FilterJobs from "./components/FilterJobs";
import JobsContainer from "./containers/JobsContainer";

// from https://usehooks.com/useWindowSize/
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const breakTablet = 768;

const App = () => {
  const windowWidth = useWindowSize().width;
  console.log(windowWidth);

  return (
    <main className="app">
      <div className="app__background">
        {windowWidth > breakTablet ? (
          <DesktopLogo className="app__background-image" />
        ) : (
          <MobileLogo className="app__background-image" />
        )}
      </div>
      <div className="app__content">
        <FilterJobs />
        <JobsContainer />
      </div>
    </main>
  );
};

export default App;
