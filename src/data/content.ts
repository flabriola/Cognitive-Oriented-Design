import type { Section, ELCClassification, FLCClassification } from '../types';

export const ELC_CLASSIFICATIONS: ELCClassification[] = [
  {
    code: 'E0',
    label: 'Manual',
    description: 'Human performs the task without any machine involved. No automation, no AI, no suggestions.',
    machineInvolvement: 'None',
    icon: '/E0.svg'
  },
  {
    code: 'E1',
    label: 'Human-Initiated',
    description: 'Human performs the task and can request assistance (e.g., via button, prompt). Machine supports on-demand.',
    machineInvolvement: 'Possible',
    icon: '/E1.svg'
  },
  {
    code: 'E2',
    label: 'Machine-Initiated',
    description: 'Machine initiates or completes the task; the environment is editable by humans or allows human-triggered changes (e.g., "rewrite this").',
    machineInvolvement: 'Guaranteed',
    icon: '/E2.svg'
  },
  {
    code: 'E3',
    label: 'Machine',
    description: 'Machine triggers, initiates and transitions the execution.',
    machineInvolvement: 'Exclusive',
    icon: '/E3.svg'
  }
];

export const FLC_CLASSIFICATIONS: FLCClassification[] = [
  {
    code: 'F-A',
    label: 'Human-Only Flow',
    definition: 'Every task is E0 — no machine interaction in the system.',
    icon: '/F-A.svg'
  },
  {
    code: 'F-B',
    label: 'Hybrid Flow',
    definition: 'At least one task is E1 or E2 — human and machine both play roles.',
    icon: '/F-B.svg'
  },
  {
    code: 'F-C',
    label: 'Machine-Led Flow',
    definition: 'The entire flow runs through machine triggers and automation. No human-initiated task tagging occurs. All E3',
    icon: '/F-C.svg'
  }
];

export const SECTIONS: Section[] = [
  {
    id: 'hero',
    title: 'Cognition-Oriented Design (COD)',
    description: 'To render humans the decision-makers, and machines the executioners.',
    content: '',
    order: 0,
    subsections: []
  },
  {
    id: 'cod-intro',
    title: 'Cognition-Oriented Design (COD)',
    description: 'A paradigm for designing intelligent systems with structured practices for processes, classification, and communication.',
    content: '',
    order: 1,
    subsections: []
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Cognition-Oriented Design (COD) is a paradigm for building intelligent systems through principled design practices.',
    content: '• **COD** establishes the **design philosophy** for intelligent systems.\n• **Event-Derived Execution (EDE)** defines the **methodology for processes**, turning events into structured execution.\n• **Machine Involvement Framework (MIF)** provides a **classification system** for intelligence levels across flows and modules.\n\nTogether, these layers form a holistic approach: COD as the paradigm, EDE as the process engine, and MIF as the classification schema.',
    order: 2,
    subsections: []
  },
  {
    id: 'mif',
    title: 'Machine Involvement Framework (MIF)',
    description: 'A logical system for classifying how machine and human roles are distributed across tasks (Execution) and processes (Flows).',
    content: 'Layer | Group Name | Code Format | Purpose\n--- | --- | --- | ---\nTask | Execution-Level Classification (ELC) | E0 / E1 / E2 | Define the role of human/machine at the unit of action\nFlow | Flow-Level Classification (FLC) | F-A / F-B / F-C | Define system-wide patterns of execution',
    order: 3,
    subsections: []
  },
  {
    id: 'elc',
    title: 'Execution-Level Classification (ELC)',
    description: 'How individual execution units are carried out — i.e., the "doing"',
    content: 'Code | Label | Description | Machine Involvement\n--- | --- | --- | ---\nE0 | Manual | Human performs the task without any machine involved. No automation, no AI, no suggestions. | None\nE1 | Human-Initiated | Human performs the task and can request assistance (e.g., via button, prompt). Machine supports on-demand. | Possible\nE2 | Machine-Initiated | Machine initiates or completes the task; the environment is editable by humans or allows human-triggered changes (e.g., "rewrite this"). | Guaranteed\nE3 | Machine | Machine triggers, initiates and transitions the execution. | Exclusive',
    order: 4,
    subsections: []
  },
  {
    id: 'elc-icons',
    title: 'ELC Classifications',
    description: 'Visual representation of Execution-Level Classifications',
    content: 'icons:elc',
    order: 5,
    subsections: []
  },
  {
    id: 'flc',
    title: 'Flow-Level Classification (FLC)',
    description: 'How entire sequences of execution units operate — i.e., the system behavior',
    content: 'Code | Label | Definition\n--- | --- | ---\nF-A | Human-Only Flow | Every task is E0 — no machine interaction in the system.\nF-B | Hybrid Flow | At least one task is E1 or E2 — human and machine both play roles.\nF-C | Machine-Led Flow | The entire flow runs through machine triggers and automation. No human-initiated task tagging occurs. All E3',
    order: 6,
    subsections: []
  },
  {
    id: 'flc-icons',
    title: 'FLC Classifications',
    description: 'Visual representation of Flow-Level Classifications',
    content: 'icons:flc',
    order: 7,
    subsections: []
  },
  {
    id: 'machine-involvement',
    title: 'Machine Involvement Definition',
    description: '',
    content: 'An execution unit or flow includes machine involvement if any operation (i.e., interaction with the environment) or transition (i.e., movement between steps) involves an input/output exchange with a machine.',
    order: 8,
    subsections: []
  },
  {
    id: 'elc-usage',
    title: 'ELC Usage',
    description: '',
    content: 'Execution-Level Classification (ELC) defines how an individual execution unit is carried out. It acts as a choice point — a "How do you want to do this?" selector — determining how the environment loads and operates. Not all ELC modes may be available at all times.\n\n• **E0** – A basic environment is loaded with no machine assistance. Execution is entirely manual.\n• **E1** – The environment remains similar to E0, but with tools available to optionally interact with machines (e.g., summarize, generate, check).\n• **E2** – The environment loads with pre-filled or machine-generated content. Execution units are either partially or fully completed by the machine, with machine-powered tools enabled by default.',
    order: 9,
    subsections: []
  },
  {
    id: 'flc-usage',
    title: 'FLC Usage',
    description: '',
    content: '**Flow-Level Classification (FLC)** is **informational**. It shows users:\n\n• How each step in a flow was executed (for completed flows)\n• How machine support is available for the flow and its individual stages.\n\nFLC also guides **system designers and builders** toward machine-led optimization, helping teams visualize progress toward automation and identify where human-machine collaboration still plays a critical role.',
    order: 10,
    subsections: []
  },
  {
    id: 'implementation',
    title: 'Implementation Guidelines',
    description: 'The Machine Involvement Framework (MIF) is designed to ensure that Execution-Level Classifications (ELCs) are surfaced only when machine involvement provides meaningful value. Each ELC (E1–E3) must meet internal performance thresholds (speed, quality, or efficiency) before becoming available to users. Otherwise, the system defaults to lower ELCs (E0 or E1), or flags experimental modes as Beta',
    content: '',
    order: 11,
    subsections: []
  },
  {
    id: 'elc-availability',
    title: 'ELC Availability Logic',
    description: '',
    content: '• **E0** – Always available as a baseline\n• **E1** – Available when machine assistance meaningfully supports human-led execution\n• **E2** – Available when machine-initiated execution nears or outperforms E1/E0\n• **E3** – Only exposed when machine-triggered, self-contained execution is reliable end-to-end',
    order: 12,
    subsections: []
  },
  {
    id: 'design-philosophy',
    title: 'Design Philosophy: E3-First',
    description: '',
    content: 'When building execution units, design with **E2/3 in mind from the start** — even if the current tech isn\'t "good enough" yet.\n\n> The goal is to architect systems and environments that are machine-executable by default, then work down to human-led fallbacks (E2 → E1 → E0) as needed.\n\nThis forward-first design approach:\n\n• Avoids the trap of simply layering machine tools onto traditional software\n• Ensures environments are structurally prepared for high automation\n• Allows seamless upgrade paths as models, APIs, and cost structures improve\n• Future-proofs flows — even if machine capabilities are temporarily withheld\n\nBy doing this, you\'re not just enabling machine assistance — you\'re building systems where **machines can eventually lead**.',
    order: 13,
    subsections: []
  },
  {
    id: 'ede',
    title: 'Event-Derived Execution (EDE)',
    description: '',
    content: 'EDE is the process methodology of COD, where systems are designed around the transformation of Events into Execution Units (EUs).',
    order: 14,
    subsections: []
  },
  {
    id: 'event',
    title: 'Event',
    description: 'The trigger point of the system',
    content: 'Can be exogenous (external, e.g., "a meeting occurred") or endogenous (internal, e.g., "user pressed start flow"). Events represent both facts and intentions, providing the raw inputs that drive derivation.',
    order: 15,
    subsections: []
  },
  {
    id: 'derivation',
    title: 'Derivation',
    description: 'The interpretation and shaping of events into actionable context',
    content: 'The interpretation and shaping of events into actionable context. Operates through Context Packages (CPs): structured artifacts that carry contextual information across the loop. CPs standardize how context is created, stored, and pipelined into execution. This stage ensures fidelity and continuity of meaning from event to action.',
    order: 16,
    subsections: []
  },
  {
    id: 'execution',
    title: 'Execution',
    description: 'The performance of an action within a defined environment',
    content: 'The performance of an action within a defined environment. Powered by Execution Units (EUs): modular units that range from simple (e.g., composing an email) to complex (e.g., building a slide deck). EUs operate with context available to them, but are not required to consume or exhaust it. All execution occurs within Execution Environments (EEs): the "where" of action (applications, APIs, or machines).',
    order: 17,
    subsections: []
  },
  {
    id: 'ede-process',
    title: 'EDE Diagram',
    description: 'Materials of EDE:\nContext Packages (CPs): structured carriers of meaning and state. Execution Environments (EEs): the domains in which EUs operate.',
    content: '',
    order: 18,
    subsections: []
  },

  {
    id: 'communication',
    title: 'Communication Standard',
    description: 'COD leverages Model Context Protocol (MCP) for standardized interaction with large language models and machines.',
    content: 'MCP provides a uniform structure for LLM requests and responses. CPs feed into MCP calls, ensuring consistency and interoperability.',
    order: 19,
    subsections: []
  },
  {
    id: 'structure',
    title: 'COD Structure',
    description: 'The core layers that form the foundation of COD',
    content: 'Paradigm: COD → establishes design philosophy.\nProcess: EDE → defines how events become executions.\nClassification: MIF → grades flows and modules by intelligence level.\nMaterials & Communication: CPs, EEs, and MCP → ensure interoperability and context fidelity.',
    order: 20,
    subsections: []
  },
  {
    id: 'dimensions',
    title: 'Further Dimensions',
    description: 'Beyond the core layers of COD (paradigm, process, classification), additional perspectives help extend its practical usage.',
    content: '',
    order: 21,
    subsections: []
  },
  {
    id: 'components-pov',
    title: 'Components POV',
    description: '',
    content: 'From a component perspective, COD and EDE processes can be seen as modular building blocks, much like objects in OOP or components in React. Each Execution Unit (EU) can itself be designed as a self-contained component with its own flow logic and machine integrations.\n\nThis perspective generalises machine integration into reusable units. For example, a text box with "improve writing" built in becomes more than just a UI element — it is a machine-integrated component. As a flow, it may classify as E3 (fully machine-led within that micro-context), even while existing inside a broader E2 or E1 flow like a meeting log editor.\n\nThis creates reproducibility and scalability: once a machine-integrated component is designed, it can be reused across multiple environments and flows. A "smart text box" might first appear in a meeting log builder, then resurface in a presentation creator or CRM notes tool, always carrying its embedded flow classification.\n\nViewing COD through this component lens emphasises cohesion and reusability. Intelligent systems stop being monolithic builds and instead emerge as libraries of interoperable, machine-integrated components, accelerating both design and evolution.',
    order: 22,
    subsections: []
  }
];

export const HERO_QUOTE = 'To render humans the decision-makers, and machines the executioners.';
export const HERO_SUBTITLE = 'Learn about the Cognitive-Oriented Design paradigm'; 