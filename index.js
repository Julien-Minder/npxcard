#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");


const data = {
    name: chalk.green("                      J. Minder"),
    work: chalk.red(" Dev being assembled"),
    github: chalk.blue("https://github.com/Julien-Minder"),
    linkedin: chalk.yellow("https://www.linkedin.com/in/julien-minder"),
    npm: chalk.magenta("https://www.npmjs.com/~john-ventura"),
    worklab: chalk.cyan.bold.underline("       Work:"),
    githublab: chalk.cyan.bold.underline("     GitHub:"),
    linkedinlab: chalk.cyan.bold.underline("   LinkedIn:"),
    npmlab: chalk.cyan.bold.underline("        npm:"),

};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.magenta(
        boxen(
            [
                `${data.name}`,
                EMPTYLINE,
                `${data.worklab} ${data.work}`,
                EMPTYLINE,
                `${data.npmlab} ${data.npm}`,
                `${data.githublab} ${data.github}`,
                `${data.linkedinlab} ${data.linkedin}`,


            ].join(NEWLINE), {
                padding: 4,
                margin: 1,
                borderStyle: "double",
            },
        ),
    ),
);