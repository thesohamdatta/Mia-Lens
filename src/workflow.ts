import {WORKFLOW_STAGES,type WorkflowStage} from "./types";
export function nextStage(stage:WorkflowStage):WorkflowStage{const i=WORKFLOW_STAGES.indexOf(stage);return WORKFLOW_STAGES[(i+1)%WORKFLOW_STAGES.length]!}
export function stageProgress(stage:WorkflowStage):number{return((WORKFLOW_STAGES.indexOf(stage)+1)/WORKFLOW_STAGES.length)*100}