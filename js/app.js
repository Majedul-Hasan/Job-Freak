const information = ` <div id="content">
                <h2>Information</h2>
                <p>Welcome to the Information page content.</p>
                <h3>Features</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt</li>
                    <li>Ut labore et dolore magna aliqua</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper facilisis. Maecenas
                    finibus quam at
                    sagittis placerat. Fusce rhoncus ipsum at felis vulputate, et aliquam elit tempor. Nulla interdum
                    magna quis
                    urna congue, sit amet vulputate risus hendrerit. Nulla at convallis orci. Mauris vel faucibus elit.
                    Morbi dictum
                    iaculis diam, eu congue felis tempus in.</p>
                <p>Proin rutrum arcu nec elit gravida, id dictum lectus sagittis. Vestibulum sit amet sagittis ligula.
                    Nunc
                    malesuada nisl et nisl bibendum, sit amet fringilla lorem efficitur. Aliquam scelerisque rhoncus mi,
                    vitae
                    iaculis nunc tristique in. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis
                    egestas. Donec a risus a erat suscipit gravida a nec est. Suspendisse et sagittis tellus. Donec nec
                    dignissim
                    mauris. Curabitur in urna semper, gravida tortor eu, iaculis neque.</p>
            </div>`;

const guide = ` <div id="content">
                <h2>Guide</h2>
                <p>Welcome to the Guide page content.</p>
                <h3>Features</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt</li>
                    <li>Ut labore et dolore magna aliqua</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper facilisis. Maecenas
                    finibus quam at
                    sagittis placerat. Fusce rhoncus ipsum at felis vulputate, et aliquam elit tempor. Nulla interdum
                    magna quis
                    urna congue, sit amet vulputate risus hendrerit. Nulla at convallis orci. Mauris vel faucibus elit.
                    Morbi dictum
                    iaculis diam, eu congue felis tempus in.</p>
                <p>Proin rutrum arcu nec elit gravida, id dictum lectus sagittis. Vestibulum sit amet sagittis ligula.
                    Nunc
                    malesuada nisl et nisl bibendum, sit amet fringilla lorem efficitur. Aliquam scelerisque rhoncus mi,
                    vitae
                    iaculis nunc tristique in. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis
                    egestas. Donec a risus a erat suscipit gravida a nec est. Suspendisse et sagittis tellus. Donec nec
                    dignissim
                    mauris. Curabitur in urna semper, gravida tortor eu, iaculis neque.</p>
            </div>`;
const home = ` <div id="content">
                <h2>Home</h2>
                <p>Welcome to the home page content.</p>
                <h3>Features</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt</li>
                    <li>Ut labore et dolore magna aliqua</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper facilisis. Maecenas
                    finibus quam at
                    sagittis placerat. Fusce rhoncus ipsum at felis vulputate, et aliquam elit tempor. Nulla interdum
                    magna quis
                    urna congue, sit amet vulputate risus hendrerit. Nulla at convallis orci. Mauris vel faucibus elit.
                    Morbi dictum
                    iaculis diam, eu congue felis tempus in.</p>
                <p>Proin rutrum arcu nec elit gravida, id dictum lectus sagittis. Vestibulum sit amet sagittis ligula.
                    Nunc
                    malesuada nisl et nisl bibendum, sit amet fringilla lorem efficitur. Aliquam scelerisque rhoncus mi,
                    vitae
                    iaculis nunc tristique in. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis
                    egestas. Donec a risus a erat suscipit gravida a nec est. Suspendisse et sagittis tellus. Donec nec
                    dignissim
                    mauris. Curabitur in urna semper, gravida tortor eu, iaculis neque.</p>
            </div>`;

const contact = ` <div id="content">
                <h2>Contact</h2>
                <p>Welcome to the Contact page content.</p>
                <h3>Features</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt</li>
                    <li>Ut labore et dolore magna aliqua</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod semper facilisis. Maecenas
                    finibus quam at
                    sagittis placerat. Fusce rhoncus ipsum at felis vulputate, et aliquam elit tempor. Nulla interdum
                    magna quis
                    urna congue, sit amet vulputate risus hendrerit. Nulla at convallis orci. Mauris vel faucibus elit.
                    Morbi dictum
                    iaculis diam, eu congue felis tempus in.</p>
                <p>Proin rutrum arcu nec elit gravida, id dictum lectus sagittis. Vestibulum sit amet sagittis ligula.
                    Nunc
                    malesuada nisl et nisl bibendum, sit amet fringilla lorem efficitur. Aliquam scelerisque rhoncus mi,
                    vitae
                    iaculis nunc tristique in. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis
                    egestas. Donec a risus a erat suscipit gravida a nec est. Suspendisse et sagittis tellus. Donec nec
                    dignissim
                    mauris. Curabitur in urna semper, gravida tortor eu, iaculis neque.</p>
            </div>`;
const body = document.getElementById('root');

const pathname = window.location.pathname;
console.log(pathname);

const obj = (x, event) => {
  const liElements = document.getElementsByTagName('li');

  // Remove "active" class from all li elements
  for (let i = 0; i < liElements.length; i++) {
    liElements[i].classList.remove('active');
  }

  // Add "active" class to the clicked li element
  event.target.classList.add('active');
  console.log(event.target.classList);

  if (x === 'contact') {
    return (body.innerHTML = contact);
  } else if (x === 'guide') {
    return (body.innerHTML = guide);
  } else if (x === 'information') {
    return (body.innerHTML = information);
  } else {
    return (body.innerHTML = home);
  }
};
