const bcrypt = require("bcryptjs");

const password = "12";

const run = async () => {
  const salt = await bcrypt.genSalt(10); // 10 is generally used , tends to generate the salt 10 times strict

  const hashedPass = await bcrypt.hash(password, salt);

  const boolean = await bcrypt.compare(password, hashedPass);

  console.log(boolean); //true

  console.log(hashedPass);

  console.log(salt);
};

run();
