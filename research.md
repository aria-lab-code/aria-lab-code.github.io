---
layout: default
title: Research
---

<div class="publications-section">
    <h1>Research</h1>
</div>

Welcome to our research page! Our lab is focused on advancing the fields of human-centered AI and human-robot interaction, with specific emphasis on reward learning, assistive and medical robotics, safety and robustness, and multi-agent systems.

---

## Reward Learning

Reward learning is at the core of creating intelligent systems that can make decisions based on feedback. Our research in this area focuses on:

- **Key Topics**: Reinforcement learning, inverse reinforcement learning, human-in-the-loop learning
- **Current Projects**:
  - **Learning reward functions that transfer across different robot/agent embodiments:** How can you take demonstrations from an agent and learn a reward function that transfers to a new agent with potentially different body shape, transition dynamics, action space, etc? How can you leverage human feedback to perform cross-embodiment reward learning from suboptimal demonstrations?
  - **Learning from multiple forms of human feedback:** How should AI systems fuse different forms of human feedback, such as natural language, corrections, comparisons, demonstrations, e-stops, etc? What types of feedback are most informative for learning and when should a robot query for a specific type of feedback?
- **Publications**: [Link to publications or references]
<!-- just a list of titles here with hyper links. You can link Connor and Anu's RLC paper and my AAAI paper on "The effect of modeling human rationality level..." .-->

---

## Assistive and Medical Robotics

We are developing robotic systems that assist individuals with disabilities and improve medical care. Our work includes:

- **Key Topics**: Shared control, surgical automation, rehabilitation robotics, human-robot interaction
- **Current Projects**:
  - **Learning from human preferences to learn rewards for surgical tasks:** Surgical tasks are messy and everything is deformable and partially observed. How can we perform RL from human feedback in these types of settings?
  - **AI-enabled assistive neck exoskeletons for individuals with neck disabilities:** Many people suffer from head-drop and other neck disabilities, significantly impacting their quality of life. We are designing AI controllers for the world's first powered neck exoskelton that can infer user intent with the aim of restoring normal neck mobility.
- **Publications**: [Link to publications or references]
<!-- just a list of titles here with hyper links. You can link Zohre's ISMR paper and Jordan's HRI workshop paper on assistive neck exoskeletons.-->
---

## Safety, Robustness, and Transparency

Ensuring the safety and robustness of robotic systems is crucial for deployment in real-world settings. Our research focuses on:

- **Key Topics**: Uncertainty quantification, verification, adversarial robustness, interetability
- **Current Projects**:
  - **Robots that know when they need to request human interventions:** Robots need to know what they know and what they don't know. Especially in risk-sensitive domains, such as surgical robotics, robots need to be able to reliably identify novel and risky states so they can request surgeon interventions.
  - **Interpretable reward learning for alignment verification:** Black-box neural networks are hard to interpret and debug. Can we use more interpretable structures such as differentiable decision trees to assist humans in interpreting learned rewards?
  - **Demonstration sufficiency:** How can robots and other AI systems that learn from demonstrations know if they have received enough data? How can robots provide high-confidence guarantees on their performance in these types of settings?
- **Publications**: [Link to publications or references]
<!-- just a list of titles here with hyper links. You can link my ThriftyDAgger paper from my postdoc, Akansha's RLC paper, and my recent HRI paper from last year "Autonomous Assessment of Demonstration Sufficiency ..."-->
---

## Multi-Agent Systems

We explore how multiple autonomous agents can collaborate and interact to solve complex problems. Our work in this area includes:

- **Key Topics**: Emergent behaviors, bio-inspired swarms, learning from human feedback, multi-agent RL
- **Current Projects**:
  - **Human-in-the-loop discovery of emergent swarm behaviors:** Multi-agent systems often exhibit facinating emergent collective behaviors that result from simple local interactions and rules. However, most work on swarm robotics is focused on engineering specific behaviors. We take an alternative approach and ask the question, given a set of robots with certain capabilities, what are the different emergent behaviors that are possible?
  - **Human-swarm interaction:** Swarms are typically composed of large numbers of simple agents. Thus, it is intractable to have a human micro-manage the swarm. How can humans efficiently interact with many robots? Can the human interact with the swarm at higher-levels of abstraction? 
- **Publications**: [Link to publications or references]
<!-- just a list of titles here with hyper links. You can link Connor's Gecco and MRS paper and my HRI paper from a while ago "Human-Swarm Interactions Based on Managing Attractors" .-->

---

