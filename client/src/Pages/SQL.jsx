import React from "react";
import Box2 from "./Practice/Box2";
export default function SQL() {
  return (
    <div>
      <Box2
        Problem="select-by-id"
        type="SQL"
        level="easy"
        link={`https://www.hackerrank.com/challenges/select-by-id/problem?isFullScreen=true`}
      />
      <Box2
        Problem="weather-observation-station-4"
        type="SQL"
        level="easy"
        link={`https://www.hackerrank.com/challenges/weather-observation-station-4/problem?isFullScreen=true`}
      />
      <Box2
        Problem="salary-of-employees"
        type="SQL"
        level="easy"
        link={`https://www.hackerrank.com/challenges/salary-of-employees/problem?isFullScreen=true`}
      />
      <Box2
        Problem="occupations"
        type="SQL"
        level="medium"
        link={`https://www.hackerrank.com/challenges/occupations/problem?isFullScreen=true`}
      />
      <Box2
        Problem="15-days-of-learning-sql"
        type="SQL"
        level="Hard"
        link={`https://www.hackerrank.com/challenges/15-days-of-learning-sql/problem?isFullScreen=true`}
      />
    </div>
  );
}
