---
layout: editorial-page
title: "CV"
permalink: /cv/
prose: true
intro: "Research, clinical prototyping, and software development."
redirect_from:
  - /resume
---

<div class="cv-actions"><button type="button" data-print-cv hidden>Print / save as PDF</button></div>

<div class="print-only"><h2>Aloys Portafaix</h2><p>Montréal, Canada · {{ site.author.email }}<br>{{ site.url }} · {{ site.author.googlescholar }}</p></div>

PhD researcher in medical AI at Polytechnique Montréal and CRCHUM. My work connects self-supervised representation learning, medical image segmentation, and clinical translation.

## Education

**PhD in Computer Engineering**<br>
Polytechnique Montréal · August 2023–present<br>
Supervisor: Samuel Kadoury. Supported by the NSERC Canada Graduate Research Scholarship – Doctoral (CGRS D).

**Master's in Computer Science**<br>
Concordia University · 2021–2023<br>
Supervisor: Thomas Fevens. Master's thesis research at LMU Munich, March–August 2023.

**Surgical Innovation Fellow**<br>
McGill University · 2021–2022

**Bachelor's in Honours Computer Science**<br>
Concordia University · 2018–2021

## Research experience

**Doctoral researcher · CRCHUM / Polytechnique Montréal**<br>
August 2023–present<br>
Developing self-supervised methods for medical image analysis with Samuel Kadoury. Projects include intracranial hemorrhage segmentation with Laurent Létourneau-Guillon and pediatric brain tumour imaging with collaborators at CHU Sainte-Justine.

**Research internship · MedirAI**<br>
October 2025–February 2026<br>
Lesion segmentation for a skin cancer detection application.

**Master's thesis research · LMU Munich**<br>
March–August 2023<br>
Developed and evaluated a computer vision prototype for radiographic hand positioning with Thomas Fevens and Michael Ingrisch.

**Guest scientist · LMU Munich**<br>
September 2022–March 2023<br>
MRI-to-CT translation research with Susanne Mayer, supported by a Mitacs Globalink Research Award.

**Research assistant · Concordia University**<br>
May–August 2021<br>
Developed an interpretable pipeline for grading hard exudates in fundus images, including fovea detection, optic disc segmentation, and lesion segmentation.

**Undergraduate research · Concordia University**<br>
May–December 2020<br>
Improved lower-limb pose estimation and inference speed; developed a mobile jump assessment prototype and integrated an Azure Kinect sensor into orthopaedic software.

## Industry experience

**Machine learning back-end developer · Coveo**<br>
January–May 2021<br>
Contributed to Java microservices, cloud deployment of company-specific ML models, and infrastructure as code.

**Full stack developer · Groupe Dynamite**<br>
June–August 2019<br>
Built features for internal web and mobile applications using React and Node.js, and Python microservices for data engineering.

## Clinical innovation

**XAct · Radiographic positioning guidance**<br>
Led the technical development of a computer vision and depth-sensing prototype, from a clinical need identified through the Surgical Innovation Program to evaluation at LMU Klinikum. The team won first place in the program's pitch competition and received GCS Innovation Fund support.

[Explore the project](/portfolio/portfolio-1/) · [Master's thesis](https://spectrum.library.concordia.ca/id/eprint/992737/) · [Code](https://github.com/aloyspx/XAct)

**Movement analysis · Research contribution to HurtBlocker**<br>
Contributed Kinect integration and real-time joint depth estimation and correction research to the larger effort behind the movement screening application. My role was a focused research contribution within a larger team.

[Research contribution](/portfolio/portfolio-2/) · [HurtBlocker on the App Store](https://apps.apple.com/ca/app/hurtblocker/id6747727133)

## Publications

See [Publications](/publications/) for the full list and paper links, or my [Google Scholar profile](https://scholar.google.com/citations?user=LFc_L00AAAAJ).

<div class="print-only">
{% assign papers = site.publications | sort: 'date' | reverse %}
{% for paper in papers %}<p><strong>{{ paper.title }}</strong><br>{{ paper.authors }}. {{ paper.venue }}, {{ paper.date | date: '%Y' }}.</p>{% endfor %}
</div>

## Selected awards

- **Canada Graduate Research Scholarship – Doctoral (CGRS D)** · NSERC, 2026
- **Top-three poster prize** · AI at the Medical Faculty Symposium, LMU, 2023
- **GCS Innovation Fund** · Concordia University, 2022
- **Globalink Research Award** · Mitacs, 2022
- **Conference and Exposition Award** · Concordia University, 2021
- **NSERC CREATE — Innovation at the Cutting Edge** · Master's research support
- **Hydro-Québec Master's Scholarship** · 2021
- **Merit Scholarship** · Government of Québec, 2021
- **Undergraduate Student Research Award (USRA)** · NSERC, 2020

## Service and leadership

- Research mentoring in intracranial hemorrhage segmentation and radiotherapy toxicity analysis, documented in 2025.
- Peer review for IEEE Transactions on Medical Imaging.
- Treasurer, IEEE Concordia · August 2020–July 2021.
- Director of Marketing, IEEE Concordia · August 2019–July 2020.

## Technical skills and languages

**Research and development:** Python, PyTorch, medical image analysis, deep learning, computer vision, Java, C#, JavaScript, React, Node.js, and cloud development.

**Languages:** English and French (bilingual); Spanish (professional working proficiency).
