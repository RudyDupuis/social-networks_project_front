import React from "react";

interface Props {
  date: string;
}

const DateFormat = ({ date }: Props) => {
  function formatDate(dateStr: string): string {
    const newDate = new Date(dateStr);
    const options = {
      day: "numeric" as const,
      month: "long" as const,
      year: "numeric" as const,
      hour: "numeric" as const,
      minute: "numeric" as const,
    };
    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    return formatter.format(newDate);
  }
  return <span>{formatDate(date)}</span>;
};

export default DateFormat;
