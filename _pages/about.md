---
layout: editorial
permalink: /
title: "Aloys Portafaix"
description: "Medical AI research and clinical tools. Aloys Portafaix is a PhD researcher at Polytechnique Montréal and CRCHUM, working on self-supervised learning and medical image analysis."
redirect_from:
  - /about/
  - /about.html
---

<div class="masthead">
  <div>
    <h1>Aloys Portafaix</h1>
    <p class="role">PhD researcher · Polytechnique Montréal &amp; CRCHUM<br>NSERC CGRS D Scholar · Montréal, Canada</p>
  </div>
  <p class="statement">Learning from medical images.<br>Building tools for clinical care.</p>
</div>

<figure class="feature feature--method">
  <div class="feature-heading">
    <h2>DeJEPA — learning beyond the labels</h2>
    <span class="metadata">MLMI · MICCAI 2026</span>
  </div>
  <div class="feature-image image-scroll" tabindex="0" role="region" aria-label="DeJEPA overview; scroll horizontally on small screens">
    <a href="{{ '/images/research/dejepa-overview.png' | relative_url }}" aria-label="Open the DeJEPA overview at full resolution"><img src="{{ '/images/research/dejepa-overview.png' | relative_url }}" alt="DeJEPA methodology: overlapping CT crops, shared multi-scale feature extraction, voxel embedding alignment, and SIGReg distribution matching." width="1774" height="887" fetchpriority="high"></a>
  </div>
  <figcaption>
    <p>Dense representations from unlabelled 3D images. Our DeJEPA framework learns voxel-level features for medical image segmentation. Above: a simplified visual overview of the training framework, from overlapping CT crops to aligned voxel embeddings.</p>
    <div class="link-row">
      <a class="text-link" href="https://papers.miccai.org/miccai-2026-sat/MLMI_011.html">Read paper{% include editorial-arrow.html %}</a>
      <a class="text-link" href="https://github.com/aloyspx/De-JEPA">Explore code{% include editorial-arrow.html %}</a>
      <a class="text-link" href="{{ '/images/research/dejepa-method.png' | relative_url }}">Original paper figure{% include editorial-arrow.html %}</a>
    </div>
  </figcaption>
</figure>

<section class="section about-grid" aria-labelledby="about-heading">
  <h2 id="about-heading" class="section-label">Research<br>with a purpose.</h2>
  <div class="about-copy">
    <p>I'm a PhD researcher in computer engineering at Polytechnique Montréal and CRCHUM, supervised by <a href="https://www.polymtl.ca/expertises/en/kadoury-samuel">Samuel Kadoury</a>. I develop deep learning methods that make better use of medical images, especially when expert annotations are scarce.</p>
    <p>My work connects self-supervised learning, cross-modality segmentation, and longitudinal imaging. The clinical goal is to help track disease and understand treatment response, including in head and neck cancer.</p>
    <p>I'm equally interested in what happens beyond the model: working with clinicians, building useful prototypes, and exploring how research becomes a medical tool. Outside the lab, you'll often find me at the rink.</p>
    <div class="link-row"><a class="text-link" href="{{ '/cv/' | relative_url }}">Experience &amp; CV{% include editorial-arrow.html %}</a><a class="text-link" href="{{ site.author.googlescholar }}">Google Scholar{% include editorial-arrow.html %}</a></div>
  </div>
  <figure><img class="portrait" src="{{ '/images/profile_pic.png' | relative_url }}" alt="Portrait of Aloys Portafaix" width="800" height="800" loading="lazy"><figcaption class="portrait-note">Based in Montréal.<br>English &amp; French.</figcaption></figure>
</section>

<section class="section" aria-labelledby="methods-heading">
  <div class="section-heading"><h2 id="methods-heading">Learning with less annotation.</h2></div>
  <div class="research-directions">
    <article><h3>MoDATTS</h3><p class="metadata">Medical Image Analysis · 2024</p><p>Transfer segmentation between imaging modalities by combining image translation, transformer-based models, and self-training. Co-first-authored work on making better use of existing labels.</p><a class="text-link" href="{{ '/portfolio/modatts/' | relative_url }}">Explore MoDATTS{% include editorial-arrow.html %}</a></article>
    <article><h3>Self-supervised hemorrhage segmentation</h3><p class="metadata">SWITCH · MICCAI 2025</p><p>Learn from unlabelled head CT scans, then combine datasets with different annotation protocols through multi-label decoding. A two-stage framework for intracranial hemorrhage segmentation.</p><a class="text-link" href="{{ '/portfolio/switch/' | relative_url }}">Explore the SWITCH paper{% include editorial-arrow.html %}</a></article>
  </div>
</section>

<section class="section" aria-labelledby="tools-heading">
  <div class="section-heading"><h2 id="tools-heading">From methods to tools.</h2><a class="text-link" href="{{ '/portfolio/' | relative_url }}">All projects{% include editorial-arrow.html %}</a></div>
  <article class="project-spread">
    <figure class="project-media">
      <video controls playsinline preload="none" poster="{{ '/images/research/xact-poster.jpg' | relative_url }}" width="1000" height="538" aria-label="XAct prototype demonstrating real-time hand positioning feedback">
        <source src="{{ '/images/research/xact-demo.mp4' | relative_url }}" type="video/mp4">
        <a href="{{ '/images/research/xact-demo.mp4' | relative_url }}">Watch the XAct demonstration</a>
      </video>
      <figcaption>XAct research prototype · real-time positioning feedback</figcaption>
    </figure>
    <div>
      <h3>XAct: guidance where the image begins.</h3>
      <p class="metadata">Computer vision · Clinical prototyping · SPIE 2024</p>
      <p>A good X-ray starts with patient positioning. I developed a computer vision and depth-sensing prototype to guide hand positioning in real time, and led its evaluation with the radiology team at LMU Klinikum.</p>
      <p>The project grew out of a first-place concept in the Surgical Innovation Program at McGill.</p>
      <div class="link-row"><a class="text-link" href="{{ '/portfolio/portfolio-1/' | relative_url }}">Project story{% include editorial-arrow.html %}</a><a class="text-link" href="https://github.com/aloyspx/XAct">Code{% include editorial-arrow.html %}</a></div>
    </div>
  </article>
  <div class="research-directions">
    <article><h3>Learning across scans and time.</h3><p>My doctoral research explores learning from unlabelled volumes, transferring segmentation between imaging modalities, and extracting information about tumour evolution during radiotherapy.</p><a class="text-link" href="{{ '/portfolio/portfolio-4/' | relative_url }}">Longitudinal imaging project{% include editorial-arrow.html %}</a></article>
    <article><h3>From movement research to HurtBlocker.</h3><p>My earlier work on Kinect integration and real-time joint depth estimation and correction contributed to the wider research effort behind HurtBlocker. My role was a focused research contribution within a larger team.</p><a class="text-link" href="{{ '/portfolio/portfolio-2/' | relative_url }}">Movement analysis work{% include editorial-arrow.html %}</a></article>
  </div>
</section>

<section class="section" aria-labelledby="papers-heading">
  <div class="section-heading"><h2 id="papers-heading">Recent publications.</h2><a class="text-link" href="{{ '/publications/' | relative_url }}">All publications{% include editorial-arrow.html %}</a></div>
  {% assign recent_papers = site.publications | sort: 'date' | reverse %}
  {% for paper in recent_papers limit:3 %}{% include editorial-publication.html paper=paper heading='h3' %}{% endfor %}
</section>

<section class="section" aria-labelledby="news-heading">
  <div class="section-heading"><h2 id="news-heading">A few recent updates.</h2></div>
  <ul class="news-list">
    <li><time datetime="2026">2026</time><p><strong>DeJEPA at MLMI.</strong> Our work on dense self-supervised representations is available through <a href="https://papers.miccai.org/miccai-2026-sat/MLMI_011.html">MICCAI's open-access proceedings</a>, with <a href="https://github.com/aloyspx/De-JEPA">reproduction code</a>.</p></li>
    <li><time datetime="2026-08">Aug 2026</time><p><strong>New paper in Radiology Advances.</strong> Our <a href="https://doi.org/10.1093/radadv/umag036">multiclass head CT segmentation study</a> evaluates intracerebral hemorrhage, intraventricular hemorrhage, and perihematomal edema.</p></li>
    <li><time datetime="2026-05">May 2026</time><p><strong>NSERC doctoral scholarship.</strong> My doctoral research is supported by a Canada Graduate Research Scholarship – Doctoral (CGRS D).</p></li>
  </ul>
</section>
