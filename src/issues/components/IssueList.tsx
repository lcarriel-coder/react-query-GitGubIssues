import { FC } from "react";
import { Issue } from "../interfaces";
import { IssueItem } from "./IssueItem";

interface Props {
  issue: Issue[];
}

export const IssueList: FC<Props> = ({ issue }) => {
  return (
    <div className="card border-white">
      <div className="card-header bg-dark">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link active">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Open</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Closed</a>
          </li>
        </ul>
      </div>
      <div className="card-body text-dark">
        {issue.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
