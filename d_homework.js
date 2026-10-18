const team = [
  { name: "ฟ้า", role: "PO", tasksDone: 5 },
  { name: "ฟิล์ม", role: "Dev", tasksDone: 8 },
  { name: "มายด์", role: "SM", tasksDone: 3 },
  { name: "บูม", role: "Dev", tasksDone: 6 }
];

const memberInfo = team.map(
  member => `${member.name} (${member.role})`
);

console.log("ข้อ 1:", memberInfo);

const developers = team.filter(
  member => member.role === "Dev"
);

console.log("ข้อ 2:", developers);

const totalTasks = team.reduce(
  (total, member) => total + member.tasksDone,
  0
);

console.log("ข้อ 3:", totalTasks);

const devTasks = team
  .filter(member => member.role === "Dev")
  .reduce((total, member) => total + member.tasksDone, 0);

console.log("ข้อ 4:", devTasks);

