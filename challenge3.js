const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

function createNavMenu() {
    const mainNav = `
        <nav class="main-navigation">
            <ul>${navContent}</ul>
        </nav>
    `;
    return mainNav;
}

// Call the createNavMenu function to generate the navigation menu
const result = createNavMenu();

// Print the HTML output to the console
console.log(result);
