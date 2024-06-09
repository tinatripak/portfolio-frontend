import React, { MouseEvent, ReactNode, useRef } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

import styles from "./Collapsible.module.scss";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.collapsible} onClick={handleToggle}>
      <div className={styles.openBlock}>
        <div className={styles.expand}>
          <h2>{title}</h2>

          {!isExpanded ? (
            <CiCirclePlus size={55} />
          ) : (
            <CiCircleMinus size={55} />
          )}
        </div>
      </div>
      {isExpanded && (
        <div className={styles.expandedBlock} ref={ref}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
