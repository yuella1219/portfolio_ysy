"use client";

import React, { useState } from "react";
import styles from "./Project.module.scss";
import { TitleArea } from "@ui/index";
import { useScrollLock, usePortal } from "@hooks/index";
import clsx from "clsx";
import { ProjectData } from "@data/index";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import type { ProjectDataProps } from "@data/index";

export function Project() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDataProps | null>(null);

  const handleCardClick = (data: ProjectDataProps) => {
    setSelectedProject(data);
  };

  const handleDetailClose = () => {
    setSelectedProject(null);
  };

  return (
    <section className={clsx(styles.root)}>
      <TitleArea
        category="Project"
        title=" "
        description={<>프로젝트 경력</>}
      />

      <ul className={styles.list}>
        {ProjectData.map((item, idx) => (
          <li key={`${item.proNm}-${idx}`}>
            <ProjectCard data={item} onClick={() => handleCardClick(item)} />
          </li>
        ))}
      </ul>
      {selectedProject && (
        <ProjectDetail data={selectedProject} onClose={handleDetailClose} />
      )}
    </section>
  );
}
