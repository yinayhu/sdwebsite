---
title: Home Page
layout: main.njk
---

# Welcome to NHS Speech & Debate

## Here you will find all club information

Take a look around!

# Blog Posts

{% for post in collections.posts %}
    <article>
        <h2><a href="/posts/{{ post.data.slug }}/">{{ post.data.title }}</a></h2>
        {% if post.data.image %}
            <img src="{{ post.data.image }}" alt="{{ post.data.title }}" width="200">
        {% endif %}
    </article>
{% endfor %}