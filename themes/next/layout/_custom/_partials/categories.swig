{% if theme.categories_on_sidebar.enable %}
  <div class="sidebar-category">
    {{ list_categories({class:'sidebar-category', depth: 1}) }}
  </div>
{% endif %}

