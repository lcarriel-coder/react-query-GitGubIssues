import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks";
import { useQuery } from "@tanstack/react-query";
import { LoadingIcon } from "../../shared/components/LoadingIcon";
import { Issue } from '../interfaces/issue';

export const ListView = () => {
  const [selectedLabel, setSelectedLabels] = useState<string[]>([]);

  const { issuesQuery } = useIssues();

  const onLabelChanged = (labelName: string) => {
    selectedLabel.includes(labelName)
      ? setSelectedLabels(selectedLabel.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabel, labelName]);
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? <LoadingIcon /> : <IssueList issue={ issuesQuery.data || []} />}
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabel}
          onChange={(labelName) => onLabelChanged(labelName)}
        />
      </div>
    </div>
  );
};
