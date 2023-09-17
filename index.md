---
layout: page
title: "Home"
class: home
---

<!-- # I'm Mitchell Gordon -->

<div class="columns" markdown="1">

<div class="intro" markdown="1">
*I'm joining [MIT EECS/CSAIL](https://www.eecs.mit.edu/) as an assistant professor, starting fall 2024*

Mitchell is a postdoc at [UW CSE](https://www.cs.washington.edu/), working with [Jeff Heer](https://homes.cs.washington.edu/~jheer/) and [Yejin Choi](https://homes.cs.washington.edu/~yejin/). He recently completed his PhD in computer science at [Stanford University](http://www.stanford.edu/) in the [HCI group](http://hci.stanford.edu/), advised by [Michael Bernstein](https://hci.stanford.edu/msb/) and [James Landay](https://www.landay.org/). He designs interactive systems and evaluation approaches that bridge principles of human-computer interaction with the realities of machine learning.

His work has won awards at top conferences in human-computer interaction and artificial intelligence, including a Best Paper award at CHI and an Oral at NeurIPS. He is supported by an [Apple PhD Fellowship in AI/ML](https://machinelearning.apple.com/updates/introducing-apple-scholars-aiml). Mitchell has interned at [Apple](http://apple.com/), [Google](http://apple.com/), and [CMU HCII](http://www.hcii.cmu.edu/), and holds a bachelor's degree in computer science from the [University of Rochester](http://www.rochester.edu/), where he was advised by [Philip Guo](https://pg.ucsd.edu/) and [Jeffrey Bigham](https://www.cs.cmu.edu/~jbigham/).
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
* 365 Gates Center
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
