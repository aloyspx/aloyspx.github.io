---
layout: editorial-page
title: "Sitemap"
permalink: /sitemap/
sitemap: false
robots: 'noindex, follow'
prose: true
---

## Main pages

- [About Aloys Portafaix]({{ '/' | relative_url }})
- [Publications]({{ '/publications/' | relative_url }})
- [Research and projects]({{ '/portfolio/' | relative_url }})
- [CV]({{ '/cv/' | relative_url }})

## Publications

{% assign papers = site.publications | sort: 'date' | reverse %}
{% for paper in papers %}- [{{ paper.title }}]({{ paper.url | relative_url }})
{% endfor %}

## Project stories

{% for project in site.portfolio %}- [{{ project.title }}]({{ project.url | relative_url }})
{% endfor %}

[XML sitemap]({{ '/sitemap.xml' | relative_url }})
