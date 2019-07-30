import React, { Component } from 'react';

/* Statistics component */
class Stats extends Component {
  constructor(props) {
    super(props);

    /*State declarations */
    this.state = {
      tdspass: undefined,
      tdsrush: undefined,
      thirdDownEff: undefined,
      fourthDownEff: undefined,
      redZone: undefined,
      sacks: undefined,
      sackYards: undefined,
      interceptions: undefined,
      forcedFumbles: undefined,
      fumbleRecovery: undefined
    }
  }

  /*api call and state population */
  componentDidMount(props) {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://api.sportradar.us/ncaafb-t1/teams/LOU/2018/REG/statistics.json?api_key=<StatsAPIKey'
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(stats => this.setState({ tdspass: stats.statistics.touchdowns.pass, tdsrush: stats.statistics.touchdowns.rush,
        thirdDownEff: stats.statistics.third_down_efficiency.pct, fourthDownEff: stats.statistics.fourth_down_efficiency.pct,
        redZone: stats.statistics.redzone_efficiency.pct, sacks: stats.statistics.defense.sack, sackYards: stats.statistics.defense.sack_yds,
        interceptions: stats.statistics.defense.int,  forcedFumbles: stats.statistics.defense.force_fum,
        fumbleRecovery: stats.statistics.defense.fum_rec }))
  }

  /* Mounting state in DOM */
  render() {
    return (
      <div>
        <h3> Louisville Offensive Stats 2018 </h3>
          <ul>
            <li> Pass Touchdowns: {this.state.tdspass} </li>
            <li> Rush Touchdowns: {this.state.tdsrush} </li>
            <li> 3rd Down Efficiency: {this.state.thirdDownEff}% </li>
            <li> 4th Down Efficiency: {this.state.fourthDownEff}% </li>
            <li> Redzone Efficiency: {this.state.redZone}% </li>
          </ul>
        <h3> Louisville Defensive Stats 2018 </h3>
          <ul>
            <li>Sacks: {this.state.sacks} </li>
            <li>Yards Lost on Sacks: {this.state.sackYards} </li>
            <li>INTs: {this.state.interceptions} </li>
            <li>Forced Fumbles: {this.state.forcedFumbles} </li>
            <li>Recovered Fumbles: {this.state.fumbleRecovery} </li>
          </ul>
      </div>
    )
  }
}

export default Stats;
