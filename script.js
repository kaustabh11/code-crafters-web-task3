let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Scroll navbar

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar.browse");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "rgb(20, 20, 20)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});


// Search 
const searchTab = document.querySelector('.searchTab');
const searchInput = document.querySelector('.searchInput');

const span = document.querySelector('.icon-close');

searchTab.addEventListener('click', () => {
  searchInput.classList.toggle('hidden');
  searchTab.classList.add('hidden');
});

span.addEventListener('click', () => {
  searchTab.classList.remove('hidden');
  searchInput.classList.add('hidden');
})

// Scroll

function scrollCardscont(direction) {
  const cardsContainer = document.querySelector('.cards');
  const scrollDistance = 320; // Adjust as needed

  if (direction === 'left') {
    cardsContainer.scrollLeft -= scrollDistance;
  } else if (direction === 'right') {
    cardsContainer.scrollLeft += scrollDistance;
  }
}

function scrollCardspop(direction) {
  const cardsContainer = document.querySelector('.popular');
  const scrollDistance = 320; // Adjust as needed

  if (direction === 'left') {
    cardsContainer.scrollLeft -= scrollDistance;
  } else if (direction === 'right') {
    cardsContainer.scrollLeft += scrollDistance;
  }
}

function scrollCardstre(direction) {
  const cardsContainer = document.querySelector('.trend');
  const scrollDistance = 320; // Adjust as needed

  if (direction === 'left') {
    cardsContainer.scrollLeft -= scrollDistance;
  } else if (direction === 'right') {
    cardsContainer.scrollLeft += scrollDistance;
  }
}

function scrollCardstop(direction) {
  const cardsContainer = document.querySelector('.top');
  const scrollDistance = 320; // Adjust as needed

  if (direction === 'left') {
    cardsContainer.scrollLeft -= scrollDistance;
  } else if (direction === 'right') {
    cardsContainer.scrollLeft += scrollDistance;
  }
}

// Search

// const search = document.getElementById('searchInput');
// search.addEventListener('input', performSearch);

// function performSearch() {
//   const query = search.value.toLowerCase();
//   const searchResults = document.getElementById('searchResults');

//   searchResults.innerHTML = '';

//   if (!query.trim()) {
//     return;
//   }

//   const elementsToSearchIn = document.querySelectorAll('.fallback-text');
//   elementsToSearchIn.forEach((element) => {
//     const text = element.textContent.toLowerCase();

//     if (text.includes(query)) {
//       const resultElement = document.createElement('div');
//       searchResults.style.display = 'block';
//       resultElement.classList.add('searchRes')
//       resultElement.textContent = element.textContent;
//       searchResults.appendChild(resultElement);

//       const span = document.querySelector('.icon-close');

//       span.addEventListener('click', () => {
//         resultElement.classList.add('hidden');
//         searchResults.style.display = 'none';
//       })
//     }
//   });
// }


document.addEventListener("DOMContentLoaded", function () {

  const titleLinkDictionary = {
    "Spider-Man: Across the Spider-Verse": "https://youtu.be/shW9i6k8cB0?si=fNZjKKypQdk4g-ld",
    "Nowhere": "https://youtu.be/KDUtdcU10YA?si=7R0L2ukce40SCZMx",
    "Choone": "https://youtu.be/YTuQkEmyIlk?si=Wq8eB2t8KaYnQKbh",
    "Castlevania Nocturne": "https://youtu.be/_afpwpbKPs0?si=corw4ndpQA_5J-wf",
    "Talaash": "https://youtu.be/SMkKSyd8ieo?si=tXPq0I7urCAbU1hV",
    "Sex Education": "https://youtu.be/WldgrH9SvbE?si=bGuYaS7EABjv_huL",
    "SPY x FAMILY": "https://youtu.be/CCXLUQzuigw?si=fcgYd_gcshjW6mFb",
    "Ajeeb Daastaans": "https://youtu.be/EImTzMiVdzo?si=JoaQfK9HZJBi5baE"
};


  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  // Add an event listener to the search input
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";

    for (const title in titleLinkDictionary) {
      if (title.toLowerCase().includes(query)) {
        searchResults.classList.remove('hidden');
        searchResults.style.display = 'block'
        const link = document.createElement("a");
        link.href = titleLinkDictionary[title];
        link.setAttribute("target", "_blank");
        const titleElement = document.createElement("p");
        titleElement.textContent = title;
        link.appendChild(titleElement);
        searchResults.appendChild(link);
      }
    }

    const span = document.querySelector('.icon-close');

    span.addEventListener('click', () => {
      searchResults.classList.add('hidden');
    })
  });
});
