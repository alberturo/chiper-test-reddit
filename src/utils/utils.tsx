import React from 'react';

type Formula = {
  seconds: number;
};

export const getDiffTime = (created: any) => {
  const today = Math.floor(new Date().getTime() / 1000);
  const delta = today - created;
  const totalSeconds = parseInt(Math.floor(delta / 1000).toString(), 10);
  const totalMinutes = parseInt(Math.floor(totalSeconds / 60).toString(), 10);
  if (totalMinutes < 60) {
    return 'Less than one than a hour';
  } else if (totalMinutes < 60 && totalMinutes < 1) {
    return 'a few second ago';
  }
};
