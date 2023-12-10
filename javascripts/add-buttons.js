api.registerConnectorClass('search-banner-below-input', 'add-buttons', {
  setupComponent(args, component) {
    let bannerLinks = settings.banner_links;
    component.setProperties({ bannerLinks });
  }
});

api.decorateWidget('search-banner-below-input:add-buttons', {
  tagName: 'div.search-banner-buttons',

  html(attrs, state) {
    let buttons = [];

    let bannerLinks = this.register.lookup('settings:main').banner_links;

    bannerLinks.forEach(link => {
      let icon = link.icon;
      let text = link.text;
      let url = link.url;

      if(icon && text && url) {
        buttons.push(
          this.attach('link', {
            href: url,
            contents: () => [
              this.attach('icon', { icon }),
              text
            ]
          })
        );
      }
    });

    return buttons;
  }
});
