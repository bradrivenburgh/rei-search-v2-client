import React, { useCallback, useEffect, useRef } from "react";
import {ReactComponent as EconomicsIcon} from '../images/economics-resized.svg';
import {ReactComponent as DemographicsIcon} from '../images/demographics-resized.svg';
import {ReactComponent as PropertiesIcon} from '../images/properties-resized.svg';
import StatsTabs from "./StatsTabs";
import PropertiesTab from "./PropertiesTab";
import "./HUD.css";

function HUD({defaultTab, HUDState}) {
  /* STATE */

  let {
    pressCount,
    HUDPosition,
    activeTab,
    setPressCount,
    setHUDPosition,
    setActiveTab,
    HUDScrollTops,
    setHUDScrollTops,
  } = HUDState;

  /* Refs for HUD tab content */
  let economicsTabContent = useRef(null);
  let demographicsTabContent = useRef(null);
  let propertiesTabContent = useRef(null);
  let copyRefScrollTops = useRef({
    econTab: 0,
    demogTab: 0,
    propsTab: 0
  });

  /**
   * Sets scroll positions when Image is clicked in the propsTab
   * @param(object) e
   */
  const handleScrollPosition = useCallback(
    (e) => {
      copyRefScrollTops.current = {
        econTab: economicsTabContent.current.scrollTop,
        demogTab: demographicsTabContent.current.scrollTop,
        propsTab: propertiesTabContent.current.scrollTop,
      };
  
      if (e.target.classList[0] === "property-image") {
        setHUDScrollTops({
          econTab: copyRefScrollTops.current.econTab,
          demogTab: copyRefScrollTops.current.demogTab,
          propsTab: copyRefScrollTops.current.propsTab,
        });
      }
    },
    [setHUDScrollTops]
  );

  /**
   * Sets the scroll position for the tabs when HUDScrollTops updates
   */
  useEffect(() => {

    economicsTabContent.current.scrollTop = HUDScrollTops.econTab;
    demographicsTabContent.current.scrollTop = HUDScrollTops.demogTab;
    propertiesTabContent.current.scrollTop = HUDScrollTops.propsTab;
  }, [HUDScrollTops]);

  /**
   * Records ref scrollTops to copyRefScrollTops on every render.  
   * Diffs the scrollTops from the tab refs 'current' property with
   * those in state on cleanup; set new state values if any differences.
   */
  useEffect(() => {
    copyRefScrollTops.current = {
      econTab: economicsTabContent.current.scrollTop,
      demogTab: demographicsTabContent.current.scrollTop,
      propsTab: propertiesTabContent.current.scrollTop,
    };

    return () => {
      if (
        !economicsTabContent.current ||
        !demographicsTabContent.current ||
        !propertiesTabContent.current
      ) {
        return;
      }

      if (
        copyRefScrollTops.current.econTab !==
          economicsTabContent.current.scrollTop ||
        copyRefScrollTops.current.demogTab !==
          demographicsTabContent.current.scrollTop ||
        copyRefScrollTops.current.propsTab !==
          propertiesTabContent.current.scrollTop
      ) {
        copyRefScrollTops.current = {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          econTab: economicsTabContent.current.scrollTop,
          // eslint-disable-next-line react-hooks/exhaustive-deps
          demogTab: demographicsTabContent.current.scrollTop,
          // eslint-disable-next-line react-hooks/exhaustive-deps
          propsTab: propertiesTabContent.current.scrollTop,
        };

        setHUDScrollTops(copyRefScrollTops.current);
      }
    };
  });

  /* FUNCTIONS FOR HUD BEHAVIOR */

  /**
   * Returns object with preset HUD height settings
   */
  const HUDHeights = () => {
    return {
      baseScreen: "69px",
      oneThirdScreen: "38%",
      twoThirdsScreen: "67%",
      fullScreen: "100%",
    };
  };

  /**
   * Allows user to adjust height of HUD display in order
   * to view more information and less of the map.
   * @param {number} pressCount
   * @param {object} allHUDHeights
   */
  const handleHUDHeight = useCallback(
    (pressCount) => {
      // HUD to baseScreen
      if (pressCount > 3) {
        pressCount = 0;
      }
      // HUD to fullScreen
      else if (pressCount < 0) {
        pressCount = 3;
      }
      setPressCount(pressCount);

      // Set HUDPosition; pressCount === 0 || 1 || 2 || 3
      // corresponding to ["69px","38%","67%","100%"]
      setHUDPosition(Object.values(HUDHeights())[pressCount]);

      // If no active tab, set it to 'econTab'
      let { econTab, demogTab, propsTab } = activeTab;
      if (!econTab && !demogTab && !propsTab && pressCount > 0) {
        setActiveTab(changeActiveValue("econTab"));
      }
    },
    [activeTab, setActiveTab, setHUDPosition, setPressCount]
  );

  /**
   * Helper function used to reduce repetition when calling
   * setActiveTab()
   * @param {string} activeTab
   */
  const changeActiveValue = (activeTab) => {
    const tabs = {
      econTab: null,
      demogTab: null,
      propsTab: null,
    };
    //Dictionary containing ref nodes
    const tabRefDictionary = {
      econTab: economicsTabContent.current,
      demogTab: demographicsTabContent.current,
      propsTab: propertiesTabContent.current,
    };

    tabs[activeTab] = tabRefDictionary[activeTab];
    return tabs;
  };

  /**
   * Listens for click event to display tab content.  Calls
   * adjustHeight() if the HUD is collapsed in order to show content.
   * @param {string} selectedTab
   */
  const handleOpenTab = useCallback(
    (selectedTab = "econTab") => {
      // Expand HUD if tab is clicked when just tabs are showing
      if (pressCount === 0) {
        handleHUDHeight(pressCount + 1);
      }
      // Check if there is already an active tab when the
      // defaultTab request is made
      if (defaultTab) {
        if (activeTab.demogTab || activeTab.propsTab) {
          return;
        }
      }
      // Set active tab
      setActiveTab(changeActiveValue(selectedTab));
    },
    [
      pressCount,
      defaultTab,
      setActiveTab,
      handleHUDHeight,
      activeTab.demogTab,
      activeTab.propsTab,
    ]
  );

  /**
   * Open a tab after a search is made
   */
  useEffect(() => {
    if (defaultTab) {
      handleOpenTab("econTab");
    }
  }, [defaultTab, handleOpenTab]);

  return (
    <section id='HUD' className='HUD' style={{ height: HUDPosition }}>
      <div className='HUD__nav'>
        <div className='HUD__button-container'>
          <button
            className='HUD__expand-button'
            tabIndex="1"
            onClick={() => handleHUDHeight(pressCount + 1)}>
            {pressCount === 3 ? <>&#95;</> : <>&#9650;</>}
          </button>
          <button
            className='HUD__contract-button'
            tabIndex="2"
            onClick={() => handleHUDHeight(pressCount - 1)}>
            {pressCount === 0 ? <>&#x26F6;</> : <>&#9660;</>}
          </button>
        </div>
        <div className='HUD__tab'>
          <button
            id='economics-btn'
            className={
              activeTab.econTab
                ? "HUD__tab__tablinks active"
                : "HUD__tab__tablinks"
            }
            tabIndex="3"
            onClick={() => handleOpenTab("econTab")}>
            <EconomicsIcon />
          </button>
          <button
            id='demographics-btn'
            className={
              activeTab.demogTab
                ? "HUD__tab__tablinks active"
                : "HUD__tab__tablinks"
            }
            tabIndex="4"
            onClick={() => handleOpenTab("demogTab")}>
            <DemographicsIcon />
          </button>
          <button
            id='properties-btn'
            className={
              activeTab.propsTab
                ? "HUD__tab__tablinks active"
                : "HUD__tab__tablinks"
            }
            tabIndex="5"
            onClick={() => handleOpenTab("propsTab")}>
            <PropertiesIcon />
          </button>
        </div>
      </div>

      <div className='HUD__tabcontent__container'>
        <div
          ref={economicsTabContent}
          className={
            activeTab.econTab
              ? "HUD__tabcontent HUD__tabcontent--visible"
              : "HUD__tabcontent HUD__tabcontent--hidden"
          }
          tabIndex="3">
          <StatsTabs id='economics' />
        </div>

        <div
          ref={demographicsTabContent}
          className={
            activeTab.demogTab
              ? "HUD__tabcontent HUD__tabcontent--visible"
              : "HUD__tabcontent HUD__tabcontent--hidden"
          }
          tabIndex="4">
          <StatsTabs id='demographics' />
        </div>

        <div
          ref={propertiesTabContent}
          onClick={(e) => handleScrollPosition(e)}
          className={
            activeTab.propsTab
              ? "HUD__tabcontent HUD__tabcontent--visible"
              : "HUD__tabcontent HUD__tabcontent--hidden"
          }
          tabIndex="5">
          <PropertiesTab />
        </div>
      </div>
    </section>
  );
};

HUD.defaultProps = {
  defaultTab: false,
  HUDState: {
    pressCount: 0,
    HUDPosition: 0,
    activeTab: null,
    setPressCount: () => {},
    setHUDPosition: () => {},
    setActiveTab: () => {},
    HUDScrollTops: {
      econTab: 0,
      demogTab: 0,
      propsTab: 0
    },
    setHUDScrollTops: () => {}
  }
};

export default HUD;
