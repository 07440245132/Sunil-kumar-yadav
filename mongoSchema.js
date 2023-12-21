// footballTeamSchema.js
const mongoose = require('mongoose');
// Team,Games Played,Win,Draw,Loss,Goals For,Goals Against,Points,Year
const footballTeamSchema = new mongoose.Schema({//TO CREATE BLUE PRINT FOR COLLECTION TYPE
  Team: { type: String, required: true },
  GamesPlayed: { type: Number, required: true },
  Win: { type: Number, required: true },
  Draw: { type: Number, required: true },
  Loss: { type: Number, required: true },
  GoalsFor: { type: Number, required: true },
  GoalsAgainst: { type: Number, required: true },
  Points: { type: Number, required: true },
  Year: { type: Number, required: true },
});
//TO PUT THE CREATED BLUE PRINT THAT IS FOOTBALLSCHEMA INTO MONGOSMODEL
const FootballDataModel = mongoose.model('FootballDataModel', footballTeamSchema);

module.exports = FootballDataModel;// IT ALLOWS YOU TO EXPORT FOR FURTHER USE FROM ANOTHE FILES
