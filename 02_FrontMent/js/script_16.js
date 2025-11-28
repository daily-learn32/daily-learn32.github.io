document.addEventListener("DOMContentLoaded", () => {
  const activitiesContainer = document.querySelector(".activities");
  const timeframeButtons = document.querySelectorAll(
    ".menu__track-buttons__button"
  );

  const activityColors = {
    Work: "#7849fa",
    Play: "#f1394f",
    Study: "#1ac5ff",
    Exercise: "#ffa81a",
    Social: "#f1394f",
    "Self Care": "#1ac5ff",
  };

  const activityIcons = {
    Work: "fa-solid fa-briefcase",
    Play: "fa-solid fa-gamepad",
    Study: "fa-solid fa-book",
    Exercise: "fa-solid fa-heart-pulse",
    Social: "fa-solid fa-users",
    "Self Care": "fa-solid fa-brain",
  };

  let currentData = [];
  let currentTimeframe = "weekly";

  const fetchData = async () => {
    try {
      const response = await fetch("./js/data_16.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      currentData = await response.json();
      renderActivities();
    } catch (error) {
      console.error("Could not fetch data:", error);
      activitiesContainer.innerHTML = "<p>Failed to load activity data.</p>";
    }
  };

  const renderActivities = () => {
    activitiesContainer.innerHTML = "";
    currentData.forEach((activity) => {
      const { title, timeframes } = activity;
      const { current, previous } = timeframes[currentTimeframe];

      const timeframeText = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month",
      };

      const activityElement = document.createElement("div");
      activityElement.classList.add("activities__activity");
      activityElement.style.backgroundColor = `${activityColors[title]}`;
      activityElement.style.backgroundImage = `linear-gradient(to right, white -60%, ${activityColors[title]} 40%)`;
      activityElement.style.border = `1px solid ${activityColors[title]}`;

      activityElement.innerHTML = `
        <div class="activities__activity__header ${title}">
          <i class="${activityIcons[title]}"></i>
        </div>
        <div class="activities__activity__content">
          <div class="activities__activity__content__head">
            <h2 class="activities__activity__content__head__title">${title}</h2>
            <div class="activities__activity__content__head__menu">
              <div class="activities__activity__content__head__menu__circle"></div>
              <div class="activities__activity__content__head__menu__circle"></div>
              <div class="activities__activity__content__head__menu__circle"></div>
            </div>
          </div>
          <div class="activities__activity__content__times">
            <p class="activities__activity__content__times__main-time">${current}hrs</p>
            <p class="activities__activity__content__times__second-time">${timeframeText[currentTimeframe]} - ${previous}hrs</p>
          </div>
        </div>
      `;
      activitiesContainer.appendChild(activityElement);
    });
  };

  timeframeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      timeframeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      currentTimeframe = button.dataset.timeframe;
      renderActivities();
    });
  });

  fetchData();
});
