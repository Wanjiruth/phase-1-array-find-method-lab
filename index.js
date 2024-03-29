// code your solution here
function superbowlWin(superbowls) {
    const winningYear = superbowls.find(superbowl => superbowl.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
  
  
  const superbowls = [
    { year: 2020, result: "W" },
    { year: 2021, result: "L" },
    { year: 2022, result: "W" },
    { year: 2023, result: "L" }
  ];
  
  console.log(superbowlWin(superbowls)); 
  