<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:102a43,100:00d4aa&height=170&section=header&text=SHREYASH%20BHOSALE&fontSize=38&fontColor=ffffff&fontAlignY=38&desc=java%20%C2%B7%20backend%20systems%20%C2%B7%20ai%20engineering&descAlignY=62&descSize=16" width="100%" alt="Shreyash Bhosale header" />

<a href="https://shreyas-h-portfolio.vercel.app/">
  <img src="https://img.shields.io/badge/Portfolio-0d1117?style=for-the-badge&logo=googlechrome&logoColor=00d4aa" alt="Portfolio" />
</a>
<a href="https://www.linkedin.com/in/shreyash-b-5a7726245/">
  <img src="https://img.shields.io/badge/LinkedIn-0d1117?style=for-the-badge&logo=linkedin&logoColor=0A66C2" alt="LinkedIn" />
</a>
<a href="mailto:shreyashbhosale078@gmail.com">
  <img src="https://img.shields.io/badge/Email-0d1117?style=for-the-badge&logo=gmail&logoColor=EA4335" alt="Email" />
</a>
<a href="https://leetcode.com/u/shrshhx09/">
  <img src="https://img.shields.io/badge/LeetCode-0d1117?style=for-the-badge&logo=leetcode&logoColor=FFA116" alt="LeetCode" />
</a>

<br /><br />

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=18&duration=2800&pause=900&color=00D4AA&center=true&vCenter=true&width=720&lines=I+build+systems%2C+not+just+screens.;Java+%7C+Spring+Boot+%7C+Docker+%7C+AI;Learning+distributed+systems+one+failure+at+a+time.;From+data+model+%E2%86%92+API+%E2%86%92+deployment." alt="Animated introduction" />

</div>

<br />

> **Java Full-Stack Developer** focused on backend systems, practical AI integrations, and software that survives beyond the happy path.

I like taking an idea from **data model → API → interface → deployment**. Right now, I am going deeper into what happens after the first successful request: queues, retries, observability, model orchestration, and graceful failure.

<div align="center">

### `status --now`

<img src="https://img.shields.io/badge/BUILDING-Redis%20job%20systems-00d4aa?style=flat-square" alt="Building Redis job systems" />
<img src="https://img.shields.io/badge/LEARNING-distributed%20systems-4c8eda?style=flat-square" alt="Learning distributed systems" />
<img src="https://img.shields.io/badge/EXPLORING-AI%20engineering-bb86fc?style=flat-square" alt="Exploring AI engineering" />
<img src="https://img.shields.io/badge/BASED%20IN-Pune%2C%20India-f0b429?style=flat-square" alt="Based in Pune, India" />

</div>

<br />

<div align="center">

`[ about ]` · `[ projects ]` · `[ systems lab ]` · `[ toolkit ]` · `[ connect ]`

</div>

---

## `about.exe`

<table>
<tr>
<td width="55%" valign="top">

### The short version

I build **Spring Boot backends**, connect them to useful interfaces, and ship them with Docker and CI/CD. My projects usually sit at the intersection of:

- clean API and service-layer design
- persistence, validation, and failure handling
- asynchronous jobs and event-driven workflows
- AI features with the integration boundary kept secure

</td>
<td width="45%" valign="top">

### A few signals

| Signal | Current count |
| :--- | :---: |
| DSA problems solved | **200+** |
| GitHub contributions | **300+** |
| Public repositories | **26+** |
| AI certification | **OCI 2025** |

</td>
</tr>
</table>

---

## `projects/` — things I have shipped

<table>
<tr>
<td width="50%" valign="top">

### ⚙️ [Workqueue Redisflow](https://github.com/dynamicshreyashh/Workqueue-redisflow)

**Distributed job processing with Redis Streams**

```text
producer → stream → consumer group → worker
                         ↓
                  retry → dead letter queue
```

- Spring Boot producer and worker services
- consumer groups for coordinated consumption
- retries for failed jobs
- dead-letter handling for jobs that cannot be recovered

<sub>Focus: async workflows · failure handling · distributed work</sub>

</td>
<td width="50%" valign="top">

### 🤖 [Smart Email Assistant](https://github.com/dynamicshreyashh/smart-email-assistant)

**Gemini-powered replies inside Gmail**

```text
Gmail compose → Chrome extension → Spring Boot API → Gemini
                                      └─ API key stays server-side
```

- Manifest V3 extension embedded in Gmail
- three selectable reply tones
- server-side Gemini integration
- backend routing for CORS and API protection

<sub>Focus: applied AI · browser integration · secure boundaries</sub>

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔗 [URL Shortener](https://github.com/dynamicshreyashh/url_shortner_app)

**A deployed full-stack system with analytics**

- create, redirect, expire, and delete URLs
- click tracking with persisted analytics
- Spring Data JPA and Hibernate
- Dockerized and deployed to Render
- GitHub Actions build and verification pipeline

<a href="https://url-shortner-app-wwja.onrender.com/">
  <img src="https://img.shields.io/badge/Live%20application-00d4aa?style=flat-square&logo=render&logoColor=white" alt="Live application" />
</a>

</td>
<td width="50%" valign="top">

### 🏠 Student Rental Management System

**A training project built at Hexaware**

- student, property, rental, and booking modules
- relational data modeling
- REST API layer with CRUD operations
- request validation and error handling
- service-layer architecture

<sub>Focus: domain modeling · API design · maintainable structure</sub>

</td>
</tr>
</table>

<details>
<summary><b>What I learned from shipping these →</b></summary>
<br />

The interesting part is not only making the feature work. It is making the boundaries explicit:

```text
browser / client
        ↓
REST API → validation → service layer → persistence
        ↓
      queue → worker → retry → dead-letter path
        ↓
   deployment → logs → feedback → next iteration
```

</details>

---

## `systems-lab/` — where I am going next

I am deliberately moving from feature delivery toward **systems that remain understandable under load, failure, and change**.

<table>
<tr>
<td width="50%" valign="top">

### Distributed systems

- Apache Kafka and event-driven architecture
- delivery guarantees and consumer coordination
- idempotency, retries, and backpressure
- observability and graceful failure
- designing around partial failure

</td>
<td width="50%" valign="top">

### AI engineering

- RAG and grounded responses
- tool use and structured outputs
- LLM evaluation and reliability
- multi-agent workflows
- serving AI features over queues and distributed infrastructure

</td>
</tr>
</table>

<details>
<summary><b>My learning filter</b></summary>
<br />

I am not collecting buzzwords. For every new tool or idea, I want to understand:

1. What problem does it solve?
2. What new failure mode does it introduce?
3. How do we test and observe it?
4. When is the simpler design better?

</details>

---

## `toolkit.json`

<div align="center">

<img src="https://skillicons.dev/icons?i=java,spring,python,react,mysql,redis,kafka,docker,githubactions,maven,git,postman&perline=6" alt="Technology icons" />

</div>

<table>
<tr>
<td width="50%" valign="top">

**Backend & data**

`Java` · `Spring Boot` · `Spring MVC` · `Spring Security` · `REST APIs` · `MySQL` · `JPA` · `Hibernate`

</td>
<td width="50%" valign="top">

**AI & infrastructure**

`Gemini` · `Spring AI` · `RAG` · `Docker` · `GitHub Actions` · `Redis Streams` · `Maven` · `Render`

</td>
</tr>
<tr>
<td width="50%" valign="top">

**Engineering practices**

`OOP` · `validation` · `unit testing` · `API testing` · `debugging` · `code reviews`

</td>
<td width="50%" valign="top">

**Currently exploring**

`Apache Kafka` · `event-driven systems` · `LLM orchestration` · `multi-agent workflows`

</td>
</tr>
</table>

---

## `github --metrics`

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=dynamicshreyashh&show_icons=true&hide_border=true&theme=transparent&title_color=00d4aa&icon_color=00d4aa&text_color=8b949e&bg_color=00000000&rank_icon=github" alt="Shreyash's GitHub stats" />
<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=dynamicshreyashh&layout=compact&hide_border=true&theme=transparent&title_color=00d4aa&text_color=8b949e&bg_color=00000000&langs_count=6" alt="Top languages" />

<br />

<img src="https://streak-stats.demolab.com?user=dynamicshreyashh&hide_border=true&background=00000000&ring=00d4aa&fire=f0b429&currStreakLabel=00d4aa&sideLabels=8b949e&dates=8b949e&currStreakNum=ffffff&sideNums=ffffff" alt="GitHub contribution streak" />

</div>

---

## `experience.log`

**Graduate Engineer Trainee — Spark Program, Hexaware Technologies**  
*January 2025 – June 2025 · Remote*

Built a Student Rental Management System across student, property, rental, and booking domains, with a focus on relational modeling, REST APIs, validation, error handling, and separation of business logic from data access.

**Education:** Bachelor of Technology in Computer Science, D. Y. Patil College of Engineering and Technology  
**Additional training:** Java Full Stack Development, AccioJob

---

## `connect()`

If you are working on **Java backend systems, distributed workflows, or practical AI products**, I would be glad to connect.

<div align="center">

<a href="https://shreyas-h-portfolio.vercel.app/">
  <img src="https://img.shields.io/badge/portfolio-0d1117?style=for-the-badge&logo=googlechrome&logoColor=00d4aa" alt="Portfolio" />
</a>
<a href="https://www.linkedin.com/in/shreyash-b-5a7726245/">
  <img src="https://img.shields.io/badge/linkedin-0d1117?style=for-the-badge&logo=linkedin&logoColor=0A66C2" alt="LinkedIn" />
</a>
<a href="mailto:shreyashbhosale078@gmail.com">
  <img src="https://img.shields.io/badge/email-0d1117?style=for-the-badge&logo=gmail&logoColor=EA4335" alt="Email" />
</a>

<br /><br />

<i>Based in Pune, India · open to Java full-stack and backend engineering opportunities</i>

</div>

<br />

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4aa,50:102a43,100:0d1117&height=100&section=footer" width="100%" alt="" />
</div>
