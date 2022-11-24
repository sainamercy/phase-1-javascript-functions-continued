const saturdayFun = function (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
mondayWork();
mondayWork("work from home");

const wrapAdjective = function (wrapper = "*") {
  const message = function (string = "special") {
    return `You are ${wrapper}${string}${wrapper}!`;
  };

  return message;
};

const result = wrapAdjective("||");

const emphatic = result("a hard worker");

console.log(emphatic);
