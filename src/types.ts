export const WORKFLOW_STAGES=["intent","grill","plan","execute","review","ship","learn"] as const;
export type WorkflowStage=(typeof WORKFLOW_STAGES)[number];
export interface MiaEvent{id:string;timestamp:string;type:"workflow"|"health"|"learning"|"checkpoint";title:string;detail:string;stage?:WorkflowStage;status?:"success"|"warning"|"info"}
export interface Project{name:string;repo:string;branch:string;status:"healthy"|"attention";stage:WorkflowStage;health:{label:string;status:"pass"|"warn";detail:string}[];learnings:string[];events:MiaEvent[]}