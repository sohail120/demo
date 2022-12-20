import classNames from "classnames";
import React, {
  memo,
  PointerEvent,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";

import { FlippingPages, FlippingPagesDirection } from "./components/flipper";
import { defaultAnimationDuration } from "./components/flipper/flipcomponents/animation";
import {
  defaultOnSwipeStart,
  defaultSwipeLength,
  defaultSwipeSpeed,
} from "./components/flipper/flipcomponents/pointer-controls";
import { defaultShadowBackground } from "./components/flipper/flipcomponents/shadow"; 
import { defaultPerspectiveMultiplier } from "./components/flipper/flipcomponents/perspective";
import './Sample.css'


import classes from "./app.module.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Page = React.forwardRef((props: { pageNumber: number }, ref) => {
  return (
    <div style={{ width: "100%", height: "100%" ,justifyItems:"center"}}>
      <ReactPdfPage pageNumber={props.pageNumber} width={700}  height={1000}  />
    </div>
  );
});
const pageIndex = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7,
];
const _App = () => {

 
  const [selected, setSelected] = useState(0);
  const flipDocument = useRef(null);

  const handleSwipeStart = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!defaultOnSwipeStart(event)) {
        return false;
      }
      return true;
    },
    []
  );

  const handleSwipeEnd = useCallback((selected: number) => {
    setSelected(selected);
  }, []);


 
  return (
    <div className={classes.container}>
      <div className={classes.demo}>
        <div className={classNames(classes.flippingPages, classes["left-to-right"])}>
          <Document
            ref={flipDocument}
            file={
              "http://zewscalender-001-site1.btempurl.com/Pdf/Jewish-Wall-Calendar-web.pdf"
            }
            style={{ width: "100%" }}
          >
            <FlippingPages
              animationDuration={defaultAnimationDuration}
              direction={"left-to-right"}
              disableSwipe={false}
              onAnimationTurn={(e:any)=>console.log("onAnimationTurn",e)}
              onSwipeEnd={handleSwipeEnd}
              onSwipeStart={handleSwipeStart}
              // onSwipeTurn={handleSwipeTurn}
              perspectiveMultiplier={defaultPerspectiveMultiplier}
              selected={selected}
              shadowBackground={defaultShadowBackground}
              swipeLength={defaultSwipeLength}
              swipeSpeed={defaultSwipeSpeed}
              willChange='auto'
              // disableSwipe={true}
            >
              {pageIndex?.map((k, key) => { 
                return (

                  <Page pageNumber={key + 1} />
                );
              })}

             
            </FlippingPages>
          </Document>
        </div>
        
      </div>
    
    </div>
  );
};

export const App = memo(_App);
