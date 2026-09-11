<div align="center">

<samp>

# shreyash bhosale

full-stack dev — backend systems, occasionally wired up to ai

java · python · spring boot · react · redis · docker

</samp>

<marquee behavior="scroll" direction="left" scrollamount="5">
&nbsp;⚙️ workqueue-redisflow — distributed job queue on redis streams &nbsp;&nbsp;·&nbsp;&nbsp; 🤖 smart-email-assistant — gemini-powered gmail replies &nbsp;&nbsp;·&nbsp;&nbsp; 🔗 url_shortner_app — deployed with a real ci/cd pipeline &nbsp;&nbsp;·&nbsp;&nbsp; 🌱 currently on multi-agent workflows and llm orchestration &nbsp;&nbsp;·&nbsp;&nbsp; 📍 pune, india &nbsp;
</marquee>

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

</div>

<br/>

**building**

- [`workqueue-redisflow`](https://github.com/dynamicshreyashh/Workqueue-redisflow) — spring boot producer/worker pair, jobs queued on redis streams, consumer groups for acks, failed jobs retried then dropped to a dead letter queue
- [`smart-email-assistant`](https://github.com/dynamicshreyashh/smart-email-assistant) — manifest v3 chrome extension + spring boot api, drafts gmail replies in 3 tones using gemini, api key stays server-side
- [`url_shortner_app`](https://github.com/dynamicshreyashh/url_shortner_app) — spring boot + jpa/hibernate, url analytics and expiry, dockerized with a ci pipeline that builds/tests/packages on every push, deployed on render → [live](https://url-shortner-app-wwja.onrender.com/)

**exploring**

- 🌱 ai systems — going past calling an llm api, into how they're actually built and served
- 🌱 multi-agent workflows — agents coordinating on a task instead of one-shot prompts
- 🌱 llm orchestration on distributed infra — running that on top of queues/streams instead of a single request-response
- 🌱 apache kafka — the piece missing from the redis streams work so far

<br/>

<div align="center">

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

<sub>pune, india · <a href="mailto:shreyashbhosale078@gmail.com">email</a> · <a href="https://shreyas-h-portfolio.vercel.app/">portfolio</a></sub>

</div>
