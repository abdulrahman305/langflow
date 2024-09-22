"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4058],{6060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(4848),s=r(8453);const a={},i="Hierarchical Tasks Agent",o={id:"Starter-Projects/starter-projects-hierarchical-crew",title:"Hierarchical Tasks Agent",description:"Build a Hierarchical Tasks Agent flow for a multi-shot application using CrewAI. This flow uses CrewAI to manage a Hierarchical Crew of Agents as they perform disparate tasks under the control of a Manager Agent.",source:"@site/docs/Starter-Projects/starter-projects-hierarchical-crew.md",sourceDirName:"Starter-Projects",slug:"/Starter-Projects/starter-projects-hierarchical-crew",permalink:"/Starter-Projects/starter-projects-hierarchical-crew",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Complex Agent",permalink:"/Starter-Projects/starter-projects-complex-agent"},next:{title:"Sequential Tasks Agent",permalink:"/Starter-Projects/starter-projects-sequential-crew"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open Langflow and Start a New Project",id:"open-langflow-and-start-a-new-project",level:2},{value:"Hierarchical Tasks Agent Flow Components",id:"hierarchical-tasks-agent-flow-components",level:2},{value:"Run the Hierarchical Tasks Agent Flow",id:"run-the-hierarchical-tasks-agent-flow",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hierarchical-tasks-agent",children:"Hierarchical Tasks Agent"}),"\n",(0,n.jsxs)(t.p,{children:["Build a Hierarchical Tasks Agent flow for a multi-shot application using ",(0,n.jsx)(t.a,{href:"https://docs.crewai.com/",children:"CrewAI"}),". This flow uses CrewAI to manage a Hierarchical Crew of Agents as they perform disparate tasks under the control of a Manager Agent."]}),"\n",(0,n.jsxs)(t.p,{children:["Unlike the agents in the ",(0,n.jsx)(t.a,{href:"/Starter-Projects/starter-projects-sequential-crew",children:"Sequential Crew starter flow"}),", the CrewAI agents in this flow don't just perform a task one after the other. One Agent is a Researcher that queries the Search API tool, another is an Editor that evaluates the retrieved information, and the Manager Agent oversees the Researcher and Editor Agents, using the OpenAI LLM as a brain to make decisions about how to manage the Researcher and Editor agents."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/getting-started-installation",children:"Langflow installed and running"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://platform.openai.com/",children:"OpenAI API key created"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.searchapi.io/",children:"SearchAPI API key created"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"open-langflow-and-start-a-new-project",children:"Open Langflow and Start a New Project"}),"\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"New Project"}),", and then select the ",(0,n.jsx)(t.strong,{children:"Hierarchical Tasks Agent"})," project."]}),"\n",(0,n.jsx)(t.p,{children:"This opens a starter project with the necessary components to run a multi-shot application using CrewAI."}),"\n",(0,n.jsx)(t.h2,{id:"hierarchical-tasks-agent-flow-components",children:"Hierarchical Tasks Agent Flow Components"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Chat Input"}),": Accepts user input to the chat"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Prompt"}),": Combines user input with a user-defined prompt"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"OpenAI model"}),": Sends user input and prompt to the OpenAI API and receives a response"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Chat Output"}),": Prints the flow's output to the chat"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"CrewAI Agent"}),": An autonomous unit programmed to perform tasks, make decisions, and communicate with other agents"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Crew AI Crew"}),": Represents a collaborative group of agents working together to achieve a set of tasks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Crew AI Task"}),": A specific assignment to be completed by agents"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SearchAPI tool"}),": Performs web searches using the SearchAPI.io API"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"run-the-hierarchical-tasks-agent-flow",children:"Run the Hierarchical Tasks Agent Flow"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add your credentials to the OpenAI and SearchAPI components using Langflow's Global Variables:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Settings"}),", then ",(0,n.jsx)(t.strong,{children:"Global Variables"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Add New"})]}),"\n",(0,n.jsxs)(t.li,{children:["Name your variable and paste your API key in the ",(0,n.jsx)(t.strong,{children:"Value"})," field"]}),"\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"Apply To Fields"})," field, select the field to apply this variable to"]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save Variable"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Chat Output"})," component, click ",(0,n.jsx)(t.strong,{children:"Play"})," to start the end-to-end application flow."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Playground"})," to view the flow's output. The default output is a concise explanatory text about Langflow."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Once your query has completed the journey from Chat Input to Chat Output, you have successfully completed the Hierarchical Tasks Agent flow."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(6540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);