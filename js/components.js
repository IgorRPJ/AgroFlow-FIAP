async function loadComponent(id, file) {

  const element =
    document.getElementById(id);

  if (!element) {
    return;
  }

  const response =
    await fetch(file);

  const html =
    await response.text();

  element.innerHTML = html;

  const currentYear =
    document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent =
      new Date().getFullYear();
  }

  if (id === "header") {
    setActiveNavLink();
  }
}

function setActiveNavLink() {

  const currentPath =
    window.location.pathname;

  const links =
    document.querySelectorAll(".nav-link[href]");

  links.forEach(link => {

    const linkPath =
      new URL(link.getAttribute("href"), window.location.origin).pathname;

    link.classList.toggle(
      "active",
      linkPath === currentPath
    );
  });
}

loadComponent(
  "header",
  "/components/header.html"
);

loadComponent(
  "footer",
  "/components/footer.html"
);
