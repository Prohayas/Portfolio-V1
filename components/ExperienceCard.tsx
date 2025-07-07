import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Badge from "./Badge";

type ExperienceCardProps = {
  dateFrom: string;
  dateTo: string;
  present?: boolean;
  position: string;
  title: string;
  company?: string;
  description: string;
  badges?: string[];
  clickable?: boolean | string;
};

const ExperienceCard = ({
  dateFrom,
  dateTo,
  title,
  clickable,
  description,
  position,
  badges,
  company,
  present,
}: ExperienceCardProps) => {
  return (
    <div
      className={`grid grid-cols-3 hover:bg-[#FFFF]/5 transition-all ease-in-out p-5 hover:backdrop-blur-lg hover:rounded-lg hover: items-start gap-x-5 ${
        clickable ? "cursor-pointer" : ""
      }`}
    >
      <p className="text-sm text-text-brown flex-10/12">
        {dateFrom} — {present ? "Present" : dateTo}
      </p>
      <div className="flex flex-col col-span-2">
        <div className="flex items-end gap-x-2">
          <p className="text-text-white">
            {title} {company && "— " + company}
          </p>

          {clickable && (
            <Icon icon="iconamoon:arrow-top-right-1" className="size-5" />
          )}
        </div>
        <p className="mt-2 text-sm text-text-brown">{position}</p>
        <p className="mt-5 font-light leading-relaxed text-text-brown">
          {description}
        </p>

        <div className="flex flex-wrap gap-x-2">
          {badges?.map((badge) => (
            <Badge key={badge} text={badge} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
