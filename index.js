// code your solution here
function saturdayFun(target = "roller-skate") {
  return `This Saturday, I want to ${target}!`;
}
saturdayFun();

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
mondayWork();

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

const encouragingPromptFunction = wrapAdjective("!!!")(
  "a dedicated programmer"
);
console.log(encouragingPromptFunction);
