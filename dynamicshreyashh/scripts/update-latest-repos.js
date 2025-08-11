// scripts/update-latest-repos.js
const fs = require("fs");
const { Octokit } = require("@octokit/rest");

const README = "README.md";
const START = "<!-- START:latest-repos -->";
const END = "<!-- END:latest-repos -->";
const GITHUB_USER = process.env.GITHUB_ACTOR || "dynamicshreyashh"; // fallback username

async function getLatestRepos(username) {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const res = await octokit.repos.listForUser({
    username,
    sort: "updated",
    per_page: 8,
  });
  return res.data.filter(r => !r.fork && !r.private).slice(0, 6);
}

function makeRepoMd(repo, username) {
  const desc = repo.description ? repo.description.replace(/\n/g, " ") : "No description";
  const language = repo.language ? `![${repo.language}](https://img.shields.io/badge/-${encodeURIComponent(repo.language)}-gray?style=flat-square)` : "";
  return `### [${repo.name}](${repo.html_url})\n\n${desc}\n\n${language} ![stars](https://img.shields.io/github/stars/${username}/${repo.name}?style=flat-square) ![forks](https://img.shields.io/github/forks/${username}/${repo.name}?style=flat-square)\n`;
}

async function run() {
  const username = process.env.GITHUB_ACTOR || "dynamicshreyashh";
  console.log("Fetching repos for:", username);
  const repos = await getLatestRepos(username);
  if (!repos || !repos.length) {
    console.log("No repos found.");
    process.exit(0);
  }

  const md = repos.map(r => makeRepoMd(r, username)).join("\n---\n\n");

  const readmeRaw = fs.readFileSync(README, "utf8");
  const pattern = new RegExp(`${START}[\\s\\S]*?${END}`, "m");
  const newSection = `${START}\n\n${md}\n\n${END}`;
  let updated;
  if (pattern.test(readmeRaw)) {
    updated = readmeRaw.replace(pattern, newSection);
  } else {
    // fallback: append at the end
    updated = `${readmeRaw}\n\n${newSection}\n`;
  }
  fs.writeFileSync(README, updated, "utf8");
  console.log("README.md updated with latest repos.");
}

run().catch(err => { console.error(err); process.exit(1); });
