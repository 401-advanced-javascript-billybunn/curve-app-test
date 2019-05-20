// @flow
import * as d3 from "d3"

export const milestones = [0, 1, 2, 3, 4]

export const milestoneToPoints = milestone => {
  switch (milestone) {
    case 0:
      return 0
    case 1:
      return 1
    case 2:
      return 3
    case 3:
      return 6
    case 4:
      return 12
    // case 5:
    //   return 20
    default:
      return 0
  }
}

export const pointsToLevels = {
  "0": "1.1",
  "5": "1.2",
  "11": "1.3",
  "17": "2.1",
  "23": "2.2",
  "29": "2.3",
  "36": "3.1",
  "43": "3.2",
  "50": "3.3",
  "58": "4.1",
  "66": "4.2",
  "74": "4.3",
  "90": "5.1",
  "110": "5.2",
  "135": "5.3",
}

export const maxLevel = 135

// SOURCE: https://codefellows.github.io/common_curriculum/career_coaching/Professional_Competencies
export const tracks = {
  // BUSINESS ACUMEN COMPETENCY --------------------
  MISSION_AND_VISION: {
    displayName: "Mission and Vision",
    category: "A",
    description:
      "Makes decisions that align work to support the company’s and product’s vision and goals, along with the team KPIs.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  CUSTOMER_ORIENTATION: {
    displayName: "Customer Orientation",
    category: "A",
    description:
      "Seeks customer interaction opportunities, as a customer advocate, to anticipate and discover their needs. Uses detailed information and data about the customer to deliver high quality results and add value. Views features as part of an integrated customer experience.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },
  // GROWTH MINDSET COMPETENCY --------------------
  ADAPTABILITY: {
    displayName: "Adaptability",
    category: "B",
    description:
      "Ability to cope with change positively and constructively. Actively seeks information to tests assumptions. Shifts approach in response to the demands of a changing situation by demonstrating resilience.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  CURIOSITY: {
    displayName: "Curiosity",
    category: "B",
    description:
      "Demonstrates a inquisitive and wondering nature that actively digs deep to explore options and solutions. Constantly asks questions to learn more about business alignment and prioritization.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  CONSTANT_IMPROVEMENT: {
    displayName: "Constant Improvement",
    category: "B",
    description:
      "Continuously invests in personal and professional growth. Stays technically relevant by being aware of new technologies and practices. Knows the latest industry trends by reading books, blogs, attending workshops, meetups, classes and conferences.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  HANDLING_AMBIGUITY: {
    displayName: "Handling Ambiguity",
    category: "B",
    description:
      "Functions effectively on limited information and not fully understanding the whole picture. Finds a way forward when there aren't clear next steps and works through open ended questions while maintaining a constructive attitude in times of stress. Can participate in creation of solid design with vague requirements. Can change strategies quickly when initial approach doesn’t work.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  INCLUSIVITY: {
    displayName: "Inclusivity",
    category: "B",
    description:
      "Embraces diversity of thought, work style, perspective, and experiences outside of one’s own experiences. Actively involves people who might otherwise be excluded or marginalized because of race, gender, learning/physical disabilities, lifestyles, or having a different points of view. Emotionally aware and accountable when speaking up with questions and opinions.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  OPENNESS: {
    displayName: "Openness",
    category: "B",
    description:
      "Seeks and listens to feedback about their work, and takes appropriate action in response. Open to new ideas, processes, and ways of getting things done. Focuses on positive outcomes while taking responsibility for poor results.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  AMBITION_AND_INITIATIVE: {
    displayName: "Ambition and Initiative",
    category: "B",
    description:
      "Demonstrates personal drive without needing recognition or reward. When there is downtime, finds a productive task. Exhibits a bias for action with a strong will to accomplish task with excellence.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },
  // LEADERSHIP COMPETENCY --------------------
  ACCOUNTABILITY: {
    displayName: "Accountability",
    category: "C",
    description:
      "Behaves with responsibility for one’s role with quality and timeliness of deliverables while accepting responsibility when work does not meet expectations. Works toward a high standard of performance and provides helpful context/information on demand.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  INTEGRITY: {
    displayName: "Integrity",
    category: "C",
    description:
      "Does the right thing in a reliable way. “Wholeness” of character shows quality and honesty.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  OWNERSHIP: {
    displayName: "Ownership",
    category: "C",
    description:
      "Focuses on taking the initiative and accepting responsibility for actions and outcomes. Persistent and tenacious in delivering quality work product and thinking long term and not sacrificing value in the short-term. Embraces leadership opportunities and work on higher level responsibilities.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  MENTORSHIP: {
    displayName: "Mentorship",
    category: "C",
    description:
      "Ability to mediate in or across teams. Models good judgement and business decisions to complete work. Willingness to give or receive guidance to improve overall skills and abilities, leaving a positive impact through leading by example.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  NETWORKING: {
    displayName: "Networking",
    category: "C",
    description:
      "Has a active community of experts with different perspectives to help drive personal growth, product goals, and business initiatives.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  SUCCESSION: {
    displayName: "Succession",
    category: "C",
    description:
      "Information and knowledge that is passed and shared with team members promoting a continuous workflow in ones absence.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  HEALTH_AND_SAFETY: {
    displayName: "Health and Safety",
    category: "C",
    description:
      "Has discipline to manage self-care through diet, exercise, relaxation, and fulfilling activities while keeping one's self and others from harm.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  CONFIDENCE: {
    displayName: "Confidence",
    category: "C",
    description:
      "Displays a positive sense of efficacy and readiness to handle stress, competitiveness, workload, instructional or orientation methods, and related associated complexities. States ideas with self-assurance and enthusiasm. Stands up for beliefs and views while preserving respect of others.Willingness to support final team decisions.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  CREDIBILITY: {
    displayName: "Credibility",
    category: "C",
    description:
      "Having earned reliability and trustworthiness to obtain collaboration and participation of others to accomplish goals. Consistently doing what you say you are going to do.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  // CRAFT COMPETENCY --------------------
  TECHNICAL: {
    displayName: "Technical",
    category: "D",
    description:
      "Applies engineering principles to solve complex problems through sound and creative engineering. Uses internal or industry best practices to improve technical solutions while seeking feedback. Evangelizes and teaches others to reach beyond existing solutions and technologies. Delivers high quality software that is written with pride, great skill and careful attention. Not only values working software, but well-crafted software that is easy to read, maintain and refactor. Designs, develops and delivers systems that are secure, efficient, reliable and scalable.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  PROCESS: {
    displayName: "Process",
    category: "D",
    description:
      "Prioritizes and completes assigned tasks according to team's process. Consults with more senior teammates on how and when to ask for help. Aligns with team’s management style, best practices and processes. Addresses issues on-demand as a standard rule.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  INNOVATION: {
    displayName: "Innovation",
    category: "D",
    description:
      "Generates new ideas for meeting customer needs by effectively using customer interaction and research. Proactively identifies and manages risks within scope and resolves issues via an established process or with coaching. Develops multiple options for fulfilling customer needs.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  TOOL_PROFICIENCY: {
    displayName: "Tool Proficiency",
    category: "D",
    description:
      "Makes efficient use of internal tools for version control management, log analysis, CI/CD, bug tracking, exception reporting, and debugging tools to diagnose problems and inform decisions.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  // QUALITY COMPETENCY --------------------
  JUDGEMENT: {
    displayName: "Judgement",
    category: "E",
    description:
      "The ability to assess and research a problem to identify key issues, inputs, stakeholders, desired outcomes then come to a sensible logical conclusion.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  ROOT_CAUSE_RESOLUTION: {
    displayName: "Root Cause Resolution",
    category: "E",
    description:
      "Proactively identifies source of problems beyond the surface. involves the right people to analyze the problem, and tracks the chain of events that lead to the failure. Offers and implements appropriate solutions.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  // COMMUNICATION COMPETENCY --------------------
  WRITING: {
    displayName: "Writing",
    category: "F",
    description:
      "Ability to sum up complex ideas, problems, or solutions with effective style. Engages and influences the audience with clarity and persuasiveness.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  READING: {
    displayName: "Reading",
    category: "F",
    description:
      "Ability to comprehend task instructions, bug reports, and emails. Locates and understands internal and external documentation.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  SPEAKING: {
    displayName: "Speaking",
    category: "F",
    description:
      "Articulates effectively and confidently. Expresses in a clear and outlined manner how ideas fits into wider scenarios.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  LISTENING: {
    displayName: "Listening",
    category: "F",
    description:
      "Has patience to not interrupt, takes turns speaking, pays close attention to what is being shared, and maintains eye contact. Uses listening cues such as nodding to show engagement. Acknowledges concerns and different perspectives of others.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  // TEAMWORK COMPETENCY --------------------
  COLLABORATION: {
    displayName: "Collaboration",
    category: "G",
    description:
      "Actively works with others to produce or create something in a friendly and professional manner on behalf of the entire company, beyond own team or self. Seeks to ensure the team understands the business value of every story by sharing knowledge and expertise with other team members. Consistently tries to improve code quality by seeking pair programming opportunities.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  // RESULTS COMPETENCY --------------------
  AGILE: {
    displayName: "Agile",
    category: "H",
    description:
      "Passionate about developing and delivering high quality code that is easy to read and maintain. Refactors code to improve the quality. Habitually applies agile development principles, displaying a solid understanding of agile processes, reports, and metrics, and how to use them.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  ORGANIZATIONAL: {
    displayName: "Organizational",
    category: "H",
    description:
      "Across-team collaborator that combines efforts and resources to achieve company-wide initiatives.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  CREATIVE: {
    displayName: "Creative",
    category: "H",
    description:
      "Procedurally suggests improvements that could increase the velocity of software delivery. Is open to new ideas and willing to appropriately challenge the status quo.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  PROJECT_EXECUTION: {
    displayName: "Project Execution",
    category: "H",
    description:
      "Defines what it takes to accomplish the project requirements by coordinating people and resources, then performing in accordance to the project plan.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  ANALYTICAL_THINKING: {
    displayName: "Analytical Thinking",
    category: "H",
    description:
      "Identifies and defines problems, extracting key information from data and develops workable solutions in order to isolate, test, and verify the problem and solution.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  PRIORITIZATION: {
    displayName: "Prioritization",
    category: "H",
    description:
      "Establishes and ranks deliverables based on project plan, product objectives, and business impact.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  PROBLEM_SOLVING: {
    displayName: "Problem Solving",
    category: "H",
    description:
      "Proactively foresees and mitigates potential blocking issues, while finding solutions to difficult problems by researching and collaborating with the team members. Remains solution focused but knows when to escalate.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  INCREMENTAL_DELIVERY: {
    displayName: "Incremental Delivery",
    category: "H",
    description:
      "Applies code management techniques that enable uninterrupted delivery in a series of gradual releases until the project is complete. Understands and advocates for the use and implementation of automation to reduce waste and errors in the process of delivering solutions.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  DECISION_MAKING: {
    displayName: "Decision Making",
    category: "H",
    description:
      "Actively seeks to understand customer impression of products and services to integrate feedback into project plan. Synthesizes different perspectives to create a relevant solutions that drives the business impact.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  APPROPRIATE_AUTONOMY: {
    displayName: "Appropriate Autonomy",
    category: "H",
    description:
      "Can be trusted with decision making over topics related to scope of work. Operates without supervision after learning to align with company goals. Seeks input from leaders when appropriate.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  PLANNING_AND_ESTIMATING: {
    displayName: "Planning and Estimating",
    category: "H",
    description:
      "Understands product development roadmap scope to identify and suggest optimal resources, materials, and related documents. Develops and communicates sound plan by determining the time, complexity, and processes required to successfully achieve the final outcome.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },

  DEPENDABILITY_AND_RELIABILITY: {
    displayName: "Dependability and Reliability",
    category: "H",
    description:
      "Demonstrates personal accountability for quality and timeliness of deliverables. Manages available resources to complete projects efficiently and on time.",
    milestones: [
      {
        summary:
          "Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
      {
        summary:
          "Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.",
        signals: [
          "Signal 1. Super mario world ripped jeans paper fortune teller.",
          "Signal 2. Super mario world ripped jeans paper fortune teller.",
          "Signal 3. Super mario world ripped jeans paper fortune teller.",
        ],
        examples: [
          "Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
          "Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.",
        ],
      },
    ],
  },
}

export const trackIds = Object.keys(tracks)

export const categoryIds = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = milestoneMap => {
  let pointsByCategory = new Map()
  trackIds.forEach(trackId => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone)
    )
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = milestoneMap =>
  trackIds
    .map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0)

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range([
    "#00abc2", // BUSINESS ACUMEN
    "#428af6", // GROWTH MINDSET
    "#e1439f", // LEADERSHIP
    "#e54552", // CRAFT
    "#ead456", // QUALITY
    "56ea65", // COMMUNICATION
    "8a56ea", // TEAMWORK
    "ea6556", // RESULTS
  ])

export const titles = [
  { label: "Engineer I", minPoints: 0, maxPoints: 16 },
  { label: "Engineer II", minPoints: 17, maxPoints: 35 },
  { label: "Senior Engineer", minPoints: 36, maxPoints: 57 },
  { label: "Group Lead", minPoints: 36, maxPoints: 57 },
  { label: "Staff Engineer", minPoints: 58, maxPoints: 89 },
  { label: "Senior Group Lead", minPoints: 58, maxPoints: 89 },
  { label: "Principal Engineer", minPoints: 90 },
  { label: "Director of Engineering", minPoints: 90 },
]

export const eligibleTitles = milestoneMap => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles
    .filter(
      title =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map(title => title.label)
}
