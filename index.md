---
layout: page
title: "Home"
class: home
---

<!-- # I'm Mitchell Gordon -->

<div class="columns" markdown="1">

<div class="intro" markdown="1">
Mitchell is a computer science PhD student at [Stanford University](http://www.stanford.edu/) in the [HCI group](http://hci.stanford.edu/), advised by [Michael Bernstein](https://hci.stanford.edu/msb/) and [James Landay](https://www.landay.org/). He designs interactive systems and evaluation approaches that bridge principles of human-computer interaction with the realities of machine learning.

His work has won awards at top conferences in human-computer interaction and artificial intelligence, including a Best Paper award at CHI and an Oral at NeurIPS, and has been recognized with an Apple PhD Fellowship in AI/ML. Mitchell has previously interned at [Apple](http://apple.com/), [Google](http://apple.com/), and [CMU HCII](http://www.hcii.cmu.edu/). He holds a bachelor's degree in Computer Science from the [University of Rochester](http://www.rochester.edu/), where he was advised by [Philip Guo](http://www.pgbovine.net/) and [Jeffrey Bigham](https://www.cs.cmu.edu/~jbigham/).
</div>

<div class="me" markdown="1">
<picture>
  <source srcset='/images/face_3.jpeg' type='image/jpg' />
  <img
    src='/images/face_3.jpeg'
    alt='Mitchell Gordon'>
</picture>

{:.no-list}
* <a href="mailto:{{ site.email }}">{{ site.email }}</a>
* Gates 360
* <a href="{{ '/assets/cv.pdf' | relative_url }}">Curriculum vitae</a>
</div>

</div>

<!-- During my first year at UW, I received support from the [Fulbright program](https://en.wikipedia.org/wiki/Fulbright_Program). In 2013, I received my B.S. from [Hasso Plattner Institute](https://hpi.de/). I am a scholar of the [German National Academic Foundation](http://www.studienstiftung.de/). I have worked with the [Open Knowledge Foundation](http://www.okfn.org), [Google Research](https://ai.google/research/), and [Microsoft Research](https://www.microsoft.com/en-us/research/group/vibe/). Details are in my [CV]({{ "/cv/" | relative_url }}). -->

## Highlights

<div class="featured-projects">
  {% assign sorted_projects = site.data.projects | sort: 'highlight' %}
  {% for project in sorted_projects %}
    {% if project.highlight %}
      {% include project.html project=project %}
    {% endif %}
  {% endfor %}
</div>
<!-- <a href="{{ "/projects/" | relative_url }}" class="button">
  <i class="fas fa-chevron-circle-right"></i>
  Show More Projects
</a> -->

<div class="news-travel" markdown="1">

<div class="news" markdown="1">
## Latest News

<ul>
{% for news in site.data.news limit:10 %}
  {% include news.html news=news %}
{% endfor %}
</ul>

</div>

<div class="travel" markdown="1">
## Upcoming Travel

<table>
<tbody>
{% assign future_travel = site.data.travel | where_exp:'item','item.start == null' %}
{% for travel in future_travel %}
  {% include travel.html travel=travel %}
{% endfor %}
{% assign sorted_travel = site.data.travel | where_exp:'item','item.start' | sort: 'start' | reverse %}
{% for travel in sorted_travel limit:10 %}
  {% include travel.html travel=travel %}
{% endfor %}
</tbody>
</table>

</div>

</div>
