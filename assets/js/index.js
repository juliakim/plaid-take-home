const updateFooter = (content) => {
  const footerElements = document.querySelectorAll('.footer-category ul');
  let column = 0;
  content.forEach(section => {
    let category = Object.keys(section)[0];
    let categoryNode = document.createElement('li');
    categoryNode.innerHTML = category;
    footerElements[column].appendChild(categoryNode);
    section[category].forEach(link => {
      let linkNode = document.createElement('li');
      linkNode.innerHTML = link;
      footerElements[column].appendChild(linkNode);
    });
    column++;
  });
};

const getFooterContent = () => {
  const url = 'http://interview.plaid.com/data/footer.json';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      updateFooter(data);
    })
    .catch(err => {
      throw new Error(`Error populating content of footer: ${err}`);
    });
};

getFooterContent();