{% if theme.categories_on_sidebar.enable %}
<div class="category-all-page">
  <div class="category-all">
    {{ list_categories({depth: 1}) }}
  </div>
</div>
{% endif %}

