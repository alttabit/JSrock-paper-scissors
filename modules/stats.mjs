import { Outcomes } from "../utils/constants.mjs";

// Managing game stats
class Stats {
  constructor(wins, draws, losses) {
    this.status = {
      wins: wins,
      draws: draws,
      losses: losses,
    };
  }

  getStats = () => this.status;

  // Update stats based on the outcome
  updateStats(outcome) {
    switch (outcome) {
      case Outcomes.Win:
        this.status.wins++;
        break;
      case Outcomes.Draw:
        this.status.draws++;
        break;
      case Outcomes.Lose:
        this.status.losses++;
        break;
    }
  }
}

export default Stats;
