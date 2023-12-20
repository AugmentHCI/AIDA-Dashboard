import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/Icon";
import ConceptManager from "../../../managers/ConceptManager";

interface AppLinkProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  href?: string;
}

function AppLink({ className, children, href, title }: AppLinkProps) {
  const [exists, setExists] = useState(false);

  const conceptManager = new ConceptManager("Maxwell");

  useEffect(() => {
    if (href)
      conceptManager.findByTitle(href).then((res) => {
        if (res) setExists(true);
      });
  }, [href]);

  return (
    <Link
      className={`group inline-flex hover:gap-2 justify-center items-center text-base font-normal  dark:text-slate-200 ${className}  rounded-md px-2 py-0.5 transition-all ${
        exists
          ? "text-primary-600 bg-primary-200 dark:text-slate-100 dark:bg-primary-600"
          : "text-slate-600 bg-slate-200 dark:text-slate-100 dark:bg-slate-500"
      }`}
      to={href ? "/concepts/" + href : "/"}
      onClick={(e) => {
        e.stopPropagation();
        if (!exists && href) conceptManager.createConcept(href, "");
      }}
    >
      {title ? title : children}
      <Icon
        icon="expand"
        className="w-0 h-0 transition-all -translate-x-4 opacity-0 group-hover:h-auto group-hover:w-auto group-hover:opacity-100 group-hover:translate-x-0"
      />
    </Link>
  );
}

export default AppLink;
