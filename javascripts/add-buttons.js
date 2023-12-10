api.createWidget('search-banner-buttons', {
  tagName: 'div.search-banner-buttons',

  html() {
    let bannerLinks = settings.banner_links;
    let buttons = [];

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

api.registerConnectorClass('search-banner-below-input', 'add-buttons', {
  widgetClass: 'search-banner-buttons'
});
